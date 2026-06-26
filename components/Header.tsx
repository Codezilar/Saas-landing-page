import ThemeToggle from "@/components/ThemeToggle";
import styles from "./Header.module.css";

const links = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Faq", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark} aria-hidden />
          <span>
            Pasar Marketing
            <span className={styles.logoSub}>Company X</span>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href="#contact" className={styles.cta}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
