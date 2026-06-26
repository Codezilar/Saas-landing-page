
const tagsRowOne = ["SaaS", "Websites", "Mobile Apps", "Automation"];
const tagsRowTwo = ["Branding", "SEO", "Social Media", "3D & Animation"];

const insightBars = [55, 70, 40, 85, 60, 35];
const insightLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container features-inner">
        <span className="eyebrow">Features</span>
        <h2 className="features-heading">Everything You Need to Launch Online</h2>
        <p className="features-sub">
          Plan, design, develop, publish, and grow digital products with clear
          milestones and a dashboard-style workflow.
        </p>

        <div className="features-grid">
          <div className="features-card">
            <div className="features-stat-head">
              <p className="features-stat-label">Projects shipped</p>
              <span aria-hidden>⋯</span>
            </div>
            <p className="features-stat-value">$12,199</p>
            <p className="features-stat-trend">Last week ↗ 0.8%</p>

            <h3 className="features-card-title">Track Every Build at a Glance</h3>
            <p className="features-card-text">
              Follow deliverables, timelines, revisions, and launch tasks from
              first idea to final handoff.
            </p>
          </div>

          <div className="features-card">
            <div className="features-chart-head">
              <h3 className="features-card-title">Live Product Progress</h3>
              <p className="features-card-text">
                Keep visibility across design, development, content, SEO, and
                creative work as your project moves forward.
              </p>
            </div>

            <div className="features-wave-head">
              <span className="features-stat-label">Active tasks</span>
              <span className="features-stat-value-small">
                1,027 <span className="features-trend-up">↗ 0.3%</span>
              </span>
            </div>
            <svg
              viewBox="0 0 280 80"
              className="features-wave"
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
            <div className="features-wave-ticks">
              {["10:00", "13:00", "16:00", "19:00", "22:00"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="features-card">
            <div className="features-chart-head">
              <h3 className="features-card-title">Clear Insights for Better Decisions</h3>
              <p className="features-card-text">
                Compare milestones, scope, content, and growth metrics so every
                launch decision has context.
              </p>
            </div>

            <div className="features-chart-head-row">
              <div>
                <p className="features-stat-label">Delivery Overview</p>
                <p className="features-stat-sub">Milestones</p>
              </div>
              <span className="features-chip">Last 6 Months</span>
            </div>

            <div className="features-bars">
              {insightBars.map((h, i) => (
                <div key={i} className="features-bar-col">
                  <span className="features-bar" style={{ height: `${h}%` }} />
                  <span className="features-bar-label">{insightLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="features-card">
            <div className="features-donut-row">
              <p className="features-card-title">Service Mix</p>
            </div>
            <div className="features-donut-body">
              <div className="features-donut" aria-hidden>
                <span className="features-donut-value">12,563</span>
              </div>
              <ul className="features-donut-legend">
                <li>
                  <span className="features-legend-dot-a" /> SaaS <b>3,678</b>
                </li>
                <li>
                  <span className="features-legend-dot-b" /> Web <b>3,250</b>
                </li>
                <li>
                  <span className="features-legend-dot-c" /> Apps <b>2,641</b>
                </li>
                <li>
                  <span className="features-legend-dot-d" /> Growth <b>1,234</b>
                </li>
              </ul>
            </div>
            <h3 className="features-card-title">Product Delivery in One View</h3>
            <p className="features-card-text">
              See the work across strategy, design, development, creative, and
              promotion without losing the big picture.
            </p>
          </div>
        </div>

        <div className="features-tags-row">
          {tagsRowOne.map((t) => (
            <span key={t} className="features-tag">
              ◆ {t}
            </span>
          ))}
        </div>
        <div className="features-tags-row">
          {tagsRowTwo.map((t) => (
            <span key={t} className="features-tag">
              ◆ {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
