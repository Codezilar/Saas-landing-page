
export default function Help() {
  return (
    <section id="contact" className="help-section">
      <div className="container help-inner">
        <span className="eyebrow">Contact</span>
        <h2 className="help-heading">Ready to build something?</h2>
        <p className="help-sub">
          Talk to us about your SaaS idea, website, app, design, animation,
          3D, SEO, or social media package.
        </p>

        <div className="help-grid">
          <div className="help-card">
            <span className="help-icon" aria-hidden>
              🎧
            </span>
            <h3 className="help-card-title">Project Support</h3>
            <p className="help-card-text">
              Get help choosing a package, clarifying scope, or planning the
              next release of your product.
            </p>
            <button type="button" className="help-btn">
              Support Center
            </button>
          </div>

          <div className="help-card">
            <span className="help-icon" aria-hidden>
              📞
            </span>
            <h3 className="help-card-title">Sales</h3>
            <p className="help-card-text">
              Share your goals and get a practical path for launching your
              SaaS, website, mobile app, or creative campaign.
            </p>
            <button type="button" className="help-btn">
              Chat Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
