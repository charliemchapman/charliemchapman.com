import React from "react";
import Link from "gatsby-link";
import Layout from '../components/layout'
import PostHeader from '../components/postHeader';
import styles from '../styles/home.module.css';


export default ({data, pathContext}) => {
  const { group, index, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  const previousLink = index !== 1 ? <Link to={previousUrl}>← Previous</Link> : null;
  const nextLink = index !== pageCount ? <Link to={nextUrl}>Next →</Link> : null;

  return (
    <Layout>
      {group.map(({ node }) => (
        <PostHeader key={node.id}
          title={node.frontmatter.title}
          slug={node.fields.slug}
          date={node.frontmatter.date}
          html={node.html}
        />
      ))}
      <div className={styles.homeNavigation}>
        <div>{previousLink}</div>
        <div>{nextLink}</div>
      </div>
    </Layout>
  );
}