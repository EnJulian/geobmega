import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Button, Link } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Geobmega - Mining Excellence</title>
        <meta name="description" content="Geobmega - Leading the way in sustainable mining solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Box 
        as="section" 
        bgImage="url('/images/hero-mining.jpg')" 
        bgSize="cover" 
        bgPosition="center"
        height="90vh"
        position="relative"
      >
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          width="100%" 
          height="100%" 
          bg="blackAlpha.700"
        />
        <Container maxW="container.xl" height="100%" position="relative">
          <VStack 
            height="100%" 
            justifyContent="center" 
            alignItems="flex-start"
            spacing={6}
            py={10}
          >
            <Heading 
              as="h1" 
              size="4xl" 
              color="white"
              fontWeight="bold"
            >
              GEOBMEGA
            </Heading>
            <Heading 
              as="h2" 
              size="xl" 
              color="white"
              fontWeight="medium"
            >
              Mining Excellence & Sustainability
            </Heading>
            <Text 
              fontSize="xl" 
              color="white"
              maxW="container.md"
            >
              Leading the way in responsible mining practices with cutting-edge technology and environmental stewardship.
            </Text>
            <Button 
              as={NextLink} 
              href="/about"
              size="lg" 
              colorScheme="blue"
              mt={4}
            >
              Learn More
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* About Section Preview */}
      <Box as="section" py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={10} align="stretch">
            <VStack spacing={4} align="center" textAlign="center">
              <Heading as="h2" size="2xl">About Geobmega</Heading>
              <Text fontSize="xl" maxW="container.md">
                Geobmega is a leading mining company committed to sustainable practices and innovative solutions.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
              <VStack spacing={4} p={6} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Image src="/images/innovation.jpg" alt="Innovation" borderRadius="md" height="200px" width="100%" objectFit="cover" />
                <Heading as="h3" size="lg">Innovation</Heading>
                <Text>Pioneering new technologies and methods to improve efficiency and reduce environmental impact.</Text>
              </VStack>
              
              <VStack spacing={4} p={6} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Image src="/images/sustainability.jpg" alt="Sustainability" borderRadius="md" height="200px" width="100%" objectFit="cover" />
                <Heading as="h3" size="lg">Sustainability</Heading>
                <Text>Committed to responsible mining practices that protect and preserve our natural environment.</Text>
              </VStack>
              
              <VStack spacing={4} p={6} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Image src="/images/community.jpg" alt="Community" borderRadius="md" height="200px" width="100%" objectFit="cover" />
                <Heading as="h3" size="lg">Community</Heading>
                <Text>Building strong relationships with local communities through engagement and support programs.</Text>
              </VStack>
            </SimpleGrid>
            
            <Box textAlign="center" mt={8}>
              <Button 
                as={NextLink} 
                href="/about"
                size="lg" 
                colorScheme="blue"
                variant="outline"
              >
                Discover Our Story
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Services Section Preview */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={10} align="stretch">
            <VStack spacing={4} align="center" textAlign="center">
              <Heading as="h2" size="2xl">Our Services</Heading>
              <Text fontSize="xl" maxW="container.md">
                Comprehensive mining solutions tailored to meet the highest industry standards.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <VStack spacing={4} p={6} bg="gray.50" borderRadius="md" align="flex-start">
                <Heading as="h3" size="lg">Exploration</Heading>
                <Text>State-of-the-art geological surveys and resource identification using advanced technologies.</Text>
                <Button as={NextLink} href="/services" variant="link" colorScheme="blue" rightIcon={<span>→</span>}>
                  Learn more
                </Button>
              </VStack>
              
              <VStack spacing={4} p={6} bg="gray.50" borderRadius="md" align="flex-start">
                <Heading as="h3" size="lg">Extraction</Heading>
                <Text>Efficient and environmentally conscious mineral extraction processes.</Text>
                <Button as={NextLink} href="/services" variant="link" colorScheme="blue" rightIcon={<span>→</span>}>
                  Learn more
                </Button>
              </VStack>
              
              <VStack spacing={4} p={6} bg="gray.50" borderRadius="md" align="flex-start">
                <Heading as="h3" size="lg">Processing</Heading>
                <Text>Advanced mineral processing and refining capabilities for maximum yield.</Text>
                <Button as={NextLink} href="/services" variant="link" colorScheme="blue" rightIcon={<span>→</span>}>
                  Learn more
                </Button>
              </VStack>
              
              <VStack spacing={4} p={6} bg="gray.50" borderRadius="md" align="flex-start">
                <Heading as="h3" size="lg">Consulting</Heading>
                <Text>Expert advice and solutions for mining operations and environmental management.</Text>
                <Button as={NextLink} href="/services" variant="link" colorScheme="blue" rightIcon={<span>→</span>}>
                  Learn more
                </Button>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Box as="section" py={20} bg="blue.700" color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="2xl">Ready to Partner with Geobmega?</Heading>
            <Text fontSize="xl" maxW="container.md">
              Contact our team to discuss how we can help with your mining project needs.
            </Text>
            <Button 
              as={NextLink} 
              href="/contact"
              size="lg" 
              colorScheme="whiteAlpha"
              mt={4}
            >
              Contact Us
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
}