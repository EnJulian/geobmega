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

export default function Training() {
  return (
    <Box as="main">
      <Box
        height="60vh"
        position="relative"
        backgroundImage="url('/images/training-hero.jpg')"
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
              Equipment Training Services
            </Heading>
            <Text fontSize="xl">
              Professional Training for Maximum Productivity
            </Text>
          </VStack>
        </Box>
      </Box>

      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={5}>
            <Heading as="h2" size="xl">Light Equipment Training</Heading>
            <Text>
              Our comprehensive light equipment training programs ensure operators are proficient and safe in handling various equipment types.
            </Text>
            <Text>
              Training programs include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Compact excavators and loaders</Text>
              <Text>• Small-scale construction equipment</Text>
              <Text>• Safety certification programs</Text>
            </VStack>
            <Button 
              as={NextLink} 
              href="/contact" 
              bg={colors.brand.secondary}
              color={colors.brand.dark}
              _hover={{ bg: colors.brand.accent }}
            >
              Enroll Now
            </Button>
          </VStack>
          <Box>
            <Image
              src="/images/equipment-training.jpg"
              alt="Equipment Training"
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
              src="/images/equipment-rental.jpg"
              alt="Equipment Rental"
              borderRadius="lg"
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
          <VStack align="start" spacing={5} order={{ base: 1, md: 2 }}>
            <Heading as="h2" size="xl">Heavy Equipment Training</Heading>
            <Text>
              Master the operation of heavy machinery with our expert training programs designed for industrial and mining applications.
            </Text>
            <Text>
              Program features include:
            </Text>
            <VStack align="start" spacing={3} pl={5}>
              <Text>• Excavators and bulldozers</Text>
              <Text>• Mining equipment operation</Text>
              <Text>• Advanced safety protocols</Text>
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