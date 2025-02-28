import { Box, Container, Heading, Text, VStack, SimpleGrid, FormControl, FormLabel, Input, Textarea, Button, Icon, Flex } from '@chakra-ui/react';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Geobmega</title>
        <meta name="description" content="Get in touch with Geobmega for inquiries about our mining services and solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Box 
        as="section" 
        bgImage="url('/images/contact-hero.jpg')" 
        bgSize="cover" 
        bgPosition="center"
        height="50vh"
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
              Contact Us
            </Heading>
            <Text 
              fontSize="xl" 
              color="white"
              maxW="container.md"
            >
              Reach out to our team to discuss your mining project needs or to learn more about our services.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
            <VStack spacing={8} align="flex-start">
              <Heading as="h2" size="xl">Get In Touch</Heading>
              <Text fontSize="lg">
                Whether you're interested in our services, seeking a partnership, or have questions about our operations, we're here to help. Fill out the form and our team will get back to you promptly.
              </Text>
              
              <VStack spacing={6} align="flex-start" width="100%">
                <Heading as="h3" size="md">Our Offices</Heading>
                
                <Box>
                  <Text fontWeight="bold">Headquarters</Text>
                  <Text>123 Mining Avenue</Text>
                  <Text>Melbourne, Australia 3000</Text>
                  <Text>+61 3 9876 5432</Text>
                </Box>
                
                <Box>
                  <Text fontWeight="bold">North America</Text>
                  <Text>456 Resource Drive</Text>
                  <Text>Denver, CO 80202, USA</Text>
                  <Text>+1 303 555 1234</Text>
                </Box>
                
                <Box>
                  <Text fontWeight="bold">South America</Text>
                  <Text>789 Mineral Street</Text>
                  <Text>Santiago, Chile</Text>
                  <Text>+56 2 2345 6789</Text>
                </Box>
              </VStack>
              
              <VStack spacing={4} align="flex-start">
                <Heading as="h3" size="md">Email Us</Heading>
                <Text>General Inquiries: info@geobmega.com</Text>
                <Text>Business Development: business@geobmega.com</Text>
                <Text>Careers: careers@geobmega.com</Text>
              </VStack>
            </VStack>
            
            <Box 
              bg="white" 
              p={8} 
              borderRadius="md" 
              boxShadow="lg"
            >
              <VStack spacing={6} as="form" width="100%">
                <Heading as="h2" size="lg">Send Us a Message</Heading>
                
                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input placeholder="Your name" size="lg" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input placeholder="Your email" type="email" size="lg" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Company</FormLabel>
                  <Input placeholder="Your company" size="lg" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input placeholder="Message subject" size="lg" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Your message" size="lg" rows={6} />
                </FormControl>
                
                <Button 
                  colorScheme="blue" 
                  size="lg" 
                  width="100%"
                  mt={4}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box as="section" py={10} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={8} align="center">
            <Heading as="h2" size="xl">Our Global Presence</Heading>
            <Box 
              width="100%" 
              height="400px" 
              bg="gray.300" 
              borderRadius="md"
              position="relative"
              overflow="hidden"
            >
              {/* This would be replaced with an actual map component in a real implementation */}
              <Flex 
                position="absolute" 
                top="0" 
                left="0" 
                width="100%" 
                height="100%" 
                justifyContent="center" 
                alignItems="center"
              >
                <Text fontSize="xl" color="gray.600">Interactive Map Would Be Displayed Here</Text>
              </Flex>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
}