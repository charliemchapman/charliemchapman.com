import React from "react";
import Link from "gatsby-link";
import styles from '../styles/layout.module.css';

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header className={styles.headerContainer}>
      <div className={styles.headerText}>
        <Link to="/">
          <h3>Charlie Chapman</h3>
        </Link>
      </div>
      <div className={styles.links}>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about/">About</Link></div>
        <div><Link to="/archive/">Archive</Link></div>
      </div>
    </header>
    {children()}
  </div>
);