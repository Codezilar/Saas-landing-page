import styles from "./TrustedBy.module.css";

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
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Interested</span>
        <h2 className={styles.heading}>Trusted by 300+ businesses</h2>

        <div className={styles.logos}>
          {brands.map((brand) => (
            <span key={brand} className={styles.logo}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
