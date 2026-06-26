import styles from "./Solution.module.css";

const items = [
  {
    icon: "📣",
    title: "Smart Campaign Optimization",
    text: "Automate and enhance your marketing campaigns with AI-powered tools for maximum efficiency and ROI.",
  },
  {
    icon: "📊",
    title: "Real-Time Data & Insights",
    text: "Gain instant access to key marketing metrics, track engagement, and make data-driven decisions effortlessly.",
  },
  {
    icon: "🎯",
    title: "Advanced Audience Targeting",
    text: "Deliver personalized messages to the right audience with precision segmentation and behavioral analytics.",
  },
];

export default function Solution() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Welcome to PasarMarketing</span>
        <h2 className={styles.heading}>
          The Ultimate
          <br />
          Digital Marketing Solution
        </h2>
        <p className={styles.sub}>
          Enhance your marketing strategy with automation, real-time
          insights, and advanced targeting—all in one seamless platform.
        </p>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.icon} aria-hidden>
                {item.icon}
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
