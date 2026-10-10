import styles from './ProgressIndicator2.module.css';

interface ProgressIndicator2Props {
  count: number;
  active: number;
  onSelect: (index: number) => void;
}

const ProgressIndicator2 = ({ count, active, onSelect }: ProgressIndicator2Props) => {
  return (
    <div className={styles.dots}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Visa projekt ${i + 1}`}
          aria-current={i === active}
          onClick={() => onSelect(i)}
          className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator2;
