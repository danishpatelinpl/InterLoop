import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  Image,
  Heading,
  Grid,
  GridItem,
  Tag,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react';
import FooterLogo from '../../assets/images/logo/footerLogo.png';
import { Link as ReactLink } from 'react-router-dom';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { BiTime } from 'react-icons/bi'
import { FaWhatsapp  } from 'react-icons/fa'

export default function Footer() {

  const infocss = {
    color: '#999999',
    fontSize: '15px',
    fontWeight: '400'
}

  const footerLinks = {
    pl: '0px',
    color: '#a6a6a6',
    mt: { base: '2px', md: '20px' },
    fontSize: { base: '13px', md: '16px' },
  };

  return (
    <Box id="Footer">
      <Box
        bgColor={'primaryBgDarkBlue.100'}
        pt={{ base: '30px', md: '70px' }}
        pb={{ base: '30px', md: '60px', lg: '60px', '2xl': '100px' }}
        px={{ base: '10px', md: '30px', '2xl': 0 }}
      >
        <Container maxW={'8xl'}>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={4}
            mb={{ base: '10px', md: '80px' }}
          >
            <GridItem
              colSpan={{ base: 12, md: 5, lg: 4 }}
              alignItems={'center'}
            >
              <Stack spacing={6}>
                <Box>
                  <Image
                    width={{ base: '50%', md: '80%', lg: '60%' }}
                    alt="Logo"
                    src={FooterLogo}
                  />
                </Box>
              </Stack>
            </GridItem>
            <GridItem
              display={{ base: 'none', md: 'block' }}
              colSpan={{ base: 1, md: 2, lg: 4 }}
            />
            <GridItem colSpan={{ base: 12, md: 5, lg: 4 }}>
              {/* <Box>
                <Text fontSize={{ base: '12px', md: '16px' }} color={"primaryText.100"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</Text>
              </Box> */}
            </GridItem>
          </Grid>

          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={4}
            className="footerLinks"
          >
            <GridItem
              colSpan={{ base: 12, md: 6, lg: 3 }}
              alignItems={'flex-start'}
            >
              <Stack spacing={{ base: '1', md: '6', xl: '3', '2xl': '6' }}>
                <Heading
                  color={'primaryHeading.100'}
                  fontSize={'20px'}
                  fontWeight={'600'}
                  mb={{ base: '2px', md: '30px', xl: '10px', '2xl': '40px' }}
                  mt={{ base: '5px', md: '20px' }}
                  as={'h6'}
                >
                  Quick Links
                </Heading>
                <Link
                  sx={footerLinks}
                  as={ReactLink}
                  to={'/Howtoinvest/HowToInvest'}
                >
                  Investments
                </Link>
                <Link sx={footerLinks} as={ReactLink} to={'/Funds/Mutualfund'}>
                  Funds
                </Link>
                <Link
                  sx={footerLinks}
                  as={ReactLink}
                  to={'/Howtoinvest/MutualFundsBasic'}
                >
                  Education & Insights
                </Link>
                <Link
                  sx={footerLinks}
                  as={ReactLink}
                  to={'/company/who-we-are'}
                >
                  Company
                </Link>
                <Link sx={footerLinks} as={ReactLink} to={'/Help/Faqs'}>
                  Faqs
                </Link>
              </Stack>
            </GridItem>
            <GridItem
              colSpan={{ base: 12, md: 6, lg: 3 }}
              alignItems={'flex-start'}
            >
              <Stack
                spacing={{ base: '1', md: '6', xl: '3', '2xl': '6' }}
                pr={'30px'}
              >
                <Heading
                  color={'primaryHeading.100'}
                  fontSize={'20px'}
                  fontWeight={'600'}
                  mb={{ base: '5px', md: '30px', xl: '10px', '2xl': '40px' }}
                  mt={{ base: '5px', md: '20px' }}
                  as={'h6'}
                >
                  Karachi Office
                </Heading>
                <Text color={'#a6a6a6'}>
                  Suite 205 2<sup>nd</sup> Floor | The Forum Clifton Block 9 |
                  Khayaban-e-Roomi | Karachi
                </Text>
                {/* <a href='tel:922135290997' style={{color: '#a6a6a6'}}>T: +92-21-3520997</a> */}
                {/* <Link sx={footerLinks} as={ReactLink} to={'/'}>Toll Free: 0800-12345</Link>
                <Link sx={footerLinks} as={ReactLink} to={'/'}>UAN: (021)-111-111-123</Link>
                <Link sx={footerLinks} as={ReactLink} to={'/'}>Fax: 012-31234567</Link>
                <Link sx={footerLinks} as={ReactLink} to={'/'}>Company</Link> */}
              </Stack>
            </GridItem>
            {/* <GridItem
              colSpan={{ base: 12, md: 6, lg: 3 }}
              alignItems={'flex-start'}
            >
              <Stack
                spacing={{ base: '1', md: '6', xl: '3', '2xl': '6' }}
                pr={'30px'}
              >
                <Heading
                  color={'primaryHeading.100'}
                  fontSize={'20px'}
                  fontWeight={'600'}
                  mb={{ base: '5px', md: '30px', xl: '10px', '2xl': '40px' }}
                  mt={{ base: '5px', md: '20px' }}
                  as={'h6'}
                >
                  Islamabad Office
                </Heading>
                <Text color={'#a6a6a6'}>
                  Plot No 29 | Street No 40 | G 10/4 | Islamabad
                </Text>
      
              </Stack>
            </GridItem> */}
            <GridItem
              colSpan={{ base: 12, md: 6, lg: 3 }}
              alignItems={'flex-start'}
            >
              <Stack
                spacing={{ base: '1', md: '6', xl: '3', '2xl': '6' }}
                pr={'30px'}
              >
                <Heading
                  color={'primaryHeading.100'}
                  fontSize={'20px'}
                  fontWeight={'600'}
                  mb={{ base: '5px', md: '30px', xl: '10px', '2xl': '40px' }}
                  mt={{ base: '5px', md: '20px' }}
                  as={'h6'}
                >
                  Contact Us
                </Heading>
                <Stack spacing={3}>
                
            
                   <Tag
                    size={'lg'}
                    variant="subtle"
                    bg={'transparent'}
                    color={'white'}
                  >
                    <TagLeftIcon
                      boxSize="18px"
                      as={FaWhatsapp}
                      color={'#f79e22'}
                    />
                    <TagLabel>
                      <Link sx={infocss} as={ReactLink} to={'/'}>
                        0320 1114265
                      </Link>
                    </TagLabel>
                  </Tag>
                  <Tag
                    size={'lg'}
                    variant="subtle"
                    bg={'transparent'}
                    color={'white'}
                  >
                    <TagLeftIcon
                      boxSize="18px"
                      as={HiOutlinePhone}
                      color={'#f79e22'}
                    />
                    <TagLabel>
                      <Link sx={infocss} as={ReactLink} to={'/'}>
                      UAN : 021-111-114265
                      </Link>
                    </TagLabel>
                  </Tag>
                 
                  <Tag
                    size={'lg'}
                    variant="subtle"
                    bg={'transparent'}
                    color={'white'}
                  >
                    <TagLeftIcon
                      boxSize="18px"
                      as={HiOutlineMail}
                      color={'#f79e22'}
                    />
                    <TagLabel>
                      <Link sx={infocss} as={ReactLink} to={'/Help/Contact'}>
                        cs@iaml.com.pk
                      </Link>
                    </TagLabel>
                  </Tag>
                  <Tag
                    size={'lg'}
                    variant="subtle"
                    bg={'transparent'}
                    color={'white'}
                  >
                    <TagLeftIcon boxSize="18px" as={BiTime} color={'#f79e22'} />
                    <TagLabel>
                      <Link sx={infocss} as={ReactLink} to={'/'}>
                        Monday-Friday 9AM TO 6PM
                      </Link>
                    </TagLabel>
                  </Tag>
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box
        bgColor={'#192e4f'}
        py={{ base: '15px', md: '30px' }}
        px={{ xl: 16, '2xl': 0 }}
      >
        <Container maxW={'8xl'}>
          <Stack
            direction={'row'}
            gap={'30px'}
            justifyContent={{ base: 'space-evenly', md: 'space-between' }}
          >
            <Box color={'#fff'}>
              &copy; Copyright. All rights reserved by{' '}
              <Link
                _hover={{
                  color: 'primaryHeading.100',
                }}
                fontSize={{ base: '12px', md: '16px' }}
                color={'white'}
                as={ReactLink}
                to="/"
              >
                <Text as={'span'} color={'#f79e22'}>Interloop Asset Management Limited.</Text>
              </Link>
            </Box>
            <Box color={'#fff'}>
              Managed by{' '}
              <Link
                
                target={'_blank'}
                _hover={{
                  color: 'primaryHeading.100',
                }}
                fontSize={{ base: '12px', md: '16px' }}
                color={'white'}
               
                href={'https://innovative-net.com/'}
               
              >
               <Text as={'span'} color={'#f79e22'}>Innovative Network</Text> 
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
