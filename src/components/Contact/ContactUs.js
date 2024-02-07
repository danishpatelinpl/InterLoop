import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Textarea,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  HStack,
  Icon,
  background,
} from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import {
  RiFacebookFill,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterLine,
} from 'react-icons/ri';
import { BiTime } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
export default function ContactUs() {
  const labelStyle = {
    color: '#f79e22',
    fontSize: '14px',
  };
  const infocss = {
    color: '#999999',
    fontSize: '15px',
    fontWeight: '400',
  };
  const Sincon = {
    color: '#fff',
    fontSize: '20px',
    bg: '#f79e22',
    w: '35px',
    h: '35px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
  };

  return (
    <Stack>
      <Container
        maxW={'8xl'}
        px={{ base: 4, '2xl': 0 }}
        py={{ base: '2', md: '24', xl: '14', '2xl': '24' }}
      >
        <Stack>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={6}
            flexDirection={'revert'}
          >
            <GridItem colSpan={{ base: '12', md: '8' }}>
              <Box mb={'7'}>
                <Heading as="h2" size={{ base: 'md', md: 'xl' }} mb={'1'}>
                  Get In Touch
                </Heading>
                <Text
                  fontSize={{ base: '12px', md: '15px' }}
                  fontWeight={'400'}
                  color={'#666e82'}
                >
                  Fill up the form below to contact
                </Text>
              </Box>
              <Flex gap={6} mb={5} flexWrap={'wrap'}>
                <Box w={{ base: '100%', lg: '48%' }}>
                  <FormControl>
                    <FormLabel sx={labelStyle}>First name</FormLabel>
                    <Input h={'55px'} type="text" placeholder="First name" />
                  </FormControl>
                </Box>
                <Box w={{ base: '100%', lg: '48%' }}>
                  <FormControl>
                    <FormLabel sx={labelStyle}>Last name</FormLabel>
                    <Input h={'55px'} type="text" placeholder="Last name" />
                  </FormControl>
                </Box>
              </Flex>
              <Flex gap={6} mb={5} flexWrap={'wrap'}>
                <Box w={{ base: '100%', lg: '48%' }}>
                  <FormControl>
                    <FormLabel sx={labelStyle}>Your Phone</FormLabel>
                    <Input h={'55px'} type="number" placeholder="Enter Number" />
                  </FormControl>
                </Box>
                <Box w={{ base: '100%', lg: '48%' }}>
                  <FormControl>
                    <FormLabel sx={labelStyle}>Your Email</FormLabel>
                    <Input h={'55px'} type="email" placeholder="Your Email" />
                  </FormControl>
                </Box>
              </Flex>
              <Box w={'100%'} mb={5}>
                <FormControl>
                  <FormLabel sx={labelStyle}>Your Message</FormLabel>
                  <Textarea
                    h={'150px'}
                    resize={'none'}
                    type="email"
                    placeholder="Enter Your Message"
                  ></Textarea>
                </FormControl>
              </Box>
              <Box>
                <PrimaryBtn value={'Submit'} w={{ base: '100%', lg: 'auto' }} />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: '12', md: '4' }}>
              <Box>
                <Heading as="h2" size={{ base: 'md', md: 'xl' }} mb={'7'}>
                  Information
                </Heading>
              </Box>
              <Box mb={'5'}>
                <Heading
                  as="h4"
                  size={{ base: 'sm', md: 'sm' }}
                  mb={'5'}
                  textTransform={'uppercase'}
                  color={'#a9a9a9'}
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
              </Box>
              <Box>
                <Heading
                  as="h4"
                  size={{ base: 'sm', md: 'sm' }}
                  mb={'5'}
                  textTransform={'uppercase'}
                  color={'#a9a9a9'}
                >
                  Social Media
                </Heading>
                <HStack>
                  <Link as={ReactLink} sx={Sincon} to={'/'}>
                    <Icon as={RiFacebookFill}></Icon>
                  </Link>
                  <Link as={ReactLink} sx={Sincon} to={'/'}>
                    <Icon as={RiInstagramLine}></Icon>
                  </Link>
                  <Link as={ReactLink} sx={Sincon} to={'/'}>
                    <Icon as={RiYoutubeLine}></Icon>
                  </Link>
                  <Link as={ReactLink} sx={Sincon} to={'/'}>
                    <Icon as={RiTwitterLine}></Icon>
                  </Link>
                </HStack>
              </Box>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}
