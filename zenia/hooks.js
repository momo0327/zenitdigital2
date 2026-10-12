"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);
  return matches;
}

export function usePageVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  return visible;
}

export function useScrollReveal(reducedMotion) {
  useEffect(() => {
    if (reducedMotion || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("motion-ready");
    const elements = document.querySelectorAll(
      ".services .section-heading,.zenia-services-heading,.case-gallery .section-heading,.case-card,.zenia-services-card,.service-columns .service-card,.process-heading,.process-grid article,.faq>div,.footer-invitation,.footer-directory>div,.footer-directory>nav",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -25px 0px" },
    );
    elements.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty(
        "--reveal-delay",
        `${element.matches(".service-card,.zenia-services-card,.process-grid article") ? (index % 3) * 85 : 0}ms`,
      );
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      elements.forEach((element) => element.removeAttribute("data-reveal"));
    };
  }, [reducedMotion]);
}
