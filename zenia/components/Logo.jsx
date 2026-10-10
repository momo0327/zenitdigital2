"use client";
export default function Logo({ link = true }) {
  // Placeholder mark — swap src for the real logo when it's ready.
  const mark = (
    <img
      className="brand-svg"
      src="/zenia/airmee-wordmark.png"
      alt=""
      width="1200"
      height="272"
    />
  );
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
