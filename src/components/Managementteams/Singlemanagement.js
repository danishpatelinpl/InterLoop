import { Box, Container, Divider, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'

import React from 'react'

export default function Singlemanagement({ Teamimg,TeamName, Teamdesignation, Teamdetail, TeamAdditionalInfo }) {
  return (
    <>
     <Stack>
            <Container maxW={'8xl'} px={{ base: 10, "2xl": 0 }} py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}>
                <Stack>
                    <Grid
                        templateColumns='repeat(12, 1fr)'
                       
                        gap={8}
                    >
                        <GridItem colSpan={{ base: '12', md: '4' }} >
                            <Box borderRadius={'12px'} overflow={'hidden'}>
                                <Image
                                    alt={'d-1'}
                                    src={Teamimg}
                                    w={'100%'}
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '8' }} >
                            <Box mb={'14'}>
                                <Heading as='h5' fontSize={{ base: '18px', md: '35px' }} mb={{ base: '0', md: '1.5' }} color={'#0d182b'}>
                                    {TeamName}
                                    <Text as='h6' fontSize={{ base: '18px', md: '16px' }} color={'#f79e22'}>{Teamdesignation}</Text>
                                </Heading>
                                <Divider borderWidth={'1px'} borderColor={'#c9c0c0'} my={'2'} />
                                <Text whiteSpace={'pre-line'} fontSize={{ base: '12px', md: '18px' }} fontWeight={'400'} color={'#666e82'} lineHeight={{ md: '35px', base: '20px' }}>
                                    {Teamdetail}
                                </Text>
                            </Box>
                            <Box boxShadow='lg' p='6' rounded='md'>
                                <Text
                                    borderLeft={'2px solid #f79e22'}
                                    pl={'4'}
                                    fontSize={{ base: '12px', md: '21px' }}
                                    fontWeight={'400'}
                                    color={'#0d182b'}
                                    lineHeight={{ md: '35px', base: '20px' }}>{TeamAdditionalInfo}</Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    </>
  )
}
