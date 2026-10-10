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
}) {
  const ownRef = useRef(null);
  const ref = dialogRef || ownRef;
  useEffect(() => {
    const dialog = ref.current;
    const trigger = document.activeElement;
    if (!dialog.open) dialog.showModal();
    return () => {
      dialog.close();
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [ref]);
  return (
    <dialog
      ref={ref}
      id={id}
      className={className}
      style={style}
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
