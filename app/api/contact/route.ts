import { NextRequest, NextResponse } from 'next/server';
import {
  processContactFormSubmission,
  logFailedSubmission,
} from '@/lib/email/contact.service';
import type { ContactFormData } from '@/lib/email/templates/contact-form.template';

/**
 * Rate limiting: Simple in-memory store
 * In production, use Redis or similar for distributed rate limiting
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
  // Use IP address or fallback to a default
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
             request.headers.get('x-real-ip') ||
             'unknown';
  return ip;
}

function checkRateLimit(key: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const limit = rateLimitMap.get(key);

  // Clean up expired entries
  if (limit && now > limit.resetTime) {
    rateLimitMap.delete(key);
  }

  const entry = rateLimitMap.get(key);

  if (!entry) {
    // First request in this window
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + 60 * 1000, // 1 minute window
    });
    return { allowed: true };
  }

  // Max 3 requests per minute per IP
  if (entry.count >= 3) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count += 1;
  return { allowed: true };
}

/**
 * POST /api/contact
 *
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    const rateLimit = checkRateLimit(rateLimitKey);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfter || 60),
          },
        }
      );
    }

    // Parse request body
    let body: ContactFormData;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request body',
        },
        { status: 400 }
      );
    }

    // Process the submission
    const result = await processContactFormSubmission(body);

    if (!result.success) {
      // Log failed submission for manual follow-up
      logFailedSubmission(body);

      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to submit form',
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
        details: result.details,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/contact
 *
 * Handle CORS preflight requests
 */
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
