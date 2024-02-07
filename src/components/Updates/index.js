import { Container, Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'
import Update from './Update'


export default function Updates() {
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
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem 
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem 
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <Update />
              </GridItem>
            </Grid>
          </Stack>
            </Container>
        </Stack>
    )
}
