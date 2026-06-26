import DashboardPreview from "@/components/DashboardPreview";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <span className="eyebrow">Welcome to AGENTCLI Studio</span>

        <h1 className="hero-heading">
          Build Your Next
          <br />
          <span className="gradientText">SaaS, Website, or App</span>
        </h1>

        <p className="hero-sub">
          Launch production-ready websites, SaaS platforms, mobile apps,
          brand visuals, SEO campaigns, social content, 3D assets, and animations
          with one flexible digital team.
        </p>

        <div className="hero-actions-row">
          <a href="#pricing" className="hero-ghost-btn">
            View Packages
          </a>
          <a href="#contact" className="hero-primary-btn">
            Start a Project
          </a>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}
