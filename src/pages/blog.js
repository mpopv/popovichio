import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const PostWrapper = styled.article`
  padding-top: 30px;
  border-top: 2px solid #2b2b2b;
  margin-top: 60px;
`;

export default ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />

      <div className="content">
        <h1>Matt Popovich</h1>
        <p>Blog</p>
        <Link to={'/'}>{`< Back to Home`}</Link>
        <div>
          {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                <h2>{frontmatter.title}</h2>
              </Link>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </PostWrapper>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SITE_BLOG_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`;
