
const items = [
  {
    icon: "⚙️",
    title: "Custom SaaS & Product Builds",
    text: "Turn your workflow, marketplace, dashboard, or client portal into a polished product your users can rely on.",
  },
  {
    icon: "🧩",
    title: "Websites, Apps & Integrations",
    text: "Connect design, frontend, backend, payments, authentication, and content management into one reliable launch.",
  },
  {
    icon: "🚀",
    title: "Creative Growth Support",
    text: "Support your launch with SEO, social media, animation, graphic design, 3D assets, and conversion-focused content.",
  },
];

export default function Solution() {
  return (
    <section className="solution-section">
      <div className="container solution-inner">
        <span className="eyebrow">What we build</span>
        <h2 className="solution-heading">
          One Team for
          <br />
          SaaS and More
        </h2>
        <p className="solution-sub">
          Bring your product, brand, and launch channels together with a
          practical team that can design, build, ship, and improve the full
          digital experience.
        </p>

        <div className="solution-grid">
          {items.map((item) => (
            <div key={item.title} className="solution-card">
              <span className="solution-icon" aria-hidden>
                {item.icon}
              </span>
              <h3 className="solution-card-title">{item.title}</h3>
              <p className="solution-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
