import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn';
import KycForm from '../../../components/Dashboard/KYCForm/KycForm'
import KycForm2 from '../../../components/Dashboard/KYCForm/KycForm2';
import { updateKYC, updateTokens } from '../../../reducers/useReducer';
import MainDashboard from '../MainDashboard'
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { localUrl } from '../../../utils/Config';
import DigitalForm from '../../../components/Dashboard/DigitalForm/DigitalForm';

export default function Index() {

    const userKyc = useSelector(state => state.kycData);
    const tokens = useSelector(state => state.tokens);

    return (
        <>
            <MainDashboard>
                <Stack style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }} mb={'10'} p={'5'} borderRadius={'6'}>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Box mb={'4'} textAlign={'center'}>
                            <Heading
                                as={'h6'}
                                color={'#0d182b'}
                                fontSize={{ base: '16px', md: '36px' }}
                                fontWeight={'bold'}
                                textTransform={'capitalize'}

                            >Digital Account</Heading>
                        </Box>
                    </Stack>
                    <DigitalForm />
                </Stack>
                <Box py={'4'}></Box>
            </MainDashboard>
        </>
    )
}
