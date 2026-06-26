
const columns = [
  {
    title: "Services",
    links: ["SaaS Builds", "Websites", "Mobile Apps"],
  },
  {
    title: "Creative",
    links: ["Graphic Design", "Animation", "3D Modelling"],
  },
  {
    title: "Growth",
    links: ["SEO", "Social Media", "Support"],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#top" className="footer-logo">
              <span className="footer-logo-mark" aria-hidden />
              AGENTCLI
            </a>
            <div className="footer-social">
              <span aria-hidden>◎</span>
              <span aria-hidden>𝕏</span>
              <span aria-hidden>in</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <p className="footer-col-title">{col.title}</p>
              {col.links.map((link) => (
                <a key={link} href="#" className="footer-col-link">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
          <p>AGENTCLI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
