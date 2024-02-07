import { Container, Grid, GridItem, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FundReviews from './FundReviews'
import { FiBox,FiDollarSign } from 'react-icons/fi';
import {AiOutlineWallet} from 'react-icons/ai';

export default function Index() {

    const user = useSelector(state => state?.value);

    return (
        <Stack>
            <Container maxW={'full'} px={{ base: 0, "2xl": 0 }} >
                <Stack mb={'6'}>
                    <Grid
                        templateColumns='repeat(12, 1fr)'
                        gap={{ base: 2, sm: 6 }} alignItems={'center'}
                    >
                        <GridItem colSpan={{ base: '12', md: '6', xl: '4' }}>
                            <FundReviews
                                fundicon={FiBox}
                                fundheading={'Returns'}
                                // funddetails={'Update your account info incase you entered incorrect info'}
                                statnumber={Number(user?.holdings?.returns).toFixed(3)}
                                // statarow={user?.holdings?.returns == 0 ? '0' : '9.05%'}
                                type={'increase'}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '6', xl: '4' }}>
                            <FundReviews
                             fundicon={AiOutlineWallet}
                                fundheading={'My Investment'}
                                // funddetails={'Update your account info incase you entered incorrect info'}
                                statnumber={Number(user?.holdings?.investment).toFixed(3)}
                                // statarow={'9.05%'}
                                type={'decrease'}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '6', xl: '4' }}>
                            <FundReviews
                            fundicon={FiDollarSign}
                                fundheading={'Current value'}
                                // funddetails={'Update your account info incase you entered incorrect info'}
                                statnumber={Number(user?.holdings?.current_value).toFixed(3)}
                                // statarow={'9.05%'}
                                type={'increase'}
                            />
                        </GridItem>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    )
}
