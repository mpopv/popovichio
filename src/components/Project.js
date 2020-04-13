import React from 'react';
import Img from 'gatsby-image';

const Project = ({ data, bgImage = '', children }) => (
  <div className="project">
    {bgImage && (
      <div className="project__image">
        <Img fluid={data[bgImage].childImageSharp.fluid} />
      </div>
    )}
    <div className="project__shroud"></div>
    <div className="project__content">{children}</div>
  </div>
);

export default Project;
