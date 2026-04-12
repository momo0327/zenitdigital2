import { sendEmail, isValidEmail, SendEmailResult } from './sendgrid.service';
import {
  ContactFormData,
  generateContactFormTextEmail,
  generateContactFormHtmlEmail,
  generateCustomerAutoReplyText,
  generateCustomerAutoReplyHtml,
} from './templates/contact-form.template';

export interface ContactFormSubmissionResult {
  success: boolean;
  error?: string;
  details?: {
    notificationSent: boolean;
    autoReplySent: boolean;
  };
}

/**
 * Validate contact form data
 */
function validateContactFormData(data: ContactFormData): string | null {
  // Required fields
  if (!data.firstName?.trim()) {
    return 'First name is required';
  }

  if (!data.lastName?.trim()) {
    return 'Last name is required';
  }

  if (!data.email?.trim()) {
    return 'Email is required';
  }

  if (!isValidEmail(data.email)) {
    return 'Invalid email address';
  }

  if (!data.phone?.trim()) {
    return 'Phone number is required';
  }

  if (!data.service?.trim()) {
    return 'Service selection is required';
  }

  if (!data.message?.trim()) {
    return 'Message is required';
  }

  // Validate message length
  if (data.message.trim().length < 10) {
    return 'Message is too short (minimum 10 characters)';
  }

  if (data.message.trim().length > 5000) {
    return 'Message is too long (maximum 5000 characters)';
  }

  return null;
}

/**
 * Send contact form notification to Zenit Digital team
 */
async function sendNotificationEmail(
  data: ContactFormData
): Promise<SendEmailResult> {
  const toEmail = process.env.SENDGRID_TO_EMAIL || 'hello@zenitdigital.se';

  return sendEmail({
    to: toEmail,
    subject: `New Contact Form Submission - ${data.service}`,
    text: generateContactFormTextEmail(data),
    html: generateContactFormHtmlEmail(data),
    replyTo: data.email,
  });
}

/**
 * Send auto-reply email to customer
 */
async function sendAutoReplyEmail(
  data: ContactFormData
): Promise<SendEmailResult> {
  return sendEmail({
    to: data.email,
    subject: 'Thank you for contacting Zenit Digital',
    text: generateCustomerAutoReplyText(data.firstName),
    html: generateCustomerAutoReplyHtml(data.firstName),
  });
}

/**
 * Process contact form submission with fallback mechanisms
 *
 * This function will:
 * 1. Validate the form data
 * 2. Send notification email to Zenit Digital team
 * 3. Send auto-reply email to the customer
 * 4. Handle failures gracefully with fallbacks
 *
 * @param data - Contact form data
 * @returns Promise with submission result
 */
export async function processContactFormSubmission(
  data: ContactFormData
): Promise<ContactFormSubmissionResult> {
  // Validate input
  const validationError = validateContactFormData(data);
  if (validationError) {
    return {
      success: false,
      error: validationError,
    };
  }

  try {
    // Send notification email to team (primary goal)
    const notificationResult = await sendNotificationEmail(data);

    if (!notificationResult.success) {
      // If notification fails, the whole submission fails
      console.error('Failed to send notification email:', notificationResult.error);
      return {
        success: false,
        error: notificationResult.error || 'Failed to send notification',
      };
    }

    console.log('Notification email sent successfully:', notificationResult.messageId);

    // Try to send auto-reply (secondary goal - failure here doesn't fail the submission)
    let autoReplySent = false;
    try {
      const autoReplyResult = await sendAutoReplyEmail(data);

      if (autoReplyResult.success) {
        console.log('Auto-reply email sent successfully:', autoReplyResult.messageId);
        autoReplySent = true;
      } else {
        console.error('Failed to send auto-reply email:', autoReplyResult.error);
        // Log but don't fail the submission
      }
    } catch (autoReplyError) {
      console.error('Auto-reply email error (non-critical):', autoReplyError);
      // Continue - auto-reply failure doesn't fail the submission
    }

    return {
      success: true,
      details: {
        notificationSent: true,
        autoReplySent,
      },
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}

/**
 * Fallback: Save form submission to console/logs when email fails
 * This can be extended to save to a database or file system
 */
export function logFailedSubmission(data: ContactFormData): void {
  console.error('FAILED CONTACT FORM SUBMISSION - Manual follow-up required:');
  console.error('========================================');
  console.error(JSON.stringify(data, null, 2));
  console.error('========================================');

  // TODO: In production, consider:
  // - Saving to a database
  // - Sending to a monitoring service (Sentry, etc.)
  // - Writing to a file
  // - Sending to a backup email service
}
