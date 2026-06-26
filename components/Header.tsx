import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Home", href: "#top" },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Marketing", href: "#marketing" },
  { label: "Faq", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="header-logo">
          <span className="header-logo-mark" aria-hidden />
          <span>
            AGENTCLI
            <span className="header-logo-sub">Company X</span>
          </span>
        </a>

        <nav className="header-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="header-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a href="#contact" className="header-cta">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
