"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    label: "client satisfaction rating",
  },
  { prefix: "+", value: 98, suffix: "%", label: "on-time delivery" },
  { prefix: "+", value: 40, suffix: "", label: "products shipped" },
  {
    prefix: "+",
    value: 12,
    suffix: "m",
    label: "people reached through the work we build.",
  },
];
const duration = 1600;
function Stat({ stat, run }) {
  const [shown, setShown] = useState(0);
  const frame = useRef(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // Ease out, so the count slows as it lands on the final figure.
      setShown(stat.value * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [run, stat.value]);
  return (
    <div className="stat">
      <p className="stat-figure">
        {stat.prefix}
        {shown.toFixed(stat.decimals || 0)}
        {stat.suffix && <span>{stat.suffix}</span>}
      </p>
      <p className="stat-label">{stat.label}</p>
    </div>
  );
}
export default function Statement({ reducedMotion }) {
  const section = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (reducedMotion || !("IntersectionObserver" in window)) {
      setRun(true);
      return;
    }
    // One shared trigger so every figure counts up together.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, [reducedMotion]);
  return (
    <section
      ref={section}
      className="statement"
      id="about"
      aria-labelledby="statement-title"
    >
      <div className="container">
        <h2 className="statement-copy" id="statement-title">
          Thoughtful digital, built properly.
          <span> Design and development, under one roof.</span>
        </h2>
        <div className="stat-row">
          {stats.map((stat) => (
            <Stat key={stat.label} stat={stat} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
