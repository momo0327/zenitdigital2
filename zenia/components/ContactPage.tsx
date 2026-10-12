"use client";

import { COMPANY } from "@/app/constants/content";
import { SOCIAL_LINKS } from "@/app/constants/navigation";
import ContactContainer from "./ContactContainer";
import "./ContactPage.css";

const { email: EMAIL, phone: PHONE, address: ADDRESS } = COMPANY;

export default function ContactPage() {
  return (
    <section className="contact-page" aria-labelledby="contact-page-title">
      <div className="container">
        <h1 id="contact-page-title" className="contact-page__title">
          Let’s get in touch
          <br /> <span>and make something happen</span>
        </h1>

        <div className="contact-page__cards">
          <div className="contact-page__card">
            <span className="contact-page__label">Contact</span>
            <div className="contact-page__group">
              <p className="contact-page__note">
                Reach out any time — even if it’s just for a chat.
              </p>
              <a className="contact-page__email" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <a
                className="contact-page__email"
                href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
              >
                {PHONE}
              </a>
            </div>
          </div>

          <div className="contact-page__card">
            <span className="contact-page__label">Studio</span>
            <address className="contact-page__address">
              {ADDRESS.street}
              <br />
              {ADDRESS.postalCode} {ADDRESS.city}
              <br />
              {ADDRESS.country}
            </address>
          </div>

          <div className="contact-page__card">
            <span className="contact-page__label">Follow</span>
            <ul className="contact-page__socials">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a href={social.href}>{social.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactContainer
          href="/work"
          label="Projects"
          title="Explore our work"
        />
      </div>
    </section>
  );
}
