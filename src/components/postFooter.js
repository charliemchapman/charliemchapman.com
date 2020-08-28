import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import styles from '../styles/post.module.css';

export default ({data}) => (
  <div className={styles.postFooter}>
      <a className={styles.twitterFollow} href="https://twitter.com/_chuckyc">
        <img className={styles.twitterFollowImg} src="http://media.charliemchapman.com/charlie-profile.jpg"/>
        <div>Twitter: @_chuckyc</div>
      </a>
  </div>
);