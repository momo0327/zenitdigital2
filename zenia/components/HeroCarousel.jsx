"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { projects, sliderKeys } from "../constants/projects";
import { usePageVisible } from "../hooks";
import "../hero-cards.css";

// Slide copy is stored one line per string; desktop breaks between lines, and
// the space keeps words apart on mobile, where the breaks are hidden.
function lines(text) {
  return text.map((line, index) => (
    <Fragment key={line}>
      {index > 0 && (
        <>
          {" "}
          <br />
        </>
      )}
      {line}
    </Fragment>
  ));
}
export function MotionIcon() {
  return (
    <>
      <svg className="pause-icon" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M7 5v10M13 5v10" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="play-icon" viewBox="0 0 20 20" aria-hidden="true">
        <path d="m7 4 9 6-9 6z" fill="currentColor" />
      </svg>
    </>
  );
}
export default function HeroCarousel({ onProject, reducedMotion, blocked }) {
  const [active, setActive] = useState(0),
    [paused, setPaused] = useState(reducedMotion);
  const [hovered, setHovered] = useState(false),
    [focused, setFocused] = useState(false),
    [announcement, setAnnouncement] = useState("");
  const visible = usePageVisible(),
    touch = useRef(null);
  useEffect(() => setPaused(reducedMotion), [reducedMotion]);
  useEffect(() => {
    if (paused || reducedMotion || hovered || focused || blocked || !visible)
      return;
    const timer = setInterval(
      () => setActive((index) => (index + 1) % sliderKeys.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [paused, reducedMotion, hovered, focused, blocked, visible]);
  function select(index) {
    setActive(index);
    setPaused(true);
    setAnnouncement(
      `${projects[sliderKeys[index]].name}. ${projects[sliderKeys[index]].category}.`,
    );
  }
  return (
    <section
      className="work container"
      id="work"
      aria-label="Selected work"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div
        className="showcase showcase-editorial"
        aria-roledescription="carousel"
        aria-label="Selected projects"
        onTouchStart={(event) => {
          touch.current = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY,
          };
        }}
        onTouchEnd={(event) => {
          if (!touch.current) return;
          const dx = event.changedTouches[0].clientX - touch.current.x,
            dy = event.changedTouches[0].clientY - touch.current.y;
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5)
            select(
              (active + (dx < 0 ? 1 : sliderKeys.length - 1)) %
                sliderKeys.length,
            );
          touch.current = null;
        }}
      >
        {sliderKeys.map((key, index) => (
          <div
            key={key}
            className={`showcase-slide slide-${key}${index === active ? " active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${sliderKeys.length}: ${projects[key].name}`}
            inert={index !== active}
            aria-hidden={index !== active}
          >
            <div className="slide-copy">
              <div className="slide-topline">
                <span
                  className={`project-brand${key === "form" ? " form-brand" : ""}`}
                >
                  {key}
                </span>
                <div className="slide-tags">
                  <span>{projects[key].slide.tag}</span>
                  <span>Concept</span>
                </div>
              </div>
              <h2>{lines(projects[key].slide.title)}</h2>
              <p>{lines(projects[key].slide.description)}</p>
              <button
                className="button button-white"
                onClick={() => onProject(key)}
                tabIndex={index === active ? 0 : -1}
              >
                Explore the project
              </button>
            </div>
            <div className="slide-media">
              <img
                src={`/zenia/${projects[key].heroImage || `hero-${key}`}.webp`}
                alt={projects[key].alt}
                width="1536"
                height="1024"
                fetchPriority={index === 0 ? "high" : "auto"}
                // Keeps the hidden slides out of the preload scanner, so the
                // first slide is not competing with them for bandwidth.
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="showcase-controls">
        <p id="project-category">{projects[sliderKeys[active]].category}</p>
        <div
          className="project-selector"
          role="group"
          aria-label="Choose a project"
        >
          {sliderKeys.map((key, index) => (
            <button
              key={key}
              className={index === active ? "selected" : ""}
              aria-pressed={index === active}
              onClick={() => select(index)}
            >
              {projects[key].name}
            </button>
          ))}
        </div>
        <button
          className={`motion-button${paused || reducedMotion ? " is-paused" : ""}`}
          aria-label={
            reducedMotion
              ? "Show next project"
              : paused
                ? "Play project slideshow"
                : "Pause project slideshow"
          }
          onClick={() =>
            reducedMotion
              ? select((active + 1) % sliderKeys.length)
              : setPaused(!paused)
          }
        >
          <MotionIcon />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </section>
  );
}
