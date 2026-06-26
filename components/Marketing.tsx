const marketingChannels = [
  {
    metric: "SEO",
    title: "Search Visibility",
    text: "Improve technical structure, keywords, content, and reporting so the right customers can find you.",
  },
  {
    metric: "SMM",
    title: "Social Media Growth",
    text: "Plan posts, visuals, campaigns, and engagement across the channels where your audience already spends time.",
  },
  {
    metric: "ADS",
    title: "Campaign Support",
    text: "Launch smarter paid campaigns with clear creative, targeting, testing, and performance feedback loops.",
  },
];

export default function Marketing() {
  return (
    <section id="marketing" className="marketing-section">
      <div className="container marketing-inner">
        <div className="marketing-copy">
          <span className="eyebrow">Marketing</span>
          <h2 className="marketing-heading">Grow After You Launch</h2>
          <p className="marketing-sub">
            Build momentum with SEO, social media, content, and campaign support
            that connects your product to the people most likely to buy.
          </p>
          <a href="/?pricing=Growth#pricing" className="marketing-btn">
            View Growth Packages
          </a>
        </div>

        <div className="marketing-grid" aria-label="Marketing services">
          {marketingChannels.map((channel) => (
            <article key={channel.title} className="marketing-card">
              <span className="marketing-metric">{channel.metric}</span>
              <h3 className="marketing-card-title">{channel.title}</h3>
              <p className="marketing-card-text">{channel.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
