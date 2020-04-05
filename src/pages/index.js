/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const ExtLink = ({ href, children }) => (
  <a href={`https://${href}`} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Emoji = ({ alt = '', children }) => (
  <span
    role="img"
    aria-label={alt}
    style={{ transform: 'translateY(3px)', display: 'inline-block' }}
  >
    {children}
  </span>
);

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Matt Popovich" />

      <div className="content">
        <h1>Matt Popovich</h1>
        <div>
          <Link to={'/blog'}>Blog</Link>
        </div>
        <div>
          <Link to={'/projects'}>Projects</Link>
        </div>
      </div>

      <div className="content">
        <div>
          <p>Profiles</p>
          <ul>
            <li>
              <ExtLink href="twitter.com/mpopv">
                <Emoji alt="A bird">🐦</Emoji> @mpopv on twitter
              </ExtLink>
            </li>
            <li>
              <ExtLink href="github.com/mpopv">
                <Emoji alt="A man at a computer">👨🏼‍💻</Emoji> @mpopv on github
              </ExtLink>
            </li>
            <li>
              <ExtLink href="codepen.io/mattpopovich">
                <Emoji alt="A man at a computer">👨🏼‍💻</Emoji> @mattpopovich on
                codepen
              </ExtLink>
            </li>
            <li>
              <ExtLink href="instagram.com/mpopv">
                <Emoji alt="A camera">📷</Emoji> @mpopv on insta
              </ExtLink>
            </li>
            <li>
              <ExtLink href="instagram.com/mattpopovichart">
                <Emoji alt="A paint palette">🎨</Emoji> @mattpopovichart on
                insta
              </ExtLink>
            </li>
            <li>
              <ExtLink href="unsplash.com/@mattpopovich">
                <Emoji alt="A camera">📷</Emoji> @mattpopovich on unsplash
              </ExtLink>
            </li>
            <li>
              <ExtLink href="flickr.com/photos/mattpopovich">
                <Emoji alt="A camera">📷</Emoji> mattpopovich on flickr
              </ExtLink>
            </li>
            <li>
              <ExtLink href="linkedin.com/in/mattpopovich">
                <Emoji alt="A dress shirt">👔</Emoji> mattpopovich on linkedin
              </ExtLink>
            </li>
            <li>
              <ExtLink href="medium.com/@mattpopovich">
                <Emoji alt="A pencil">✏️</Emoji> @mattpopovich on medium
              </ExtLink>
            </li>
            <li>
              <ExtLink href="dev.to/mattpopovich">
                <Emoji alt="A pencil">✏️</Emoji> @mattpopovich on dev.to
              </ExtLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="fullwidth">
          <div className="home-blog-area">
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
              <article className="home-blog-post" key={id}>
                <Link to={fields.slug}>
                  <h2 className="home-blog-post__title">{frontmatter.title}</h2>
                </Link>
                <p className="home-blog-post__date">{frontmatter.date}</p>
                <p className="home-blog-post__excerpt">{excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
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
