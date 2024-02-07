import React from 'react';
import Howitl from '../../assets/images/secimgs/Sign.gif';
import Hi01 from '../../assets/images/icons/hi-01.png';
import Hi02 from '../../assets/images/icons/hi-02.png';
import Hi03 from '../../assets/images/icons/hi-03.png';
import { Link as ReactLink } from 'react-router-dom';
import {
  Container,
  Image,
  Stack,
  Link,
  Text,
  Grid,
  GridItem,
  Box,
  Heading,
  Flex,
  ListItem,
  UnorderedList,
  Table,
  Thead,
  Icon,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export default function HowitWork() {
  return (
    <Stack>
      <Container
        maxW={'8xl'}
        py={{ base: '6', md: '24' }}
        px={{ xl: 16, '2xl': 0 }}
      >
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={'center'}>
          <GridItem colSpan={{ base: 12, md: '6' }}>
            <Box mb={{ base: '6', md: '10' }}>
              <Image
                alt={'mian-r'}
                margin={{
                  base: '0 auto',
                  md: 'auto 0 0 0',
                  xl: 'auto',
                  '2xl': 'auto 0 0 0',
                }}
                w={{
                  base: '80%',
                  md: '450px',
                  lg: '460px',
                  xl: '500px',
                  '2xl': '659px',
                }}
                src={Howitl}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: '6' }}>
            <Stack>
              <Box
                mb={{ base: '3', md: '10' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                <Heading
                  fontFamily={'Montserrat'}
                  as="h4"
                  size={{ base: 'sm', md: 'lg' }}
                  textTransform={'uppercase'}
                  color={'#f79e22'}
                >
                  How it Works?
                </Heading>
                <Heading
                  as="h2"
                  fontFamily={'Montserrat'}
                  size={{ base: 'md', md: '2xl' }}
                  textTransform={'capitalize'}
                >
                  Register in few Easy Steps
                </Heading>
              </Box>
              <Stack spacing={{ base: '4', md: '8' }}>
                <Box>
                  <Flex
                    alignItems={'center'}
                    flexDirection={{ base: 'column', lg: 'row' }}
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    <Box>
                      <Image
                        alt={'Hi01'}
                        margin={'15px auto'}
                        w={'67%'}
                        src={Hi01}
                      />
                    </Box>
                    <Box pl={'4'}>
                      <Heading
                        fontFamily={'Montserrat'}
                        as="h3"
                        fontSize={{ base: '18px', md: '24px' }}
                        mb={{ base: '0', md: '1.5' }}
                        textTransform={'capitalize'}
                      >
                        Create An Account
                      </Heading>
                      <Text
                        fontSize={{ base: '12px', md: '16px' }}
                        fontWeight={'400'}
                        color={'#666e82'}
                        lineHeight={{ md: '24px', base: '20px' }}
                      >
                        To create your account provide your essential
                        information
                        <br />
                        and get onboard with us.
                        <Link as={ReactLink} to={'/register'} color={'#f79e22'}>
                          {' '}
                          Register Here
                        </Link>
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    alignItems={'center'}
                    flexDirection={{ base: 'column', lg: 'row' }}
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    <Box>
                      <Image
                        alt={'Hi02'}
                        margin={'15px auto'}
                        w={'67%'}
                        src={Hi02}
                      />
                    </Box>
                    <Box pl={'4'}>
                      <Heading
                        fontFamily={'Montserrat'}
                        as="h3"
                        fontSize={{ base: '18px', md: '24px' }}
                        mb={{ base: '0', md: '1.5' }}
                        textTransform={'capitalize'}
                      >
                        Verify your Identity
                      </Heading>
                      <Text
                        fontSize={{ base: '12px', md: '16px' }}
                        fontWeight={'400'}
                        color={'#666e82'}
                        lineHeight={{ md: '24px', base: '20px' }}
                      >
                        Complete the identity verification process to secure
                        your
                        <br />
                        account and transactions.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    alignItems={'center'}
                    flexDirection={{ base: 'column', lg: 'row' }}
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    <Box>
                      <Image
                        alt={'Hi03'}
                        margin={'15px auto'}
                        w={'67%'}
                        src={Hi03}
                      />
                    </Box>
                    <Box pl={'4'}>
                      <Heading
                        fontFamily={'Montserrat'}
                        as="h3"
                        fontSize={{ base: '18px', md: '24px' }}
                        mb={{ base: '0', md: '1.5' }}
                        textTransform={'capitalize'}
                      >
                        Start Investing
                      </Heading>
                      <Text
                        fontSize={{ base: '12px', md: '16px' }}
                        fontWeight={'400'}
                        color={'#666e82'}
                        lineHeight={{ md: '24px', base: '20px' }}
                      >
                        You're good to go! Invest in funds, track progress for
                        your
                        <br />
                        investments, and discover what else we have to offer.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
   
      </Container>
    </Stack>
  );
}
