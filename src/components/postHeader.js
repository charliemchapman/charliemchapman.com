import React from "react";
import Link from "gatsby-link";
import styles from '../styles/post.module.css';

export default ({title, slug, date, html}) => (
  <div className={styles.postContent}>
      <h1 className={styles.postTitle}>
        <Link to={slug}>
          {title}
        </Link>
      </h1>
    <div className={styles.postDate}>{date}</div>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);