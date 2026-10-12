'use client'
import React from 'react';
import ScrollTextReveal from '../ScrollTextReveal';
import styles from './Statement2.module.css';

const STATEMENT =
  'Skapa appar och digitala tjänster människor älskar och företag växer med.';

const WORDS = STATEMENT.split(' ');

const Statement2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.statement}>
          <ScrollTextReveal
            highlightColor="#021100"
            dimColor="rgba(2, 17, 0, 0.2)"
            start="top 95%"
            end="top -10%"
          >
            {WORDS.map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                <span style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
                  {word.split('').map((letter, letterIndex) => (
                    <span key={letterIndex} className="reveal-word">
                      {letter}
                    </span>
                  ))}
                </span>
                {wordIndex < WORDS.length - 1 ? ' ' : ''}
              </React.Fragment>
            ))}
          </ScrollTextReveal>
        </div>
      </div>
    </section>
  );
};

export default Statement2;
