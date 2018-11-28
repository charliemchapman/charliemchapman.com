import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import styles from '../styles/post.module.css';

export default ({data}) => (
  <div className={styles.postFooter}>
      <a className={styles.twitterFollow} href="https://twitter.com/chuckyc17">
        <img className={styles.twitterFollowImg} src="https://avatars.io/twitter/chuckyc17/medium"/>
        <div>Twitter: @chuckyc17</div>
      </a>
  </div>
);