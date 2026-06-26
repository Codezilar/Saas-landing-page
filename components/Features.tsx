import styles from "./Features.module.css";

const tagsRowOne = ["Optimization", "Performance", "Analytics", "Marketing"];
const tagsRowTwo = ["Advertising", "Campaigns", "Growth"];

const insightBars = [55, 70, 40, 85, 60, 35];
const insightLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Features</span>
        <h2 className={styles.heading}>All you need to do bussiness</h2>
        <p className={styles.sub}>
          Track campaign performance, analyze key metrics, and make
          data-driven decisions—all in one intuitive dashboard.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.statHead}>
              <p className={styles.statLabel}>Delivered</p>
              <span aria-hidden>⋯</span>
            </div>
            <p className={styles.statValue}>$12,199</p>
            <p className={styles.statTrend}>Last week ↗ 0.8%</p>

            <h3 className={styles.cardTitle}>Track Performance at a Glance</h3>
            <p className={styles.cardText}>
              Monitor key metrics in real time and make data-driven decisions
              with ease.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.chartHead}>
              <h3 className={styles.cardTitle}>Real-Time Analytics</h3>
              <p className={styles.cardText}>
                Gain instant insights into customer behavior and campaign
                performance, enabling you to optimize strategies on the go.
              </p>
            </div>

            <div className={styles.waveHead}>
              <span className={styles.statLabel}>Real-time customers</span>
              <span className={styles.statValueSmall}>
                1,027 <span className={styles.trendUp}>↗ 0.3%</span>
              </span>
            </div>
            <svg
              viewBox="0 0 280 80"
              className={styles.wave}
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0,55 C20,30 40,65 60,40 C80,20 100,60 120,35 C140,15 160,55 180,30 C200,10 220,50 240,28 C255,15 270,40 280,25"
                fill="none"
                stroke="var(--accent-b)"
                strokeWidth="2.5"
              />
            </svg>
            <div className={styles.waveTicks}>
              {["10:00", "13:00", "16:00", "19:00", "22:00"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.chartHead}>
              <h3 className={styles.cardTitle}>Data Insights for Smarter Decisions</h3>
              <p className={styles.cardText}>
                Leverage in-depth analytics to uncover trends, optimize
                performance, and drive better business outcomes with
                confidence.
              </p>
            </div>

            <div className={styles.chartHeadRow}>
              <div>
                <p className={styles.statLabel}>Performance Overview</p>
                <p className={styles.statSub}>Statistics</p>
              </div>
              <span className={styles.chip}>Last 6 Months</span>
            </div>

            <div className={styles.bars}>
              {insightBars.map((h, i) => (
                <div key={i} className={styles.barCol}>
                  <span className={styles.bar} style={{ height: `${h}%` }} />
                  <span className={styles.barLabel}>{insightLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.donutRow}>
              <p className={styles.cardTitle}>Platform Statistic</p>
            </div>
            <div className={styles.donutBody}>
              <div className={styles.donut} aria-hidden>
                <span className={styles.donutValue}>12,563</span>
              </div>
              <ul className={styles.donutLegend}>
                <li>
                  <span className={styles.legendDotA} /> Views <b>3,678</b>
                </li>
                <li>
                  <span className={styles.legendDotB} /> Sales <b>3,250</b>
                </li>
                <li>
                  <span className={styles.legendDotC} /> Clicks <b>2,641</b>
                </li>
                <li>
                  <span className={styles.legendDotD} /> Likes <b>1,234</b>
                </li>
              </ul>
            </div>
            <h3 className={styles.cardTitle}>Campaign Performance in One View</h3>
            <p className={styles.cardText}>
              Track key metrics and trends in real time from a single
              dashboard.
            </p>
          </div>
        </div>

        <div className={styles.tagsRow}>
          {tagsRowOne.map((t) => (
            <span key={t} className={styles.tag}>
              ◆ {t}
            </span>
          ))}
        </div>
        <div className={styles.tagsRow}>
          {tagsRowTwo.map((t) => (
            <span key={t} className={styles.tag}>
              ◆ {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
