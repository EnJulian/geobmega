import { Box, Container, Heading, Text, HStack, VStack, Button, Link, Menu, MenuButton, MenuList, MenuItem, IconButton, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';

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

export default function Navbar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isActive = (path: string) => router.pathname === path;

  return (
    <Box as="header" bg="white" boxShadow="md" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl" py={4}>
        <HStack spacing={8} alignItems="center" justify="space-between">
          <Link
            as={NextLink}
            href="/"
            _hover={{ textDecoration: 'none' }}
          >
            <Heading size="lg" color={colors.brand.primary}>Geobmega</Heading>
          </Link>

          <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }}>
            <Link
              as={NextLink}
              href="/"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/') ? 'bold' : 'medium'}
              color={isActive('/') ? colors.brand.secondary : colors.brand.dark}
              _hover={{ textDecoration: 'none', color: colors.brand.secondary }}
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
              color={isActive('/about') ? colors.brand.secondary : colors.brand.dark}
              _hover={{ textDecoration: 'none', color: colors.brand.secondary }}
            >
              About
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                px={2}
                py={1}
                fontWeight={
                  isActive('/services') ||
                  isActive('/construction') ||
                  isActive('/agriculture') ||
                  isActive('/training')
                    ? 'bold'
                    : 'medium'
                }
                color={
                  isActive('/services') ||
                  isActive('/construction') ||
                  isActive('/agriculture') ||
                  isActive('/training')
                    ? colors.brand.secondary
                    : colors.brand.dark
                }
                _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
              >
                Services
              </MenuButton>
              <MenuList borderColor={colors.brand.secondary}>
                <MenuItem as={NextLink} href="/services" color={colors.brand.dark} _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}>All Services</MenuItem>
                <MenuItem as={NextLink} href="/services#mining" color={colors.brand.dark} _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}>Mining Services</MenuItem>
                <MenuItem as={NextLink} href="/construction" color={colors.brand.dark} _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}>Construction</MenuItem>
                <MenuItem as={NextLink} href="/agriculture" color={colors.brand.dark} _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}>Agriculture</MenuItem>
                <MenuItem as={NextLink} href="/training" color={colors.brand.dark} _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}>Equipment Training</MenuItem>
              </MenuList>
            </Menu>
            <Link
              as={NextLink}
              href="/contact"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/contact') ? 'bold' : 'medium'}
              color={isActive('/contact') ? colors.brand.secondary : colors.brand.dark}
              _hover={{ textDecoration: 'none', color: colors.brand.secondary }}
            >
              Contact
            </Link>
          </HStack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            variant="ghost"
            color={colors.brand.dark}
            _hover={{ bg: colors.brand.light }}
          />
        </HStack>
      </Container>

      {/* Mobile menu */}
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        position="fixed"
        top="72px"
        left={0}
        right={0}
        bg="white"
        p={4}
        boxShadow="sm"
        zIndex={9}
      >
        <VStack spacing={4} align="stretch">
          <Link
            as={NextLink}
            href="/"
            px={2}
            py={1}
            rounded="md"
            fontWeight={isActive('/') ? 'bold' : 'medium'}
            color={isActive('/') ? colors.brand.secondary : colors.brand.dark}
            onClick={onClose}
            _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
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
            color={isActive('/about') ? colors.brand.secondary : colors.brand.dark}
            onClick={onClose}
            _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
          >
            About
          </Link>
          <VStack align="stretch" pl={2} spacing={2}>
            <Text fontWeight="bold" color={colors.brand.dark}>Services</Text>
            <Link
              as={NextLink}
              href="/services"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/services') ? 'bold' : 'medium'}
              color={isActive('/services') ? colors.brand.secondary : colors.brand.dark}
              onClick={onClose}
              _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
            >
              All Services
            </Link>
            <Link
              as={NextLink}
              href="/services#mining"
              px={2}
              py={1}
              rounded="md"
              color={colors.brand.dark}
              onClick={onClose}
              _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
            >
              Mining Services
            </Link>
            <Link
              as={NextLink}
              href="/construction"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/construction') ? 'bold' : 'medium'}
              color={isActive('/construction') ? colors.brand.secondary : colors.brand.dark}
              onClick={onClose}
              _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
            >
              Construction
            </Link>
            <Link
              as={NextLink}
              href="/agriculture"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/agriculture') ? 'bold' : 'medium'}
              color={isActive('/agriculture') ? colors.brand.secondary : colors.brand.dark}
              onClick={onClose}
              _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
            >
              Agriculture
            </Link>
            <Link
              as={NextLink}
              href="/training"
              px={2}
              py={1}
              rounded="md"
              fontWeight={isActive('/training') ? 'bold' : 'medium'}
              color={isActive('/training') ? colors.brand.secondary : colors.brand.dark}
              onClick={onClose}
              _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
            >
              Equipment Training
            </Link>
          </VStack>
          <Link
            as={NextLink}
            href="/contact"
            px={2}
            py={1}
            rounded="md"
            fontWeight={isActive('/contact') ? 'bold' : 'medium'}
            color={isActive('/contact') ? colors.brand.secondary : colors.brand.dark}
            onClick={onClose}
            _hover={{ bg: colors.brand.light, color: colors.brand.secondary }}
          >
            Contact
          </Link>
        </VStack>
      </Box>
    </Box>
  );
}