import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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
  & code {
    background-color: #2b2b2b;
    color: white;
    font-size: 16px;
    padding: 3px 5px;
    margin: 0 2px;
    border-radius: 3px;
  }
  & h1,
  & h1 a {
    font-size: 50px;
  }
  & h2,
  & h2 a {
    font-size: 40px;
  }
  & h3,
  & h3 a {
    font-size: 28px;
  }
  & h4,
  & h4 a {
    font-size: 22px;
  }
  & h5,
  & h5 a {
    font-size: 18px;
  }
`;

const BackArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  & h1 {
    font-size: 2em;
  }
`;

const LinkArea = styled.p``;

const PrevNextArea = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PrevNextItem = styled.div`
  flex: 1;
  padding: 30px 30px 0 0;
`;

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <Seo title={frontmatter.title} />

      <Content>
        <BackArea>
          <h1>Matt Popovich</h1>
          <Link to={'/blog'}>{`< Back to Blog`}</Link>
          <Link to={'/'}>{`< Back Home`}</Link>
        </BackArea>

        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>

        <MDXRenderer>{body}</MDXRenderer>

        <PrevNextArea>
          {previous && (
            <PrevNextItem>
              {previous && (
                <LinkArea>
                  Previous post:&nbsp;
                  <Link to={previous.fields.slug}>
                    <p>{previous.frontmatter.title}</p>
                  </Link>
                </LinkArea>
              )}
            </PrevNextItem>
          )}
          {next && (
            <PrevNextItem>
              {next && (
                <LinkArea>
                  Next post:&nbsp;
                  <Link to={next.fields.slug}>
                    <p>{next.frontmatter.title}</p>
                  </Link>
                </LinkArea>
              )}
            </PrevNextItem>
          )}
        </PrevNextArea>
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
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
