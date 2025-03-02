import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

// Custom theme colors
const colors = {
  brand: {
    primary: '#4A5568', // Darker gray
    secondary: '#F39C12', // Construction yellow
    accent: '#E74C3C', // Safety red
    dark: '#2D3748', // Deep slate
    light: '#F7FAFC', // Light background
  }
};

export default function Construction() {
  return (
    <Box as="main">
      <Box
        height="60vh"
        position="relative"
        backgroundImage="url('/images/construction-hero.jpg')"
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
              Construction Services
            </Heading>
            <Text fontSize="xl">
              Building Infrastructure for Tomorrow
            </Text>
          </VStack>
        </Box>
      </Box>

      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Road Construction</Heading>
            <Text>
              Our road construction services encompass everything from highway development to urban road networks. We utilize cutting-edge technology and sustainable practices to deliver durable infrastructure solutions.
            </Text>
            <Button 
              as={NextLink} 
              href="/contact" 
              bg={colors.brand.secondary}
              color={colors.brand.dark}
              _hover={{ bg: colors.brand.accent }}
            >
              Learn More
            </Button>
          </VStack>
          <Box>
            <Image
              src="/images/road-construction.jpg"
              alt="Road Construction"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={20}>
          <Box order={{ base: 2, md: 1 }}>
            <Image
              src="/images/building-construction.jpg"
              alt="Building Construction"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={5} order={{ base: 1, md: 2 }}>
            <Heading as="h2" size="xl">Building Construction</Heading>
            <Text>
              From commercial complexes to residential developments, our building construction services deliver excellence in every project. We prioritize quality, safety, and innovation in all our construction endeavors.
            </Text>
            <Button 
              as={NextLink} 
              href="/contact" 
              bg={colors.brand.secondary}
              color={colors.brand.dark}
              _hover={{ bg: colors.brand.accent }}
            >
              Learn More
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}