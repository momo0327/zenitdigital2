# SendGrid Setup Guide for Zenit Digital

This guide will help you set up SendGrid for the contact form in 5 minutes.

## Quick Setup (5 Steps)

### Step 1: Create SendGrid Account

1. Go to https://signup.sendgrid.com/
2. Sign up with your email (free tier: 100 emails/day)
3. Verify your email address

**Already have an account?** Skip to Step 2.

---

### Step 2: Create API Key

1. Login to [SendGrid Dashboard](https://app.sendgrid.com/)
2. Click **Settings** (left sidebar) → **API Keys**
3. Click blue **Create API Key** button (top right)
4. Fill in the form:
   - **API Key Name:** `Zenit Digital Production`
   - **API Key Permissions:** Select **Full Access** (or at minimum **Mail Send > Full Access**)
5. Click **Create & View**
6. **IMPORTANT:** Copy the API key now (starts with `SG.`) - you won't see it again!

---

### Step 3: Verify Sender Email

SendGrid requires you to verify the email address you'll send from.

#### Quick Method: Single Sender Verification

1. In SendGrid Dashboard, go to **Settings** → **Sender Authentication**
2. Under **Single Sender Verification**, click **Get Started** or **Create New Sender**
3. Fill in the form:
   ```
   From Name: Zenit Digital
   From Email Address: noreply@zenitdigital.se
   Reply To: hello@zenitdigital.se
   Company Address: Gothenburg, Sweden
   Nickname: Zenit Digital Notifications
   ```
4. Click **Create**
5. Check your email (`noreply@zenitdigital.se`) and click the verification link
6. ✅ Done! Your sender is verified

**Note:** You must have access to `noreply@zenitdigital.se` to verify it. If you don't have this email:
- Use an email you control (e.g., `your-name@zenitdigital.se`)
- Or set up the `noreply@zenitdigital.se` inbox first

---

### Step 4: Configure Environment Variables

1. Open your project in terminal/IDE
2. Create `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```

3. Add these variables (replace with your actual values):
   ```bash
   # Paste your API key from Step 2
   SENDGRID_API_KEY=SG.paste-your-actual-key-here

   # The email you verified in Step 3
   SENDGRID_FROM_EMAIL=noreply@zenitdigital.se

   # Where you want to receive contact form submissions
   SENDGRID_TO_EMAIL=hello@zenitdigital.se
   ```

4. Save the file

**Security:** Never commit `.env.local` to Git! It's already in `.gitignore`.

---

### Step 5: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000/ContactPage

3. Fill out the contact form with test data

4. Submit the form

5. **Check for success:**
   - ✅ Success message appears in the form
   - ✅ Email arrives at `hello@zenitdigital.se`
   - ✅ Auto-reply sent to the email you entered in the form

**If it works:** Congratulations! 🎉 Your contact form is now live!

**If it doesn't work:** See [Troubleshooting](#troubleshooting) below.

---

## Production Deployment (Vercel)

When deploying to Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these three variables:
   - `SENDGRID_API_KEY` = `SG.your-key...`
   - `SENDGRID_FROM_EMAIL` = `noreply@zenitdigital.se`
   - `SENDGRID_TO_EMAIL` = `hello@zenitdigital.se`
4. Click **Save**
5. Redeploy your site

**Best Practice:** Use different API keys for development and production.

---

## Troubleshooting

### ❌ "Email service is not configured"

**Cause:** Environment variables not set

**Fix:**
1. Check if `.env.local` exists in your project root
2. Verify all three variables are present and have values
3. Restart your dev server (`npm run dev`)

---

### ❌ "Email service authentication failed" (401)

**Cause:** Invalid or incorrect API key

**Fix:**
1. Double-check you copied the entire API key (starts with `SG.`)
2. No extra spaces or quotes in `.env.local`
3. Generate a new API key and try again
4. Restart dev server after changing `.env.local`

---

### ❌ "Email service permission denied" (403)

**Cause:** Sender email not verified in SendGrid

**Fix:**
1. Go to SendGrid → Settings → Sender Authentication
2. Check if your sender email is verified (green checkmark)
3. If not verified, check your email for verification link
4. Make sure `SENDGRID_FROM_EMAIL` matches the verified email exactly

---

### ❌ "Invalid email address"

**Cause:** Email format validation failed

**Fix:**
- Use a valid email format: `name@domain.com`
- No spaces or special characters

---

### ✉️ Emails not arriving

**Check:**
1. **Spam folder** - SendGrid emails often land in spam initially
2. **SendGrid Activity Feed:**
   - Login to SendGrid
   - Go to **Email Activity** (left sidebar)
   - Filter by recipient email
   - Check delivery status
3. **Email typos** - Verify email addresses are correct
4. **Sender verification** - Ensure sender is verified (Step 3)

**Fix for spam:**
1. Set up **Domain Authentication** (see below)
2. Mark test emails as "Not Spam"
3. Add sender to contacts

---

## Advanced: Domain Authentication (Recommended for Production)

Domain authentication improves email deliverability and removes the "sent via sendgrid.net" warning.

**Time required:** 30-60 minutes (mostly waiting for DNS propagation)

### Steps:

1. Login to SendGrid → **Settings** → **Sender Authentication**
2. Under **Domain Authentication**, click **Get Started** or **Authenticate Your Domain**
3. Select your DNS host (e.g., Cloudflare, Namecheap, GoDaddy)
4. Enter your domain: `zenitdigital.se`
5. Choose **Use automated security** (DKIM/SPF)
6. Click **Next**
7. SendGrid will show DNS records to add
8. Copy these records to your DNS provider:
   - CNAME records (usually 3)
   - TXT record (if shown)
9. Wait 24-48 hours for DNS propagation
10. Return to SendGrid and click **Verify**

**Benefits:**
- Better email deliverability
- Removes "via sendgrid.net" label
- Builds sender reputation
- Professional appearance

---

## Email Sending Limits

### Free Tier
- **100 emails per day** (forever free)
- Full API access
- Email support

### Paid Plans (if needed)
- **Essentials:** $19.95/month - 50,000 emails/month
- **Pro:** Custom pricing for higher volumes

**For most small businesses:** Free tier is sufficient!

**Current contact form usage estimate:**
- ~10-50 submissions/day = 20-100 emails/day (notification + auto-reply)
- Monitor usage in SendGrid dashboard

---

## Testing Tips

### Test Email Addresses

Use these for testing (they won't deliver but show as success in SendGrid):

```
success@simulator.amazonses.com  → Successful delivery
bounce@simulator.amazonses.com   → Hard bounce
complaint@simulator.amazonses.com → Spam complaint
```

### Test the API Directly

Using curl:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "your-email@example.com",
    "phone": "+46701234567",
    "service": "Web Development",
    "message": "This is a test message from the API"
  }'
```

### Test Rate Limiting

Submit the form 4 times quickly - the 4th submission should fail with "Too many requests"

---

## Monitoring

### View Email Activity

1. Login to SendGrid
2. Go to **Email Activity** (left sidebar)
3. View:
   - Sent emails
   - Delivered emails
   - Opens (if tracking enabled)
   - Bounces
   - Spam reports

### Enable Email Tracking (Optional)

1. Go to **Settings** → **Tracking**
2. Enable:
   - **Open Tracking** - See when emails are opened
   - **Click Tracking** - Track link clicks

---

## Security Best Practices

### ✅ Do:
- Store API key in `.env.local` only
- Use different API keys for dev/staging/prod
- Restrict API key permissions (Mail Send only)
- Rotate API keys periodically (every 6-12 months)
- Set up Two-Factor Authentication on SendGrid account

### ❌ Don't:
- Commit `.env.local` to Git
- Share API keys in Slack/email
- Use production API key in development
- Give API keys Full Access unless needed

---

## Need Help?

### Documentation
- [SendGrid Docs](https://docs.sendgrid.com/)
- [Email Service README](./lib/email/README.md) - Detailed technical docs
- [SendGrid Node.js Docs](https://github.com/sendgrid/sendgrid-nodejs)

### Support Channels
- SendGrid Support: https://support.sendgrid.com/
- SendGrid Status Page: https://status.sendgrid.com/

### Common Questions

**Q: Can I change the sender email later?**
A: Yes, just verify a new email in SendGrid and update `SENDGRID_FROM_EMAIL`

**Q: How do I know if emails are being sent?**
A: Check SendGrid Email Activity feed or check console logs

**Q: Can I customize the email templates?**
A: Yes! Edit files in `lib/email/templates/`

**Q: What happens if SendGrid is down?**
A: Failed submissions are logged to console. You can extend this to save to a database.

---

**Setup Time:** ~5 minutes
**Difficulty:** Easy
**Cost:** Free (up to 100 emails/day)

🎉 **You're all set!** Your contact form is now powered by SendGrid.
