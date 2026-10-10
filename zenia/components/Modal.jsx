"use client";
import { useEffect, useRef } from "react";

export default function Modal({
  children,
  className,
  style,
  id,
  labelledBy,
  onClose,
  dialogRef,
  backdropClose = false,
  onReveal,
}) {
  const ownRef = useRef(null);
  const ref = dialogRef || ownRef;
  const reveal = useRef(onReveal);
  reveal.current = onReveal;
  useEffect(() => {
    const dialog = ref.current;
    const trigger = document.activeElement;
    // Only hand focus back if the trigger was reached by keyboard. Restoring
    // it after a pointer tap leaves a :focus-visible ring on the hamburger or
    // logo, because a programmatic .focus() counts as keyboard-originated —
    // which showed up as a stray outline after closing the menu or routing.
    const restoreFocus = !!trigger?.matches?.(":focus-visible");
    if (!dialog.open) dialog.showModal();
    // showModal() auto-focuses the first tabbable child — here the logo link —
    // and because that is browser-initiated it paints a :focus-visible ring as
    // soon as the menu opens. Park focus on the dialog itself instead: it stays
    // inside the modal for tabbing and screen readers, with nothing ringed.
    if (dialog.contains(document.activeElement)) {
      dialog.focus({ preventScroll: true });
    }
    // The reveal has to be scheduled here, after showModal(). A caller doing
    // this in its own effect would run first (child effects fire before the
    // parent's) and could flip its open state in the same frame the dialog
    // appears, leaving the transition no start state to animate from.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal.current?.();
      return () => {
        dialog.close();
        if (restoreFocus && trigger?.isConnected)
          trigger.focus({ preventScroll: true });
      };
    }
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => reveal.current?.());
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
      dialog.close();
      if (restoreFocus && trigger?.isConnected)
        trigger.focus({ preventScroll: true });
    };
  }, [ref]);
  return (
    <dialog
      ref={ref}
      id={id}
      className={className}
      style={style}
      // Lets focus park on the dialog itself; the outline is suppressed by the
      // [tabindex="-1"]:focus rule in styles.css.
      tabIndex={-1}
      aria-labelledby={labelledBy}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (!backdropClose || event.target !== event.currentTarget) return;
        const { left, right, top, bottom } =
          event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < left ||
          event.clientX > right ||
          event.clientY < top ||
          event.clientY > bottom
        )
          onClose();
      }}
    >
      {children}
    </dialog>
  );
}
