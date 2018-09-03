import React from "react";
import Link from "gatsby-link";
import styles from '../styles/layout.module.css';
require("prismjs/themes/prism-solarizedlight.css");
import SEO from '../components/SEO';

export default ({ children }) => (
  <div className={styles.bodyContainer}>
    <SEO/>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerText}>
          <Link to="/">
            <h3>Charlie Chapman</h3>
          </Link>
          <div className={styles.betaTag}>beta</div>
        </div>
        <div className={styles.links}>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/about/">About</Link></div>
          <div><Link to="/archive/">Archive</Link></div>
          <div><Link to="/rss.xml">RSS</Link></div>
        </div>
      </div>
    </header>
    <main className={styles.main}>
      <div className={styles.mainContent}>
        {children()}
      </div>
    </main>
    <footer className={styles.footerContainer}>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/about/">About</Link></span>
      <span><Link to="/archive/">Archive</Link></span>
      <span><Link to="/rss.xml">RSS</Link></span>
    </footer>
  </div>
);