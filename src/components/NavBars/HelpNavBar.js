import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    useDisclosure,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    Container,
   
  } from '@chakra-ui/react';
  import {
    ChevronRightIcon,
    ChevronDownIcon,
    HamburgerIcon,
    CloseIcon,
   
  } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react'



export default function HelpNavBar() {
    const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack borderBottom={'1px solid #edebeb'}> 
    <Container maxW={'8xl'} px={{base: 10, "2xl": 0}} py={5}  >
    <Flex
     flex={{ base: 1, md: 'auto' }}
     ml={{ base: -2 }}
     display={{ base: 'flex', md: 'none' }}>
     <IconButton
       onClick={onToggle}
       icon={
         isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
       }
       variant={'ghost'}
       aria-label={'Toggle Navigation'}
     />
   </Flex>
  <Box justify={'center'} display={{ base: 'none', md: 'flex' }} >
   <HelppageNav />
  </Box>
  <Collapse in={isOpen} animateOpacity>
   <MobileNav />
 </Collapse>
  </Container>
</Stack>
  )
}


const HelppageNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={3}
                  as={ReactLink}
                  to={navItem.href ?? '#'}
                  fontSize={'md'}
                  textTransform={'capitalize'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <HelppageSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

const HelppageSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        as={ReactLink}
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={ReactLink}
          to={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
   
interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Contact Us',
      href: '/Help/Contact',
    },
    {
      label: 'FAQS',
      href: '/Help/Faqs',
    },
    
   
  ];