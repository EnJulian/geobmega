import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Flex, Divider } from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Geobmega</title>
        <meta name="description" content="Learn about Geobmega's history, mission, and commitment to sustainable mining practices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Box 
        as="section" 
        bgImage="url('/images/about-hero.jpg')" 
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
              About Geobmega
            </Heading>
            <Text 
              fontSize="xl" 
              color="white"
              maxW="container.md"
            >
              Pioneering sustainable mining solutions with a commitment to excellence and environmental stewardship.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <VStack spacing={8} align="center" textAlign="center">
              <Heading as="h2" size="2xl">Our Story</Heading>
              <Text fontSize="lg" maxW="container.md">
                Founded with a vision to transform the mining industry, Geobmega has grown from a small exploration company to a leader in sustainable mining practices. Our journey is defined by innovation, responsibility, and a deep commitment to the communities we serve.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
              <Image 
                src="/images/company-history.jpg" 
                alt="Geobmega History" 
                borderRadius="md" 
                boxShadow="lg" 
              />
              <VStack align="start" spacing={5}>
                <Heading as="h3" size="xl">Our History</Heading>
                <Text>
                  Established in 2005, Geobmega began as a specialized geological survey company. Over the years, we've expanded our expertise to cover the entire mining value chain, from exploration to extraction and processing.
                </Text>
                <Text>
                  Through strategic investments in technology and talent, we've positioned ourselves at the forefront of the industry, pioneering methods that maximize efficiency while minimizing environmental impact.
                </Text>
              </VStack>
            </SimpleGrid>
            
            <Divider />
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
              <VStack align="start" spacing={5} order={{ base: 2, md: 1 }}>
                <Heading as="h3" size="xl">Our Mission</Heading>
                <Text>
                  At Geobmega, our mission is to deliver exceptional value through responsible resource development. We strive to balance economic growth with environmental protection and social responsibility.
                </Text>
                <Text>
                  We believe that mining can be a force for positive change when conducted with respect for the planet and its people. This belief guides every decision we make and every project we undertake.
                </Text>
              </VStack>
              <Image 
                src="/images/mission.jpg" 
                alt="Our Mission" 
                borderRadius="md" 
                boxShadow="lg" 
                order={{ base: 1, md: 2 }}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box as="section" py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <VStack spacing={4} align="center" textAlign="center">
              <Heading as="h2" size="2xl">Our Values</Heading>
              <Text fontSize="lg" maxW="container.md">
                Our core values shape our culture and guide our actions as we work to achieve our mission.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Integrity</Heading>
                <Text>
                  We conduct our business with the highest ethical standards, ensuring transparency and accountability in all our operations.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Innovation</Heading>
                <Text>
                  We continuously seek new ways to improve our processes, embracing cutting-edge technologies and methodologies to drive efficiency and sustainability.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Sustainability</Heading>
                <Text>
                  We are committed to minimizing our environmental footprint and contributing positively to the communities where we operate.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Safety</Heading>
                <Text>
                  The health and safety of our employees and communities is our top priority, with zero compromise on safety standards.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Collaboration</Heading>
                <Text>
                  We believe in the power of partnerships and work closely with stakeholders to create shared value and mutual success.
                </Text>
              </VStack>
              
              <VStack spacing={4} p={8} bg="white" borderRadius="md" boxShadow="md" align="flex-start">
                <Heading as="h3" size="lg" color="blue.600">Excellence</Heading>
                <Text>
                  We strive for excellence in everything we do, setting high standards and continuously improving our performance.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Leadership Team Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <VStack spacing={4} align="center" textAlign="center">
              <Heading as="h2" size="2xl">Our Leadership</Heading>
              <Text fontSize="lg" maxW="container.md">
                Our experienced leadership team brings diverse expertise and a shared commitment to our mission and values.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <VStack spacing={4} align="center">
                <Image 
                  src="/images/leader1.jpg" 
                  alt="CEO" 
                  borderRadius="full" 
                  boxSize="200px" 
                  objectFit="cover" 
                  boxShadow="md" 
                />
                <Heading as="h3" size="md">Sarah Johnson</Heading>
                <Text fontWeight="bold" color="blue.600">Chief Executive Officer</Text>
                <Text textAlign="center">
                  With over 20 years of experience in the mining industry, Sarah leads our company with vision and integrity.
                </Text>
              </VStack>
              
              <VStack spacing={4} align="center">
                <Image 
                  src="/images/leader2.jpg" 
                  alt="COO" 
                  borderRadius="full" 
                  boxSize="200px" 
                  objectFit="cover" 
                  boxShadow="md" 
                />
                <Heading as="h3" size="md">Michael Chen</Heading>
                <Text fontWeight="bold" color="blue.600">Chief Operations Officer</Text>
                <Text textAlign="center">
                  Michael oversees our global operations, ensuring efficiency, safety, and sustainability across all projects.
                </Text>
              </VStack>
              
              <VStack spacing={4} align="center">
                <Image 
                  src="/images/leader3.jpg" 
                  alt="CTO" 
                  borderRadius="full" 
                  boxSize="200px" 
                  objectFit="cover" 
                  boxShadow="md" 
                />
                <Heading as="h3" size="md">Elena Rodriguez</Heading>
                <Text fontWeight="bold" color="blue.600">Chief Technology Officer</Text>
                <Text textAlign="center">
                  Elena drives our technological innovation, developing solutions that set new standards in the industry.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </>
  );
}