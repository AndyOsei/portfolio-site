import { Flex, Image } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Me from '../assets/dev.png';
import { DataProvider, useDataState } from '../context';
import Content from './content';
import Sidebar from './sidebar';

export interface LayoutProps {
  children?: React.ReactNode;
}

const MotionImage = motion.custom(Image);

const variants = {
  index: {
    top: '-20vh',
    left: '20vw',
  },
  about: {
    left: -150,
    scale: 0.7,
    transition: {
      duration: 1.5,
    },
  },
};

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
  const { path } = useDataState();
  const imageRoutes = ['/', '/about'];
  const index = path === '/';
  console.log('cmp ', imageRoutes.includes(path ?? ''), path);

  return (
    <React.StrictMode>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.name}`}
        defaultTitle={data.site.siteMetadata.name}
      >
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Flex direction="row">
        <Sidebar {...{ path }} />
        {!children && <Content {...{ path }} />}
        {children && <Content {...{ path }}>{children}</Content>}
        {imageRoutes.includes(path ?? '') && (
          <MotionImage
            initial="index"
            animate={index ? 'index' : 'about'}
            variants={variants}
            position="absolute"
            w="100vh"
            zIndex={2}
            objectFit="cover"
            src={Me}
            alt="Me"
          />
        )}
      </Flex>
    </React.StrictMode>
  );
};

export default ({ children }: { children: React.ReactNode }) => (
  <DataProvider>
    <Layout>{children}</Layout>
  </DataProvider>
);
