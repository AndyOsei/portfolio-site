import { Box, Text } from '@chakra-ui/core';
import { PageProps } from 'gatsby';
import React from 'react';

import Content from '../components/content';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

export default function IndexPage(props: PageProps): JSX.Element {
  const { referrer } = props.location as any;

  return (
    <Layout>
      <Sidebar {...{ referrer }} />
      <Content {...{ referrer }} />
    </Layout>
  );
}
