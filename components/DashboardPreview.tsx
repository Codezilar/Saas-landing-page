import styles from "./DashboardPreview.module.css";

const stats = [
  { label: "Delivered", value: "$12,199", trend: "0.8%", up: true },
  { label: "Opened", value: "$1,510", trend: "0.3%", up: false },
  { label: "Clicked", value: "$12,344", trend: "5.1%", up: true },
  { label: "Subscribe", value: "$41,510", trend: "0.6%", up: true },
];

const bars = [38, 52, 30, 70, 46, 60, 35];

const countries = [
  { name: "Thailand", value: "26,531,212" },
  { name: "Indonesia", value: "15,491,120" },
  { name: "China", value: "11,443,140" },
];

const sidebarLinks = [
  { label: "Dashboard", active: true },
  { label: "Products", active: false },
  { label: "Campaigns", active: false },
  { label: "Manage Customer", active: false },
  { label: "Settings", active: false },
  { label: "Help & Service", active: false },
];

export default function DashboardPreview() {
  return (
    <div className={styles.frame}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <span className={styles.sidebarDot} />
          Pasar Marketing
        </div>
        <p className={styles.sidebarGroup}>Administration</p>
        <nav className={styles.sidebarNav}>
          {sidebarLinks.map((item) => (
            <span
              key={item.label}
              className={`${styles.sidebarLink} ${
                item.active ? styles.sidebarLinkActive : ""
              }`}
            >
              {item.label}
            </span>
          ))}
        </nav>
        <p className={styles.sidebarGroup}>Insights</p>
        <nav className={styles.sidebarNav}>
          <span className={styles.sidebarLink}>Notifications</span>
          <span className={styles.sidebarLink}>Messages</span>
        </nav>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHead}>
          <div>
            <h3 className={styles.panelTitle}>Dashboard</h3>
            <p className={styles.panelSub}>
              Here is today&apos;s report and performance
            </p>
          </div>
          <div className={styles.panelControls}>
            <span className={styles.chip}>Jan 20 - Jan 31</span>
            <span className={styles.chip}>Monthly ⌄</span>
            <span className={styles.chip}>⏚ Filter</span>
          </div>
        </div>

        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <p className={styles.statLabel}>{s.label}</p>
              <p className={styles.statValue}>{s.value}</p>
              <p
                className={`${styles.statTrend} ${
                  s.up ? styles.trendUp : styles.trendDown
                }`}
              >
                Last week {s.up ? "↗" : "↘"} {s.trend}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.chartCard}>
            <div className={styles.chartHead}>
              <div>
                <p className={styles.chartTitle}>Performance Overview</p>
                <p className={styles.chartSub}>Statistics</p>
              </div>
              <span className={styles.chip}>Last 6 Months</span>
            </div>
            <div className={styles.legendRow}>
              <span className={styles.legendItem}>
                <i className={styles.legendDotPrimary} /> Total Subscriber
              </span>
              <span className={styles.legendItem}>
                <i className={styles.legendDotMuted} /> Total Revenue
              </span>
            </div>
            <div className={styles.bars}>
              {bars.map((h, i) => (
                <span
                  key={i}
                  className={styles.bar}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className={styles.sellerCard}>
            <p className={styles.chartTitle}>Top Seller by Country</p>
            <ul className={styles.sellerList}>
              {countries.map((c) => (
                <li key={c.name} className={styles.sellerRow}>
                  <span className={styles.sellerFlag} aria-hidden />
                  <span className={styles.sellerName}>
                    {c.name}
                    <span className={styles.sellerValue}>{c.value}</span>
                  </span>
                  <span className={styles.sellerPercent}>92%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
