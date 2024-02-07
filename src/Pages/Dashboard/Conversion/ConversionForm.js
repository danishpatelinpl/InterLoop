import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Select, Stack, Text, useToast } from '@chakra-ui/react'
import Cookies from 'js-cookie';
import { async } from 'q';
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateCdcToken, updateKYC, updateTokens, updateUser, updateUserAccessToken, updateUserRefreshToken } from '../../../reducers/useReducer';
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { baseUrl, dataImage } from '../../../utils/Config';
import getCurrentDateTime from '../../../utils/TimeFormatter';

export default function ConversionForm() {

    const user = useSelector(state => state.value);
    const userKyc = useSelector(state => state.kycData);
    const tokens = useSelector(state => state.tokens)
    const cdcToken = useSelector(state => state.cdcToken);
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isLoading, setisLoading] = useState(false)
    const proofOfAddressRef = useRef(null);
    const [proofOfAddress, setproofOfAddress] = useState({});

    // let accToken = user?.access_token, refreshToken = user?.refresh_token;

    const labelStyle = {
        color: '#7a7a7a',
        fontSize: '13px',
        fontWeight: '600'
    }

    const inputfiled = {
        height: '55px'
    }

    const [conversionData, setConversionData] = useState({
        schemeOption: "",
        folioNo: "",
        fromPlanFundId: "",
        fromUnitTypeClass: "",
        conversionInTermsOf: "",
        conversionTermValue: "",
        allUnits: "",
        toPlanFundId: "null"
    })

    const submitConversionForm = async () => {

        setisLoading(true)
        // console.log(conversionData)
        let response = await POST(`${baseUrl}/cdc/submitConversion`, conversionData, {
            "content-type": "application/json",
            credentials: `${cdcToken}`,
        });

        // console.log(response);

        if (response.responseMessage == "Request Timeout") {

            let newToken = await POST(`${baseUrl}/cdc/getRefreshToken`, { token: cdcToken });
            // console.log(newToken);

            if (newToken?.responseMessage == "Success") {
                let submitResponse = await POST(`${baseUrl}/cdc/submitConversion`, conversionData, {
                    "content-type": "application/json",
                    credentials: `${newToken?.token}`,
                });
                // console.log(submitResponse);

                toast({
                    description: 'Subsequent Sale Submitted!',
                    status: 'success',
                    position: 'bottom-right',
                    isClosable: true,
                    duration: 4000
                })
                setisLoading(false)
                dispatch(updateCdcToken(newToken?.token))

            }
        } else if (response.message == "session_not_found") {
            setisLoading(false)
            toast({
                description: 'Session not nound, please login again!',
                status: 'error',
                position: 'bottom-right',
                isClosable: true,
                duration: 4000
            })
            localStorage.setItem('user', null);
            Cookies.set('user', null)
            Cookies.set('kycData', null)
            Cookies.set('kycLevel1', null)
            Cookies.set('kycLevel2', null)
            dispatch(updateUser(null))
            navigate('/')
        } else if (response.message == "invalid_token") {
            toast({
                description: 'Login Again to proceed!',
                status: 'error',
                position: 'bottom-right',
                isClosable: true,
                duration: 4000
            })
            setisLoading(false)
        } else {
            // Cookies.set('kycLevel1', JSON.stringify(data));
            // dispatch(updateKYC(data))
            toast({
                description: 'Subsequent Sale Submitted!',
                status: 'success',
                position: 'bottom-right',
                isClosable: true,
                duration: 4000
            })
            setisLoading(false)
            // dispatch(updateUser(data))
        }
    }

    // useEffect(() => {
    //     console.log(userKyc);
    //     setKYCForm(userKyc)
    // }, [userKyc])


    return (
        <Stack gap={'6'}>
            <form id="subForm">
                <Stack
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                    p={'5'}
                    gap={'4'}
                    borderRadius={'6'}>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Scheme Option*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='schemeOption'
                                    onChange={(e) => {
                                        setConversionData({
                                            ...conversionData,
                                            schemeOption: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='F'>F</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Folio No*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='folioNo'
                                    onChange={(e) => {
                                        setConversionData({
                                            ...conversionData,
                                            folioNo: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='0901'>Folio No 1</option>
                                    <option value='0901'>Folio No 2</option>
                                    <option value='0901'>Folio No 3</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>From Plan Fund*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='fromPlanFundId'
                                    onChange={(e) => {
                                        setConversionData({
                                            ...conversionData,
                                            fromPlanFundId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='2543'>S-DUMMY</option>
                                    <option value='2543'>S-DUMMY</option>
                                    <option value='2543'>S-DUMMY</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>From Unit Type Class*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='investmentType'
                                    onChange={(e) => {
                                        setConversionData({
                                            ...conversionData,
                                            fromUnitTypeClass: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='AA'>AA</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Conversion In Terms Of*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='conversionInTermsOf'
                                    onChange={(e) => {
                                        setConversionData({
                                            ...conversionData,
                                            conversionInTermsOf: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='A'>A</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Conversion Term Value*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='conversionTermValue'
                                    // value={KYCForm?.cnic_exp?.value}
                                    onChange={(e) => {
                                        setConversionData({
                                            ...conversionData,
                                            conversionTermValue: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>All Units*</FormLabel>
                                <RadioGroup defaultValue={false}
                                    name='allUnits'
                                    onChange={(e) => {
                                        setConversionData({
                                            ...conversionData,
                                            allUnits: e
                                        })
                                    }}
                                >
                                    <Stack spacing={4} direction='row'>
                                        <Radio value={'Y'}>Yes</Radio>
                                        <Radio value={'N'}>No</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>To Plan Fund*</FormLabel>
                                <Select
                                    defaultValue={'null'}
                                    sx={inputfiled}
                                    onChange={(e) => {
                                        setConversionData({
                                            ...conversionData,
                                            toPlanFundId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='null' style={{ display: 'none' }}></option>
                                </Select>
                            </FormControl>
                        </Box>

                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'} alignItems={'flex-end'}>

                        {/* <Stack
                            style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                            p={'5'}
                            gap={'4'}
                            borderRadius={'6'}> */}
                        <Box w={'100%'}>
                            <Button
                                isLoading={isLoading}
                                onClick={() => submitConversionForm()}
                                width={'full'}
                                fontSize={'16px'}
                                px={{ md: '10', base: '5' }}
                                fontWeight={500}
                                color={'white'}
                                bg={'#0d182b'}
                                href={'#'}
                                height={'56px'}
                                boxShadow={'0px 15px 15px -15px '}
                                _hover={{
                                    bg: '#ffbb5c',
                                    boxShadow: 'none',
                                    transform: 'translateY(2px)'
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                        {/* </Stack> */}
                    </Flex>
                </Stack>
            </form>
        </Stack>
    )
}
