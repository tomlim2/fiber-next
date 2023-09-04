import styles from "./sectionGame.module.scss";

export default function Interface() {
  return (
    <div className={styles.interface}>
      <div className={styles.time}>0.00</div>
      <div className={styles.controls}>
        <div className={styles.raw}>
          <div className={styles.key}></div>
        </div>

        <div className={styles.raw}>
          <div className={styles.key}></div>
          <div className={styles.key}></div>
          <div className={styles.key}></div>
        </div>
        <div className={styles.raw}>
          <div className={styles["key-large"]}></div>
        </div>
      </div>
    </div>
  );
}
