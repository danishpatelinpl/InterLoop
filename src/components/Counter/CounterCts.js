import { Box, Grid, GridItem, Heading, Stack,Link, Container } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import React from 'react'

export default function CounterCts() {
  return (
    <Stack>
    <Container maxW={'8xl'} pb={{base:'6',md:'16'}} px={{ base: 10, "2xl": 0 }}>
        
                    <Grid
                        templateColumns='repeat(12, 1fr)'
                        gap={2} alignItems={'center'}
                    >
                        <GridItem colSpan={{base:'12',md:'8'}} >
                            <Box>
                                <Heading  textTransform={'capitalize'} fontFamily={"Montserrat"} as='h2' size={{base:'md',md:'xl'}} textAlign={{base:'center',md:'left'}}>
                                Open your ‘Digital Account ’ wherever you are, whenever you want!

                                </Heading>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{base:'12',md:'4'}} >
                            <Box textAlign={{base:'center',md:'right'}}>
                                <Link as={ReactLink} to={'/register'}>
                                    <PrimaryBtn value={'Get Started'} />
                                </Link>
                            </Box>
                        </GridItem>
                    </Grid>
                    </Container>
                </Stack>


  )
}
