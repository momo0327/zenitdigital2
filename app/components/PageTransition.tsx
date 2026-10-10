'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      {children}
      {/* The curtains stay mounted at scaleY(0) between transitions. Without
          hiding them at rest they remain painted as a 0-height strip at the
          viewport edges, which shows as a grey band when overscrolling. */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-white z-[100] origin-bottom pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0, transitionEnd: { visibility: "hidden" } }}
        exit={{ scaleY: 1, visibility: "visible" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-white z-[100] origin-top pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transitionEnd: { visibility: "hidden" } }}
        exit={{ scaleY: 0, visibility: "visible" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default PageTransition;
