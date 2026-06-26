"use client";

import { useState } from "react";

const plans = [
  {
    title: "Basic Website",
    cost: "180",
    category: "Websites",
    desc: [
      "Customized website design (5 pages or more)",
      "Mobile responsive design",
      "User-friendly content management system",
      "Basic SEO optimization",
      "24/7 technical support",
    ],
  },
  {
    title: "Professional Website",
    cost: "350",
    category: "Websites",
    highlighted: true,
    desc: [
      "Customized website design (10 pages or more)",
      "Mobile responsive design",
      "Enhanced SEO optimization",
      "Integration of social media platforms",
      "E-commerce functionality",
      "24/7 technical support",
    ],
  },
  {
    title: "Premium Website",
    cost: "699.99",
    category: "Websites",
    desc: [
      "Customized website design (5 pages or more)",
      "Mobile responsive design",
      "Advanced SEO optimization",
      "Integration of social media platforms",
      "E-commerce functionality with secure payment gateways",
      "Blogging and newsletter features",
      "24/7 technical support",
    ],
  },
  {
    title: "Starter Graphic Design",
    cost: "49",
    category: "Creative",
    desc: [
      "Logo design",
      "Business card design",
      "Brochure or flyer design (single-sided)",
      "2 revisions",
      "24/7 customer support",
    ],
  },
  {
    title: "Advanced Graphic Design",
    cost: "199",
    category: "Creative",
    desc: [
      "Logo design",
      "Business card design",
      "Brochure or flyer design (double-sided)",
      "Stationery design (letterhead and envelope)",
      "Social media profile picture and cover design",
      "Unlimited revisions",
      "24/7 customer support",
    ],
  },
  {
    title: "Premium Graphic Design",
    cost: "299",
    category: "Creative",
    desc: [
      "Logo design",
      "Business card design",
      "Brochure or flyer design (double-sided)",
      "Stationery design (letterhead, envelope, and folder)",
      "Social media profile picture and cover design",
      "Packaging design for one product",
      "Unlimited revisions",
      "24/7 customer support",
    ],
  },
  {
    title: "Starter SEO",
    cost: "199/month",
    category: "Growth",
    desc: [
      "Keyword research and analysis",
      "On-page optimization",
      "Monthly SEO audit and reporting",
      "Backlink analysis and building",
      "Up to 10 targeted keywords",
      "24/7 customer support",
    ],
  },
  {
    title: "Advanced SEO",
    cost: "299/month",
    category: "Growth",
    desc: [
      "Keyword research and analysis",
      "On-page optimization and content optimization",
      "Monthly SEO audit and reporting",
      "Backlink analysis and building",
      "Up to 20 targeted keywords",
      "Local SEO optimization",
      "24/7 customer support",
    ],
  },
  {
    title: "Premium SEO",
    cost: "499/month",
    category: "Growth",
    highlighted: true,
    desc: [
      "Comprehensive keyword research and analysis",
      "On-page optimization and content optimization",
      "Monthly SEO audit and reporting",
      "Backlink analysis and building",
      "Up to 30 targeted keywords",
      "Local and national SEO optimization",
      "Social media integration and optimization",
      "24/7 customer support",
    ],
  },
  {
    title: "Basic SMM Package (Starter)",
    cost: "100/month",
    category: "Growth",
    desc: [
      "Platform: 2 social media platforms",
      "Weekly posts: 5",
      "Content creation: Basic graphics and text",
      "Audience Engagement: Limited responses and comments",
      "Monthly analytics report",
    ],
  },
  {
    title: "SMM Growth Package (Mid-Low)",
    cost: "299/month",
    category: "Growth",
    desc: [
      "Platform: 3 social media platforms",
      "Weekly posts: 10",
      "Content creation: Basic graphics and text",
      "Audience engagement: Moderate responses and comment",
      "Monthly analytics report with insights",
      "Basic ad campaign setup",
    ],
  },
  {
    title: "Premium SMM Package (Mid-High)",
    cost: "599/month",
    category: "Growth",
    desc: [
      "Platform: 4 social media platforms",
      "Weekly posts: 15",
      "Content creation: Graphics, text, videos, and animated content",
      "Audience engagement: Active responses and comments",
      "Monthly analytics report with in-depth insights",
      "Advanced ad campaign setup and management",
      "Influencer outreach (if applicable)",
    ],
  },
  {
    title: "Elite SMM Package (High)",
    cost: "1199",
    category: "Growth",
    desc: [
      "Platform: 5 social media platforms",
      "Weekly posts: 20",
      "Content creation: High-quality graphics, text, videos, animations, and interactive content",
      "Audience engagement: Proactive responses, comments, and customer support",
      "Monthly analytics report with detailed insights and recommendations",
      "Advanced ad campaign strategy, A/B testing, and optimization",
      "Influencer outreach and collaboration",
      "Social media contests and giveaways",
    ],
  },
  {
    title: "Basic Animation Package (Low)",
    cost: "300",
    category: "Creative",
    desc: [
      "Duration: Up to 1 minute",
      "Style: Basic 2D animations with simple graphics",
      "Number of revisions: 1",
      "Background music: Basic royalty-free music",
      "Delivery format: MP4",
    ],
  },
  {
    title: "Standard Animation Package (Mid-Low)",
    cost: "600",
    category: "Creative",
    desc: [
      "Duration: Up to 2 minutes",
      "Style: Enhanced 2D animations with more detailed graphics and transitions",
      "Number of revisions: 2",
      "Background music: Customizable royalty-free music",
      "Voiceover: Basic voiceover included",
      "Delivery format: MP4 and AVI",
    ],
  },
  {
    title: "Premium Animation Package (Mid-High)",
    cost: "1000",
    category: "Creative",
    desc: [
      "Duration: Up to 3 minutes",
      "Style: 2D/3D hybrid animations with advanced graphics and effects",
      "Number of revisions: 3",
      "Background music: Customizable premium royalty-free music",
      "Voiceover: Professional voiceover included",
      "Scriptwriting assistance",
      "Delivery format: MP4, AVI, and MOV",
    ],
  },
  {
    title: "Deluxe Animation Package (High)",
    cost: "1500",
    category: "Creative",
    desc: [
      "Duration: Up to 5 minutes",
      "Style: High-end 3D animations with intricate graphics, visual effects, and character animations",
      "Number of revisions: 4",
      "Background music: Customized premium royalty-free music",
      "Voiceover: Professional voiceover with options for multiple languages",
      "Scriptwriting and storyboard creation",
      "Custom illustrations and animations",
      "Delivery format: MP4, AVI, MOV, and high-resolution source files",
    ],
  },
  {
    title: "Ultimate Animation Package (Top-Tier)",
    cost: "Custom",
    category: "Creative",
    desc: [
      "Duration: Up to 5 minutes",
      "Style: Cutting-edge 3D animations with cinematic quality and advanced effects",
      "Number of revisions: Unlimited",
      "Background music: Customized premium royalty-free music and sound design",
      "Voiceover: Professional voiceover with character acting",
      "Comprehensive scriptwriting, storyboard, and concept design",
      "High-level custom animations, characters, and environments",
      "Interactive elements (if applicable)",
    ],
  },
  {
    title: "Basic 3D Modelling Package",
    cost: "299",
    category: "Creative",
    desc: [
      "5 high-quality 3D models",
      "2 revisions per model",
      "Standard file formats (OBJ, FBX)",
      "Delivery within 2 weeks",
      "Email support",
    ],
  },
  {
    title: "Standard 3D Modelling Package",
    cost: "599",
    category: "Creative",
    desc: [
      "10 high-quality 3D models",
      "3 revisions per model",
      "Extended file formats (OBJ, FBX, STL)",
      "Texture mapping and basic materials",
      "Delivery within 3 weeks",
      "Priority email support",
    ],
  },
  {
    title: "Premium 3D Modelling Package",
    cost: "999",
    category: "Creative",
    desc: [
      "20 high-quality 3D models",
      "5 revisions per model",
      "Full range of file formats (OBJ, FBX, STL, BLEND)",
      "Detailed texture mapping and advanced materials",
      "Customized lighting setup",
      "Delivery within 4 weeks",
      "Phone and email support",
    ],
  },
  {
    title: "Basic App Development Package",
    cost: "1,999",
    category: "Apps",
    desc: [
      "Platform: Android or iOS",
      "Up to 5 app screens",
      "Basic functionality implementation",
      "Standard app testing and bug fixing",
      "Delivery within 4 weeks",
      "Email support",
      "Simple UI/UX design",
    ],
  },
  {
    title: "Standard App Development Package",
    cost: "3,999",
    category: "Apps",
    highlighted: true,
    desc: [
      "Platform: Android and iOS (Cross-platform)",
      "Customized UI/UX design",
      "Up to 10 app screens",
      "Moderate functionality implementation",
      "User authentication and data storage",
      "App testing on multiple devices",
      "Delivery within 6 weeks",
      "Priority email support",
    ],
  },
  {
    title: "Premium App Development Package",
    cost: "7,999",
    category: "Apps",
    desc: [
      "Platform: Android and iOS (Native)",
      "High-quality UI/UX design",
      "Unlimited app screens",
      "Advanced functionality implementation",
      "Backend server integration",
      "In-app purchases and payment gateways",
      "Rigorous app testing, performance optimization",
      "Delivery within 8 weeks",
      "Phone and email support",
    ],
  },
];

const categories = ["All", "Websites", "Apps", "Creative", "Growth"] as const;
type Category = (typeof categories)[number];

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

export default function Pricing() {
  const [tab, setTab] = useState<Category>("All");
  const visiblePlans =
    tab === "All" ? plans : plans.filter((plan) => plan.category === tab);

  return (
    <section id="pricing" className="pricing-section">
      <div className="container pricing-inner">
        <span className="eyebrow">Pricing</span>
        <h2 className="pricing-heading">SaaS, Website, Creative, and Growth Packages</h2>
        <p className="pricing-sub">
          Pick the exact build, launch, or growth support your business needs,
          from websites and apps to design, SEO, social media, animation, and 3D work.
        </p>

        <div className="pricing-tabs">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`pricing-tab ${tab === category ? "pricing-tab-active" : ""}`}
              onClick={() => setTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="pricing-grid">
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
