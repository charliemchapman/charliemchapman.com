import React from "react";
import Img from "gatsby-image";
import Layout from '../../components/layout'
import styles from '../../styles/about.module.css';

export default ({data}) => (
  <Layout>
    <div>
      <h1>AR Quick Look Demo</h1>
      <a href="/labs/ar/PizzaExperiment.reality" rel="ar">
          <img height="200" width="200" src="/labs/ar/ar-pizza.jpg" />
      </a>
      <div></div>
      <a href="/labs/ar/Donuts.reality" rel="ar">
          <img height="200" width="200" src="/labs/ar/ar-donuts.jpg" />
      </a>
    </div>
  </Layout>
);