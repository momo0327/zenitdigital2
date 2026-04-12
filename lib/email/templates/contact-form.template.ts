export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

/**
 * Generate plain text email content for contact form
 */
export function generateContactFormTextEmail(data: ContactFormData): string {
  const { firstName, lastName, email, phone, company, service, message } = data;

  return `
New Contact Form Submission
============================

Contact Information:
--------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}` : ''}
Service Interested In: ${service}

Message:
--------
${message}

---
This email was sent from the Zenit Digital contact form.
Reply directly to this email to respond to ${firstName} ${lastName}.
  `.trim();
}

/**
 * Generate HTML email content for contact form
 */
export function generateContactFormHtmlEmail(data: ContactFormData): string {
  const { firstName, lastName, email, phone, company, service, message } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color: #0A0D24; padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                New Contact Form Submission
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- Contact Information Section -->
              <h2 style="margin: 0 0 20px 0; color: #0A0D24; font-size: 18px; font-weight: 600; border-bottom: 2px solid #0A0D24; padding-bottom: 10px;">
                Contact Information
              </h2>

              <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #0A0D24; width: 30%;">Name:</td>
                  <td style="padding: 8px 0; color: #333333;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #0A0D24;">Email:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #0A0D24;">Phone:</td>
                  <td style="padding: 8px 0;">
                    <a href="tel:${phone}" style="color: #0066cc; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #0A0D24;">Company:</td>
                  <td style="padding: 8px 0; color: #333333;">${company}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #0A0D24;">Service:</td>
                  <td style="padding: 8px 0; color: #333333;">${service}</td>
                </tr>
              </table>

              <!-- Message Section -->
              <h2 style="margin: 0 0 20px 0; color: #0A0D24; font-size: 18px; font-weight: 600; border-bottom: 2px solid #0A0D24; padding-bottom: 10px;">
                Message
              </h2>

              <div style="background-color: #f8f9fa; border-left: 4px solid #0A0D24; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
                <p style="margin: 0; color: #333333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- Call to Action -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${email}?subject=Re: Your inquiry to Zenit Digital"
                       style="display: inline-block; background-color: #0A0D24; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px;">
                      Reply to ${firstName}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666666; font-size: 14px;">
                This email was sent from the Zenit Digital contact form.<br>
                <a href="https://zenitdigital.se" style="color: #0066cc; text-decoration: none;">zenitdigital.se</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate auto-reply email for the customer (plain text)
 */
export function generateCustomerAutoReplyText(firstName: string): string {
  return `
Hi ${firstName},

Thank you for contacting Zenit Digital!

We've received your message and will get back to you as soon as possible, typically within 24 hours during business days.

In the meantime, feel free to explore our services at https://zenitdigital.se

Best regards,
The Zenit Digital Team

---
Zenit Digital
Email: hello@zenitdigital.se
Phone: +46 72-336 43 84
Website: https://zenitdigital.se
  `.trim();
}

/**
 * Generate auto-reply email for the customer (HTML)
 */
export function generateCustomerAutoReplyHtml(firstName: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Zenit Digital</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color: #0A0D24; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                Thank You for Reaching Out!
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Hi <strong>${firstName}</strong>,
              </p>

              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Thank you for contacting <strong>Zenit Digital</strong>! We've received your message and appreciate you taking the time to reach out to us.
              </p>

              <p style="margin: 0 0 30px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Our team will review your inquiry and get back to you as soon as possible, typically within <strong>24 hours</strong> during business days.
              </p>

              <!-- Info Box -->
              <div style="background-color: #f8f9fa; border-left: 4px solid #0A0D24; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
                <p style="margin: 0 0 10px 0; color: #0A0D24; font-weight: 600; font-size: 16px;">
                  In the meantime:
                </p>
                <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.6;">
                  Feel free to explore our services and previous projects on our website.
                </p>
              </div>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px 0;">
                    <a href="https://zenitdigital.se"
                       style="display: inline-block; background-color: #0A0D24; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px;">
                      Visit Our Website
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Best regards,<br>
                <strong>The Zenit Digital Team</strong>
              </p>

            </td>
          </tr>

          <!-- Contact Info Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; color: #0A0D24; font-weight: 600; font-size: 16px;">
                Zenit Digital
              </p>
              <p style="margin: 0; color: #666666; font-size: 14px; line-height: 1.8;">
                <a href="mailto:hello@zenitdigital.se" style="color: #0066cc; text-decoration: none;">hello@zenitdigital.se</a><br>
                <a href="tel:+46723364384" style="color: #0066cc; text-decoration: none;">+46 72-336 43 84</a><br>
                <a href="https://zenitdigital.se" style="color: #0066cc; text-decoration: none;">zenitdigital.se</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
