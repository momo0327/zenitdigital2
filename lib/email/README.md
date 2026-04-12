# Email Service Documentation

This directory contains the email functionality for the Zenit Digital website, powered by SendGrid.

## Architecture

The email service is organized into layers for separation of concerns:

```
lib/email/
├── sendgrid.service.ts          # Low-level SendGrid API integration
├── contact.service.ts           # Business logic for contact form
├── templates/
│   └── contact-form.template.ts # Email templates
└── README.md                    # This file
```

### Layer Responsibilities

1. **sendgrid.service.ts** - SendGrid Integration Layer
   - Direct SendGrid API communication
   - Retry logic with exponential backoff
   - Error handling and status code management
   - Email validation utilities

2. **contact.service.ts** - Business Logic Layer
   - Form data validation
   - Orchestrates email sending (notification + auto-reply)
   - Fallback mechanisms
   - Error logging

3. **templates/** - Presentation Layer
   - Email content generation (HTML & plain text)
   - Template functions for different email types
   - Type definitions for email data

## Setup Instructions

### 1. Create SendGrid Account

1. Go to [SendGrid](https://signup.sendgrid.com/)
2. Sign up for a free account (100 emails/day)
3. Complete email verification

### 2. Generate API Key

1. Log into SendGrid Dashboard
2. Navigate to **Settings** > **API Keys**
3. Click **Create API Key**
4. Name it (e.g., "Zenit Digital Production")
5. Select **Full Access** for Mail Send permission
6. Copy the API key (you'll only see it once!)

### 3. Verify Sender Email

**Important:** SendGrid requires sender email verification.

#### Option A: Single Sender Verification (Fastest)

1. Go to **Settings** > **Sender Authentication** > **Single Sender Verification**
2. Click **Create New Sender**
3. Fill in your details:
   - **From Name:** Zenit Digital
   - **From Email Address:** noreply@zenitdigital.se
   - **Reply To:** hello@zenitdigital.se
   - **Company Address:** Your Gothenburg address
4. Click **Create**
5. Check your email and verify the sender address

#### Option B: Domain Authentication (Production Recommended)

1. Go to **Settings** > **Sender Authentication** > **Authenticate Your Domain**
2. Select your DNS host
3. Follow the instructions to add DNS records
4. Wait for verification (can take up to 48 hours)

### 4. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```bash
# Your SendGrid API key from step 2
SENDGRID_API_KEY=SG.your-actual-api-key-here

# The verified sender email from step 3
SENDGRID_FROM_EMAIL=noreply@zenitdigital.se

# Email address to receive contact form submissions
SENDGRID_TO_EMAIL=hello@zenitdigital.se
```

**Security Notes:**
- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- Use different API keys for development and production

### 5. Install Dependencies

The SendGrid package should already be installed. If not:

```bash
npm install @sendgrid/mail
```

### 6. Test the Setup

Start your development server:

```bash
npm run dev
```

Visit `http://localhost:3000/ContactPage` and submit a test form.

**Expected behavior:**
1. You should receive an email at `SENDGRID_TO_EMAIL`
2. The form submitter should receive an auto-reply
3. Success message appears in the form

## Features

### ✅ Core Features

- **Notification Emails** - Team receives formatted email with all form details
- **Auto-Reply** - Customers receive thank you email with company info
- **Email Validation** - Validates email format and required fields
- **Rate Limiting** - Prevents spam (3 requests per minute per IP)
- **Retry Logic** - Automatically retries failed requests (server errors)
- **Error Handling** - Graceful error handling with user-friendly messages
- **Fallback Logging** - Logs failed submissions for manual follow-up

### 🛡️ Fallback Mechanisms

1. **Server Error Retry** - Retries up to 3 times with exponential backoff
2. **Auto-Reply Failure** - If auto-reply fails, notification still succeeds
3. **Failed Submission Logging** - Logs to console (extend to database/file)
4. **Rate Limiting** - Prevents abuse while allowing legitimate use

### 📧 Email Types

#### 1. Team Notification Email
- Sent to: `SENDGRID_TO_EMAIL`
- Contains: All form data formatted nicely
- Reply-To: Customer's email
- Template: `generateContactFormHtmlEmail()`

#### 2. Customer Auto-Reply
- Sent to: Customer's email
- Contains: Thank you message, company info, CTA
- Template: `generateCustomerAutoReplyHtml()`

## API Reference

### POST /api/contact

Submit a contact form.

**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+46 70 123 4567",
  "company": "Example AB",
  "service": "Web Development",
  "message": "I'm interested in building a new website..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "details": {
    "notificationSent": true,
    "autoReplySent": true
  }
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Email is required"
}
```

**Rate Limit Response (429):**
```json
{
  "success": false,
  "error": "Too many requests. Please try again later."
}
```

## Validation Rules

### Form Validation

| Field | Required | Validation |
|-------|----------|------------|
| firstName | Yes | Non-empty string |
| lastName | Yes | Non-empty string |
| email | Yes | Valid email format |
| phone | Yes | Non-empty string |
| company | No | Optional |
| service | Yes | Non-empty string |
| message | Yes | 10-5000 characters |

### Email Validation

- Email format: `name@domain.com`
- Uses regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

## Error Handling

### SendGrid Error Codes

| Code | Meaning | Retry | User Message |
|------|---------|-------|--------------|
| 400 | Bad Request | No | Invalid email data |
| 401 | Unauthorized | No | Email service authentication failed |
| 403 | Forbidden | No | Email service permission denied |
| 429 | Rate Limited | Yes | Too many email requests |
| 500+ | Server Error | Yes (3x) | Failed to send email |

### Retry Logic

Server errors (5xx) are retried with exponential backoff:
- Attempt 1: Immediate
- Attempt 2: After 2 seconds
- Attempt 3: After 4 seconds
- Attempt 4: After 8 seconds (if maxRetries=4)

## Rate Limiting

**Default limits:**
- 3 requests per minute per IP address
- Window: 60 seconds
- Based on IP from `x-forwarded-for` or `x-real-ip` headers

**To customize:**
Edit `app/api/contact/route.ts`:
```typescript
if (entry.count >= 5) { // Change from 3 to 5
  // ...
}
```

**Production recommendations:**
- Use Redis for distributed rate limiting
- Implement per-user rate limits (after authentication)
- Add CAPTCHA for additional protection

## Monitoring & Debugging

### Logging

All email operations are logged to console:
```typescript
console.log('Email sent successfully:', messageId);
console.error('SendGrid error:', error);
```

### Failed Submissions

Failed submissions are logged with full details:
```typescript
logFailedSubmission(formData);
```

**To extend logging:**
1. Save to database
2. Send to monitoring service (Sentry, LogRocket)
3. Write to file system
4. Send alert to admin

### SendGrid Dashboard

Monitor email activity:
1. Login to SendGrid
2. Go to **Activity** > **Email Activity**
3. View sent emails, opens, clicks, bounces

## Testing

### Manual Testing

1. Start dev server: `npm run dev`
2. Visit: `http://localhost:3000/ContactPage`
3. Fill out and submit form
4. Check console for logs
5. Check your email inbox

### Test API Directly

Using curl:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "+46701234567",
    "service": "Web Development",
    "message": "This is a test message"
  }'
```

### Test Error Scenarios

1. **Missing API Key:**
   - Remove `SENDGRID_API_KEY` from `.env.local`
   - Should return: "Email service is not configured"

2. **Invalid Email:**
   - Submit form with email: "not-an-email"
   - Should return: "Invalid email address"

3. **Rate Limiting:**
   - Submit form 4 times in quick succession
   - 4th request should return 429 error

## Production Deployment

### Vercel

1. Add environment variables in Vercel dashboard:
   - Go to **Settings** > **Environment Variables**
   - Add `SENDGRID_API_KEY`
   - Add `SENDGRID_FROM_EMAIL`
   - Add `SENDGRID_TO_EMAIL`

2. Deploy:
   ```bash
   git push origin main
   ```

### Environment-Specific Keys

Use different API keys per environment:

- **Development:** Limited scope, test emails
- **Staging:** Separate API key, test recipients
- **Production:** Full scope, real emails

## Troubleshooting

### "Email service is not configured"

**Cause:** Missing `SENDGRID_API_KEY` or `SENDGRID_FROM_EMAIL`

**Fix:**
1. Check `.env.local` file exists
2. Verify variables are set
3. Restart dev server

### "Email service authentication failed" (401)

**Cause:** Invalid API key

**Fix:**
1. Generate new API key in SendGrid
2. Update `.env.local`
3. Restart dev server

### "Email service permission denied" (403)

**Cause:** Sender email not verified

**Fix:**
1. Go to SendGrid > Sender Authentication
2. Verify the sender email
3. Wait for verification email

### Emails not arriving

**Check:**
1. SendGrid Activity Feed for delivery status
2. Spam folder
3. Email address typos
4. Domain authentication status

## Future Enhancements

### Potential Improvements

- [ ] Add email templates in SendGrid (dynamic templates)
- [ ] Implement database logging for failed submissions
- [ ] Add attachment support
- [ ] Set up email analytics tracking
- [ ] Add webhook for email events (opens, clicks)
- [ ] Implement queue system for high volume
- [ ] Add multi-language support for auto-replies
- [ ] Set up monitoring/alerting for failures
- [ ] Add A/B testing for email content

## Support

### Resources

- [SendGrid Documentation](https://docs.sendgrid.com/)
- [SendGrid Node.js Library](https://github.com/sendgrid/sendgrid-nodejs)
- [SendGrid API Reference](https://www.twilio.com/docs/sendgrid/api-reference)

### Contact

For issues with this implementation:
- Check console logs for error details
- Review SendGrid Activity Feed
- Verify environment variables are set correctly
- Ensure sender email is verified

---

**Last Updated:** April 2026
**Maintained by:** Zenit Digital Development Team
