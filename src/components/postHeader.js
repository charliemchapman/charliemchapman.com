import React from "react";
import Link from "gatsby-link";
import styles from '../styles/post.module.css';

export default ({title, slug, date, html}) => (
  <div className={styles.postContent}>
    <Link to={slug}>
        <h1 className={styles.postTitle}>
            {title}
        </h1>
    </Link>
    <div className={styles.postDate}>{date}</div>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);