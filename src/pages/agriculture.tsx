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

export default function Agriculture() {
  return (
    <Box as="main">
      <Box
        height="60vh"
        position="relative"
        backgroundImage="url('/images/agriculture-hero.jpg')"
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
              Agricultural Services
            </Heading>
            <Text fontSize="xl">
              Cultivating Success in Agriculture
            </Text>
          </VStack>
        </Box>
      </Box>

      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Livestock Operations</Heading>
            <Text>
              Our livestock operations focus on breeding excellence and sustainable animal husbandry practices. We provide comprehensive solutions for livestock farmers.
            </Text>
            <Text>
              Our services include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Livestock breeding and nutrition</Text>
              <Text>• Animal health management</Text>
              <Text>• Farm infrastructure optimization</Text>
            </VStack>
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
              src="/images/livestock.jpg"
              alt="Livestock Operations"
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
              src="/images/crop-management.jpg"
              alt="Crop Management"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={5} order={{ base: 1, md: 2 }}>
            <Heading as="h2" size="xl">Crop Management</Heading>
            <Text>
              Our crop management services help farmers optimize their yields through advanced agronomy practices and sustainable farming techniques. We specialize in various crops including vegetables and cashew cultivation.
            </Text>
            <Text>
              Management services include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Crop planning and rotation</Text>
              <Text>• Soil management and fertility</Text>
              <Text>• Pest and disease control</Text>
            </VStack>
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