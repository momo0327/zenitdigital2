import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Sleep utility for retry logic
 */
async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Send email using SendGrid with retry logic and error handling
 *
 * @param options - Email options
 * @param maxRetries - Maximum number of retry attempts (default: 3)
 * @returns Promise with send result
 */
export async function sendEmail(
  options: EmailOptions,
  maxRetries = 3
): Promise<SendEmailResult> {
  // Validate API key
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not configured');
    return {
      success: false,
      error: 'Email service is not configured',
    };
  }

  // Validate from email
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  if (!fromEmail) {
    console.error('SENDGRID_FROM_EMAIL is not configured');
    return {
      success: false,
      error: 'Email service is not configured',
    };
  }

  const msg = {
    to: options.to,
    from: fromEmail,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await sgMail.send(msg);

      console.log(`Email sent successfully on attempt ${attempt}`);

      return {
        success: true,
        messageId: response[0].headers['x-message-id'],
      };
    } catch (error: unknown) {
      console.error(`Email send attempt ${attempt} failed:`, error);

      if (error && typeof error === 'object' && 'response' in error) {
        const { statusCode, body } = (error as { response: { statusCode: number; body: unknown } }).response;
        console.error('SendGrid error details:', { statusCode, body });

        // Don't retry on client errors (4xx) - these won't succeed on retry
        if (statusCode >= 400 && statusCode < 500) {
          let errorMessage = 'Failed to send email';

          switch (statusCode) {
            case 400:
              errorMessage = 'Invalid email data';
              break;
            case 401:
              errorMessage = 'Email service authentication failed';
              break;
            case 403:
              errorMessage = 'Email service permission denied';
              break;
            case 429:
              errorMessage = 'Too many email requests';
              break;
            default:
              errorMessage = 'Email service error';
          }

          return {
            success: false,
            error: errorMessage,
          };
        }

        // Retry on server errors (5xx) with exponential backoff
        if (statusCode >= 500 && attempt < maxRetries) {
          const backoffMs = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
          console.log(`Retrying in ${backoffMs}ms...`);
          await sleep(backoffMs);
          continue;
        }
      }

      // If we've exhausted retries or encountered an unknown error
      if (attempt === maxRetries) {
        return {
          success: false,
          error: 'Failed to send email after multiple attempts',
        };
      }
    }
  }

  // Fallback return (should never reach here)
  return {
    success: false,
    error: 'Failed to send email',
  };
}

/**
 * Validate email address format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
