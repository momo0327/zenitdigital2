"use client";

import "./ContactContainer.css";

type ContactContainerProps = {
  href?: string;
  imageSrc?: string;
  label?: string;
  title?: string;
};

export default function ContactContainer({
  href = "/contact",
  imageSrc = "/zenia/contact-tablet.webp",
  label = "Contact",
  title = "Let’s start your project",
}: ContactContainerProps) {
  return (
    <section className="contact-container">
      <a className="contact-container__link" href={href}>
        <span className="contact-container__label">{label}</span>

        <h2 className="contact-container__title">
          {title}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
            className="contact-container__arrow"
          >
            <path
              d="M7 24h33M27 11l13 13-13 13"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h2>

        <img
          className="contact-container__image"
          src={imageSrc}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </a>
    </section>
  );
}
