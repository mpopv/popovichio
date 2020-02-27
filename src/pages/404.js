import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <p className="header">Not Found</p>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
