/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Project from '../components/Project';
import Seo from '../components/Seo';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`;

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

const Button = ({ url, primary = false, children }) => (
  <a
    className={`button ${primary ? 'button--primary' : ''}`}
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Matt Popovich" />
      <Content>
        <div className="content">
          <h1>Matt Popovich</h1>
          <Link to={'/blog'}>Blog</Link>
        </div>

        <div className="content">
          <div>
            <p>Profiles</p>
            <ul>
              <li>
                <ExtLink href="twitter.com/mpopv">
                  <Emoji alt="A bird">🐦</Emoji> twitter
                </ExtLink>
              </li>
              <li>
                <ExtLink href="github.com/mpopv">
                  <Emoji alt="A man at a computer">👨🏼‍💻</Emoji> github
                </ExtLink>
              </li>
              <li>
                <ExtLink href="codepen.io/mpopv">
                  <Emoji alt="A man at a computer">👨🏼‍💻</Emoji> codepen
                </ExtLink>
              </li>
              <li>
                <ExtLink href="instagram.com/mpopv">
                  <Emoji alt="A camera">📷</Emoji> insta
                </ExtLink>
              </li>
              <li>
                <ExtLink href="instagram.com/mattpopovichart">
                  <Emoji alt="A paint palette">🎨</Emoji> art insta
                </ExtLink>
              </li>
              <li>
                <ExtLink href="unsplash.com/@mpopv">
                  <Emoji alt="A camera">📷</Emoji> unsplash
                </ExtLink>
              </li>
              <li>
                <ExtLink href="flickr.com/photos/mattpopovich">
                  <Emoji alt="A camera">📷</Emoji> flickr
                </ExtLink>
              </li>
              <li>
                <ExtLink href="linkedin.com/in/mattpopovich">
                  <Emoji alt="A dress shirt">👔</Emoji> linkedin
                </ExtLink>
              </li>
            </ul>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default IndexPage;
