import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Tag,
  TagLeftIcon,
  TagLabel,
  HStack,
  StackDivider
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from '../../assets/images/logo/logo2.png';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import LoggedInPic from '../LoggedInPic';
import { FaWhatsapp  } from 'react-icons/fa'
import { useEffect } from 'react';

export default function WithSubnavigation() {
  const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();
  const [TopHeadLinks, setTopHeadLinks] = useState(['Help', 'Faqs', 'News'])
  const [TopHeadLinkUrl, setTopHeadLinkUrl] = useState(['/Help/Contact', '/Help/Faqs', '/News'])
  const infocss = {
    color: '#999999',
    fontSize: '13px',
    fontWeight: '400'
  }

  const user = useSelector(state => state.value)

  useEffect(() => {
    // console.log(user);
  }, [user])


  return (
    <Box w={'full'} id='Header'>
      <Flex justifyContent={'space-between'} className='top-nav' bg={'gray.900'} w='full' py={{ base: 2, md: 2, }} px={{ base: 4, md: 30 }} display={{ base: 'none', lg: 'flex' }}>
        <HStack spacing={6}>
        <Tag size={'lg'} variant='subtle' bg={'transparent'} color={'white'}>
            <TagLeftIcon boxSize='18px' as={FaWhatsapp} color={'#f79e22'} />
            <TagLabel><Link sx={infocss} as={ReactLink} to={'/'}>0320 1114265</Link></TagLabel>
          </Tag>
          <Tag size={'lg'} variant='subtle' bg={'transparent'} color={'white'}>
            <TagLeftIcon boxSize='18px' as={HiOutlinePhone} color={'#f79e22'} />
            <TagLabel><Link sx={infocss} as={ReactLink} to={'/'}>UAN : 021-111-114265</Link></TagLabel>
          </Tag>
          <Tag size={'lg'} variant='subtle' bg={'transparent'} color={'white'}>
            <TagLeftIcon boxSize='18px' as={HiOutlineMail} color={'#f79e22'} />
            <TagLabel><Link sx={infocss} as={ReactLink} to={'/'}>cs@iaml.com.pk</Link></TagLabel>
          </Tag>
         
        </HStack>
        <HStack
          spacing={'4'}
          divider={<StackDivider alignSelf={'auto'} borderColor={'#999'} h={'35%'} />}>
          {
            TopHeadLinks.map((v, i) => {
              return (
                <Link color={'#999999'} fontSize={'13px'} as={ReactLink} key={i} to={TopHeadLinkUrl[i]}>{v}</Link>
              )
            })
          }
        </HStack>

      </Flex>

      <Stack
        direction={'row'}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 4, md: 6 }}
        px={{ base: 4, md: 30 }}
        boxShadow={'base'}
        align={'center'}
        justifyContent={'space-between'}
      >

        <Flex
          ml={{ base: -2 }}
          display={{ base: 'flex', lg: 'none' }}>
          <IconButton
            id='hamb'
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Box as={ReactLink} to={'/'} rel="home" width={{ base: '36%', lg: '11%' }} >
          <Image alt={'Logo'} src={logo} draggable={false}
            margin={'0 auto'}
          />
        </Box>

        <Flex justify={{ base: 'center', md: 'center' }} display={{ base: 'none', lg: 'flex' }}>


          <Flex justify={'center'} display={{ base: 'none', lg: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {
            (user === undefined || user === null) ?
              <>
                <Button
                  _hover={{
                    color: 'primaryHeading.100',
                    _before: {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    }
                  }}
                  _before={{
                    content: `""`,
                    position: 'absolute',
                    w: '100%',
                    h: '3px',
                    transform: 'scaleX(0)',
                    bottom: '-2px',
                    left: '0px',
                    borderRadius: '25px',
                    backgroundColor: "primaryHeading.100",
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                  as={ReactLink}
                  fontSize={{ base: '13px', xl: '17px' }}
                  fontWeight={500}
                  variant={'link'}
                  color={'$666e82'}
                  to={'/login'}>
                  Login
                </Button>
                {/* <Link w={{ base: '120px', xl: 'auto' }} display={{ base: 'none', lg: 'flex' }} onClick={() => navigate('/register')}><PrimaryBtn value={'Get Started'} /></Link> */}
              </>
              :
              <LoggedInPic />

          }

        </Stack>
      </Stack>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
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
                p={{ base: 1 }}
                py={{ base: 5 }}
                as={ReactLink}
                to={navItem.href ?? '#'}
                fontSize={{ base: '13px', xl: '17px' }}
                fontWeight={600}
                color={linkColor}
                transition={'0.3s ease-in-out'}
                position={'relative'}
                fontFamily= {'lato'}
                _hover={{
                  color: 'primaryHeading.100',
                  _before: {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  }
                }}
                _before={{
                  content: `""`,
                  position: 'absolute',
                  w: '100%',
                  h: '3px',
                  transform: 'scaleX(0)',
                  bottom: '-2px',
                  left: '0px',
                  borderRadius: '25px',
                  backgroundColor: "primaryHeading.100",
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.3s ease-in-out'
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
                    <DesktopSubNav key={child.label} {...child} />
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

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      as={ReactLink}
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.900', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'primaryHeading.100' }}
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
          <Icon color={'primaryHeading.100'} w={5} h={5} as={ChevronRightIcon} />
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
      display={{ lg: 'none' }}>
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
        onClick={() => { children === undefined ? document.getElementById('hamb').click() : console.log('hein') }}
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
              <Link onClick={() => { document.getElementById('hamb').click() }} key={child.label} py={2} as={ReactLink} to={child.href}>
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
    label: 'Home',
    href: './',
  },
  {
    label: 'Company',
    children: [
      {
        label: 'Board Of Directors',
        href: '/company/Board-Of-Directors',
      },
      {
        label: 'Management Team',
        href: '/company/Managementteam',
      },
      {
        label: 'Mission & Vision',
        href: '/company/mission',
      },
      {
        label: 'Core Value',
        href: '/company/coreValue',
      },
      // {
      //   label: 'Achievements',
      //   href: '/company/Achievements',
      // },
      {
        label: 'Why Choose Us',
        href: '/company/WhyChooseUs',
      },

    ],
  },
  {
    label: 'Our Services',
    href: '/Services/Mutualfund',
  },
  {
    label: 'How to Invest',
    children: [
      {
        label: 'Cut off Time',
        href: '/Howtoinvest/Cutoftime',
      },
      {
        label: 'Risk Profile',
        href: '/Howtoinvest/Risk',
      },
      {
        label: 'Invest',
        href: '/Howtoinvest/Invest',
      },
    ]

    // href: '/Howtoinvest/HowToInvest',
  },
 
  {
    label: 'Insight & Education',
    // href: '/Insight&education',
    children: [
      {
        label: 'Mutual Fund Basics',
        href: '/Howtoinvest/MutualFundsBasic',
      },
      {
        label: 'Blog',
        href: '/Updates',
      },
      {
        label: 'Videos',
        href: '/Help/Vedios',
      },
      {
        label: 'FAQs',
        href: '/Help/Faqs',
      },

    ],
  },
  {
    label: 'Downloads',
    children: [
      {
        label: 'Fund Manager Reports',
        href: '/Downloads/Fund-manager-reports',
      },
      {
        label: 'Regulatory Documents',
        href: '/Downloads/Regulatorydocuments',
      },
      {
        label: 'Financial Statements',
        href: '/Downloads/Fundfinancialstatements',
      },
      {
        label: 'News/ Announcements',
        href: '/Downloads/Announcementsnews',
      },
      {
        label: 'Application Forms',
        href: '/Downloads/Applicationforms',
      },
      {
        label: 'Assistance for Account Opening & KYC ',
        href: '/Downloads/AssistanceaccountOpeningKyc',
      },
      {
        label: 'Overseas Investors',
        href: '/Downloads/Overseasinvestors',
      },
      {
        label: 'Product Brochures',
        href: '/Downloads/Productbrochures',
      },


    ],
  },
  {
    label: 'Contact Us',
    href: '/Help/Contact',
  },
  {
    label: 'Daily NAV',
    href: '/Downloads/DailyNav',
  },
];