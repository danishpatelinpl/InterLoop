import { Box, Container, Grid, GridItem, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiShieldUserLine,RiLineChartLine ,RiPieChartLine} from 'react-icons/ri'
export default function InvestmentFound() {
  return (
    <Stack>
        <Container maxW={'8xl'} py={{base:'6',md:'24'}} px={{base:'15px', md:'30px'}}>
            <Stack>
            <Box mb={{base:'4',md:'14'}} textAlign={{base:'center',md:'center'}}>
                                <Heading fontFamily={"Montserrat"} as='h4' size={{base:'sm',md:'lg'}}  textTransform={'uppercase'} color={'#f79e22'} >
                                What we Offer
                                </Heading>
                                <Heading fontFamily={"Montserrat"} as='h2' size={{base:'lg',md:'2xl'}}>
                                Investment Options
                                </Heading>
                            </Box>
                            <Stack>
                            <Grid
                        templateColumns='repeat(12, 1fr)'
                        gap={6} alignItems={'center'}
                    >
                        <GridItem colSpan={{base:'12',md:'4'}} >
                            <Box boxShadow='lg' p='6' rounded='md' bg='white' border={{base:'1px solid #eee',md:'none'}}>
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
                        </GridItem>
                        <GridItem colSpan={{base:'12',md:'4'}} >
                        <Box boxShadow='lg' p='6' rounded='md' bg='white' border={{base:'1px solid #eee',md:'none'}}>
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
                        </GridItem>
                        <GridItem colSpan={{base:'12',md:'4'}}>
                        <Box boxShadow='lg' p='6' rounded='md' bg='white' border={{base:'1px solid #eee',md:'none'}}>
                            <Icon fontSize={{base:'4xl',md:'6xl'}}
                                    color={'#f79e22'}
                                    as={RiShieldUserLine}>
                                </Icon>
                                <Heading as='h4'  size={{base:'sm',md:'md'}}  py={3}>
                                Separately Managed Accounts
                                </Heading>
                                <Text fontSize={{base:'13px',md:'16px'}} lineHeight={{base:'20px',md:'26px'}}>
                                These funds invest in short-term fixed income securities such as government bonds, treasury bills, bankers’ acceptances, commercial paper and certificates of deposit.  
                                </Text>
                            </Box>
                        </GridItem>
                        </Grid>
                            </Stack>
            </Stack>
        </Container>
    </Stack>
  )
}
