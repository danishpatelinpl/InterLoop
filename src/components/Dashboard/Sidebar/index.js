import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import {
  AiOutlineCalculator,
  AiOutlineBarChart
} from 'react-icons/ai';

import { IconType } from 'react-icons';
import { ReactText } from 'react';
import logo from '../../../assets/images/logo/footerLogo.png';
import { useNavigate } from 'react-router';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'OverView', icon: FiHome, url: '/Dashboard/OverView' },
  { name: 'KYC Details', icon: FiTrendingUp, url: '/Dashboard/KYC' },
  // { name: 'Sahulat with Sale', icon: FiTrendingUp, url: '/Dashboard/sahulat' },
  // { name: 'Subsequent Sale', icon: FiTrendingUp, url: '/Dashboard/subsequent' },
  // { name: 'Digital Account', icon: FiTrendingUp, url: '/Dashboard/digital-account' },
  { name: 'Risk Profiler', icon: FiSettings, url: '/Dashboard/RiskProfiler' },
  { name: 'My Investment', icon: AiOutlineBarChart, url: '/Dashboard/Investment' },
  { name: 'Accounts Statements', icon: AiOutlineCalculator, url: '/Dashboard/AccountStatements' },
  // { name: 'Redemption', icon: FiCompass, url: '/Dashboard/Redemption' },
  // { name: 'Conversion', icon: FiCompass, url: '/Dashboard/Conversion' },
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH={{ base: 'fit-content', lg: '100vh' }}
      bg={useColorModeValue('gray.100', 'gray.900')}
      position={{base:'absolute',lg:'initial'}}
      zIndex={'1'}
      left={'40px'}
      top={'32px'}
      w={{base:'0px', lg:'auto'}}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', lg: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', lg: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={{ base: '0', md: '4' }}>
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('#0d182b')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', lg: 72 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image alt={'Logo'} src={logo} draggable={false} w={'130px'}

        />
        <CloseButton color={'#fff'} display={{ base: 'flex', lg: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  url: String;
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, url, children, ...rest }: NavItemProps) => {

  const navigate = useNavigate();

  return (
    <Link onClick={() => navigate(url)} style={{ textDecoration: 'none', color: '#fff' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        borderTop={'1px solid #1e283a'}
        borderLeft={'2px solid #0d182b'}
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#0d182b',
          color: 'white',
          borderLeft: '2px solid #f79e22'
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            color={'#f79e22'}
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: '35px' }}
      px={{ base: 0, md: 0 }}
      height="auto"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="0px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};