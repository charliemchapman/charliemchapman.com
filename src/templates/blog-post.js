import React from "react";
import PostHeader from '../components/postHeader';
import SEO from '../components/SEO';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        image={post.frontmatter.image}
      />
      <PostHeader
        title={post.frontmatter.title}
        slug={post.fields.slug}
        date={post.frontmatter.date}
        html={post.html}
      />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        image
      }
      fields {
        slug
      }
      html
    }
  }
`;