import React from "react";
import PostHeader from '../components/postHeader';

export default ({data}) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostHeader key={node.id}
        title={node.frontmatter.title}
        slug={node.fields.slug}
        date={node.frontmatter.date}
        html={node.html}
      />
    ))}
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;