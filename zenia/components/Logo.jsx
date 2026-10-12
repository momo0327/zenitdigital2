"use client";
export default function Logo({ link = true }) {
  const mark = <span className="brand-text">ZENIA</span>;
  return link ? (
    <a className="wordmark" href="/#top" aria-label="Home">
      {mark}
    </a>
  ) : (
    <span className="wordmark" aria-label="Home">
      {mark}
    </span>
  );
}
