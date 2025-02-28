import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Divider, Button, Icon } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Geobmega</title>
        <meta name="description" content="Explore Geobmega's comprehensive mining services including exploration, extraction, processing, and consulting" />
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
              Comprehensive mining solutions delivered with expertise, precision, and a commitment to sustainability.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Overview */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <VStack spacing={8} align="center" textAlign="center">
              <Heading as="h2" size="2xl">Mining Excellence</Heading>
              <Text fontSize="lg" maxW="container.md">
                At Geobmega, we offer end-to-end mining services that combine technical expertise, innovative technology, and sustainable practices to deliver exceptional results for our clients.
              </Text>
            </VStack>
            
            {/* Exploration Service */}
            <Box id="exploration">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                <Image 
                  src="/images/exploration.jpg" 
                  alt="Exploration Services" 
                  borderRadius="md" 
                  boxShadow="lg" 
                />
                <VStack align="start" spacing={5}>
                  <Heading as="h3" size="xl">Exploration</Heading>
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
              </SimpleGrid>
            </Box>
            
            <Divider />
            
            {/* Extraction Service */}
            <Box id="extraction">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                <VStack align="start" spacing={5} order={{ base: 2, md: 1 }}>
                  <Heading as="h3" size="xl">Extraction</Heading>
                  <Text>
                    Our extraction operations combine efficiency with environmental responsibility, utilizing innovative methods that maximize yield while minimizing ecological impact.
                  </Text>
                  <Text>
                    Our extraction expertise includes:
                  </Text>
                  <VStack align="start" spacing={3} pl={5}>
                    <Text>• Open-pit mining with advanced planning and design</Text>
                    <Text>• Underground mining with strict safety protocols</Text>
                    <Text>• Specialized extraction for various mineral types</Text>
                    <Text>• Water management and conservation systems</Text>
                    <Text>• Progressive site rehabilitation</Text>
                  </VStack>
                </VStack>
                <Image 
                  src="/images/extraction.jpg" 
                  alt="Extraction Services" 
                  borderRadius="md" 
                  boxShadow="lg" 
                  order={{ base: 1, md: 2 }}
                />
              </SimpleGrid>
            </Box>
            
            <Divider />
            
            {/* Processing Service */}
            <Box id="processing">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                <Image 
                  src="/images/processing.jpg" 
                  alt="Processing Services" 
                  borderRadius="md" 
                  boxShadow="lg" 
                />
                <VStack align="start" spacing={5}>
                  <Heading as="h3" size="xl">Processing</Heading>
                  <Text>
                    Our mineral processing facilities employ advanced technologies to transform raw materials into high-quality products while maintaining strict environmental standards.
                  </Text>
                  <Text>
                    Our processing capabilities include:
                  </Text>
                  <VStack align="start" spacing={3} pl={5}>
                    <Text>• Crushing and grinding optimization</Text>
                    <Text>• Flotation and gravity separation</Text>
                    <Text>• Hydrometallurgical processing</Text>
                    <Text>• Tailings management and recycling</Text>
                    <Text>• Quality control and assurance</Text>
                  </VStack>
                </VStack>
              </SimpleGrid>
            </Box>
            
            <Divider />
            
            {/* Consulting Service */}
            <Box id="consulting">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                <VStack align="start" spacing={5} order={{ base: 2, md: 1 }}>
                  <Heading as="h3" size="xl">Consulting</Heading>
                  <Text>
                    Our team of industry experts provides comprehensive consulting services to optimize mining operations, improve sustainability, and ensure regulatory compliance.
                  </Text>
                  <Text>
                    Our consulting services cover:
                  </Text>
                  <VStack align="start" spacing={3} pl={5}>
                    <Text>• Feasibility studies and project evaluation</Text>
                    <Text>• Environmental impact assessments</Text>
                    <Text>• Operational efficiency audits</Text>
                    <Text>• Safety management systems</Text>
                    <Text>• Community engagement strategies</Text>
                  </VStack>
                </VStack>
                <Image 
                  src="/images/consulting.jpg" 
                  alt="Consulting Services" 
                  borderRadius="md" 
                  boxShadow="lg" 
                  order={{ base: 1, md: 2 }}
                />
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Sustainability Approach */}
      <Box as="section" py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <VStack spacing={4} align="center" textAlign="center">
              <Heading as="h2" size="2xl">Our Sustainable Approach</Heading>
              <Text fontSize="lg" maxW="container.md">
                Sustainability is integrated into every service we provide, ensuring responsible resource development that benefits both our clients and the planet.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Environmental Protection</Heading>
                <Text>
                  We implement rigorous environmental management systems to minimize our ecological footprint and protect biodiversity in all operational areas.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Resource Efficiency</Heading>
                <Text>
                  Our operations are designed to maximize resource efficiency, reducing waste and energy consumption while optimizing mineral recovery.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Community Development</Heading>
                <Text>
                  We actively engage with local communities, creating employment opportunities and supporting social development initiatives in the regions where we operate.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Box as="section" py={20} bg="blue.700" color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="2xl">Ready to Get Started?</Heading>
            <Text fontSize="xl" maxW="container.md">
              Contact our team to discuss your project requirements and discover how our services can help you achieve your mining objectives.
            </Text>
            <Button 
              as={NextLink} 
              href="/contact"
              size="lg" 
              colorScheme="whiteAlpha"
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