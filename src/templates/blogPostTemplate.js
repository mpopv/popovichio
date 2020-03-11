import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Content = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  & img {
    width: 100%;
  }
`;

const LinkArea = styled.p`
  display: inline-flex;
  align-items: center;
`;

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <Content>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <MDXRenderer>{body}</MDXRenderer>
        {previous === false ? null : (
          <>
            {previous && (
              <LinkArea>
                Previous post:&nbsp;
                <Link to={previous.fields.slug}>
                  <p>{previous.frontmatter.title}</p>
                </Link>
              </LinkArea>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <LinkArea>
                Next post:&nbsp;
                <Link to={next.fields.slug}>
                  <p>{next.frontmatter.title}</p>
                </Link>
              </LinkArea>
            )}
          </>
        )}
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
