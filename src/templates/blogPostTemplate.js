import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import './blogPostTemplate.css';

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <Seo title={frontmatter.title} />

      <div className="blog-post-content">
        <div className="back-area">
          <h1>Matt Popovich</h1>
          <Link to={'/blog'}>{`< Back to Blog`}</Link>
          <Link to={'/'}>{`< Back Home`}</Link>
        </div>

        <article>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </article>

        <div className="prev-next-area">
          {previous && (
            <div className="prev-next-item">
              {previous && (
                <p>
                  Previous post:&nbsp;
                  <Link to={previous.fields.slug}>
                    <p>{previous.frontmatter.title}</p>
                  </Link>
                </p>
              )}
            </div>
          )}
          {next && (
            <div className="prev-next-item">
              {next && (
                <p>
                  Next post:&nbsp;
                  <Link to={next.fields.slug}>
                    <p>{next.frontmatter.title}</p>
                  </Link>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
