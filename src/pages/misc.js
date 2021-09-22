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

const Item = styled.article`
  width: 100%;
  padding: 20px 0 0;
`;

const A = ({ url, children }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

const MiscPage = () => {
  return (
    <Layout>
      <Seo title="Miscellaneous" />

      <Content>
        <h1>Matt Popovich</h1>
        <p>Miscellaneous</p>
        <Link to={'/'}>{`< Back to Home`}</Link>

        <Item>
          <h2>Photography on Unsplash</h2>
          <p>
            In my spare time, I occasionally take photographs, and I've released a number under a public domain license on Unsplash and Flickr. My photos on Unsplash have over 70 million views and 240,000 downloads, and they've been featured by Scientific American, TechCrunch, Atlas Obscura, Popular Science, MIT Technology Review, Fast Company, Buzzfeed, Yahoo, and many other publications.
          </p>
          <p>
            <A url="https://unsplash.com/@mattpopovich">Click here to view.</A>
          </p>
        </Item>

        <Item>
          <h2>Campaign Logos for "Dick Guns": HIT RECORD</h2>
          <p>
            In 2015, I designed the campaign logos for the fictional political campaigns of Daryl Chambers (played by Joseph Gordon-Levitt) and Jack Greyson (played by Zac Efron) for a sketch called "Dick Guns" for the TV show HIT RECORD ON TV.
          </p>
          <p>
            <A url="https://youtu.be/EaD_pq4gngE?t=128">Click here to watch.</A>  Warning: it's about exactly what it sounds like it's about.
          </p>
        </Item>

        <Item>
          <h2>Tweet on Good Morning America</h2>
          <p>
            I used to be sort of active on political Twitter and my tweets would get picked up occasionally by one news source or the other when I made a joke during a debate (<A url="https://www.dailymail.co.uk/news/article-3465121/Marco-Rubio-superfan-Screaming-lady-GOP-debate-lets-high-pitched-ear-piercing-shrieks-admiration-Florida-senator.html">1</A>, <A url="https://www.mediaite.com/tv/twitter-hates-the-mysterious-rubio-superfan-who-keeps-shrieking-at-the-cnn-gop-debate/">2</A>, etc.) or I posted a photoshop (<A url="https://www.buzzfeednews.com/article/remysmidt/president-trump-put-his-hand-on-a-glowing-orb-in-s#.khZYGz2by">1</A>, <A url="https://www.usatoday.com/story/news/politics/onpolitics/2017/05/22/photo-president-trump-and-glowing-orb-inspires-new-meme/102008612/">2</A>, <A url="https://nymag.com/intelligencer/2017/05/trump-touches-glowing-orb-in-saudi-arabia-spawns-meme.html">3</A>, etc.) or whatever. The wildest of these was probably when I tweeted an opinion about dog pants (they should be worn on all four legs, not on the back two legs) that <A url="https://www.cbsnews.com/news/how-should-a-dog-wear-pants/">CBS News called "forceful"</A> and <A url="https://abcnews.go.com/GMA/video/dog-wear-pants-debate-divides-internet-36007659">Good Morning America displayed live on national television.</A> My fifteen minutes of fame, in other words, was utterly wasted on the most trivial subject imaginable.
          </p>
        </Item>
      </Content>
    </Layout>
  );
};

export default MiscPage;
