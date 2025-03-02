import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from 'next/head';

export default function Processing() {
  return (
    <Box as="main">
      <Head>
        <title>Processing Services - Geobmega</title>
        <meta name="description" content="Advanced mineral processing and refining services with state-of-the-art technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        height="60vh"
        position="relative"
        backgroundImage="url('/images/processing-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.65)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={4} color="white" textAlign="center">
            <Heading as="h1" size="2xl">
              Processing Services
            </Heading>
            <Text fontSize="xl">
              Advanced Mineral Processing and Refining Solutions
            </Text>
          </VStack>
        </Box>
      </Box>

      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Crushing & Grinding</Heading>
            <Text>
              Our mineral processing facilities employ advanced technologies for efficient size reduction and liberation of valuable minerals.
            </Text>
            <Text>
              Crushing and grinding capabilities include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Primary and secondary crushing</Text>
              <Text>• High-pressure grinding rolls</Text>
              <Text>• Ball and SAG milling</Text>
              <Text>• Size classification and screening</Text>
              <Text>• Circuit optimization and control</Text>
            </VStack>
          </VStack>
          <Box>
            <Image
              src="/images/crushing-grinding.jpg"
              alt="Crushing and Grinding Operations"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={20}>
          <Box>
            <Image
              src="/images/separation-flotation.jpg"
              alt="Separation and Flotation"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Separation & Flotation</Heading>
            <Text>
              Our advanced separation technologies ensure maximum recovery of valuable minerals through various physical and chemical processes.
            </Text>
            <Text>
              Separation processes include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Froth flotation</Text>
              <Text>• Gravity separation</Text>
              <Text>• Magnetic separation</Text>
              <Text>• Dense media separation</Text>
              <Text>• Electrostatic separation</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={20}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Hydrometallurgy</Heading>
            <Text>
              Our hydrometallurgical processes extract and recover valuable metals using advanced chemical and electrochemical techniques.
            </Text>
            <Text>
              Process capabilities include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Leaching and dissolution</Text>
              <Text>• Solvent extraction</Text>
              <Text>• Electrowinning</Text>
              <Text>• Ion exchange</Text>
              <Text>• Solution purification</Text>
            </VStack>
          </VStack>
          <Box>
            <Image
              src="/images/hydrometallurgy.jpg"
              alt="Hydrometallurgical Processing"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>

        <Box textAlign="center" mt={20}>
          <VStack spacing={4}>
            <Heading as="h2" size="xl">Ready to Optimize Your Processing Operations?</Heading>
            <Text fontSize="lg" maxW="container.md">
              Contact our team to discuss your mineral processing requirements and discover how our advanced technologies can improve your recovery rates.
            </Text>
            <Button
              as={NextLink}
              href="/contact"
              size="lg"
              colorScheme="blue"
              mt={4}
            >
              Contact Us
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
} 