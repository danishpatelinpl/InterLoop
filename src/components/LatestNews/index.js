import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Link
} from '@chakra-ui/react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import NewsBox from './NewsBox';
import { Link as ReactLink } from 'react-router-dom'

export default function LatestNews() {
  return (
    <>
      <Stack py={{ base: '6', md: '20' }} px={{ base: '15px', md: '30px' }}>
        <Container maxW={'8xl'}>
          <Stack marginBottom={{ base: '40px', md: '80px' }}>
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={{ base: '2', md: '4' }}
              alignItems={'center'}
            >
              <GridItem
                colSpan={{ base: 12, md: 12, lg: 6 }}
                alignItems={'flex-start'}
              >
                <Box textAlign={{ base: 'center', md: 'left' }}>
                  <Heading
                    mb={{ base: '10px', md: '40px' }}
                    color={'primaryBgDarkBlue'}
                    fontSize={{ base: '20px', md: '36px', lg: '40px' }}
                    fontWeight={'700'}
                    as={'h2'}
                    textAlign={{ bsae: 'center', lg: 'left' }}
                  >
                    Never Miss Latest News
                  </Heading>
                  <Text fontSize={{ base: '12px', md: '18px' }} color={'primaryText.200'}>
                    The purpose of lorem ipsum is to create a natural looking
                    block of text that doesn'tdistract from the layout laying
                    out pages with meaningle.
                  </Text>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 1, lg: 2 }} />
              <GridItem colSpan={{ base: 12, md: 12, lg: 4 }}>
                <Box textAlign={{ base: 'center', md: 'right' }}>
                  <Link
                    as={ReactLink}
                    to={'/News'}
                  >
                    <PrimaryBtn value="View More" />
                  </Link>
                </Box>
              </GridItem>
            </Grid>
          </Stack>
          <Stack>
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={4}
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
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
