import React from "react";

export default ({data}) => {
  const links = data.allMarkdownRemark.edges.map(({node})=>{
    return <li key={node.id}><a href={`${node.fields.slug}`}>{node.frontmatter.title}</a></li>;
  })

  return (
    <div>
      <h2>Archive</h2>
      <ul>
        {links}
      </ul>
    </div>
  );
};

export const query = graphql`
  query ArchiveQuery {
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
        }
      }
    }
  }
`;