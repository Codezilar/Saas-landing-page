import DashboardPreview from "@/components/DashboardPreview";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Welcome to PasarMarketing</span>

        <h1 className={styles.heading}>
          Optimize Your
          <br />
          <span className="gradientText">Digital Marketing Strategy</span>
        </h1>

        <p className={styles.sub}>
          Track campaign performance, analyze key metrics, and make
          data-driven decisions with an intuitive dashboard.
        </p>

        <div className={styles.actionsRow}>
          <a href="#features" className={styles.ghostBtn}>
            Explore Features
          </a>
          <a href="#contact" className={styles.primaryBtn}>
            Try for free Now
          </a>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}
