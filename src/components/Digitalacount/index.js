import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import {
  RiShieldUserLine,
  RiShieldStarLine,
  RiPieChart2Line,
  RiUserStarLine,
} from 'react-icons/ri';

export default function Digitalaccount() {
  return (
    <>
      <Stack>
        <Container
          maxW={'8xl'}
          pt={{ base: '6', md: '20' }}
          px={{ base: 4, '2xl': 0 }}
        >
          <Stack>
            <Heading mb={'8'} textTransform={'capitalize'} fontSize={'40px'}>
              Open & manage your account
            </Heading>
          </Stack>
          <Stack pb={{ base: '5', md: '14' }}>
            <Grid
              templateColumns="repeat(6, 1fr)"
              gap={{ base: 2, sm: 6 }}
              alignItems={'center'}
            >
              <GridItem colSpan={{ base: '4', md: '2' }}>
                <Box
                minH={'435px'}
                  bg={'rgb(13 24 43 / 15%)'}
                  py={{ base: '4', md: '10' }}
                  px={{ base: '4', md: '8' }}
                >
                  <Heading
                    fontFamily={'Montserrat'}
                    as="h4"
                    fontSize={'25px'}
                    py={{ base: '2', md: '4' }}
                  >
                    Sahulat Sarmayakari Account
                  </Heading>
                  <Text fontSize={'16px'}>
                    Sahulat Sarmayakari Account can be opened by Pakistani
                    individuals having valid identification document
                    (CNIC/SNIC/Form-B). The maximum limit of investment in this
                    account is Rs. 1,000,000. Investors can choose from a wide
                    array of Mutual & Pension Funds with Value Added Services.
                  </Text>
                  <Heading
                    fontFamily={'Montserrat'}
                    as="h4"
                    fontSize={'18px'}
                    py={{ base: '2', md: '4' }}
                  >
                    Minimum Required Documents
                  </Heading>
                  <UnorderedList>
                    <ListItem>Valid Identification Document (CNIC/SNIC)</ListItem>
                    <ListItem>Guardian CNIC (In Case of Minor Account)</ListItem>
                    <ListItem>Form-B of Minor (In Case of Minor Account)</ListItem>
                    <ListItem>Zakat Declaration CZ-50 (If Applicable)</ListItem>
                  </UnorderedList>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: '4', md: '2' }}>
              <Box
              minH={'435px'}
                  bg={'rgb(13 24 43 / 15%)'}
                  py={{ base: '4', md: '10' }}
                  px={{ base: '4', md: '8' }}
                >
                  <Heading
                    fontFamily={'Montserrat'}
                    as="h4"
                    fontSize={'25px'}
                    py={{ base: '2', md: '4' }}
                  >
                   Sarmayakari Account
                  </Heading>
                  <Text fontSize={'16px'}>
                  Sarmayakari Accounts can be opened by Pakistani Individuals having valid identification document (CNIC/SNIC/NICOP/SNICOP/POC/Form-B). Investors can choose from a wide array of Mutual & Pension Funds with Value Added Services.
                  </Text>
                  <Heading
                    fontFamily={'Montserrat'}
                    as="h4"
                    fontSize={'18px'}
                    py={{ base: '2', md: '4' }}
                  >
                    Minimum Required Documents
                  </Heading>
                  <UnorderedList>
                    <ListItem>Valid Identification Document (CNIC / SNIC / NICOP / SNICOP / POC)</ListItem>
                    <ListItem>Source of Income</ListItem>
                    <ListItem>Form-B of Minor (In Case of Minor Account)</ListItem>
                    <ListItem>Zakat Declaration CS-50 (If Applicable)</ListItem>
                  </UnorderedList>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: '4', md: '2' }}>
                <Box
                minH={'435px'}
                  bg={'rgb(13 24 43 / 15%)'}
                  py={{ base: '4', md: '10' }}
                  px={{ base: '4', md: '10' }}
                >
                  <Heading
                    fontFamily={'Montserrat'}
                    as="h4"
                    size={{ base: 'sm', md: 'md' }}
                    py={{ base: '2', md: '4' }}
                  >
                    Roshan Digital Account
                  </Heading>
                  <Text mb={20}>
                    Roshan Digital Account Opening for overseas Pakistani
                    Individuals.
                  </Text>
                  <Heading color={'#f79e22'} fontSize={'20px '} textAlign={'center'}>Launching Soon</Heading>
                </Box>
              </GridItem>
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
