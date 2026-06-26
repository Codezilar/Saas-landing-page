
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
    <div className="dashboard-frame">
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar-brand">
          <span className="dashboard-sidebar-dot" />
          Pasar Marketing
        </div>
        <p className="dashboard-sidebar-group">Administration</p>
        <nav className="dashboard-sidebar-nav">
          {sidebarLinks.map((item) => (
            <span
              key={item.label}
              className={`dashboard-sidebar-link ${
                item.active ? "dashboard-sidebar-link-active" : ""
              }`}
            >
              {item.label}
            </span>
          ))}
        </nav>
        <p className="dashboard-sidebar-group">Insights</p>
        <nav className="dashboard-sidebar-nav">
          <span className="dashboard-sidebar-link">Notifications</span>
          <span className="dashboard-sidebar-link">Messages</span>
        </nav>
      </div>

      <div className="dashboard-panel">
        <div className="dashboard-panel-head">
          <div>
            <h3 className="dashboard-panel-title">Dashboard</h3>
            <p className="dashboard-panel-sub">
              Here is today&apos;s report and performance
            </p>
          </div>
          <div className="dashboard-panel-controls">
            <span className="dashboard-chip">Jan 20 - Jan 31</span>
            <span className="dashboard-chip">Monthly ⌄</span>
            <span className="dashboard-chip">⏚ Filter</span>
          </div>
        </div>

        <div className="dashboard-stats-row">
          {stats.map((s) => (
            <div key={s.label} className="dashboard-stat-card">
              <p className="dashboard-stat-label">{s.label}</p>
              <p className="dashboard-stat-value">{s.value}</p>
              <p
                className={`dashboard-stat-trend ${
                  s.up ? "dashboard-trend-up" : "dashboard-trend-down"
                }`}
              >
                Last week {s.up ? "↗" : "↘"} {s.trend}
              </p>
            </div>
          ))}
        </div>

        <div className="dashboard-bottom-row">
          <div className="dashboard-chart-card">
            <div className="dashboard-chart-head">
              <div>
                <p className="dashboard-chart-title">Performance Overview</p>
                <p className="dashboard-chart-sub">Statistics</p>
              </div>
              <span className="dashboard-chip">Last 6 Months</span>
            </div>
            <div className="dashboard-legend-row">
              <span className="dashboard-legend-item">
                <i className="dashboard-legend-dot-primary" /> Total Subscriber
              </span>
              <span className="dashboard-legend-item">
                <i className="dashboard-legend-dot-muted" /> Total Revenue
              </span>
            </div>
            <div className="dashboard-bars">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="dashboard-bar"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="dashboard-seller-card">
            <p className="dashboard-chart-title">Top Seller by Country</p>
            <ul className="dashboard-seller-list">
              {countries.map((c) => (
                <li key={c.name} className="dashboard-seller-row">
                  <span className="dashboard-seller-flag" aria-hidden />
                  <span className="dashboard-seller-name">
                    {c.name}
                    <span className="dashboard-seller-value">{c.value}</span>
                  </span>
                  <span className="dashboard-seller-percent">92%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
