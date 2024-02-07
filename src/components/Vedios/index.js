import { Container, Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'
import Vedio from './Vedio'

export default function index() {
    return (
        <Stack>
            <Container
                maxW={"8xl"}
                py={{ base: "6", md: "16" }}

            >
                <Stack>
                    <Grid
                        templateColumns="repeat(12, 1fr)"
                        gap={8}
                        alignItems={'center'}
                    >
                        <GridItem
                            colSpan={{ base: 12, sm: 6, md: 6, lg: 6}}
                            alignItems={'flex-start'}
                        >
                            <Vedio/>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 6, md: 6, lg: 6}}
                            alignItems={'flex-start'}
                        >
                            <Vedio/>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 6, md: 6, lg: 6}}
                            alignItems={'flex-start'}
                        >
                            <Vedio/>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 6, md: 6, lg: 6}}
                            alignItems={'flex-start'}
                        >
                            <Vedio/>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 6, md: 6, lg: 6}}
                            alignItems={'flex-start'}
                        >
                            <Vedio/>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 6, md: 6, lg: 6}}
                            alignItems={'flex-start'}
                        >
                            <Vedio/>
                        </GridItem>
                    </Grid>
                </Stack>
            </Container>
            </Stack>
            )
}
