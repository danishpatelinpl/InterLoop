import { Container, Flex, Grid, GridItem, Heading, Icon, Stack, Tab, TabList, TabPanel, TabPanels, Tabs,Link, Box } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { Link as ReactLink } from 'react-router-dom';

export default function Downloadfile() {
    return (
        <Stack>
            <Container
                maxW={"8xl"}
                py={{ base: "6", md: "16" }}

            >
                <Tabs>
                    <Grid
                        templateColumns="repeat(12, 1fr)"
                        gap={8}

                    >
                        <GridItem
                            colSpan={{ base: 12, sm: 6, md: 3, lg: 3 }}
                            alignItems={'flex-start'}
                        >
                            <Heading as="h2" size={{ base: "sm", md: "lg" }} mb={'4'}>
                                Downloads
                            </Heading>
                            <TabList display={'inline-block'} border={'0'}>
                                <Tab>Application  Forms</Tab>
                                <Tab>Constitutive Docs</Tab>
                                <Tab>Financial St</Tab>
                                <Tab>Fund Manager Reports</Tab>
                                <Tab>Miscellaneous</Tab>
                            </TabList>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 6, md: 9, lg: 9 }}
                            alignItems={'flex-start'}
                        >

                            <TabPanels>
                                <TabPanel pt={'0'}>
                                    <Heading as="h2" size={{ base: "sm", md: "lg" }} mb={'4'}>
                                        Application  Forms
                                    </Heading>
                                    <Stack spacing={'5'}>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}} w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Application  Forms
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Application  Forms
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Application  Forms
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Application  Forms
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Application  Forms
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Application  Forms
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                    </Stack>
                                </TabPanel>
                                <TabPanel pt={'0'}>
                                    <Heading as="h2" size={{ base: "sm", md: "lg" }} mb={'4'}>
                                    Constitutive Docs
                                    </Heading>
                                    <Stack spacing={'5'}>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Constitutive Docs
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Constitutive Docs
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Constitutive Docs
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Constitutive Docs
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Constitutive Docs
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Constitutive Docs
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                    </Stack>
                                </TabPanel>
                                <TabPanel pt={'0'}>
                                    <Heading as="h2" size={{ base: "sm", md: "lg" }} mb={'4'}>
                                    Financial St
                                    </Heading>
                                    <Stack spacing={'5'}>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Financial St
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Financial St
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Financial St
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Financial St
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Financial St
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Financial St
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                    </Stack>
                                </TabPanel>
                                <TabPanel pt={'0'}>
                                    <Heading as="h2" size={{ base: "sm", md: "lg" }} mb={'4'}>
                                    Fund Manager Reports
                                    </Heading>
                                    <Stack spacing={'5'}>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Fund Manager Reports
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Fund Manager Reports
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Fund Manager Reports
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Fund Manager Reports
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Fund Manager Reports
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Fund Manager Reports
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                    </Stack>
                                </TabPanel>
                                <TabPanel pt={'0'}>
                                    <Heading as="h2" size={{ base: "sm", md: "lg" }} mb={'4'}>
                                    Miscellaneous
                                    </Heading>
                                    <Stack spacing={'5'}>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Miscellaneous
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Miscellaneous
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Miscellaneous
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Miscellaneous
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Miscellaneous
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                        <Flex alignItems={'center'} boxShadow='md' p={{base:'2',lg:'6'}} rounded='md' bg='white'>
                                            <Heading as='h5' size='sm' fontSize={{base:'14px',lg:'17px'}}  w={'100%'} lineHeight={'inherit'}>
                                                <Icon as={HiOutlineDocumentDownload} verticalAlign={'middle'} mr={'2'}></Icon>Miscellaneous
                                            </Heading>
                                            <Box textAlign={'right'} w={'100%'}>
                                            <Link as={ReactLink} to={'/'} color={'#f79e22'} fontSize={{base:'13px',lg:'15px'}} fontWeight={'500'}>Download</Link>
                                            </Box>
                                        </Flex>
                                    </Stack>
                                </TabPanel>
                            </TabPanels>
                        </GridItem>
                    </Grid>




                </Tabs>

            </Container>
        </Stack>
    )
}
