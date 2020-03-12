import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Content = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  & img {
    width: 100%;
  }
`;

const PostWrapper = styled.div`
  padding-top: 30px;
  border-top: 2px solid #2b2b2b;
  margin-top: 60px;
`;

export default ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />

      <Content>
        <h1>Matt Popovich</h1>
        <p>Blog</p>
        <Link to={'/'}>{`< Back to Home`}</Link>
        <div>
          {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                <h1>{frontmatter.title}</h1>
              </Link>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </PostWrapper>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
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
