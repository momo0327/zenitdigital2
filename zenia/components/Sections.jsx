"use client";
// Presentational sections retain the original semantic markup and regular CSS.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ContactContainer from "./ContactContainer";
export function BrandDefinitions({ onContact, onProject }) {
  return (
    <svg
      className="brand-definitions"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <symbol id="zenia-mark" viewBox="-58 197 3190 845" fill="currentColor">
          <path d="M0 197H858.628V299.558L716.925 473.513L428.617 442.716H0V197Z" />
          <path d="M172.771 742.897L494.29 354.991L576.457 423.525L760.376 419.079L498.838 747.015L334.917 924.745L172.771 742.897Z" />
          <rect y="789.695" width="157.24" height="244.787" />
          <path d="M44.8593 790.523C147.31 789.837 229.659 676.354 229.659 676.354L273.498 798.009L98.3738 890.568C98.3738 890.568 -57.592 791.208 44.8593 790.523Z" />
          <path d="M126.268 921.944L281.173 874.681L446.715 800.722C390.74 882.644 226.728 1042.45 126.272 1034.13L126.268 921.944Z" />
          <rect x="139.25" y="818.258" width="150.698" height="99.8656" />
          <path d="M859 1034L859 507L613 810.5V1034H859Z" />
          <path d="M937.031 198.6H1467.43V355.8H1120.63V527.4H1435.03V682.2H1120.63V877.8H1475.83V1035H937.031V198.6ZM1725.11 553.8V1035H1552.31V198.6H1720.31L1981.91 678.6V198.6H2154.71V1035H1987.91L1725.11 553.8ZM2262.52 198.6H2446.12V1035H2262.52V198.6ZM2518.36 1035V847.8C2518.36 832.6 2520.36 817.4 2524.36 802.2C2529.16 787 2532.36 776.6 2533.96 771L2729.56 198.6H2923.96L3118.36 771C3119.96 775.8 3122.76 786.2 3126.76 802.2C3130.76 817.4 3132.76 832.6 3132.76 847.8V1035H2955.16V863.4H2691.16V1035H2518.36ZM2728.36 711H2917.96L2821.96 400.2L2728.36 711Z" />
        </symbol>
      </defs>
    </svg>
  );
}

export function HeroTitle({ onContact, onProject }) {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <h1 id="hero-title">
        Thoughtful digital.
        <br />
        <span>Beautifully built.</span>
      </h1>
      <p>
        We turn good ideas into apps, websites, and
        <br className="desktop-break" /> digital experiences people love to use.
      </p>
    </section>
  );
}

export function Cases({ onContact, onProject }) {
  return (
    <section
      className="case-gallery container section"
      id="cases"
      aria-labelledby="cases-title"
    >
      <div className="section-heading">
        <h2 id="cases-title">
          Good ideas,
          <br />
          out in the world.
        </h2>
        <p>
          Different challenges. A shared attention to detail.
          <br />A closer look at what we make.
        </p>
      </div>
      <div className="case-grid">
        <article className="case-card">
          <button
            className="case-card-image"
            data-project="hemma"
            aria-label="Explore the Hemma case study"
            onClick={() => onProject("hemma")}
          >
            <img
              src="/zenia/project-6.webp"
              alt="Hemma project imagery"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <span className="case-view">Explore project</span>
          </button>
          <div className="case-card-caption">
            <div>
              <h3>
                <button data-project="hemma" onClick={() => onProject("hemma")}>
                  Hemma
                </button>
              </h3>
              <p>Finding a home, made human.</p>
            </div>
            <span>Mobile app</span>
          </div>
        </article>
        <article className="case-card">
          <button
            className="case-card-image"
            data-project="relay"
            aria-label="Explore the Relay case study"
            onClick={() => onProject("relay")}
          >
            <img
              src="/zenia/project-4.webp"
              alt="Relay project imagery"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <span className="case-view">Explore project</span>
          </button>
          <div className="case-card-caption">
            <div>
              <h3>
                <button data-project="relay" onClick={() => onProject("relay")}>
                  Relay
                </button>
              </h3>
              <p>Bringing every moving part together.</p>
            </div>
            <span>Full-stack platform</span>
          </div>
        </article>
        <article className="case-card">
          <button
            className="case-card-image"
            data-project="form"
            aria-label="Explore the Form case study"
            onClick={() => onProject("form")}
          >
            <img
              src="/zenia/project-3.webp"
              alt="Form project imagery"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <span className="case-view">Explore project</span>
          </button>
          <div className="case-card-caption">
            <div>
              <h3>
                <button data-project="form" onClick={() => onProject("form")}>
                  Form
                </button>
              </h3>
              <p>A little more room for good design.</p>
            </div>
            <span>E-commerce</span>
          </div>
        </article>
        <article className="case-card">
          <button
            className="case-card-image"
            data-project="atlas"
            aria-label="Explore the Atlas case study"
            onClick={() => onProject("atlas")}
          >
            <img
              src="/zenia/project-1.webp"
              alt="Atlas project imagery"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <span className="case-view">Explore project</span>
          </button>
          <div className="case-card-caption">
            <div>
              <h3>
                <button data-project="atlas" onClick={() => onProject("atlas")}>
                  Atlas
                </button>
              </h3>
              <p>Everything your team already knows.</p>
            </div>
            <span>Web app</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Services({ onContact, onProject, dark }) {
  return (
    <section
      className={`services container section${dark ? " services-dark" : ""}`}
      id="services"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <h2 id="services-title">
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
      <div className="service-columns">
        <article className="service-card service-stack">
          <div className="service-card-copy">
            <h3>
              Fullstack
              <br />
              development
            </h3>
            <button
              className="service-link"
              data-service="Full-stack platforms"
              onClick={() => onContact("Full-stack platforms")}
            >
              Start a project
            </button>
          </div>
          <div className="service-card-art">
            <img
              src="/zenia/svc-fullstack.png"
              alt="A phone and laptop showing a connected platform"
              loading="lazy"
            />
          </div>
        </article>
        <article className="service-card service-mobile">
          <div className="service-card-copy">
            <h3>
              Mobile
              <br />
              development
            </h3>
            <button
              className="service-link"
              data-service="Mobile development"
              onClick={() => onContact("Mobile development")}
            >
              Start a project
            </button>
          </div>
          <div className="service-card-art">
            <img
              src="/zenia/svc-mobile.png"
              alt="A phone showing a mobile app interface"
              loading="lazy"
            />
          </div>
        </article>
        <article className="service-card service-web">
          <div className="service-card-copy">
            <h3>
              Web
              <br />
              development
            </h3>
            <button
              className="service-link"
              data-service="Web development"
              onClick={() => onContact("Web development")}
            >
              Start a project
            </button>
          </div>
          <div className="service-card-art">
            <img
              src="/zenia/svc-web.png"
              alt="A tablet showing a dashboard interface"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  );
}

function ProcessMark() {
  // Two interlocking brackets that trace themselves, mirroring the supplied mark.
  return (
    <svg className="process-mark" viewBox="0 0 250 250" aria-hidden="true">
      <path d="M76.08 33.33 L75 158.33 A16.67 16.67 0 0 0 91.67 175 L216.67 175" />
      <path d="M33.33 76.08 L158.33 75 A16.67 16.67 0 0 1 175 91.67 L175 216.67" />
    </svg>
  );
}
function CodeMark() {
  // Outward-facing chevrons that trace from the centre, per the supplied mark.
  return (
    <svg
      className="process-mark process-mark-code"
      viewBox="0 0 250 250"
      aria-hidden="true"
    >
      <path d="M91.67 75 L41.67 125 L91.67 175" />
      <path d="M158.33 75 L208.33 125 L158.33 175" />
    </svg>
  );
}
function GrowMark() {
  // An open ring that closes, then a check drawn into the gap.
  return (
    <svg
      className="process-mark process-mark-grow"
      viewBox="0 0 250 250"
      aria-hidden="true"
    >
      <path
        className="grow-ring"
        d="M207.87 118.03 A83.16 83.16 0 1 1 158.84 49"
      />
      <path
        className="grow-check"
        d="M208.26 58.42 L125 141.76 L100.02 116.78"
      />
    </svg>
  );
}
function ExploreMark() {
  // A pencil drawing its own outline, then the line it writes on.
  return (
    <svg
      className="process-mark process-mark-explore"
      viewBox="0 0 250 250"
      aria-hidden="true"
    >
      <path
        className="explore-pen"
        d="M162.5 56.5 A16.67 16.67 0 0 1 187.5 56.5 A16.67 16.67 0 0 1 187.5 81.5 L83.33 185.67 L50 194 L58.33 160.67 Z"
      />
      <path className="explore-rule" d="M125 194 L200 194" />
    </svg>
  );
}
export function Process({ onContact, onProject, dark }) {
  const section = useRef(null);
  const [marksOn, setMarksOn] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setMarksOn(true);
      return;
    }
    // One shared trigger so all four marks begin the same cycle together.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMarksOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={section}
      className={`process section${marksOn ? " marks-running" : ""}${
        dark ? " process-dark" : ""
      }`}
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="process-heading">
          <h2 id="process-title">
            Good things take shape.
            <br />
            Here’s how.
          </h2>
          <p>
            A clear process. An open conversation.
            <br />
            You’re part of it at every step.
          </p>
        </div>
        <div className="process-grid">
          <article>
            <span className="process-number" aria-hidden="true">
              <ProcessMark />
            </span>
            <h3>Understand</h3>
            <p>
              We get to know your business, your people, and what a better
              experience could look like.
            </p>
          </article>
          <article>
            <span className="process-number" aria-hidden="true">
              <ExploreMark />
            </span>
            <h3>Explore</h3>
            <p>
              We turn the right questions into ideas, designs, and prototypes
              you can put your hands on.
            </p>
          </article>
          <article>
            <span className="process-number" aria-hidden="true">
              <CodeMark />
            </span>
            <h3>Build</h3>
            <p>
              We bring it to life in small, considered steps. You see real
              progress and shape it with us.
            </p>
          </article>
          <article>
            <span className="process-number" aria-hidden="true">
              <GrowMark />
            </span>
            <h3>Keep growing</h3>
            <p>
              We launch with care, learn from real people, and keep making the
              experience better.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Portal({ onContact, onProject }) {
  return (
    <section
      className="customer-portal section"
      id="portal"
      aria-labelledby="portal-title"
    >
      <div className="container">
        <div className="portal-intro">
          <p className="portal-eyebrow">YOUR CUSTOMER PORTAL</p>
          <h2 id="portal-title">
            Your project. <br className="portal-break" />
            One shared space.
            <br />
            <span>
              Stay close to every detail, from the first idea to the next
              release.
            </span>
          </h2>
          <p className="portal-description">
            Follow progress, review designs, and share feedback with your team.
            Everything in one place, so you always know where things stand.
          </p>
          <Link className="button button-white" href="/portal">
            Read more
          </Link>
        </div>
        <figure className="portal-artwork">
          <div className="portal-devices">
            <div className="portal-device portal-device-1">
              <img
                src="/zenia/portal-device-1.webp"
                alt="An iPad showing the brand library in the client portal"
                width="1427"
                height="1102"
                loading="lazy"
              />
            </div>
            <div className="portal-device portal-device-2">
              <img
                src="/zenia/portal-device-2.webp"
                alt="An iPad showing the project overview in the client portal"
                width="1495"
                height="1052"
                loading="lazy"
              />
            </div>
          </div>
        </figure>
        <div className="portal-benefits">
          <div>
            <h3>A clear view</h3>
            <p>Milestones, updates, and what’s coming next.</p>
          </div>
          <div>
            <h3>A shared conversation</h3>
            <p>Feedback and decisions, kept together.</p>
          </div>
          <div>
            <h3>Everything at hand</h3>
            <p>Your designs, documents, and deliverables.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
// Standalone /portal hero. Deliberately separate from the homepage section
// above, so the two can be styled and edited independently.
export function PortalHero() {
  return (
    <section
      className="portal-page-hero"
      id="portal"
      aria-labelledby="portal-page-title"
    >
      <div className="container">
        <div className="portal-intro">
          <p className="portal-eyebrow">YOUR CUSTOMER PORTAL</p>
          <h2 id="portal-page-title">
            Your project. <br className="portal-break" />
            One shared space.
            <br />
            <span>
              Stay close to every detail, from the first idea to the next
              release.
            </span>
          </h2>
          <p className="portal-description">
            Follow progress, review designs, and share feedback with your team.
            Everything in one place, so you always know where things stand.
          </p>
        </div>
        <figure className="portal-page-artwork">
          <img
            src="/zenia/portal-hero.png"
            alt="The client portal open on an iPad"
            width="1779"
            height="884"
          />
        </figure>
      </div>
    </section>
  );
}
export function PortalAbout() {
  return (
    <section
      className="portal-about section"
      aria-labelledby="portal-about-title"
    >
      <div className="container">
        <p className="statement-label">How it works</p>
        <h2 className="portal-about-title" id="portal-about-title">
          Everything about your project, in one place.
          <span> No chasing updates, no digging through email.</span>
        </h2>
        <div className="portal-about-grid">
          <div>
            <h3>A clear view</h3>
            <p>
              Milestones, progress, and what’s coming next, updated as the work
              moves.
            </p>
          </div>
          <div>
            <h3>A shared conversation</h3>
            <p>
              Feedback and decisions stay with the work they belong to, so
              nothing gets lost.
            </p>
          </div>
          <div>
            <h3>Everything at hand</h3>
            <p>
              Designs, documents, and deliverables, ready to download whenever
              you need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="container">
          <div className="portal-intro">
            <p className="portal-eyebrow">WE ARE ZENIA</p>
            <h2 id="about-hero-title">
              A small team with a long attention span.
              <br />
              <span>
                Designers and developers who care how things are made.
              </span>
            </h2>
            <p className="portal-description">
              We build digital products end to end, from the first conversation
              to the details nobody notices until they are missing.
            </p>
          </div>
        </div>
      </section>
      <section
        className="portal-about section"
        aria-labelledby="about-page-title"
      >
        <div className="container">
          <p className="statement-label">How we work</p>
          <h2 className="portal-about-title" id="about-page-title">
            Close collaboration, and no hand-offs.
            <span> The people who design it are the people who build it.</span>
          </h2>
          <div className="portal-about-grid">
            <div>
              <h3>One team</h3>
              <p>
                Design and development sit together, so decisions get made once
                and carried through properly.
              </p>
            </div>
            <div>
              <h3>In the open</h3>
              <p>
                You see the work as it happens, not in a reveal at the end. It
                is easier to steer that way.
              </p>
            </div>
            <div>
              <h3>Built to last</h3>
              <p>
                We write code and systems the next person can pick up, whether
                that is us or your own team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export function ServicesPage({ onContact }) {
  return (
    <>
      <section className="services-hero" aria-labelledby="services-hero-title">
        <div className="container">
          <div className="portal-intro">
            <p className="portal-eyebrow">WHAT WE DO</p>
            <h2 id="services-hero-title">
              Everything your product needs,{" "}
              <span>designed and built together</span>
            </h2>
            <p className="portal-description">
              Apps, websites, and connected platforms. One team to bring your
              next chapter to life.
            </p>
          </div>
        </div>
        <img
          className="services-hero-art"
          src="/zenia/services-hero.png"
          alt="A tablet and phone showing a responsive site design"
          width="2000"
          height="1232"
        />
      </section>
      <Process dark />
    </>
  );
}
export function PortalActions({ onContact }) {
  return (
    <section className="portal-actions-section" aria-label="Next steps">
      <div className="container">
        <div className="portal-actions">
          <Link className="portal-action" href="/portal">
            <span className="portal-action-label">Portal</span>
            <span className="portal-action-title">
              Book a walkthrough <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
          <a className="portal-action portal-action-accent" href="/#faq">
            <span className="portal-action-label">FAQ</span>
            <span className="portal-action-title">
              Questions &amp; answers <span aria-hidden="true">&rarr;</span>
            </span>
          </a>
        </div>
        <ContactContainer />
      </div>
    </section>
  );
}
export function Faq({ onContact, onProject }) {
  return (
    <section
      className="faq container section"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div>
        <h2 id="faq-title">
          A few good
          <br />
          questions.
        </h2>
        <p>
          Have something else in mind?
          <br />
          <button
            className="inline-link"
            data-contact=""
            onClick={() => onContact()}
          >
            Let’s talk about it.
          </button>
        </p>
      </div>
      <div className="faq-items">
        <details>
          <summary>
            What can you help us build?<span aria-hidden="true">+</span>
          </summary>
          <p>
            Mobile apps, customer-facing websites, e-commerce stores, and custom
            web platforms. We can shape the product from the start or join an
            existing team to solve a specific challenge.
          </p>
        </details>
        <details>
          <summary>
            Can you work with our existing team?
            <span aria-hidden="true">+</span>
          </summary>
          <p>
            Absolutely. We can work alongside your designers, developers, and
            product team, or take responsibility for a complete project. We
            agree on roles, communication, and decisions together.
          </p>
        </details>
        <details>
          <summary>
            How long does a project take?<span aria-hidden="true">+</span>
          </summary>
          <p>
            It depends on the scope. A focused website may take several weeks; a
            custom app or platform usually needs longer. We start with a clear
            discovery phase and agree on a realistic plan before building.
          </p>
        </details>
        <details>
          <summary>
            How do you approach pricing?<span aria-hidden="true">+</span>
          </summary>
          <p>
            We shape the scope around your goals and budget, then provide a
            clear proposal. For evolving products, an ongoing partnership can
            make more sense than a fixed project. We’ll work out the right fit
            together.
          </p>
        </details>
        <details>
          <summary>
            What happens after launch?<span aria-hidden="true">+</span>
          </summary>
          <p>
            We can continue with maintenance, improvements, and new features.
            You’ll also receive the documentation and handover your team needs
            to feel confident using and managing the product.
          </p>
        </details>
      </div>
    </section>
  );
}

export function Footer({ onContact, onProject }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-invitation">
          <h2>
            Good things start
            <br />
            with a conversation.
          </h2>
          <div>
            <p>
              A new idea. A fresh perspective.
              <br />
              Let’s see where it takes us.
            </p>
            <button
              className="button button-lavender"
              data-contact=""
              onClick={() => onContact()}
            >
              Start a conversation
            </button>
          </div>
        </div>
        <div className="footer-directory">
          <div className="footer-identity">
            <a className="wordmark" href="/#top" aria-label="Zenia home">
              <span className="brand-text">ZENIA</span>
            </a>
            <p>
              Thoughtful digital.
              <br />
              Beautifully built.
            </p>
          </div>
          <nav aria-label="Explore Zenia">
            <h3>Explore</h3>
            <Link href="/work">Our work</Link>
            <a href="/#about">About us</a>
            <a href="/#process">Our process</a>
            <a href="/#faq">Questions &amp; answers</a>
          </nav>
          <nav aria-label="Our services">
            <h3>What we do</h3>
            <button
              data-service="Mobile development"
              onClick={() => onContact("Mobile development")}
            >
              Mobile development
            </button>
            <button
              data-service="Full-stack development"
              onClick={() => onContact("Full-stack development")}
            >
              Full-stack development
            </button>
            <button
              data-service="Web development"
              onClick={() => onContact("Web development")}
            >
              Web development
            </button>
          </nav>
          <div className="footer-thought">
            <h3>A shared ambition</h3>
            <p>
              Good people. Open minds.
              <br />
              Better things, together.
            </p>
            <button
              className="footer-contact-link"
              data-contact=""
              onClick={() => onContact()}
            >
              Tell us what’s on your mind
            </button>
          </div>
        </div>
        <div className="footer-base">
          <p>
            © <span id="year">{new Date().getFullYear()}</span> Zenia
          </p>
          <span>Design &amp; development, together.</span>
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="/#top">Back to the top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
