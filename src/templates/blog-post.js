import React from "react";
import PostHeader from '../components/postHeader';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <PostHeader
      title={post.frontmatter.title}
      slug={post.fields.slug}
      date={post.frontmatter.date}
      html={post.html}
    />
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;