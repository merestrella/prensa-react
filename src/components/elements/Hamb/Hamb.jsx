import styles from "./hamb.module.css";

export const Hamb = () => {
  return (
    <>
      <div className={styles.hamb}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </>
  );
};
