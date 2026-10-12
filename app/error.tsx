'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ZeniaShell from '@/zenia/ZeniaShell';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <ZeniaShell>
      <section className="portal-about section" aria-labelledby="error-title">
        <div className="container">
          <p className="statement-label">Error</p>
          <h1 className="portal-about-title" id="error-title">
            Something went wrong.
            <span> Try again, or head back to the homepage.</span>
          </h1>
          <div className="error-actions">
            <button type="button" className="button button-dark" onClick={reset}>
              Try again
            </button>
            <Link className="button button-outline" href="/">
              Home
            </Link>
            <Link className="button button-outline" href="/contact">
              Contact
            </Link>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <pre className="error-detail">{error.message}</pre>
          )}
        </div>
      </section>
    </ZeniaShell>
  );
}
