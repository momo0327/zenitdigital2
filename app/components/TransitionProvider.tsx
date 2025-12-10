'use client'
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import PageTransition from './PageTransition';

interface TransitionProviderProps {
  children: React.ReactNode;
}

const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={pathname}>
        {children}
      </PageTransition>
    </AnimatePresence>
  );
};

export default TransitionProvider;
