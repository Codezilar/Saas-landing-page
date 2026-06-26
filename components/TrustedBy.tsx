
const brands = [
  "Instagram",
  "Shopify",
  "HubSpot",
  "CNBC",
  "Business Insider",
  "Stripe",
];

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="container trusted-inner">
        <span className="eyebrow">Interested</span>
        <h2 className="trusted-heading">Trusted by 300+ businesses</h2>

        <div className="trusted-logos">
          {brands.map((brand) => (
            <span key={brand} className="trusted-logo">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
