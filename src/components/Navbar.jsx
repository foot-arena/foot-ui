import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import icon from './dironiyaicon.png';

const NavLink = ({ children, to }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    href={to}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={'center'}
          >
            <Box>
              <Image
                src={icon}
                alt="Dan Abramov"
                height={100}
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink
                key={1}
                to="/"
              >
                Terrains
              </NavLink>

              <NavLink
                key={2}
                to="/reservations"
              >
                Mes reservations
              </NavLink>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: 'none' }}
          >
            <Stack
              as={'nav'}
              spacing={4}
            >
              <NavLink key={1}>
                <Link href="/">Terrains</Link>
              </NavLink>

              <NavLink key={2}>
                <Link href="/reservations">Mes reservations </Link>
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
