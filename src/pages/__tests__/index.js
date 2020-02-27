import React from 'react';
import renderer from 'react-test-renderer';
import IndexPage from '../index';

describe('IndexPage', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<IndexPage siteTitle="Hello world" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
