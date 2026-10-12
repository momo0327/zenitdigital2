"use client";
import { useEffect, useRef } from "react";
import { projects } from "../data";
import Modal from "./Modal";
import Logo from "./Logo";
import CaseUI from "./CaseUI";

export default function CaseStudy({ project, onProject, onClose }) {
  const dialog = useRef(null),
    close = useRef(null);
  const p = projects[project];
  useEffect(() => {
    if (dialog.current) dialog.current.scrollTop = 0;
    close.current?.focus({ preventScroll: true });
  }, [project]);
  return (
    <Modal
      dialogRef={dialog}
      className="case-dialog"
      id="case-dialog"
      labelledBy="case-title"
      onClose={onClose}
    >
      <header className="dialog-top">
        <Logo link={false} />
        <button
          ref={close}
          className="close-button"
          onClick={onClose}
          aria-label="Close case study"
        >
          Close <span aria-hidden="true">×</span>
        </button>
      </header>
      <div id="case-content">
        <div className="case-wrap">
          <div className="case-head">
            <div>
              <p className="case-label">
                {p.name} · {p.category}
              </p>
              <h2 id="case-title">{p.title}</h2>
            </div>
            <p>{p.subtitle}</p>
          </div>
          <img
            className="case-hero"
            src={`/zenia/${p.image}.webp`}
            alt={p.alt}
            width="1536"
            height="1024"
          />
          <CaseUI project={project} />
          <div className="case-body">
            <dl className="case-facts">
              <div>
                <dt>Client</dt>
                <dd>{p.name}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{p.year}</dd>
              </div>
              <div>
                <dt>Our role</dt>
                <dd>
                  {p.services.map((service) => (
                    <div key={service}>{service}</div>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="case-story">
              <section>
                <h3>The starting point.</h3>
                <p>{p.challenge}</p>
              </section>
              <section>
                <h3>A thoughtful approach.</h3>
                <p>{p.approach}</p>
              </section>
              <section>
                <h3>Built for what’s next.</h3>
                <p>{p.result}</p>
                <div className="case-outcomes">
                  {p.outcomes.map((outcome) => (
                    <span key={outcome}>{outcome}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <button className="case-next" onClick={() => onProject(p.next)}>
            <span>Next project</span>
            <strong>{projects[p.next].name}</strong>
          </button>
        </div>
      </div>
    </Modal>
  );
}
