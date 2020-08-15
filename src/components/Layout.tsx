import { Flex, Image } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Me from '../assets/dev.png';

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          description
        }
      }
    }
  `);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.name}`}
        defaultTitle={data.site.siteMetadata.name}
      >
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Flex direction="row" width="100%">
        {children}
      </Flex>
    </React.StrictMode>
  );
};

export default Layout;
