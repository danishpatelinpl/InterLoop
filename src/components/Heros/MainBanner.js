import React, { useEffect } from 'react'
import {
    Container,
    Image,
    Stack,
    Link,
    Heading,
    Grid, GridItem, Box, Text
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import mainr from '../../assets/images/secimgs/Investment.gif';
import reportAnimation from '../../assets/images/reportAnimation.gif'
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { Typewriter } from 'react-simple-typewriter'
import { useSelector } from 'react-redux';


export default function MainBanner() {

    const user = useSelector(state => state.value);

    useEffect(() => {
        // console.log(user);
    }, [user])

    return (
        <Stack>

            <Container maxW={'8xl'} p={{ base: '15px !important', "2xl": 0 }}>

                <Grid templateColumns='repeat(12, 1fr)' gap={2} alignItems={'center'}>
                    <GridItem colSpan={{ base: 12, md: 6 }} >
                        <Stack textAlign={{ base: 'center', md: 'left' }}
                        >
                            <Heading
                                lineHeight={1.1}
                                fontStyle={'bold'}
                                textTransform={'uppercase'}
                                fontSize={{ base: '32px', md: '50px', xl: '45px', '2xl': '54px' }}
                                pb={{ base: '60px', lg: 0 }}
                            >
                                <Text color={'#f79e22'} fontFamily={"Montserrat"} fontSize={{ base: '20px', md: '43px', xl: '35px', '2xl': '38px' }}>
                                    Empowering Investors
                                </Text>
                                <Text

                                    fontSize={{ base: '24px', md: '50px', xl: '45px', '2xl': '54px' }}
                                    as={'span'} display={{ base: 'block', lg: 'initial' }}>for</Text> {' '}
                                <Text
                                    as={"span"}
                                    position={'relative'}
                                    // _before={{
                                    //     content: '""',
                                    //     position: 'absolute',
                                    //     bottom: '14px',
                                    //     left: 0,
                                    //     width: '100%',
                                    //     height: '6px',
                                    //     backgroundColor: 'primaryHeading.100',
                                    //     zIndex: -1
                                    // }}
                                >
                                    {/* Style will be inherited from the parent element */}
                                    {/* <Typewriter
                                        words={['a Carefree Future', 'a New Era', 'better perspective']}
                                        loop={false}
                                        cursor
                                        cursorStyle='.'
                                        typeSpeed={100}
                                        deleteSpeed={70}
                                        delaySpeed={1500}
                                    /> */}
                                    better perspective
                                </Text>
                            </Heading>
                            <Box display={{ base: 'block', md: 'none' }}>
                                <Image
                                    alt={'mian-r'}
                                    margin={{ base: '0 auto', md: '0 0 0 auto' }}
                                    w={{ base: '80%', md: 'flex' }}
                                    src={mainr} />
                            </Box>
                            <Stack py={{ md: '4', base: '2', xl: '2', '2xl': '4' }}>
                                <Text fontSize={{ base: '14px', md: '14px', lg: '18px' }} fontWeight={'500'} color={'#666e82'} lineHeight={{ md: '30px', base: '23px' }}>
                                    {/* We are steadfast partners to our clients in Pakistan<br />because we listen to every one of them. Our full range of<br />funds is one way we’re helping more investors build solid <br />financial futures. */}
                                </Text>
                            </Stack>
                            <Stack >
                                {
                                    !user &&
                                    <Link as={ReactLink} to={'/register'}>
                                        <PrimaryBtn value={'Get Started'} />
                                    </Link>
                                }
                            </Stack>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 6 }} >

                        <Box display={{ base: 'none', md: 'block' }}>
                            <Image
                                alt={'mian-r'}
                                margin={{ xl: 'auto', '2xl': '0 0 0 auto' }}
                                w={{ md: '450px', lg: '460px', xl: '500px', "2xl": "620px" }}
                                src={mainr} />
                        </Box>

                    </GridItem>

                </Grid>

            </Container>

        </Stack>
    )
}
