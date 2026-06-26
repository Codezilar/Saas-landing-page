"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can you build a SaaS product from scratch?",
    a: "Yes. We can help with planning, UI/UX, frontend, backend, authentication, payments, dashboards, integrations, testing, and launch support.",
  },
  {
    q: "Do you only work on SaaS projects?",
    a: "No. We also build websites, mobile apps, graphic design assets, SEO campaigns, social media packages, animations, and 3D models.",
  },
  {
    q: "Which package should a small business start with?",
    a: "Most small businesses start with a website, starter SEO, or starter graphic design package, then add app, social, or animation work as the brand grows.",
  },
  {
    q: "Can I request a custom package?",
    a: "Yes. If the listed packages do not match your scope, we can combine services or create a custom estimate for your product, brand, or launch plan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-inner">
        <span className="eyebrow">FAQ</span>
        <h2 className="faq-heading">Frequently Asked Question</h2>
        <p className="faq-sub">
          Find answers to common questions about our SaaS, website, app, and
          creative service packages.
        </p>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span
                    className="faq-icon"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
