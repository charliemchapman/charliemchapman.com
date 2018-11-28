import React from "react";
import PostHeader from '../components/postHeader';
import PostFooter from '../components/postFooter';
import SEO from '../components/SEO';
import '../styles/post-markdown-overrides.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        description={post.excerpt}
      />
      <PostHeader
        title={post.frontmatter.title}
        slug={post.fields.slug}
        date={post.frontmatter.date}
        html={post.html}
      />
      <PostFooter />
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
      excerpt
    }
  }
`;