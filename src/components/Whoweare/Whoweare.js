import { Box, Container, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import whoweare from '../../assets/images/secimgs/whoweare.jpg';
import Aboutus from '../../assets/images/secimgs/aboutus.png';


export default function Whoweare() {
  return (
    <Stack>
      <Container maxW={'8xl'} px={{ base: 4, "2xl": 0 }} py={{base:4,lg:10}}  >
        <Grid
          templateColumns='repeat(12, 1fr)'
          gap={4} alignItems={'center'}
        >
          <GridItem colSpan={{ base: '12', md: '6' }} >

            <Stack position={'relative'}>
              <Image src={Aboutus} alt={Whoweare} margin={'0 auto'} />
              <Box position={'absolute'} bg={'#fff'} p={'4'} borderRadius={'6'} boxShadow='dark-lg' bottom={'24'} right={'6'} >
                <Heading as='h5' size={{ base: 'xs', md: 'sm' }} >
                  Members <Text as={'span'} fontSize={'2xl'} color={'#f79e22'}>79+</Text>
                </Heading>
              </Box>
            </Stack>
          </GridItem>
          <GridItem colSpan={{ base: '12', md: '5' }} >
            <Box>
              <Heading fontFamily={"Montserrat"} as='h2' size={{ base: 'md', md: '2xl' }} mb={'4'}>
                Who We Are
              </Heading>
              <Text fontSize={{ base: '12px', md: '18px' }} fontWeight={'400'} color={'#666e82'} lineHeight={{ md: '28px', base: '20px' }}>
                We are steadfast partners to our clients in Pakistan because we listen to every one of them. Our full range of funds is one way we’re helping more investors build solid financial futures.We are steadfast partners to our clients in Pakistan because we listen to every one of them. Our full range of funds is one way we’re helping more investors build solid financial futures.We are steadfast partners to our clients in Pakistan because we listen to every one of them. Our full range of funds is one way we’re helping more investors build solid financial futures.We are steadfast partners to our clients in Pakistan because we listen to every one of them.

              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: '12', md: '1' }} ></GridItem>
        </Grid>
      </Container>
      
    </Stack>
  )
}
