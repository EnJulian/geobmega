import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from 'next/head';

export default function Consulting() {
  return (
    <Box as="main">
      <Head>
        <title>Mining Consulting Services - Geobmega</title>
        <meta name="description" content="Expert mining consulting services for operational optimization and sustainable practices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        height="60vh"
        position="relative"
        backgroundImage="url('/images/consulting-hero.jpg')"
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
              Mining Consulting Services
            </Heading>
            <Text fontSize="xl">
              Expert Solutions for Mining Operations
            </Text>
          </VStack>
        </Box>
      </Box>

      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Image
              src="/images/consulting.jpg"
              alt="Mining Consulting Services"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Mining Consulting Services</Heading>
            <Text>
              Our expert consulting team provides comprehensive solutions to optimize your mining operations and ensure sustainable practices.
            </Text>
            <Text>
              Our consulting expertise includes:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Operational optimization</Text>
              <Text>• Environmental compliance</Text>
              <Text>• Project evaluation</Text>
              <Text>• Risk assessment</Text>
              <Text>• Sustainability planning</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={20}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Project Evaluation</Heading>
            <Text>
              Our experienced team provides comprehensive project evaluation services to help you make informed decisions about your mining operations.
            </Text>
            <Text>
              Evaluation services include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Technical feasibility studies</Text>
              <Text>• Economic assessments</Text>
              <Text>• Resource estimation</Text>
              <Text>• Risk analysis</Text>
              <Text>• Investment optimization</Text>
            </VStack>
          </VStack>
          <Box>
            <Image
              src="/images/project-evaluation.jpg"
              alt="Project Evaluation"
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
              src="/images/environmental-consulting.jpg"
              alt="Environmental Consulting"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Environmental Consulting</Heading>
            <Text>
              Our environmental consulting services ensure compliance with regulations while promoting sustainable mining practices.
            </Text>
            <Text>
              Environmental services include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Environmental impact assessments</Text>
              <Text>• Compliance auditing</Text>
              <Text>• Rehabilitation planning</Text>
              <Text>• Waste management strategies</Text>
              <Text>• Sustainability reporting</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={20}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Operational Excellence</Heading>
            <Text>
              We help optimize your mining operations through expert analysis and implementation of best practices.
            </Text>
            <Text>
              Optimization services include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Process optimization</Text>
              <Text>• Cost reduction strategies</Text>
              <Text>• Safety management systems</Text>
              <Text>• Equipment efficiency analysis</Text>
              <Text>• Performance benchmarking</Text>
            </VStack>
          </VStack>
          <Box>
            <Image
              src="/images/operational-excellence.jpg"
              alt="Operational Excellence"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>

        <Box textAlign="center" mt={20}>
          <VStack spacing={4}>
            <Heading as="h2" size="xl">Ready to Transform Your Mining Operations?</Heading>
            <Text fontSize="lg" maxW="container.md">
              Contact our consulting team to discuss how we can help optimize your mining operations and improve your bottom line.
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