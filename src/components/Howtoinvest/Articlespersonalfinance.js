import { Container, Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'
import NewsBox from '../LatestNews/NewsBox'

export default function Articlespersonalfinance() {
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
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem 
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem 
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                alignItems={'flex-start'}
              >
                <NewsBox />
              </GridItem>
            </Grid>
          </Stack>
            </Container>
        </Stack>
    )
}
