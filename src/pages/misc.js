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

export const Item = styled.article`
  width: 100%;
  padding: 20px 0 0;
`;

const MiscPage = () => {
  return (
    <Layout>
      <Seo title="Miscellaneous" />

      <Content>
        <h1>Matt Popovich</h1>
        <p>Miscellaneous</p>
        <Link to={'/'}>{`< Back to Home`}</Link>

        <Item>
          <h2>Campaign Logos for "Dick Guns": HIT RECORD</h2>
          <p>
            In 2015, I designed the campaign logos for the fictional political campaigns of Daryl Chambers (played by Joseph Gordon-Levitt) and Jack Greyson (played by Zac Efron) for a sketch called "Dick Guns" for the TV show HIT RECORD ON TV.
          </p>
          <p>
            <a href="https://youtu.be/EaD_pq4gngE?t=128" target="_blank" rel="noreferrer noopener">Click here to watch.</a>  Warning: it's about exactly what it sounds like it's about.
          </p>
        </Item>

        <Item>
          <h2>Photography on Unsplash</h2>
          <p>
            In my spare time, I occasionally take photographs, and I've released a number under a public domain license on Unsplash and Flickr. My photos on Unsplash have over 70 million views and 240,000 downloads, and they've been featured by Scientific American, TechCrunch, Atlas Obscura, Popular Science, MIT Technology Review, Fast Company, Buzzfeed, Yahoo, and many other publications.
          </p>
          <p>
            <a href="https://unsplash.com/@mattpopovich" target="_blank" rel="noreferrer noopener">Click here to view.</a>
          </p>
        </Item>
      </Content>
    </Layout>
  );
};

export default MiscPage;
