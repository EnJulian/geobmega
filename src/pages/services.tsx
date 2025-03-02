import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Divider, Button, Icon } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import { MdArrowForward } from 'react-icons/md';

// Custom theme colors
const colors = {
  brand: {
    primary: '#4A5568', // Darker gray (replacing blue)
    secondary: '#F39C12', // Construction yellow
    accent: '#E74C3C', // Safety red
    dark: '#2D3748', // Deep slate
    light: '#F7FAFC', // Light background
  }
};

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Geobmega</title>
        <meta name="description" content="Explore Geobmega's comprehensive services including mining, construction, agriculture, and equipment training - delivered with expertise and sustainability" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Box 
        as="section" 
        bgImage="url('/images/services-hero.jpg')" 
        bgSize="cover" 
        bgPosition="center"
        height="60vh"
        position="relative"
      >
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          width="100%" 
          height="100%" 
          bg="rgba(0, 0, 0, 0.65)" // Changed to a clean dark overlay
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
              size="3xl" 
              color="white"
              fontWeight="bold"
            >
              Our Services
            </Heading>
            <Text 
              fontSize="xl" 
              color="white"
              maxW="container.md"
            >
              Comprehensive solutions across mining, construction, agriculture, and more - delivered with expertise, precision, and a commitment to sustainability.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Overview */}
      <Box as="section" py={20} bg={colors.brand.light}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            {/* Mining Services Section */}
            <VStack spacing={8} align="center" textAlign="center">
              <Heading as="h2" size="2xl" color={colors.brand.dark}>Mining Excellence</Heading>
              <Text fontSize="lg" maxW="container.md" color={colors.brand.dark}>
                Our comprehensive mining services combine technical expertise, innovative technology, and sustainable practices to deliver exceptional results.
              </Text>
            </VStack>
            
            {/* Mining Services Grid */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/exploration.jpg" 
                    alt="Exploration Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Exploration</Heading>
                  <Text>State-of-the-art geological surveys and resource identification using advanced technologies.</Text>
                  <Button 
                    as={NextLink} 
                    href="/mining/exploration" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
              
              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/extraction.jpg" 
                    alt="Extraction Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Extraction</Heading>
                  <Text>Efficient and environmentally conscious mineral extraction processes.</Text>
                  <Button 
                    as={NextLink} 
                    href="/mining/extraction" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
              
              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/processing.jpg" 
                    alt="Processing Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Processing</Heading>
                  <Text>Advanced mineral processing and refining capabilities for maximum yield.</Text>
                  <Button 
                    as={NextLink} 
                    href="/mining/processing" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
              
              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/consulting.jpg" 
                    alt="Consulting Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Consulting</Heading>
                  <Text>Expert advice and solutions for mining operations and environmental management.</Text>
                  <Button 
                    as={NextLink} 
                    href="/mining/consulting" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>

            <Divider borderColor={colors.brand.primary} />

            {/* Construction Services Section */}
            <VStack spacing={8} align="center" textAlign="center">
              <Heading as="h2" size="2xl" color={colors.brand.dark}>Construction Services</Heading>
              <Text fontSize="lg" maxW="container.md" color={colors.brand.dark}>
                Building infrastructure that connects communities and drives economic growth.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/road-construction.jpg" 
                    alt="Road Construction Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Road Construction</Heading>
                  <Text>Expert road construction and maintenance services for all types of infrastructure projects.</Text>
                  <Button 
                    as={NextLink} 
                    href="/construction" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/building-construction.jpg" 
                    alt="Building Construction Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Building Construction</Heading>
                  <Text>Comprehensive building construction services from commercial to residential projects.</Text>
                  <Button 
                    as={NextLink} 
                    href="/construction" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>

            <Divider borderColor={colors.brand.primary} />

            {/* Equipment Training & Rental Section */}
            <VStack spacing={8} align="center" textAlign="center">
              <Heading as="h2" size="2xl" color={colors.brand.dark}>Equipment Training & Rental</Heading>
              <Text fontSize="lg" maxW="container.md" color={colors.brand.dark}>
                Professional training and equipment rental solutions for maximum productivity.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/equipment-training.jpg" 
                    alt="Equipment Training Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Equipment Training</Heading>
                  <Text>Comprehensive training programs for light and heavy equipment operation.</Text>
                  <Button 
                    as={NextLink} 
                    href="/training" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/equipment-rental.jpg" 
                    alt="Equipment Rental Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Equipment Rental</Heading>
                  <Text>Wide range of equipment rental options for mining and construction projects.</Text>
                  <Button 
                    as={NextLink} 
                    href="/training" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>

            <Divider borderColor={colors.brand.primary} />

            {/* Agricultural Services Section */}
            <VStack spacing={8} align="center" textAlign="center">
              <Heading as="h2" size="2xl" color={colors.brand.dark}>Agricultural Services</Heading>
              <Text fontSize="lg" maxW="container.md" color={colors.brand.dark}>
                Expert services for livestock and crop farming operations.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/livestock.jpg" 
                    alt="Livestock Operations" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Livestock Operations</Heading>
                  <Text>Comprehensive solutions for livestock breeding, nutrition, and management.</Text>
                  <Button 
                    as={NextLink} 
                    href="/agriculture" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box p={6} bg="gray.50" borderRadius="lg">
                <VStack align="start" spacing={4}>
                  <Image 
                    src="/images/crop-management.jpg" 
                    alt="Crop Management Services" 
                    borderRadius="lg"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    mb={2}
                  />
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Crop Management</Heading>
                  <Text>Expert crop planning, management, and agricultural consulting services.</Text>
                  <Button 
                    as={NextLink} 
                    href="/agriculture" 
                    size="md"
                    bg={colors.brand.secondary}
                    color={colors.brand.dark}
                    rightIcon={<Icon as={MdArrowForward} />}
                    _hover={{ bg: colors.brand.accent }}
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>

            <Divider borderColor={colors.brand.primary} />

            {/* Sustainability Approach */}
            <Box as="section" py={20} bg="white">
              <Container maxW="container.xl">
                <VStack spacing={12} align="stretch">
                  <VStack spacing={4} align="center" textAlign="center">
                    <Heading as="h2" size="2xl" color={colors.brand.primary}>Our Sustainable Approach</Heading>
                    <Text fontSize="lg" maxW="container.md" color={colors.brand.dark}>
                      Sustainability is integrated into every service we provide, ensuring responsible resource development that benefits both our clients and the planet.
                    </Text>
                  </VStack>
                  
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <VStack spacing={4} p={8} bg={colors.brand.light} borderRadius="md" boxShadow="md" align="flex-start">
                      <Heading as="h3" size="lg" color={colors.brand.primary}>Environmental Protection</Heading>
                      <Text color={colors.brand.dark}>
                        We implement rigorous environmental management systems to minimize our ecological footprint and protect biodiversity in all operational areas.
                      </Text>
                    </VStack>
                    
                    <VStack spacing={4} p={8} bg={colors.brand.light} borderRadius="md" boxShadow="md" align="flex-start">
                      <Heading as="h3" size="lg" color={colors.brand.primary}>Resource Efficiency</Heading>
                      <Text color={colors.brand.dark}>
                        Our operations are designed to maximize resource efficiency, reducing waste and energy consumption while optimizing mineral recovery.
                      </Text>
                    </VStack>
                    
                    <VStack spacing={4} p={8} bg={colors.brand.light} borderRadius="md" boxShadow="md" align="flex-start">
                      <Heading as="h3" size="lg" color={colors.brand.primary}>Community Development</Heading>
                      <Text color={colors.brand.dark}>
                        We actively engage with local communities, creating employment opportunities and supporting social development initiatives in the regions where we operate.
                      </Text>
                    </VStack>
                  </SimpleGrid>
                </VStack>
              </Container>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Box as="section" py={20} bg={colors.brand.primary} color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="2xl">Ready to Get Started?</Heading>
            <Text fontSize="xl" maxW="container.md">
              Contact our team to discuss your project requirements and discover how our comprehensive services can help you achieve your objectives.
            </Text>
            <Button 
              as={NextLink} 
              href="/contact"
              size="lg" 
              bg={colors.brand.secondary}
              color={colors.brand.dark}
              _hover={{ bg: colors.brand.accent }}
              mt={4}
            >
              Request a Consultation
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
}