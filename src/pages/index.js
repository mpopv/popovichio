/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styled from 'styled-components';

export const Content = styled.div`
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

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Matt Popovich" />

      <Content>
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
      </Content>
    </Layout>
  );
};

export default IndexPage;
