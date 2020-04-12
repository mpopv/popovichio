/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Project from '../components/Project';
import Seo from '../components/Seo';

import './projects.css';

const Content = styled.div`
  z-index: 2;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`;

const Button = ({ url, primary = false, children }) => (
  <a
    className={`button ${primary ? 'button--primary' : ''}`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      makeemoji: file(relativePath: { eq: "makeemoji.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      griid: file(relativePath: { eq: "griid.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      megacitypolice: file(relativePath: { eq: "megacitypolice.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      swtitlebot: file(relativePath: { eq: "swtitlebot.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hearthstonecard: file(relativePath: { eq: "hearthstonecard.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lastjedi: file(relativePath: { eq: "lastjedi.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laststand: file(relativePath: { eq: "laststand.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marcomag: file(relativePath: { eq: "marcomag.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paintonheat: file(relativePath: { eq: "paintonheat.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trumptwitter: file(relativePath: { eq: "trumptwitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      drawline: file(relativePath: { eq: "drawline.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pxsmlx: file(relativePath: { eq: "pxsmlx.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="project-page">
      <div id="shadow"></div>
      <div id="the-grid"></div>
      <div id="glow"></div>

      <Layout>
        <Seo title="Projects" />

        <Content>
          <h1 className="shadow">Matt Popovich</h1>
          <p className="shadow">Projects</p>
          <div className="shadow-link-within">
            <Link to={'/'}>{`< Back to Home`}</Link>
          </div>
          <div className="project-page-header-area">
            <div className="project-page-header-area__inner">
              <h2 className="project-page-header__glow" aria-hidden="true">
                Projects
              </h2>
              <h2 className="project-page-header__outline" aria-hidden="true">
                Projects
              </h2>
              <h2 className="project-page-header">Projects</h2>
              <h2 className="project-page-header__shine" aria-hidden="true">
                Projects
              </h2>
            </div>
          </div>
        </Content>

        <div className="project-area">
          <Project data={data} bgImage="makeemoji">
            <h1>MakeEmoji</h1>
            <p>
              A React/Typescript app that lets you create your own animated
              custom emojis for Slack and Discord, all on the frontend.
            </p>
            <div>
              <Button url="https://makeemoji.com/" primary={true}>
                Website
              </Button>
              <Button url="https://github.com/mpopv/makeemoji">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="griid">
            <h1>Griid</h1>
            <p>
              A React app that lets you browse image-heavy subreddits as a grid
              of images, with Snowpack to bundle ES Modules on the frontend and
              a lambda function on Netlify to fetch reddit posts.
            </p>
            <div>
              <Button url="https://griid.co/" primary={true}>
                Website
              </Button>
              <Button url="https://github.com/mpopv/griid.co">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="drawline">
            <h1>drawline</h1>
            <p>
              A Sass mixin that lets you generate inline SVG background images
              by drawing with ASCII art.
            </p>
            <div>
              <Button url="https://github.com/mpopv/drawline" primary={true}>
                Code
              </Button>
            </div>
          </Project>

          <Project data={data} bgImage="pxsmlx">
            <h1>pxsmlx</h1>
            <p>
              A Sass mixin library for concisely generating sets of
              single-property media queries.
            </p>
            <div>
              <Button url="https://github.com/mpopv/pxsmlx" primary={true}>
                Code
              </Button>
            </div>
          </Project>

          <Project data={data} bgImage="lastjedi">
            <h1>The Last Jedi 3D Animated Poster</h1>
            <p>
              A mouse-responsive 3D parallax animation with GSAP, SVG filters,
              and CSS transforms, bringing a movie poster to life.
            </p>
            <div>
              <Button url="https://codepen.io/mpopv/full/LOYQKL" primary={true}>
                Project
              </Button>
              <Button url="https://codepen.io/mpopv/pen/LOYQKL">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="laststand">
            <h1>Last Stand</h1>
            <p>
              A mouse-responsive 3D parallax animation with GSAP, SVG filters,
              and CSS transforms, bringing a digital artwork I painted to life.
            </p>
            <div>
              <Button
                url="https://codepen.io/mpopv/full/oNXzVpL"
                primary={true}
              >
                Project
              </Button>
              <Button url="https://codepen.io/mpopv/pen/oNXzVpL">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="hearthstonecard">
            <h1>Animated Hearthstone Golden Card</h1>
            <p>
              An experiment using CSS masks along with GSAP and SVG filters to
              animate a golden Hearthstone card.
            </p>
            <div>
              <Button url="https://codepen.io/mpopv/full/vZJwyV" primary={true}>
                Project
              </Button>
              <Button url="https://codepen.io/mpopv/pen/vZJwyV">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="paintonheat">
            <h1>Paint on Heat Distortion</h1>
            <p>
              An experimental project that lets you paint an animated heat
              effect onto an image with GSAP, SVG filters, and CSS masks. This
              project was posted to the Codepen front page and{' '}
              <a
                href="https://codepen.io/spark/31"
                target="_blank"
                rel="noferrer noopener"
              >
                included in the Codepen Spark weekly newsletter
              </a>{' '}
              by Codepen staff.
            </p>
            <div>
              <Button url="https://codepen.io/mpopv/full/zzENQQ" primary={true}>
                Project
              </Button>
              <Button url="https://codepen.io/mpopv/pen/zzENQQ">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="marcomag">
            <h1>Make Your Own Marco Mag</h1>
            <p>
              An image generator to customize Marco Rubio's 2016 TIME magazine
              cover with your own subversive message.
            </p>
            <div>
              <Button url="https://codepen.io/mpopv/full/aNbqrq" primary={true}>
                Project
              </Button>
              <Button url="https://codepen.io/mpopv/pen/aNbqrq">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="trumptwitter">
            <h1>Trump Twitter Cover Generator</h1>
            <p>
              An image generator to make your own custom version of a ridiculous
              Twitter cover photo President Trump added briefly in 2017. This
              project was mentioned by{' '}
              <a
                href="https://www.teenvogue.com/story/donald-trump-quoted-his-own-tweet-in-a-header"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teen Vogue
              </a>
              ,{' '}
              <a
                href="https://www.ibtimes.co.uk/social-media-furiously-mocks-trumps-new-twitter-banner-featuring-his-own-tweet-denying-russian-ties-1620656"
                target="_blank"
                rel="noopener noreferrer"
              >
                International Business Times
              </a>
              , and{' '}
              <a
                href="https://mashable.com/2017/05/08/trump-twitter-banner-russia/#B2cJR_cLHkqb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mashable
              </a>
              .
            </p>
            <div>
              <Button url="https://codepen.io/mpopv/full/QvaqXB" primary={true}>
                Project
              </Button>
              <Button url="https://codepen.io/mpopv/pen/QvaqXB">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="megacitypolice">
            <h1>MegaCity Police</h1>
            <p>
              A Node.js Twitter bot that tweets random cyberpunk crime alerts
              and other sci-fi technobabble. Tweets once per hour, running on a
              Heroku cron job.
            </p>
            <div>
              <Button url="https://twitter.com/MegaCityPolice" primary={true}>
                Bot
              </Button>
              <Button url="https://github.com/mpopv/the-botcave">Code</Button>
            </div>
          </Project>

          <Project data={data} bgImage="swtitlebot">
            <h1>Star Wars Titlebot</h1>
            <p>
              A Node.js Twitter bot that tweets random Star Wars episode titles.
              Tweets once per hour, running on a Heroku cron job.
            </p>
            <div>
              <Button url="https://twitter.com/SWTitlebot" primary={true}>
                Bot
              </Button>
              <Button url="https://github.com/mpopv/the-botcave">Code</Button>
            </div>
          </Project>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
