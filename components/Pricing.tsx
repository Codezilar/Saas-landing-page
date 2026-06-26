"use client";

import { useState } from "react";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Startup",
    price: "$60",
    description:
      "For small teams and startups looking to launch and grow efficiently.",
    features: ["Essential campaign tracking", "Basic analytic dashboard", "Email support"],
    cta: "Choose this plan",
    highlighted: false,
  },
  {
    name: "Scaleup",
    price: "$100",
    description:
      "For growing businesses that need advanced insights and automation.",
    features: [
      "Advanced campaign analytics",
      "AI-powered insights",
      "Priority support",
    ],
    cta: "Choose this plan",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For enterprises requiring tailored solutions and full scalability.",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "24/7 premium support",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  const [tab, setTab] = useState<"personal" | "business">("business");

  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Pricing</span>
        <h2 className={styles.heading}>Plans for Every Business Need</h2>
        <p className={styles.sub}>
          Track campaign performance, analyze key metrics, and scale your
          business with the perfect plan.
        </p>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${tab === "personal" ? styles.tabActive : ""}`}
            onClick={() => setTab("personal")}
          >
            Personal
          </button>
          <button
            type="button"
            className={`${styles.tab} ${tab === "business" ? styles.tabActive : ""}`}
            onClick={() => setTab("business")}
          >
            Business
          </button>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.highlighted ? styles.cardHighlighted : ""}`}
            >
              <div className={styles.cardHead}>
                <span className={styles.dot} aria-hidden />
                <p className={styles.cardName}>{plan.name}</p>
              </div>

              <p className={styles.price}>
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className={styles.priceUnit}>/month</span>
                )}
              </p>
              <p className={styles.cardDesc}>{plan.description}</p>

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span aria-hidden>✓</span> {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={
                  plan.highlighted ? styles.btnPrimary : styles.btnGhost
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
