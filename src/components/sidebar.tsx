/* eslint-disable no-octal-escape */
import { Box, Flex, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';

const MotionBox = motion.custom(Box);
const MotionFlex = motion.custom(Flex);

const variants = {
  index: {
    width: '50%',
    height: '100vh',
  },
  not_index: {
    width: '20%',
    transition: {
      duration: 1.5,
    },
  },
};

export default function Sidebar({ path }: { path?: string }): JSX.Element {
  const index = path === '/';

  return (
    <MotionFlex
      initial="index"
      animate={index ? 'index' : 'not_index'}
      variants={variants}
      w="50%"
      h="100vh"
      bg="dark.800"
    >
      <Flex p="30px" direction="column" justify="space-between">
        <Box>
          <MotionBox whileHover={{ opacity: 0.5 }}>
            <Text
              fontFamily="Bebas Neue"
              fontSize="md"
              letterSpacing={5}
              color="white"
              my={2}
            >
              <Link
                to="/about"
                activeStyle={{
                  '&:before': {
                    content: '| ',
                    fontSize: '20px',
                  },
                }}
              >
                ABOUT
              </Link>
            </Text>
          </MotionBox>
          <MotionBox whileHover={{ opacity: 0.5 }}>
            <Text
              fontFamily="Bebas Neue"
              fontSize="md"
              letterSpacing={5}
              color="white"
              my={2}
            >
              <Link to="/works">WORKS</Link>
            </Text>
          </MotionBox>
          <MotionBox whileHover={{ opacity: 0.5 }}>
            <Text
              fontFamily="Bebas Neue"
              fontSize="md"
              letterSpacing={5}
              color="white"
              my={2}
            >
              <Link to="/blog">BLOG</Link>
            </Text>
          </MotionBox>
          <MotionBox whileHover={{ opacity: 0.5 }}>
            <Text
              fontFamily="Bebas Neue"
              fontSize="md"
              letterSpacing={5}
              color="white"
              my={2}
            >
              <Link to="/blog">CONTACT</Link>
            </Text>
          </MotionBox>
        </Box>
        <Box py={2}>
          <Text fontSize="md" color="darkLight.600">
            VK
          </Text>
          <Box w="20px" h="1px" bg="darkLight.600" my={2} />
          <Text fontSize="md" color="darkLight.600">
            INST
          </Text>
          <Box w="20px" h="1px" bg="darkLight.600" my={2} />
          <Text fontSize="md" color="darkLight.600">
            BE
          </Text>
        </Box>
        <Box py={8}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            fontFamily="Bebas Neue"
            letterSpacing={8}
            color="white"
          >
            ANDY OSEI.
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="darkLight.600">
            SOFTWARE - ENGINEER
          </Text>
        </Box>
      </Flex>
    </MotionFlex>
  );
}
