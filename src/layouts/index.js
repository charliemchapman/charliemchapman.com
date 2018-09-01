import React from "react";
import Link from "gatsby-link";
import styles from '../styles/layout.module.css';
require("prismjs/themes/prism-solarizedlight.css");
import SEO from '../components/SEO';

export default ({ children }) => (
  <div>
    <SEO/>
    <header className={styles.headerContainer}>
      <div className={styles.headerText}>
        <Link to="/">
          <h3>Charlie Chapman</h3>
        </Link>
      </div>
      <div className={styles.links}>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about/">About</Link></div>
        <div><Link to="/projects/">Projects</Link></div>
        <div><Link to="/rss.xml">RSS</Link></div>
      </div>
    </header>
    <main className={styles.main}>
      <div className={styles.mainContent}>
        {children()}
      </div>
    </main>
  </div>
);