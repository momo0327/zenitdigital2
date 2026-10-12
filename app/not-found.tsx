import Link from 'next/link';
import ZeniaShell from '@/zenia/ZeniaShell';

export default function NotFound() {
  return (
    <ZeniaShell>
      <section className="portal-about section" aria-labelledby="not-found-title">
        <div className="container">
          <p className="statement-label">404</p>
          <h1 className="portal-about-title" id="not-found-title">
            This page doesn’t exist.
            <span> It may have moved when the site was redesigned.</span>
          </h1>
          <div className="error-actions">
            <Link className="button button-dark" href="/">
              Home
            </Link>
            <Link className="button button-outline" href="/work">
              Our work
            </Link>
            <Link className="button button-outline" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </ZeniaShell>
  );
}
