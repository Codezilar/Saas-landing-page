"use client";

import { useEffect, useMemo, useState } from "react";
import { pricingCategories, pricingPlans, type PricingCategory } from "@/data/pricingPlans";

function formatCost(cost: string) {
  if (cost === "Custom") {
    return { price: "Custom", unit: "" };
  }

  const [amount, unit] = cost.split("/");
  return {
    price: `$${amount}`,
    unit: unit ? `/${unit}` : "",
  };
}

function isPricingCategory(value: string | null): value is PricingCategory {
  return pricingCategories.includes(value as PricingCategory);
}

function getVisiblePlans(category: PricingCategory) {
  if (category === "All") {
    return pricingPlans;
  }

  return pricingPlans.filter((plan) => plan.category === category);
}

export default function Pricing() {
  const [tab, setTab] = useState<PricingCategory>("All");

  useEffect(() => {
    function syncCategoryFromUrl() {
      const params = new URLSearchParams(window.location.search);
      const requestedCategory = params.get("pricing");

      setTab(isPricingCategory(requestedCategory) ? requestedCategory : "All");
    }

    syncCategoryFromUrl();
    window.addEventListener("popstate", syncCategoryFromUrl);

    return () => {
      window.removeEventListener("popstate", syncCategoryFromUrl);
    };
  }, []);

  const visiblePlans = useMemo(() => getVisiblePlans(tab), [tab]);

  function handleCategoryChange(category: PricingCategory) {
    setTab(category);

    const url = new URL(window.location.href);
    if (category === "All") {
      url.searchParams.delete("pricing");
    } else {
      url.searchParams.set("pricing", category);
    }
    url.hash = "pricing";
    window.history.pushState(null, "", url);
  }

  return (
    <section id="pricing" className="pricing-section">
      <div className="container pricing-inner">
        <span className="eyebrow">Pricing</span>
        <h2 className="pricing-heading">SaaS, Website, Creative, and Growth Packages</h2>
        <p className="pricing-sub">
          Pick the exact build, launch, or growth support your business needs,
          from websites and apps to design, SEO, social media, animation, and 3D work.
        </p>

        <div className="pricing-tabs" role="tablist" aria-label="Pricing categories">
          {pricingCategories.map((category) => (
            <button
              key={category}
              id={`pricing-tab-${category.toLowerCase()}`}
              type="button"
              className={`pricing-tab ${tab === category ? "pricing-tab-active" : ""}`}
              role="tab"
              aria-selected={tab === category}
              aria-controls="pricing-plans"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          id="pricing-plans"
          className="pricing-grid"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${tab.toLowerCase()}`}
        >
          {visiblePlans.map((plan) => {
            const cost = formatCost(plan.cost);

            return (
              <div
                key={plan.title}
                className={`pricing-card ${plan.highlighted ? "pricing-card-highlighted" : ""}`}
              >
                <div className="pricing-card-head">
                  <span className="pricing-dot" aria-hidden />
                  <p className="pricing-card-name">{plan.title}</p>
                </div>

                <p className="pricing-price">
                  {cost.price}
                  {cost.unit && <span className="pricing-price-unit">{cost.unit}</span>}
                </p>
                <p className="pricing-card-desc">{plan.category} service package</p>

                <ul className="pricing-features">
                  {plan.desc.map((feature) => (
                    <li key={feature} className="pricing-feature">
                      <span aria-hidden>✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={plan.highlighted ? "pricing-btn-primary" : "pricing-btn-ghost"}
                >
                  Get started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
