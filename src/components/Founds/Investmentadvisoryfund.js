import { Box, Container, Grid, GridItem, Heading, Icon, Stack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { RiShieldUserLine } from 'react-icons/ri'
import { Link as ReactLink } from 'react-router-dom';

export default function Investmentadvisoryfund() {
    return (
        <Stack>
            <Container
                maxW={"8xl"}
                py={{ base: "6", md: "16" }}

            >
                <Stack  mb={"20"}>
                    <Heading as="h2" size={{ base: "md", md: "xl" }}>
                    Separately Managed Accounts (SMAs)
                    </Heading>
                    <Text
                        fontSize={{ base: "12px", md: "18px" }}
                        fontWeight={"400"}
                        color={"#666e82"}
                        w={'80%'}
                        lineHeight={{ md: "30px", base: "20px" }}
                    >
                      Interloop Asset Management Limited provides high quality, customized Portfolio Management  and Advisory Services to institutional clients such as: Retirement Funds, Charitable Institutions, Endowment Funds etc.   and also to High Net Worth Individuals (HNWIs) under license by Securities and Exchange Commission of Pakistan. A SMA may be Discretionary in which Interloop Asset Management Limited takes and manages investment decisions and their execution on behalf of the client or a SMA may be Non-Discretionary in which Interloop Asset Management Limited provides investment advice from time to time while acceptance and acting upon the given advice is client’s discretion. 



                    </Text>
                </Stack>
           
            </Container>
        </Stack>
    )
}
