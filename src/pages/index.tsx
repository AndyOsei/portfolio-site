import { Box, Text } from '@chakra-ui/core';
import { PageProps } from 'gatsby';
import React from 'react';

import usePath from '../hooks/usePath';

export default function IndexPage(props: PageProps): JSX.Element {
  usePath(props.location.pathname);

  return (
    <Box>
      <Text>Yes</Text>
    </Box>
  );
}
