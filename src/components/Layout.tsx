import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = 'Geobmega - Mining Excellence', description = 'Leading the way in sustainable mining solutions' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box as="main" flex="1">
          {children}
        </Box>
        <Box as="footer" py={10} bg="gray.800" color="white" textAlign="center">
          <Box maxW="container.xl" mx="auto" px={4}>
            <Box mb={4} fontWeight="bold" fontSize="lg">GEOBMEGA</Box>
            <Box fontSize="sm">© {new Date().getFullYear()} Geobmega. All rights reserved.</Box>
            <Box mt={2} fontSize="sm">Leading the way in sustainable mining practices with cutting-edge technology and environmental stewardship.</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}