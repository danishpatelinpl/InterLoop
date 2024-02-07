import { Box, Container, Flex, Grid, GridItem, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import cicon1 from '../../assets/images/icons/c1.png'
import cicon2 from '../../assets/images/icons/c2.png'
import cicon3 from '../../assets/images/icons/c3.png'
import cicon4 from '../../assets/images/icons/c4.png'
import cicon5 from '../../assets/images/icons/c5.png'
import cicon6 from '../../assets/images/icons/c6.png'

export default function CoreValue() {
    return (
        <Stack>
            <Container maxW={'8xl'} pt={{ base: '6', md: '20' }} px={{ base: 5, "2xl": 0 }} >
                {/* <Box mb={'8'}>
                <Heading as='h2' size={{ base: 'md', md: 'xl' }} mb={'4'}>
                Committed to Group Values and the <br/>highest standards of  <Text as={'span'} color={'#f79e22'} > ethical practices </Text>
            </Heading>
            <Text>Interloop’s Group Values will be the cornerstone of Interloop Asset Management 
</Text>
                </Box> */}
                <Stack pb={{ base: '5', md: '14' }} >
                <Grid
                        templateColumns='repeat(12, 1fr)'
                        gap={{base:'2',lg:'10'}} alignItems={'center'}
                        >
                            <GridItem colSpan={{ base: '12', md: '4' }} textAlign={'center'} >
                            <Box boxShadow='lg' p={'9'} borderRadius={'6'}>
                            <Image src={cicon3} m={'auto'} mb={'4'}/>
                                <Heading  textTransform={'uppercase'} as='h4' size={{ base: 'sm', md: 'md' }} >
                                integrity
                                </Heading>
                                
                                <Text textTransform={'capitalize'} fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'30px'}}>
                                Act with Integrity
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '4' }}  textAlign={'center'}>
                            <Box boxShadow='lg' p={'9'} borderRadius={'6'}>
                            <Image src={cicon2} m={'auto'} mb={'4'}/>
                                <Heading textTransform={'uppercase'} as='h4' size={{ base: 'sm', md: 'md' }} >
                                Care
                                </Heading>
                                <Text textTransform={'capitalize'}  fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'30px'}}>
                               Nurturing a caring culture
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '4' }} textAlign={'center'}>
                            <Box boxShadow='lg' p={'9'} borderRadius={'6'}>
                            <Image src={cicon4} m={'auto'} mb={'4'} />
                                <Heading textTransform={'uppercase'} as='h4' size={{ base: 'sm', md: 'md' }} >
                                accountability
                                </Heading>
                                <Text textTransform={'capitalize'}  fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'30px'}}>
                               accept responsibility ve accountable 
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '4' }} textAlign={'center'}>
                            <Box boxShadow='lg' p={'9'} borderRadius={'6'}>
                            <Image src={cicon1}  m={'auto'} mb={'4'}/>
                                <Heading textTransform={'uppercase'} as='h4' size={{ base: 'sm', md: 'md' }} >
                                    respect
                                </Heading>
                                <Text textTransform={'capitalize'}  fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'30px'}}>
                              respect for environment and people
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '4' }} textAlign={'center'}>
                            <Box boxShadow='lg' p={'9'} borderRadius={'6'}>
                            <Image src={cicon6} m={'auto'} mb={'4'}/>
                                <Heading textTransform={'uppercase'} as='h4' size={{ base: 'sm', md: 'md' }} >
                                excellence
                                </Heading>
                                <Text textTransform={'capitalize'}  fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'30px'}}>
                               achieving the highest standards
                                </Text>
                            </Box>
                        </GridItem>
                        
                        
                        {/* <GridItem colSpan={{ base: '12', md: '6' }} >
                            <Box boxShadow='lg' p={'9'} borderRadius={'6'}>
                                <Flex alignItems={'center'} mb={'7'}>
                                <Image src={cicon5} mr={'4'}/>
                                <Heading as='h4' size={{ base: 'sm', md: 'md' }} >
                                Teamwork
                                </Heading>
                                
                                </Flex>
                                <Text fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'30px'}}>
                                We practice high integrity with ethics at work and in our services. 
                                </Text>
                            </Box>
                        </GridItem> */}
                        

                    </Grid>
                </Stack>
            </Container>
        </Stack>
    )
}
