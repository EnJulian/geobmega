import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from 'next/head';

export default function Exploration() {
  return (
    <Box as="main">
      <Head>
        <title>Exploration Services - Geobmega</title>
        <meta name="description" content="Expert geological exploration services using cutting-edge technology and sustainable practices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        height="60vh"
        position="relative"
        backgroundImage="url('/images/exploration-hero.jpg')"
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
              Exploration Services
            </Heading>
            <Text fontSize="xl">
              Cutting-edge Geological Survey and Resource Identification
            </Text>
          </VStack>
        </Box>
      </Box>

      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Comprehensive Exploration Solutions</Heading>
            <Text>
              Our exploration services utilize cutting-edge geological survey techniques and advanced data analysis to identify promising mineral deposits with precision and efficiency.
            </Text>
            <Text>
              We employ a comprehensive approach that includes:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Remote sensing and satellite imagery analysis</Text>
              <Text>• Geophysical surveys using state-of-the-art equipment</Text>
              <Text>• Geochemical sampling and analysis</Text>
              <Text>• Drilling programs with minimal environmental impact</Text>
              <Text>• 3D modeling and resource estimation</Text>
            </VStack>
          </VStack>
          <Box>
            <Image
              src="/images/exploration-tech.jpg"
              alt="Exploration Technology"
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
              src="/images/exploration-survey.jpg"
              alt="Geological Survey"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Advanced Survey Methods</Heading>
            <Text>
              Our geological survey methods combine traditional expertise with modern technology to provide accurate and detailed resource assessments.
            </Text>
            <Text>
              Survey capabilities include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Aerial and satellite mapping</Text>
              <Text>• Ground penetrating radar surveys</Text>
              <Text>• Magnetic and gravimetric surveys</Text>
              <Text>• Seismic exploration</Text>
              <Text>• Core sampling and analysis</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={20}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Data Analysis & Modeling</Heading>
            <Text>
              Our advanced data analysis and modeling capabilities help identify promising deposits and optimize exploration strategies.
            </Text>
            <Text>
              Analysis services include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Resource estimation and modeling</Text>
              <Text>• Geological interpretation</Text>
              <Text>• Deposit characterization</Text>
              <Text>• Risk assessment</Text>
              <Text>• Economic evaluation</Text>
            </VStack>
          </VStack>
          <Box>
            <Image
              src="/images/exploration-analysis.jpg"
              alt="Data Analysis"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>

        <Box textAlign="center" mt={20}>
          <VStack spacing={4}>
            <Heading as="h2" size="xl">Ready to Start Your Exploration Project?</Heading>
            <Text fontSize="lg" maxW="container.md">
              Contact our team to discuss your exploration requirements and discover how our expertise can help you identify valuable mineral resources.
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