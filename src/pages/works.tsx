import { Box, Text } from '@chakra-ui/core';
import { PageProps } from 'gatsby';
import React from 'react';

import Content from '../components/content';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

export default function Works(props: PageProps): JSX.Element {
  const { referrer } = props.location as any;
  console.log('location', props.location);

  return (
    <Layout>
      <Sidebar {...{ referrer }} />
      <Content {...{ referrer }} />
    </Layout>
  );
}
