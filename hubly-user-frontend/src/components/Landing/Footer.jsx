import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/logo.svg";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>

      {/* LEFT LOGO */}
      <div className={styles.footerLeft}>
        <img src={Logo} alt="Hubly" className={styles.footerLogo}/>
      </div>

      {/* GRID LINKS */}
      <div className={styles.footerGrid}>

        <div className={styles.footerCol}>
          <h4>Product</h4>
          <a>Universal checkout</a>
          <a>Payment workflows</a>
          <a>Observability</a>
          <a>UpliftAI</a>
          <a>Apps & integrations</a>
        </div>

        <div className={styles.footerCol}>
          <h4>Why Primer</h4>
          <a>Expand to new markets</a>
          <a>Boost payment success</a>
          <a>Improve conversion rates</a>
          <a>Reduce payments fraud</a>
          <a>Recover revenue</a>
        </div>

        <div className={styles.footerCol}>
          <h4>Developers</h4>
          <a>Primer Docs</a>
          <a>API Reference</a>
          <a>Payment methods guide</a>
          <a>Service status</a>
          <a>Community</a>
        </div>

        <div className={styles.footerCol}>
          <h4>Resources</h4>
          <a>Blog</a>
          <a>Success stories</a>
          <a>News room</a>
          <a>Terms</a>
          <a>Privacy</a>
        </div>

        <div className={styles.footerCol}>
          <h4>Company</h4>
          <a>Careers</a>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className={styles.footerBottom}>
        <div className={styles.socials}>
          <span className={styles.social}>✉️</span>
          <span className={styles.social}>in</span>
          <span className={styles.social}>🐦</span>
          <span className={styles.social}>▶</span>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Hubly — All rights reserved
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
