import {
    Box, Container, Grid, GridItem, Heading, Stack, Text, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
} from '@chakra-ui/react'
import React from 'react'

export default function FundTabledetails() {
    return (
        <Stack>
            <Container maxW={'8xl'} pb={{ base: '6', md: '24' }}>
                <Grid
                    templateColumns='repeat(12, 1fr)'
                    gap={6}
                >
                    <GridItem colSpan={{ base: '12', md: '6' }}>
                        <Box boxShadow='lg' p='8' rounded='md' bg='white' mb={'10'}>
                            <Heading as='h5' size='md' mb={'3'}>
                                Investment Objective
                            </Heading>
                            <Text
                                fontSize={{ base: "12px", md: "16px" }}
                                fontWeight={"400"}
                                color={"#666e82"}
                                lineHeight={{ md: "28px", base: "20px" }}
                            >
                                Interloop Asset Management Limited aims to provide investors with long term capital growth
                                from an actively managed portfolio invested primarily in listed
                                companies in Pakistan. The risk profile of the fund will be moderate to high.
                            </Text>
                        </Box>
                        <Box boxShadow='lg' p='8' rounded='md' bg='white'>
                            <Heading as='h5' size='md' mb={'3'}>
                                Key Benefits
                            </Heading>
                            <Text
                                fontSize={{ base: "12px", md: "16px" }}
                                fontWeight={"400"}
                                color={"#666e82"}
                                lineHeight={{ md: "28px", base: "20px" }}
                            >
                                The Largest Open-end Equity Fund in the Private Sector in Pakistan with PKR 27.88 billion assets under management as on March 31,2022
                                <br /><br />
                                Cumulative return since inception (August 8, 2003 till March 31,2022) is 1182.73% in PKR terms
                                <br /><br />
                                Average Annualized returns since inception (August 8, 2003 till March 31,2022) is 14.66% in PKR terms
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: '12', md: '6' }}>
                        <Box boxShadow='lg' p='6' rounded='md' bg='white'>
                            <Heading as='h5' size='md' mb={'3'}>
                                Funds Facts
                            </Heading>
                            <Stack>
                                <TableContainer>
                                    <Table variant='striped' colorScheme='gray'>
                                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                                        <Thead>
                                            <Tr>
                                                <Th>Scheme Type</Th>
                                                <Th isNumeric>Open-end Islamic Equity Fund</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>

                                            <Tr>
                                                <Td>Date of Inception</Td>
                                                <Td isNumeric>August 8, 2003</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Fund size - March 31,2022</Td>
                                                <Td isNumeric>Rs. 27.88 Billion</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Benchmark</Td>
                                                <Td isNumeric>KMI-30 Index</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Minimum Investment Amount</Td>
                                                <Td isNumeric>Rs.5,000 (and Rs. 1,000 thereafter)</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Lock-in Period</Td>
                                                <Td isNumeric>None</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Management Fee</Td>
                                                <Td isNumeric>2%</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Entry Load</Td>
                                                <Td isNumeric>2%</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Exit Load</Td>
                                                <Td isNumeric>Nil</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Selling and Marketing Expense</Td>
                                                <Td isNumeric>0.1%</Td>
                                            </Tr>


                                        </Tbody>
                                        <Tfoot>
                                            <Tr>
                                                <Th>Systematic Investment Plan Facility</Th>
                                                <Th isNumeric>Yes</Th>
                                            </Tr>
                                        </Tfoot>
                                    </Table>
                                </TableContainer>

                            </Stack>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </Stack>
    )
}
