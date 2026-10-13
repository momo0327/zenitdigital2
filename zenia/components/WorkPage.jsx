"use client";

import { useState } from "react";
import { projects } from "../data";
import ContactContainer from "./ContactContainer";
import "./WorkPage.css";

// Card imagery is not in data.js, so it is mapped here. Keys match `projects`.
const CARDS = [
  { key: "hemma", image: "project-6", tagline: "Finding a home, made human." },
  {
    key: "relay",
    image: "project-4",
    tagline: "Bringing every moving part together.",
  },
  { key: "form", image: "project-3", tagline: "A little more room for good design." },
  { key: "modo", image: "hero-modo-ipad", tagline: "Every detail, by design." },
  {
    key: "calyourfriends",
    image: "calyourfriends",
    tagline: "Find the day everyone’s free.",
  },
  { key: "shelfwise", image: "shelfwise", tagline: "Stock control for busy kitchens." },
];

const VIEWS = [
  { id: "grid", label: "Grid" },
  { id: "list", label: "List" },
];

export default function WorkPage({ onProject }) {
  const [view, setView] = useState("grid");

  return (
    <section className="work-page" aria-labelledby="work-page-title">
      <div className="container">
        <div className="work-page__head">
          <h1 id="work-page-title" className="work-page__title">
            Work that we
            <br />
            <span>are proud of</span>
          </h1>

          <div
            className="work-page__views"
            role="group"
            aria-label="Change layout"
          >
            {VIEWS.map((option) => (
              <button
                key={option.id}
                type="button"
                className="work-page__view"
                aria-pressed={view === option.id}
                onClick={() => setView(option.id)}
              >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  {option.id === "grid" ? (
                    <>
                      <rect x="1" y="1" width="6" height="6" rx="1.4" />
                      <rect x="9" y="1" width="6" height="6" rx="1.4" />
                      <rect x="1" y="9" width="6" height="6" rx="1.4" />
                      <rect x="9" y="9" width="6" height="6" rx="1.4" />
                    </>
                  ) : (
                    <>
                      <rect x="1" y="2" width="14" height="3" rx="1.4" />
                      <rect x="1" y="6.5" width="14" height="3" rx="1.4" />
                      <rect x="1" y="11" width="14" height="3" rx="1.4" />
                    </>
                  )}
                </svg>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`work-page__items work-page__items--${view}`}>
          {CARDS.map(({ key, image, tagline }) => {
            const project = projects[key];
            if (!project) return null;
            return (
              <article className="work-card" key={key}>
                <button
                  className="work-card__image"
                  aria-label={`Explore the ${project.name} case study`}
                  onClick={() => onProject(key)}
                >
                  <img
                    src={`/zenia/${image}.webp`}
                    alt=""
                    width="1536"
                    height="1024"
                    loading="lazy"
                  />
                  <span className="work-card__view">Explore project</span>
                </button>
                <div className="work-card__caption">
                  <div>
                    <h2>
                      <button onClick={() => onProject(key)}>
                        {project.name}
                      </button>
                    </h2>
                    <p>{tagline}</p>
                  </div>
                  <span className="work-card__meta">
                    {project.category?.split(" · ")[0]} · {project.label || "Concept"}
                    <span className="work-card__year">{project.year}</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <ContactContainer />
      </div>
    </section>
  );
}
