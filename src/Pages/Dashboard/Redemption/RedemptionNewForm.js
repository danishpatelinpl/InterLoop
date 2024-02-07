import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Select, Stack, Text, useToast } from '@chakra-ui/react'
import Cookies from 'js-cookie';
import { async } from 'q';
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateKYC, updateTokens, updateUser, updateUserAccessToken, updateUserRefreshToken } from '../../../reducers/useReducer';
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../utils/Config';

export default function RedemptionNewForm() {

    const user = useSelector(state => state.value);
    const userKyc = useSelector(state => state.kycData);
    const tokens = useSelector(state => state.tokens)
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

    const getUserFields = async () => {
        let userFieldsData = await GET(`${baseUrl}/users/listUserKycData`, { Authorization: `Bearer ${tokens?.accessToken}` });
        // console.log(userFieldsData);
        if (userFieldsData?.message == "unauthorized") {
            let newToken = await POST(`${baseUrl}/users/refresh`, { refresh_token: tokens?.refresh_token });
            // console.log(newToken);
            if (newToken?.status == 'ok') {
                let userFieldsData = await GET(`${baseUrl}/users/listUserKycData`, { Authorization: `Bearer ${newToken?.data?.access_token}` });
                // console.log(userFieldsData);
                dispatch(updateTokens(newToken?.data))
                dispatch(updateKYC(userFieldsData?.data?.data))
                setKYCForm(userFieldsData?.data?.data)
                toast({
                    description: 'KYC data retrieved!',
                    status: 'success',
                    position: 'bottom-right',
                    isClosable: true,
                    duration: 4000
                })
            }
            if (newToken?.message == "session_not_found") {
                toast({
                    description: 'Session expired, please login again!',
                    status: 'error',
                    position: 'bottom-right',
                    isClosable: true,
                    duration: 4000
                })
                localStorage.setItem('user', null);
                    localStorage.clear();
                    Cookies.set('user', null)
                Cookies.set('kycData', null)
                Cookies.set('kycLevel1', null)
                Cookies.set('kycLevel2', null)
                dispatch(updateUser(null))
                navigate('/')
            }
        }
    }

    // useEffect(() => {
    //     let localCount = 1;
    //     if (localCount === 1) {
    //         getUserFields();
    //         ++localCount;
    //     }
    // }, [])

    const [KYCForm, setKYCForm] = useState({
        phone: { value: '' },
        phone_owner: { value: '' },
        email: { value: '' },
        name: { value: '' },
        gender: { value: '' },
        mother_maiden: { value: '' },
        education: { value: '' },
        occupation: { value: '' },
        cnic_num: { value: '' },
        cnic_dob: { value: '' },
        cnic_iss: { value: '' },
        cnic_exp: { value: '' },
        cnic_life: { value: '' },
        addr_res: { value: '' },
        res_cnic_same: { value: '' },
        addr_mail: { value: '' },
        addr_mail_same: { value: '' },
        birth_city: { value: '' },
        pep: { value: '' },
        bank_name: { value: '' },
        bank_iban: { value: '' },
        kin_name: { value: '' },
        kin_rel: { value: '' },
        kin_ph: { value: '' },
        kin_addr: { value: '' },
        pep_sth: { value: '' },
        pep_goh: { value: '' },
        pep_pol: { value: '' },
        pep_gof: { value: '' },
        pep_jud: { value: '' },
        pep_mil: { value: '' },
        pep_seio: { value: '' },
        pep_ppo: { value: '' },
        pep_eio: { value: '' },
        pep_mbio: { value: '' },
        pep_nature: { value: '' },
        pep_name: { value: '' },
        pep_dc: { value: '' },
        pep_des: { value: '' },
        pep_gr: { value: '' }
    });

    const submitKYC = async () => {
        setisLoading(true)
        // let accessToken = user?.access_token;

        const form = document.getElementById('redemptionForm');

        const data = new FormData(form);

        const value = Object.fromEntries(data.entries())

        // let data = {
        //     phone: { value: KYCForm.mobileNumber },
        //     phone_owner: { value: KYCForm.mobileNumberRegisteredAgnst },
        //     email: { value: KYCForm.email },
        //     name: { value: KYCForm.name },
        //     gender: { value: KYCForm.gender },
        //     mother_maiden: { value: KYCForm.motherName },
        //     education: { value: KYCForm.education },
        //     occupation: { value: KYCForm.occupation },
        //     cnic_num: { value: KYCForm.cnicNumber },
        //     cnic_dob: { value: KYCForm.dob },
        //     cnic_iss: { value: KYCForm.cnicIssueDate },
        //     cnic_exp: { value: KYCForm.cnicExpireDate },
        //     cnic_life: { value: KYCForm.cnicLifeTime },
        //     addr_res: { value: KYCForm.currentResidentialAddress },
        //     res_cnic_same: { value: KYCForm.residentialAddressCnic },
        //     addr_mail: { value: KYCForm.currentPostalAddress },
        //     addr_mail_same: { value: KYCForm.postalAddressCnic },
        //     birth_city: { value: KYCForm.city },
        //     pep: { value: KYCForm.closeExposedPerson },
        //     bank_name: { value: KYCForm.bankName },
        //     bank_iban: { value: KYCForm.iban },
        //     kin_name: { value: KYCForm.nomineeName },
        //     kin_rel: { value: KYCForm.nomineeRelation },
        //     kin_ph: { value: KYCForm.nomineePhoneNo },
        //     kin_addr: { value: KYCForm.nomineeAddress },
        //     pep_sth: { value: KYCForm.pepHOS },
        //     pep_goh: { value: KYCForm.pepHeadOfGovt },
        //     pep_pol: { value: KYCForm.pepSeniorP },
        //     pep_gof: { value: KYCForm.pepGovtO },
        //     pep_jud: { value: KYCForm.pepSecniorJudge },
        //     pep_mil: { value: KYCForm.pepSeniorArmy },
        //     pep_seio: { value: KYCForm.pepSeniorExecIntOrg },
        //     pep_ppo: { value: KYCForm.pepPoliticalParty },
        //     pep_eio: { value: KYCForm.pepExecutiveInternationalOrg },
        //     pep_mbio: { value: KYCForm.pepMemberOfBoard },
        //     pep_nature: { value: KYCForm.familyOrAssociate },
        //     pep_name: { value: KYCForm.pepName },
        //     pep_dc: { value: KYCForm.pepDept },
        //     pep_des: { value: KYCForm.pepDesignation },
        //     pep_gr: { value: KYCForm.pepGrade }
        // }

        // console.log(value);
        // console.log(user?.access_token);
        // console.log(user?.refresh_token);

        let response = await POST(`${baseUrl}/cdc/submitRedemption`, data, { Authorization: `Bearer ${tokens?.access_token}` });

        // console.log(response);

        if (response.message == "unauthorized") {

            let newToken = await POST(`${baseUrl}/users/refresh`, { refresh_token: tokens?.refresh_token });
            // console.log(newToken);
            // TODO (Save User in state then update the token of local state after performing all the function update the global state)
            // console.log(currentUser);
            // accToken = newToken?.data?.access_token;
            // refreshToken = newToken?.data?.refresh_token;

            if (newToken?.status == 'ok') {
                let response = await POST(`${baseUrl}/cdc/submitRedemption`, data, { Authorization: `Bearer ${newToken?.data?.access_token}` });

                // console.log(response);
                Cookies.set('kycLevel1', JSON.stringify(data));
                dispatch(updateTokens(newToken?.data))
                dispatch(updateKYC(data))
                toast({
                    description: 'KYC submit success!',
                    status: 'success',
                    position: 'bottom-right',
                    isClosable: true,
                    duration: 4000
                })
                setisLoading(false)
                dispatch(updateUser(data))
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
                    localStorage.clear();
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
                description: 'Redemption Form Submitted!',
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
            <form id="redemptionForm">
                <Stack
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                    p={'5'}
                    gap={'4'}
                    borderRadius={'6'}>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Folio Type*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='folioType'

                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='CIS'>CIS</option>
                                </Select>
                                {/* <Input sx={inputfiled} type='email' placeholder='Your Name'
                                    value={KYCForm?.name?.value}
                                    onChange={(e) => {
                                        setKYCForm({
                                            ...KYCForm,
                                            name: { value: e.target.value }
                                        })
                                    }}
                                /> */}
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Scheme Option*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='schemeOption'

                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='F'>F</option>
                                </Select>
                                {/* <Input sx={inputfiled} type='email' placeholder='Enter maiden Name'
                                    value={KYCForm?.mother_maiden?.value}
                                    onChange={(e) => {
                                        setKYCForm({
                                            ...KYCForm,
                                            mother_maiden: { value: e.target.value }
                                        })
                                    }}
                                /> */}
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Folio No*</FormLabel>
                                <Input
                                    sx={inputfiled}
                                    type='text'
                                    name='folioNo'
                                // value={KYCForm?.email?.value}
                                // onChange={(e) => {
                                //     setKYCForm({
                                //         ...KYCForm,
                                //         email: { value: e.target.value }
                                //     })
                                // }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Plan Fund</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    placeholder=''
                                    name='planFundId'
                                // value={KYCForm?.gender?.value}
                                // onChange={(e) => {
                                //     setKYCForm({
                                //         ...KYCForm,
                                //         gender: { value: e.target.value }
                                //     })
                                // }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='10071'>DUMMY-S</option>
                                    <option value='10071'>DUMMY-S</option>
                                    <option value='10071'>DUMMY-S</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Redemption Amount*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    // value={KYCForm?.cnic_iss?.value}
                                    name='redemptionAmount'
                                // onChange={(e) => {
                                //     setKYCForm({
                                //         ...KYCForm,
                                //         cnic_iss: { value: e.target.value }
                                //     })
                                // }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormLabel sx={labelStyle}>Redemption In Terms Of*</FormLabel>
                            <Select
                                sx={inputfiled}
                                placeholder=''
                                name='redemptionInTermsOf'
                            // value={KYCForm?.gender?.value}
                            // onChange={(e) => {
                            //     setKYCForm({
                            //         ...KYCForm,
                            //         gender: { value: e.target.value }
                            //     })
                            // }}
                            >
                                <option value='' style={{ display: 'none' }}></option>
                                <option value='A'>A</option>
                            </Select>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormLabel sx={labelStyle}>All Units*</FormLabel>
                            <RadioGroup defaultValue={false}
                                name='allUnits'
                            // value={KYCForm?.cnic_life?.value}
                            // onChange={(e) => {
                            //     setKYCForm({
                            //         ...KYCForm,
                            //         cnic_life: { value: e }
                            //     });
                            // }}
                            >
                                <Stack spacing={4} direction='row'>
                                    <Radio value={'Y'}>Yes</Radio>
                                    <Radio value={'N'}>No</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Payment Mode*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='paymentMode'
                                // onChange={(e) => {
                                //     setKYCForm({
                                //         ...KYCForm,
                                //         gender: { value: e.target.value }
                                //     })
                                // }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='Electronic'>Electronic</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Bank*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='BankId'
                                // onChange={(e) => {
                                //     setKYCForm({
                                //         ...KYCForm,
                                //         gender: { value: e.target.value }
                                //     })
                                // }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='123'>DUMMY-S</option>
                                    <option value='123'>DUMMY-S</option>
                                    <option value='123'>DUMMY-S</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'} alignItems={'flex-end'}>

                        <Box
                            w={'33%'}
                        >
                            <FormLabel sx={labelStyle}>Bank Account No*</FormLabel>
                            <RadioGroup defaultValue={false}
                                name='bankAccountNo'
                            // value={KYCForm?.cnic_life?.value}
                            // onChange={(e) => {
                            //     setKYCForm({
                            //         ...KYCForm,
                            //         cnic_life: { value: e }
                            //     });
                            // }}
                            >
                                <Stack spacing={4} direction='row'>
                                    <Radio value={'Y'}>Yes</Radio>
                                    <Radio value={'N'}>No</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                        <Box
                            w={'33%'}
                        >
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
                        <Box
                            w={'33%'}
                        >
                            <Button
                                h={'58px'}
                                isLoading={isLoading}
                                onClick={() => submitKYC()}
                                width={'full'}
                                fontSize={'16px'}
                                px={{ md: '10', base: '5' }}
                                fontWeight={500}
                                color={'white'}
                                bg={'#0d182b'}
                                href={'#'}
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
                    </Flex>
                </Stack>
            </form>
        </Stack>
    )
}
