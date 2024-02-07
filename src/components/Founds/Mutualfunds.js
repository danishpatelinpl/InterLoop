import { Box, Container, Grid, GridItem, Heading, Icon, Stack, Text ,Link} from '@chakra-ui/react'
import React from 'react'
import { RiLineChartLine ,RiPieChartLine} from 'react-icons/ri'
import { Link as ReactLink } from 'react-router-dom';

export default function Mutualfunds() {
  return (
    <Stack>
        <Container
        maxW={"8xl"}
        py={{ base: "6", md: "16" }}
        
      >
        <Stack textAlign={"center"} mb={"20"}>
          <Heading as="h2" size={{ base: "md", md: "xl" }}>
            Mutual Funds
          </Heading>
          <Text
            fontSize={{ base: "12px", md: "16px" }}
            fontWeight={"400"}
            color={"#666e82"}
            lineHeight={{ md: "24px", base: "20px" }}
          >
           You can select from conventional money market and equity mutual funds
            <br />
             to match your unique investment goals and risk appetite.
          </Text>
        </Stack>
        <Stack>
                            <Grid
                        templateColumns='repeat(12, 1fr)'
                        gap={6} alignItems={'center'}
                    >
                        <GridItem colSpan={{base:'12',md:'2'}} ></GridItem>
                        <GridItem colSpan={{base:'12',md:'4'}} >
                        <Link as={ReactLink} to={'/Services/Equityfund'} >
                            <Box boxShadow='lg' p='6' rounded='md' bg='white'>
                            <Icon fontSize={{base:'4xl',md:'6xl'}}
                                    color={'#f79e22'}
                                    as={RiLineChartLine}>
                                </Icon>
                                <Heading as='h4' size={{base:'sm',md:'md'}}  py={3}>
                                Equity Funds
                                </Heading>
                                <Text fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'26px'}}>
                                An equity fund is a mutual fund scheme that invest predominantly in shares/stocks of companies
                                </Text>
                            </Box>
                            </Link>
                        </GridItem>
                        <GridItem colSpan={{base:'12',md:'4'}} >
                        <Link as={ReactLink} to={'/Services/Equityfund'} >
                        <Box boxShadow='lg' p='6' rounded='md' bg='white'>
                            <Icon fontSize={{base:'4xl',md:'6xl'}}
                                    color={'#f79e22'}
                                    as={RiPieChartLine}>
                                </Icon>
                                <Heading as='h4'  size={{base:'sm',md:'md'}} py={3}>
                                Money Market Fund
                                </Heading>
                                <Text fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'26px'}}>
                                These funds invest in short-term fixed income securities such as government bonds, treasury bills, bankers’ acceptances, commercial paper and certificates of deposit.  
                                </Text>
                            </Box>
                            </Link>
                        </GridItem>
                        <GridItem colSpan={{base:'12',md:'2'}} ></GridItem>
                        
                        </Grid>
                            </Stack>
        </Container>
    </Stack>
  )
}
