import styles from "./Footer.module.css";

const columns = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing"],
  },
  {
    title: "Company",
    links: ["About Us", "Team", "Careers"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Case Studies", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#top" className={styles.logo}>
              <span className={styles.logoMark} aria-hidden />
              Pasar Marketing
            </a>
            <div className={styles.social}>
              <span aria-hidden>◎</span>
              <span aria-hidden>𝕏</span>
              <span aria-hidden>in</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className={styles.col}>
              <p className={styles.colTitle}>{col.title}</p>
              {col.links.map((link) => (
                <a key={link} href="#" className={styles.colLink}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
          <p>Pasar Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
