import styles from "./Help.module.css";

export default function Help() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">FAQ</span>
        <h2 className={styles.heading}>Hello, How can we help you</h2>
        <p className={styles.sub}>
          Find answers to common questions about our digital marketing
          platform.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon} aria-hidden>
              🎧
            </span>
            <h3 className={styles.cardTitle}>Customer Support</h3>
            <p className={styles.cardText}>
              Automate and enhance your marketing campaigns with AI-powered
              tools for maximum efficiency and ROI.
            </p>
            <button type="button" className={styles.btn}>
              Support Center
            </button>
          </div>

          <div className={styles.card}>
            <span className={styles.icon} aria-hidden>
              📞
            </span>
            <h3 className={styles.cardTitle}>Sales</h3>
            <p className={styles.cardText}>
              Automate and enhance your marketing campaigns with AI-powered
              tools for maximum efficiency and ROI.
            </p>
            <button type="button" className={styles.btn}>
              Chat Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
