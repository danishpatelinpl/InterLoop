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

export default function SubsequentForm() {

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

    const [subData, setSubData] = useState({
        folioType: "",
        folioId: "",
        planFundId: "",
        investmentAmount: "",
        investmentType: "",
        bankId: "",
        isRealized: "",
        branchId: "",
        accountNumber: "",
        investmentProofUpload: dataImage,
        formReceivingDateTime: ""
    });

    useEffect(() => {
        (async () => {
            let nowTime = await getCurrentDateTime();
            setSubData({
                ...subData,
                formReceivingDateTime: nowTime
            })
        })()
    }, [])


    const submitKYC = async () => {

        setisLoading(true)
        // console.log(subData)
        let response = await POST(`${baseUrl}/cdc/submitSubSale`, subData, {
            "content-type": "application/json",
            credentials: `${cdcToken}`,
        });

        // console.log(response);

        if (response.responseMessage == "Request Timeout") {

            let newToken = await POST(`${baseUrl}/cdc/getRefreshToken`, { token: cdcToken });
            // console.log(newToken);

            if (newToken?.responseMessage == "Success") {
                let submitResponse = await POST(`${baseUrl}/cdc/submitSubSale`, subData, {
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

    return (
        <Stack gap={'6'}>
            <form id="subForm">
                <Stack
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                    p={'5'}
                    gap={'4'}
                    borderRadius={'6'}>
                    <Box mb={'4'}>
                        <Heading
                            as={'h6'}
                            color={'#0d182b'}
                            fontSize={{ base: '16px', md: '28px' }}
                            fontWeight={'bold'}
                            textTransform={'capitalize'}

                        >Personal Information</Heading>
                        <Text
                            fontSize={{ base: "12px", md: "14px" }}
                            fontWeight={"400"}
                            color={"#666e82"}
                            mt={'0'}
                            lineHeight={{ md: "24px", base: "20px" }}
                        >Update your account info incase you entered incorrect info</Text>
                    </Box>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Folio Type*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='folioType'
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            folioType: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='CIS'>CIS</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Folio Id*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='folioId'
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            folioId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='0001'>Folio Id 1</option>
                                    <option value='0001'>Folio Id 2</option>
                                    <option value='0001'>Folio Id 3</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Plan Fund*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='planFundId'
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            planFundId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='13464'>S-DUMMY</option>
                                    <option value='13464'>S-DUMMY</option>
                                    <option value='13464'>S-DUMMY</option>
                                </Select>
                            </FormControl>
                        </Box>

                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Investment Amount*</FormLabel>
                                <Input
                                    sx={inputfiled}
                                    type='text'
                                    name='investmentAmount'
                                    value={subData.investmentAmount}
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            investmentAmount: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Investment Type*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='investmentType'
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            investmentType: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='AMC Electronic'>AMC Electronic</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Bank Name*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='bankId'
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            bankId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='2314'>DUMMY-NAME</option>
                                    <option value='2314'>DUMMY-NAME</option>
                                    <option value='2314'>DUMMY-NAME</option>
                                </Select>
                            </FormControl>
                        </Box>


                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Is Realized*</FormLabel>
                                <RadioGroup defaultValue={false}
                                    name='isRealized'
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            isRealized: e
                                        });
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
                                <FormLabel sx={labelStyle}>Branch Name*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='branchId'
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            branchId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='3654'>DUMMY-NAME</option>
                                    <option value='3654'>DUMMY-NAME</option>
                                    <option value='3654'>DUMMY-NAME</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Account Number*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='accountNumber'
                                    value={subData.accountNumber}
                                    onChange={(e) => {
                                        setSubData({
                                            ...subData,
                                            accountNumber: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'} alignItems={'flex-end'}>
                        <Box w={'50%'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Upload Investment Proof</FormLabel>
                                <Input
                                    ref={proofOfAddressRef}
                                    sx={inputfiled}
                                    display={'none'}
                                    h={'55px'}
                                    type='file'
                                    name='investmentProofUpload'
                                    onChange={(e) => {
                                        setproofOfAddress(e.target.files[0])
                                        // onFileInput(e, KYCForm.doc_addr)
                                    }}
                                />
                                <Box
                                    h={'55px'}
                                    border={'1px solid'}
                                    borderColor={'primaryHeading.200'}
                                    borderRadius={6}
                                    w={'100%'}
                                    py={'1'}
                                    cursor={'pointer'}
                                    onClick={() => proofOfAddressRef.current.click()}
                                    role={'group'}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'flex-start'}
                                    gap={'10px'}
                                >
                                    <Button
                                        bgColor={'primaryHeading.200'}
                                        color={'white.100'}
                                        fontWeight={{ base: 400, md: 500 }}
                                        marginLeft={'5px'}
                                        border={'2px solid'}
                                        borderColor={'primaryHeading.200'}
                                        _groupHover={{
                                            bgColor: '#000',
                                            color: '#fff'
                                        }}
                                    >Choose File:</Button>
                                    <Text as={'span'} fontSize={{ base: "11px", lg: "13px" }}>{proofOfAddress?.name}</Text>
                                </Box>
                            </FormControl>
                        </Box>
                        {/* <Stack
                            style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                            p={'5'}
                            gap={'4'}
                            borderRadius={'6'}> */}
                        <Box w={'50%'}>
                            <Button
                                isLoading={isLoading}
                                onClick={() => submitKYC()}
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
