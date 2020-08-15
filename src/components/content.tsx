import { Flex, Icon, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from 'react';

interface ContentProps {
  children?: React.ReactNode;
  referrer?: string;
}

const MotionFlex = motion.custom(Flex);

const variants = {
  index: {
    width: '50%',
    height: '100vh',
  },
  not_index: {
    width: '80%',
    transition: {
      duration: 1.5,
    },
  },
};

export default function Content({
  children,
  referrer,
}: ContentProps): JSX.Element {
  const index = referrer === '/';
  return (
    <MotionFlex
      initial="index"
      animate={index ? 'index' : 'not_index'}
      variants={variants}
      bg="cream.100"
    >
      <Flex w="100%" direction="row" justify="space-between" m="30px">
        <Flex w="80%" direction="column">
          {children}
        </Flex>
        <Flex
          w="20%"
          direction="column"
          justify="space-between"
          align="flex-end"
        >
          <Flex direction="row">
            <Text fontSize="md" color="darkLight.600" mr={2}>
              AMAZING GRACE
            </Text>
            <Flex
              bg="dark.200"
              size="20px"
              borderRadius={10}
              align="center"
              justify="center"
            >
              <Icon name="small-add" size="20px" color="dark.600" />
            </Flex>
          </Flex>
          <Flex>
            <Text
              fontSize="md"
              color="dark.500"
              mr={-12}
              transform="rotateZ(90deg)"
            >
              +233 (2439) 66-56-4
            </Text>
          </Flex>
          <Flex direction="row">
            <Text fontSize="md" color="darkLight.600" mr={2}>
              MY WORKS
            </Text>
            <Flex
              bg="dark.800"
              size="20px"
              borderRadius={10}
              align="center"
              justify="center"
            >
              <Icon name="chevron-right" size="20px" color="dark.200" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </MotionFlex>
  );
}
