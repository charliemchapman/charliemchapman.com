import React from "react";
import Link from "gatsby-link";
import Layout from '../components/layout'
import styles from '../styles/about.module.css';

export default ({data}) => (
  <Layout>
    <div>
      <h1>Labs</h1>
      <ul>
          <li>
            <Link to="/labs/arQuickLook">AR Quick Look</Link>
          </li>
      </ul>
    </div>
  </Layout>
);
