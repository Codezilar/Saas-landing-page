
const stats = [
  { label: "Projects Live", value: "48", trend: "12%", up: true },
  { label: "Build Tasks", value: "126", trend: "4%", up: false },
  { label: "Campaign Leads", value: "2.4k", trend: "18%", up: true },
  { label: "Launch Revenue", value: "$41k", trend: "9%", up: true },
];

const bars = [42, 58, 36, 74, 52, 68, 46];

const services = [
  { name: "SaaS Builds", value: "18 active scopes", percent: "94%" },
  { name: "Web Launches", value: "24 pages in review", percent: "88%" },
  { name: "Growth Campaigns", value: "12 live channels", percent: "91%" },
];

const sidebarLinks = [
  { label: "Launch Hub", active: true },
  { label: "SaaS Builds", active: false },
  { label: "Websites", active: false },
  { label: "Creative Assets", active: false },
  { label: "Growth Plans", active: false },
  { label: "Client Support", active: false },
];

export default function DashboardPreview() {
  return (
    <div className="dashboard-frame">
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar-brand">
          <span className="dashboard-sidebar-dot" />
          AGENTCLI
        </div>
        <p className="dashboard-sidebar-group">Delivery</p>
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
        <p className="dashboard-sidebar-group">Growth</p>
        <nav className="dashboard-sidebar-nav">
          <span className="dashboard-sidebar-link">SEO Reports</span>
          <span className="dashboard-sidebar-link">Social Content</span>
        </nav>
      </div>

      <div className="dashboard-panel">
        <div className="dashboard-panel-head">
          <div>
            <h3 className="dashboard-panel-title">Launch Dashboard</h3>
            <p className="dashboard-panel-sub">
              Product builds, creative work, and growth activity in one view
            </p>
          </div>
          <div className="dashboard-panel-controls">
            <span className="dashboard-chip">Sprint 04</span>
            <span className="dashboard-chip">Launch view</span>
            <span className="dashboard-chip">Filter</span>
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
                This week {s.up ? "↗" : "↘"} {s.trend}
              </p>
            </div>
          ))}
        </div>

        <div className="dashboard-bottom-row">
          <div className="dashboard-chart-card">
            <div className="dashboard-chart-head">
              <div>
                <p className="dashboard-chart-title">Delivery Momentum</p>
                <p className="dashboard-chart-sub">Build and growth progress</p>
              </div>
              <span className="dashboard-chip">Last 7 sprints</span>
            </div>
            <div className="dashboard-legend-row">
              <span className="dashboard-legend-item">
                <i className="dashboard-legend-dot-primary" /> Completed work
              </span>
              <span className="dashboard-legend-item">
                <i className="dashboard-legend-dot-muted" /> Planned scope
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
            <p className="dashboard-chart-title">Active Service Tracks</p>
            <ul className="dashboard-seller-list">
              {services.map((service) => (
                <li key={service.name} className="dashboard-seller-row">
                  <span className="dashboard-seller-flag" aria-hidden />
                  <span className="dashboard-seller-name">
                    {service.name}
                    <span className="dashboard-seller-value">{service.value}</span>
                  </span>
                  <span className="dashboard-seller-percent">{service.percent}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
