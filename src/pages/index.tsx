import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Button, Link } from '@chakra-ui/react';
import Head from 'next/head';
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
          bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
          backdropFilter="blur(2px)"
        />
        <Container maxW="container.xl" height="100%" position="relative">
          <VStack 
            height="100%" 
            justifyContent="center" 
            alignItems="center"
            spacing={8}
            py={10}
            textAlign="center"
          >
            <Heading 
              as="h1" 
              size="4xl" 
              bgGradient={`linear(to-r, ${colors.brand.secondary}, white)`}
              bgClip="text"
              fontWeight="bold"
              letterSpacing="wider"
              textShadow="none"
            >
              GEOBMEGA
            </Heading>
            <Heading 
              as="h2" 
              size="xl" 
              color="white"
              fontWeight="medium"
              letterSpacing="wide"
              textShadow="1px 1px 2px rgba(0,0,0,0.2)"
            >
              Mining Excellence & Sustainability
            </Heading>
            <Text 
              fontSize="xl" 
              color="white"
              maxW="container.md"
              lineHeight="tall"
              textShadow="1px 1px 2px rgba(0,0,0,0.2)"
            >
              Leading the way in responsible mining practices with cutting-edge technology and environmental stewardship.
            </Text>
            <Button 
              as={NextLink} 
              href="/about"
              size="lg" 
              bg={colors.brand.secondary}
              color={colors.brand.dark}
              _hover={{ 
                bg: colors.brand.accent,
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
              transition="all 0.2s"
              mt={6}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="medium"
              borderRadius="md"
            >
              Learn More
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* About Section Preview */}
      <Box as="section" py={24} bg={colors.brand.light}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <VStack spacing={6} align="center" textAlign="center">
              <Heading 
                as="h2" 
                size="2xl" 
                color={colors.brand.dark}
                letterSpacing="tight"
              >
                About Geobmega
              </Heading>
              <Text 
                fontSize="xl" 
                maxW="container.md" 
                color={colors.brand.dark}
                lineHeight="tall"
              >
                Geobmega is a leading mining company committed to sustainable practices and innovative solutions.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="240px">
                  <Image 
                    src="/images/innovation.jpg" 
                    alt="Innovation" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="60%"
                    bgGradient="linear(to-t, rgba(0,0,0,0.7), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={8} align="flex-start">
                  <Heading 
                    as="h3" 
                    size="lg" 
                    color={colors.brand.primary}
                    letterSpacing="tight"
                  >
                    Innovation
                  </Heading>
                  <Text 
                    color={colors.brand.dark}
                    lineHeight="tall"
                  >
                    Pioneering new technologies and methods to improve efficiency and reduce environmental impact.
                  </Text>
                </VStack>
              </Box>
              
              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="240px">
                  <Image 
                    src="/images/sustainability.jpg" 
                    alt="Sustainability" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="60%"
                    bgGradient="linear(to-t, rgba(0,0,0,0.7), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={8} align="flex-start">
                  <Heading 
                    as="h3" 
                    size="lg" 
                    color={colors.brand.primary}
                    letterSpacing="tight"
                  >
                    Sustainability
                  </Heading>
                  <Text 
                    color={colors.brand.dark}
                    lineHeight="tall"
                  >
                    Committed to responsible mining practices that protect and preserve our natural environment.
                  </Text>
                </VStack>
              </Box>
              
              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="240px">
                  <Image 
                    src="/images/community.jpg" 
                    alt="Community" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="60%"
                    bgGradient="linear(to-t, rgba(0,0,0,0.7), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={8} align="flex-start">
                  <Heading 
                    as="h3" 
                    size="lg" 
                    color={colors.brand.primary}
                    letterSpacing="tight"
                  >
                    Community
                  </Heading>
                  <Text 
                    color={colors.brand.dark}
                    lineHeight="tall"
                  >
                    Building strong relationships with local communities through engagement and support programs.
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
            
            <Box textAlign="center">
              <Button 
                as={NextLink} 
                href="/about"
                size="lg" 
                bg={colors.brand.secondary}
                color={colors.brand.dark}
                _hover={{ 
                  bg: colors.brand.accent,
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg'
                }}
                transition="all 0.2s"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="medium"
                borderRadius="md"
              >
                Discover Our Story
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Services Section Preview */}
      <Box as="section" py={24} bg="white">
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <VStack spacing={6} align="center" textAlign="center">
              <Heading 
                as="h2" 
                size="2xl" 
                color={colors.brand.dark}
                letterSpacing="tight"
              >
                Our Services
              </Heading>
              <Text 
                fontSize="xl" 
                maxW="container.md" 
                color={colors.brand.dark}
                lineHeight="tall"
              >
                Comprehensive mining solutions tailored to meet the highest industry standards.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="200px">
                  <Image 
                    src="/images/exploration.jpg" 
                    alt="Exploration Services" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="50%"
                    bgGradient="linear(to-t, rgba(255,255,255,1), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={6} align="flex-start">
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Exploration</Heading>
                  <Text color={colors.brand.dark} lineHeight="tall">
                    State-of-the-art geological surveys and resource identification using advanced technologies.
                  </Text>
                  <Button 
                    as={NextLink} 
                    href="/mining/exploration" 
                    variant="ghost"
                    color={colors.brand.secondary}
                    rightIcon={<span>→</span>}
                    _hover={{ 
                      bg: 'transparent',
                      color: colors.brand.accent,
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="200px">
                  <Image 
                    src="/images/extraction.jpg" 
                    alt="Extraction Services" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="50%"
                    bgGradient="linear(to-t, rgba(255,255,255,1), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={6} align="flex-start">
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Extraction</Heading>
                  <Text color={colors.brand.dark} lineHeight="tall">
                    Efficient and environmentally conscious mineral extraction processes.
                  </Text>
                  <Button 
                    as={NextLink} 
                    href="/mining/extraction" 
                    variant="ghost"
                    color={colors.brand.secondary}
                    rightIcon={<span>→</span>}
                    _hover={{ 
                      bg: 'transparent',
                      color: colors.brand.accent,
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="200px">
                  <Image 
                    src="/images/processing.jpg" 
                    alt="Processing Services" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="50%"
                    bgGradient="linear(to-t, rgba(255,255,255,1), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={6} align="flex-start">
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Processing</Heading>
                  <Text color={colors.brand.dark} lineHeight="tall">
                    Advanced mineral processing and refining capabilities for maximum yield.
                  </Text>
                  <Button 
                    as={NextLink} 
                    href="/mining/processing" 
                    variant="ghost"
                    color={colors.brand.secondary}
                    rightIcon={<span>→</span>}
                    _hover={{ 
                      bg: 'transparent',
                      color: colors.brand.accent,
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="200px">
                  <Image 
                    src="/images/consulting.jpg" 
                    alt="Consulting Services" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="50%"
                    bgGradient="linear(to-t, rgba(255,255,255,1), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={6} align="flex-start">
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Consulting</Heading>
                  <Text color={colors.brand.dark} lineHeight="tall">
                    Expert advice and solutions for mining operations and environmental management.
                  </Text>
                  <Button 
                    as={NextLink} 
                    href="/mining/consulting" 
                    variant="ghost"
                    color={colors.brand.secondary}
                    rightIcon={<span>→</span>}
                    _hover={{ 
                      bg: 'transparent',
                      color: colors.brand.accent,
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="200px">
                  <Image 
                    src="/images/construction-site.jpg" 
                    alt="Construction Services" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="50%"
                    bgGradient="linear(to-t, rgba(255,255,255,1), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={6} align="flex-start">
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Construction</Heading>
                  <Text color={colors.brand.dark} lineHeight="tall">
                    Expert construction services for infrastructure development and building projects.
                  </Text>
                  <Button 
                    as={NextLink} 
                    href="/construction" 
                    variant="ghost"
                    color={colors.brand.secondary}
                    rightIcon={<span>→</span>}
                    _hover={{ 
                      bg: 'transparent',
                      color: colors.brand.accent,
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="200px">
                  <Image 
                    src="/images/farm-equipment.jpg" 
                    alt="Agriculture Services" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="50%"
                    bgGradient="linear(to-t, rgba(255,255,255,1), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={6} align="flex-start">
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Agriculture</Heading>
                  <Text color={colors.brand.dark} lineHeight="tall">
                    Comprehensive agricultural solutions for livestock operations and crop management.
                  </Text>
                  <Button 
                    as={NextLink} 
                    href="/agriculture" 
                    variant="ghost"
                    color={colors.brand.secondary}
                    rightIcon={<span>→</span>}
                    _hover={{ 
                      bg: 'transparent',
                      color: colors.brand.accent,
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>

              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                <Box position="relative" height="200px">
                  <Image 
                    src="/images/equipment-training.jpg" 
                    alt="Equipment Training Services" 
                    width="100%" 
                    height="100%" 
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="50%"
                    bgGradient="linear(to-t, rgba(255,255,255,1), transparent)"
                  />
                </Box>
                <VStack spacing={4} p={6} align="flex-start">
                  <Heading as="h3" size="lg" color={colors.brand.primary}>Equipment Training</Heading>
                  <Text color={colors.brand.dark} lineHeight="tall">
                    Professional training programs for light and heavy equipment operation.
                  </Text>
                  <Button 
                    as={NextLink} 
                    href="/training" 
                    variant="ghost"
                    color={colors.brand.secondary}
                    rightIcon={<span>→</span>}
                    _hover={{ 
                      bg: 'transparent',
                      color: colors.brand.accent,
                      transform: 'translateX(4px)'
                    }}
                    transition="all 0.2s"
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Box as="section" py={20} bg={colors.brand.primary} color="white">
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
              bg={colors.brand.secondary}
              color={colors.brand.dark}
              _hover={{ bg: colors.brand.accent }}
              mt={4}
              borderRadius="md"
            >
              Contact Us
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
}