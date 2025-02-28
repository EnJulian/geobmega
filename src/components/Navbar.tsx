import { Box, Flex, HStack, Link, Button, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const bgColor = useColorModeValue('white', 'gray.800');
  
  // Function to determine if the link is active
  const isActive = (path: string) => router.pathname === path;
  
  return (
    <Box 
      as="nav" 
      position="sticky" 
      top="0"
      zIndex="sticky"
      bg={bgColor}
      boxShadow="md"
      width="100%"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
        mx="auto"
        px={4}
      >
        <Link 
          as={NextLink} 
          href="/"
          fontWeight="bold"
          fontSize="xl"
          _hover={{ textDecoration: 'none' }}
        >
          GEOBMEGA
        </Link>
        
        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }}>
            <Link
              as={NextLink}
              href="/"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/') ? 'bold' : 'medium'}
              color={isActive('/') ? 'blue.500' : 'gray.600'}
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
            >
              Home
            </Link>
            <Link
              as={NextLink}
              href="/about"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/about') ? 'bold' : 'medium'}
              color={isActive('/about') ? 'blue.500' : 'gray.600'}
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
            >
              About
            </Link>
            <Link
              as={NextLink}
              href="/services"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/services') ? 'bold' : 'medium'}
              color={isActive('/services') ? 'blue.500' : 'gray.600'}
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
            >
              Services
            </Link>
          </HStack>
          
          <Button
            as={NextLink}
            href="/contact"
            colorScheme="blue"
            size="md"
            fontWeight="medium"
          >
            Contact Us
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}