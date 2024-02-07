import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Container, Heading, Stack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Grid, GridItem, Link } from '@chakra-ui/react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import Accordian from './Accordian'
import { Link as ReactLink } from 'react-router-dom'

export default function AskedQuestions() {
    return (
        <>
            <Stack
                pt={{ base: '50px', md: '100px' }}
                position={'relative'}
                mt={'0 !important'}
                _before={{
                    content: '""',
                    position: 'absolute',
                    w: '100%',
                    h: '450px',
                    bgGradient: 'linear(to-b, #e4e8ef, #d1dbe6)',
                    zIndex: '-1',
                    top: '0px',

                }}
            >
                <Container maxW={'8xl'} px={{ base: '15px', md: '30px' }}>
                    <Stack maxW={{ base: '100%', md: '60%' }} marginX={'auto'} mb={{ base: '20px', md: '70px' }}>
                        <Box textAlign={'center'}>
                            <Heading as={'h5'} textTransform={'uppercase'} size={{ base: 'sm', md: 'md', lg: 'lg' }} marginBottom={{ base: '10px', md: '20px' }} fontWeight='700' color={'primaryHeading.100'}>Insights & Education</Heading>
                            <Heading as={'h2'} fontSize={{ base: '20px', md: '30px', lg: '42px' }} marginBottom={{ base: '10px', md: '35px' }} fontWeight='700' color={'primaryBgDarkBlue.100'}>Frequently Asked Questions</Heading>
                            <Text fontSize={{ base: '12px', md: '18px' }} color={'primaryText.200'}>The purpose of lorem ipsum is to create a natural looking block of text that doesn't distract from the layout laying out pages with meaningle</Text>
                        </Box>
                    </Stack>
                    <Stack pb={'70px'}>
                    <Accordian />
                        {/* <Grid
                            templateColumns='repeat(12, 1fr)'
                            gap={{ base: '0', md: '4' }}
                            mb={{ base: '10px', md: '80px' }}
                        >
                            <GridItem colSpan={{ base: 12, md: 6, lg: 6 }} alignItems={'flex-start'} >
                                <Stack spacing={{ base: '2', md: '6' }}>
                                    <Accordian />
                                </Stack>
                            </GridItem>
                            <GridItem colSpan={{ base: 12, md: 6, lg: 6 }} alignItems={'flex-start'} >
                                <Stack spacing={{ base: '2', md: '6' }}>
                                    <Accordian />
                                </Stack>
                            </GridItem>
                        </Grid> */}
                    </Stack>
                    {/* <Stack maxW={'60%'} marginX={'auto'} mb={{ base: '20px', md: '70px' }}>
                        <Box textAlign={'center'}>
                            <Link
                                as={ReactLink}
                                to={'/Help/Faqs'}
                            >
                                <PrimaryBtn value="View More" />
                            </Link>
                        </Box>
                    </Stack> */}
                </Container>
            </Stack>
        </>
    )
}
