import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from 'next/head';

export default function Extraction() {
  return (
    <Box as="main">
      <Head>
        <title>Extraction Services - Geobmega</title>
        <meta name="description" content="Efficient and environmentally conscious mineral extraction services using innovative methods" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        height="60vh"
        position="relative"
        backgroundImage="url('/images/extraction-hero.jpg')"
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
              Extraction Services
            </Heading>
            <Text fontSize="xl">
              Efficient and Sustainable Mineral Extraction
            </Text>
          </VStack>
        </Box>
      </Box>

      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Surface Mining Excellence</Heading>
            <Text>
              Our extraction operations combine efficiency with environmental responsibility, utilizing innovative methods that maximize yield while minimizing ecological impact.
            </Text>
            <Text>
              Our surface mining expertise includes:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Open-pit mining with advanced planning and design</Text>
              <Text>• Precision drilling and blasting</Text>
              <Text>• Efficient material handling systems</Text>
              <Text>• Progressive site rehabilitation</Text>
              <Text>• Environmental monitoring and protection</Text>
            </VStack>
          </VStack>
          <Box>
            <Image
              src="/images/extraction.jpg"
              alt="Extraction Services"
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
              src="/images/surface-mining.jpg"
              alt="Surface Mining Operations"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Underground Mining</Heading>
            <Text>
              Our underground mining operations prioritize safety while maximizing resource recovery through advanced techniques and technology.
            </Text>
            <Text>
              Underground capabilities include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Shaft sinking and tunnel development</Text>
              <Text>• Long-hole and room-and-pillar mining</Text>
              <Text>• Advanced ventilation systems</Text>
              <Text>• Ground support and rock mechanics</Text>
              <Text>• Emergency response systems</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={20}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Environmental Management</Heading>
            <Text>
              Our commitment to environmental stewardship ensures responsible resource extraction with minimal ecological impact.
            </Text>
            <Text>
              Environmental measures include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Water management and recycling</Text>
              <Text>• Dust suppression systems</Text>
              <Text>• Noise reduction measures</Text>
              <Text>• Biodiversity protection</Text>
              <Text>• Waste management and recycling</Text>
            </VStack>
          </VStack>
          <Box>
            <Image
              src="/images/environmental-mining.jpg"
              alt="Environmental Mining Management"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>

        <Box textAlign="center" mt={20}>
          <VStack spacing={4}>
            <Heading as="h2" size="xl">Ready to Optimize Your Extraction Operations?</Heading>
            <Text fontSize="lg" maxW="container.md">
              Contact our team to discuss your extraction requirements and discover how our expertise can help you achieve efficient and sustainable mining operations.
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