import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/">
        <h1>Charlie Chapman</h1>
      </Link>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/archive/">Archive</ListLink>
      </ul>
    </header>
    {children()}
  </div>
);