import { Box, Container, Grid, GridItem, Heading, Stack, Text,Link } from '@chakra-ui/react'
import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import { Link as ReactLink } from 'react-router-dom';

export default function EquityDetails() {
  return (
    <Stack>
           <Container
                maxW={"8xl"}
                py={{ base: "6", md: "16" }}

            >
                <Stack marginBottom={{base:'40px',md:'80px'}}>
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={{base:'2',md:'4'}}
              alignItems={'center'}
            >
              <GridItem
                colSpan={{ base: 12, md: 12, lg: 8 }}
                alignItems={'flex-start'}
              >
                <Box textAlign={{base:'center',md:'left'}}>
                  <Heading
                    mb={{base:'10px',md:'20px'}}
                    color={'primaryBgDarkBlue'}
                    fontSize={{ base: '20px', md: '36px', lg:'40px' }}
                    fontWeight={'700'}
                    as={'h2'}
                    textAlign={{bsae:'center', lg:'left'}}
                  >
                   Equity Funds
                  </Heading>
                  <Text fontSize={{ base: '12px', md: '18px' }} color={'primaryText.200'}>
                  Equity schemes aim to provide potential for high growth and returns with a relatively high level of risk, by investing in listed securities.
                   Such schemes are mostly actively managed, and are best suited for investors with a long term investment horizon.
                  </Text>
                </Box>
              </GridItem>
              
              <GridItem colSpan={{ base: 12, md: 12, lg: 4 }}>
                <Box textAlign={{base:'center',md:'right'}}>
                <Link as={ReactLink} to={'/register'}>
                  <PrimaryBtn value="Invest Now" />
                  </Link>
                </Box>
              </GridItem>
            </Grid>
          </Stack>
            </Container>
    </Stack>
  )
}
