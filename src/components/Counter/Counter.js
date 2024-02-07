import { Box, Container, Grid, GridItem, Heading, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import { RiShieldUserLine, RiShieldStarLine, RiPieChart2Line, RiUserStarLine } from 'react-icons/ri'

export default function Counter() {
    return (
        <Stack>
            <Container maxW={'8xl'} pt={{base:'6',md:'20'}} px={{ base:4, "2xl": 0 }} >
                <Stack pb={{base:'5',md:'14'}}>
                    <Grid
                        templateColumns='repeat(8, 1fr)'
                        gap={{base:2,sm:6}} alignItems={'center'}
                        textAlign={'center'}>
                        <GridItem colSpan={{base:'4',md:'2'}} >
                            <Box
                                bg={'rgb(13 24 43 / 15%)'}
                                py={{base:'4',md:'10'}}>
                                <Icon
                                    fontSize={{base:'4xl',md:'6xl'}}
                                    color={'#f79e22'}
                                    as={RiPieChart2Line}>
                                </Icon>
                                <Heading fontFamily={"Montserrat"} as='h4' size={{base:'sm',md:'md'}} py={{base:'2',md:'8'}}>
                                    Total Revenue
                                </Heading>
                                <Heading fontFamily={"Montserrat"} as='h3' size={{base:'md',md:'2xl'}} color={'white'}>
                                    868
                                </Heading>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{base:'4',md:'2'}} >
                            <Box
                                bg={'rgb(13 24 43 / 15%)'}
                                py={{base:'4',md:'10'}}>
                                <Icon
                                    fontSize={{base:'4xl',md:'6xl'}}
                                    color={'#f79e22'}
                                    as={RiUserStarLine}>
                                </Icon>
                                <Heading fontFamily={"Montserrat"} as='h4' size={{base:'sm',md:'md'}} py={{base:'2',md:'8'}}>
                                    Total clients
                                </Heading>
                                <Heading fontFamily={"Montserrat"} as='h3' size={{base:'md',md:'2xl'}} color={'white'}>
                                    3594
                                </Heading>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{base:'4',md:'2'}} >
                            <Box
                                bg={'rgb(13 24 43 / 15%)'}
                                py={{base:'4',md:'10'}}>
                                <Icon
                                    fontSize={{base:'4xl',md:'6xl'}}
                                    color={'#f79e22'}
                                    as={RiShieldStarLine}>
                                </Icon>
                                <Heading fontFamily={"Montserrat"} as='h4' size={{base:'sm',md:'md'}} py={{base:'2',md:'8'}}>
                                    Positive Review
                                </Heading>
                                <Heading fontFamily={"Montserrat"} as='h3' size={{base:'md',md:'2xl'}} color={'white'}>
                                    9384
                                </Heading>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{base:'4',md:'2'}} >
                            <Box
                                bg={'rgb(13 24 43 / 15%)'}
                                py={{base:'4',md:'10'}}>
                                <Icon fontSize={{base:'4xl',md:'6xl'}}
                                    color={'#f79e22'}
                                    as={RiShieldUserLine}>
                                </Icon>
                                <Heading fontFamily={"Montserrat"} as='h4' size={{base:'sm',md:'md'}} py={{base:'2',md:'8'}}>
                                    Team Members
                                </Heading>
                                <Heading fontFamily={"Montserrat"} as='h3' size={{base:'md',md:'2xl'}} color={'white'}>
                                    7986
                                </Heading>
                            </Box>
                        </GridItem>


                    </Grid>
                </Stack>
               
            </Container>
        </Stack>
    )
}
