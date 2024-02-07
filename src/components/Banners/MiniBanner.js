import {
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Link,
  Box,
  Image,
} from '@chakra-ui/react';

export default function MiniBanner({ textTransform, heading, bannerImage, imageSizePercentage }) {
  return (
    <>
      <Stack>
        <Container maxW={'8xl'}>
          <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={'center'}>
            <GridItem colSpan={{base:12,md:6}}>
              <Stack>
                <Heading
                  lineHeight={1.1}
                  fontStyle={'bold'}
                  textTransform={textTransform ?? 'uppercase'}
                  fontSize={{base:'32px',md:'38px',lg:'45px'}}
                  textAlign={{base:'center',md:'left'}}
                  mb={{base:'25px',md:'0'}}
                  fontFamily={"Montserrat"}
                >
                  {heading}
                </Heading>
              </Stack>
            </GridItem>
            <GridItem colSpan={{base:12,md:6}}>
              <Box>
                <Image width={imageSizePercentage} alt={'mian-r'} margin={{base:'0 auto',md:'0 0 0 auto'}} src={bannerImage} />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
