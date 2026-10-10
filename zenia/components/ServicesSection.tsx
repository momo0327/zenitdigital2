"use client";

import { useId } from "react";
import "./ServicesSection.css";

type ServiceName =
  | "Full-stack development"
  | "Mobile development"
  | "Web development";

interface ServicesSectionProps {
  onContact?: (service: ServiceName) => void;
  contactHref?: string;
}

const services = [
  {
    key: "stack",
    title: "Fullstack",
    subtitle: "Development",
    service: "Full-stack development",
    image: "service-fullstack-dashboard.webp",
    width: 2023,
    height: 777,
    alt: "Laptop and iPhone displaying a clean dashboard",
  },
  {
    key: "mobile",
    title: "Mobile",
    subtitle: "development",
    service: "Mobile development",
    image: "service-mobile-dashboard.webp",
    width: 1241,
    height: 1267,
    alt: "Angled iPhone displaying a lavender workspace",
  },
  {
    key: "web",
    title: "Web",
    subtitle: "Development",
    service: "Web development",
    image: "service-web-dashboard.webp",
    width: 1432,
    height: 1098,
    alt: "iPad displaying a colorful dashboard",
  },
] as const;

export default function ServicesSection({
  onContact,
  contactHref = "/contact",
}: ServicesSectionProps) {
  const headingId = useId();

  return (
    <section
      className="zenia-services"
      id="services"
      aria-labelledby={headingId}
    >
      <div className="zenia-services-heading">
        <h2 id={headingId}>
          Your idea.
          <br />
          Our kind of challenge.
        </h2>

        <p>
          From a first release to your next big chapter.
          <br />
          One team to bring it all together.
        </p>
      </div>

      <div className="zenia-services-grid">
        {services.map((item) => (
          <article
            className={`zenia-services-card zenia-services-${item.key}`}
            key={item.key}
          >
            <div className="zenia-services-copy">
              <h3>
                {item.title}
                <br />
                {item.subtitle}
              </h3>

              {onContact ? (
                <button
                  type="button"
                  className="zenia-services-cta"
                  aria-label={`Start a ${item.service.toLowerCase()} project`}
                  onClick={() => onContact(item.service)}
                >
                  Start a project
                </button>
              ) : (
                <a
                  className="zenia-services-cta"
                  href={contactHref}
                  aria-label={`Start a ${item.service.toLowerCase()} project`}
                >
                  Start a project
                </a>
              )}
            </div>

            <img
              className="zenia-services-device"
              src={`/zenia-services/${item.image}`}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
