import { Box, Flex, Icon, Image, Text } from '@chakra-ui/core';
import React from 'react';

import Me from '../assets/dev.png';
import { Layout } from '../components/Layout';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Flex direction="row">
        <Flex w="50%" h="100vh" bg="dark.800">
          <Flex p="30px" direction="column" justify="space-between">
            <Box>
              <Text
                fontFamily="Bebas Neue"
                fontSize="md"
                letterSpacing={5}
                color="white"
                my={2}
              >
                ABOUT
              </Text>
              <Text
                fontFamily="Bebas Neue"
                fontSize="md"
                letterSpacing={5}
                color="white"
                my={2}
              >
                WORKS
              </Text>
              <Text
                fontFamily="Bebas Neue"
                fontSize="md"
                letterSpacing={5}
                color="white"
                my={2}
              >
                BLOG
              </Text>
              <Text
                fontFamily="Bebas Neue"
                fontSize="md"
                letterSpacing={5}
                color="white"
                my={2}
              >
                CONTACT
              </Text>
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
        </Flex>
        <Flex w="50%" h="100vh" bg="cream.100">
          <Flex
            p="30px"
            w="100%"
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
        <Image
          position="fixed"
          zIndex={2}
          right="28%"
          top="50%"
          transform="translateY(-50%)"
          objectFit="cover"
          src={Me}
          alt="Me"
        />
      </Flex>
    </Layout>
  );
}
