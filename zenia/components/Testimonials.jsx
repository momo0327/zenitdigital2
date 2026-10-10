"use client";
import { useEffect, useRef, useState } from "react";
import { usePageVisible } from "../hooks";
import { MotionIcon } from "./HeroCarousel";

const stories = [
  {
    brand: "hemma",
    name: "Sofia Lind",
    role: "Co-founder, Hemma",
    quote:
      "They understood the feeling we wanted to create, and brought it to life in every little detail.",
  },
  {
    brand: "relay",
    name: "Oliver Berg",
    role: "Founder, Relay",
    quote:
      "Complex on the inside. Simple for our team. Zenia made the whole process feel that way, too.",
  },
  {
    brand: "form",
    name: "Emma Dahl",
    role: "Creative director, Form",
    quote:
      "It feels like us. A thoughtful digital home, built by people who cared as much as we did.",
  },
  {
    brand: "north",
    name: "Jonas Vik",
    role: "Founder, North",
    quote:
      "They found the quiet confidence in our brand, and gave it somewhere to live online.",
  },
  {
    brand: "lumen",
    name: "Ida Møller",
    role: "Product lead, Lumen",
    quote:
      "Clear thinking, start to finish. The work got simpler every time we spoke.",
  },
  {
    brand: "kin",
    name: "Priya Raman",
    role: "Co-founder, Kin",
    quote:
      "They designed for the people actually using it. That changed everything for us.",
  },
];
const duration = 7000;
const count = stories.length;
export default function Testimonials({ reducedMotion, blocked }) {
  const [active, setActive] = useState(0),
    [position, setPosition] = useState(0),
    [elapsed, setElapsed] = useState(0),
    [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(reducedMotion),
    [hovered, setHovered] = useState(false),
    [focused, setFocused] = useState(false),
    [inView, setInView] = useState(false),
    [step, setStep] = useState(0),
    [announcement, setAnnouncement] = useState("");
  const region = useRef(null),
    track = useRef(null),
    touch = useRef(null),
    elapsedRef = useRef(0);
  const pageVisible = usePageVisible();
  useEffect(() => {
    setPaused(reducedMotion);
    setPosition((index) => index % count);
  }, [reducedMotion]);
  useEffect(() => {
    const measure = () => {
      // The ref can be detached during hydration or a route change.
      const el = track.current;
      if (!el || !el.firstElementChild) return;
      const gap = parseFloat(getComputedStyle(el).columnGap) || 24;
      setStep(el.firstElementChild.getBoundingClientRect().width + gap);
      setAnimated(false);
      setPosition((index) => index % count);
    };
    measure();
    const resize =
      "ResizeObserver" in window ? new ResizeObserver(measure) : null;
    if (region.current) resize?.observe(region.current);
    window.addEventListener("resize", measure);
    return () => {
      resize?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.15 },
    );
    if (region.current) observer.observe(region.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || !inView || !pageVisible || blocked)
      return;
    let last = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      elapsedRef.current += Math.min(now - last, 250);
      last = now;
      if (elapsedRef.current >= duration) {
        elapsedRef.current = 0;
        setActive((index) => (index + 1) % count);
        setAnimated(!reducedMotion);
        setPosition((index) => (reducedMotion ? (index + 1) % count : index + 1));
      }
      setElapsed(elapsedRef.current);
    }, 100);
    return () => clearInterval(timer);
  }, [paused, hovered, focused, inView, pageVisible, blocked, reducedMotion]);
  function select(index) {
    setPaused(true);
    setActive(index);
    setPosition(index);
    setAnimated(!reducedMotion);
    elapsedRef.current = 0;
    setElapsed(0);
    setAnnouncement(`${stories[index].brand} testimonial`);
  }
  const transform = {
    transform: `translateX(${-position * step}px)`,
    transition:
      animated && !reducedMotion
        ? "transform 650ms cubic-bezier(.22,.68,0,1)"
        : "none",
  };
  return (
    <section
      className="testimonials section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="section-heading">
          <h2 id="testimonials-title">
            Good work.
            <br />
            Even better company.
          </h2>
          <div>
            <p>Made together. Remembered for the experience.</p>
            <span className="testimonial-disclosure">
              Illustrative testimonials from our concept projects.
            </span>
          </div>
        </div>
        <div
          ref={region}
          className="testimonial-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client stories"
          tabIndex="0"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setFocused(false);
          }}
          onKeyDown={(event) => {
            if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
              event.preventDefault();
              select((active + (event.key === "ArrowRight" ? 1 : count - 1)) % count);
            }
          }}
          onTouchStart={(event) => {
            setHovered(true);
            touch.current = {
              x: event.changedTouches[0].clientX,
              y: event.changedTouches[0].clientY,
            };
          }}
          onTouchEnd={(event) => {
            setHovered(false);
            if (!touch.current) return;
            const dx = event.changedTouches[0].clientX - touch.current.x,
              dy = event.changedTouches[0].clientY - touch.current.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4)
              select((active + (dx < 0 ? 1 : count - 1)) % count);
            touch.current = null;
          }}
          onTouchCancel={() => {
            setHovered(false);
            touch.current = null;
          }}
        >
          <div
            ref={track}
            className="testimonial-track"
            style={transform}
            onTransitionEnd={(event) => {
              if (event.propertyName === "transform" && position === count) {
                setAnimated(false);
                setPosition(0);
              }
            }}
          >
            {[...stories, ...stories].map((story, index) => (
              <article
                key={index}
                className="testimonial-card"
                role="group"
                aria-label={
                  index < count ? `${index + 1} of ${count}: ${story.brand}` : undefined
                }
                aria-roledescription="slide"
                aria-hidden={index >= count ? true : undefined}
                inert={index >= count}
              >
                <img
                  src={`/zenia/testimonial-${story.brand}.webp`}
                  alt=""
                  width="1122"
                  height="1402"
                  loading="lazy"
                />
                <div className="testimonial-card-content">
                  <span
                    className={`testimonial-brand${story.brand === "form" ? " testimonial-brand-form" : ""}`}
                  >
                    {story.brand}
                  </span>
                  <div>
                    <blockquote>“{story.quote}”</blockquote>
                    <p className="testimonial-person">
                      {story.name}
                      <span>{story.role} · Sample quote</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="testimonial-controls">
          <div
            className="testimonial-progress"
            role="group"
            aria-label="Choose a client story"
          >
            {stories.map((story, index) => (
              <button
                key={story.brand}
                className={
                  index === active
                    ? "is-active"
                    : index < active
                      ? "is-past"
                      : ""
                }
                aria-label={`Show ${story.brand} testimonial`}
                aria-pressed={index === active}
                onClick={() => select(index)}
              >
                {index === active ? (
                  <i
                    style={{
                      width: `${Math.min(1, elapsed / duration) * 100}%`,
                    }}
                  />
                ) : null}
              </button>
            ))}
          </div>
          <button
            className={`testimonial-motion motion-button${paused ? " is-paused" : ""}`}
            aria-label={paused ? "Play testimonials" : "Pause testimonials"}
            onClick={() => setPaused(!paused)}
          >
            <MotionIcon />
          </button>
        </div>
        <p className="sr-only" aria-live="polite">
          {announcement}
        </p>
      </div>
    </section>
  );
}
