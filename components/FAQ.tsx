"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "How can this platform improve my marketing strategy?",
    a: "Our platform provides automation, real-time analytics, and advanced targeting tools to help you optimize campaigns, increase engagement, and maximize ROI effortlessly.",
  },
  {
    q: "What integrations does the platform support?",
    a: "Pasar Marketing connects with the tools you already use, including CRMs, ad platforms, and email providers, so your data stays in sync everywhere.",
  },
  {
    q: "Is this platform suitable for small businesses?",
    a: "Yes, the Startup plan is built for small teams that want essential tracking and reporting without a steep learning curve.",
  },
  {
    q: "Do I need technical expertise to use the platform?",
    a: "No coding is required. The dashboard is designed to be intuitive, with guided setup and templates for common campaign types.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">FAQ</span>
        <h2 className={styles.heading}>Frequently Asked Question</h2>
        <p className={styles.sub}>
          Find answers to common questions about our digital marketing
          platform.
        </p>

        <div className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span
                    className={styles.icon}
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && <p className={styles.answer}>{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
