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

export default function SahulatForm() {

    const user = useSelector(state => state.value);
    const userKyc = useSelector(state => state.kycData);
    const tokens = useSelector(state => state.tokens)
    const cdcToken = useSelector(state => state.cdcToken);
    const proofOfAddressRef = useRef(null);
    const [proofOfAddress, setproofOfAddress] = useState({});
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isLoading, setisLoading] = useState(false)

    // let accToken = user?.access_token, refreshToken = user?.refresh_token;

    const labelStyle = {
        color: '#7a7a7a',
        fontSize: '13px',
        fontWeight: '600'
    }

    const inputfiled = {
        height: '55px'
    }

    useEffect(() => {
        (async () => {
            let nowTime = await getCurrentDateTime();
            setSahulatData({
                ...sahulatData,
                formReceivingDateTime: nowTime
            })
        })()
    }, [])

    const [sahulatData, setSahulatData] = useState({
        folioType: "",
        salutation: "",
        title: "",
        fatherName: "",
        motherName: "",
        principleCnic: "",
        cnicIssueDate: "",
        principleCnicExpiryDate: "",
        lifeTime: "",
        dateOfBirth: "",
        minor: "",
        placeOfBirth: "",
        gender: "",
        guardianName: "",
        relationWithMinor: "",
        guardianCnic: "",
        guardianCnicIssueDate: "",
        guardianCnicExpiryDate: "",
        guardianCnicAllowNull: "",
        occupation: "",
        residentialStatus: "",
        sourceOfIncome: "",
        nameOfEmployer: "",
        zakatStatus: "",
        dividendPayout: "",
        retirementAge: "",
        mailingAddress1: "",
        mailingAddress2: "",
        mailingCity: "",
        mailingCountry: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        mobCountryCode: "",
        mobCityCode: "",
        mobileNumber: "",
        phnCountryCode: "",
        phnCityCode: "",
        phnNumber: "",
        email: "",
        nomineeName: "",
        nomineePhnNumber: "",
        iban: "",
        additionalDisclosurePEP: "",
        additionalDisclosurePosition: "",
        vpsFundId: "",
        seq: "",
        planFundId: "",
        equitySubFund: "",
        debtSubFund: "",
        mmSubFund: "",
        grossSaleAmount: "",
        instrumentType: "",
        instrumentNumber: "",
        bankId: "",
        isRealized: "",
        branchId: "",
        accountNumber: "",
        formReceivingDateTime: "",
        investmentProofUpload: dataImage,
        reserved1: "",
        reserved2: "",
        reserved3: "",
        reserved4: "",
        reserved5: ""
    });

    const submitSubSale = async () => {

        let data = sahulatData;

        data.dateOfBirth = String(data.dateOfBirth).split('-');
        // console.log(data.dateOfBirth)
        let dobFormatted = [data.dateOfBirth[2], data.dateOfBirth[1], data.dateOfBirth[0]]
        // console.log(dobFormatted)
        data.dateOfBirth = dobFormatted;
        data.dateOfBirth = `${data.dateOfBirth[0]}/${data.dateOfBirth[1]}/${data.dateOfBirth[2]}`

        setisLoading(true)
        // console.log(sahulatData)
        let response = await POST(`${baseUrl}/cdc/submitSahulatWithSale`, sahulatData, {
            "content-type": "application/json",
            credentials: `${cdcToken}`,
        });

        // console.log(response);

        if (response.responseMessage == "Request Timeout") {

            let newToken = await POST(`${baseUrl}/cdc/getRefreshToken`, { token: cdcToken });
            // console.log(newToken);

            if (newToken?.responseMessage == "Success") {
                let submitResponse = await POST(`${baseUrl}/cdc/submitSahulatWithSale`, sahulatData, {
                    "content-type": "application/json",
                    credentials: `${newToken?.token}`,
                });
                // console.log(submitResponse);

                toast({
                    description: 'Subsequent Sale Submitted!',
                    status: 'success',
                    position: 'bottom-left',
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
                position: 'bottom-left',
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
                position: 'bottom-left',
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
                position: 'bottom-left',
                isClosable: true,
                duration: 4000
            })
            setisLoading(false)
            // dispatch(updateUser(data))
        }
    }

    return (
        <Stack gap={'6'}>
            <form id="sahulatSaleForm">
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
                                        setSahulatData({
                                            ...sahulatData,
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
                                <FormLabel sx={labelStyle}>Salutation*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='salutation'
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            salutation: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='Mr'>Mr</option>
                                    <option value='Ms'>Ms</option>
                                    <option value='Dr'>Mrs</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Title*</FormLabel>
                                <Input
                                    sx={inputfiled}
                                    type='text'
                                    name='title'
                                    value={sahulatData.title}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            title: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Father Name*</FormLabel>
                                <Input
                                    sx={inputfiled}
                                    type='text'
                                    name='fatherName'
                                    value={sahulatData.fatherName}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            fatherName: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mother Name*</FormLabel>
                                <Input
                                    sx={inputfiled}
                                    type='text'
                                    name='motherName'
                                    value={sahulatData.motherName}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            motherName: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Principle CNIC*</FormLabel>
                                <Input
                                    sx={inputfiled}
                                    type='number'
                                    name='principleCnic'
                                    value={sahulatData.principleCnic}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            principleCnic: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>

                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>CNIC Issue Date*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    name='cnicIssueDate'
                                    value={sahulatData.cnicIssueDate}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            cnicIssueDate: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>CNIC Expiry Date*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    name='principleCnicExpiryDate'
                                    value={sahulatData.principleCnicExpiryDate}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            principleCnicExpiryDate: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormLabel sx={labelStyle}>CNIC Lifetime*</FormLabel>
                            <RadioGroup defaultValue={false}
                                name='lifeTime'
                                value={sahulatData.lifeTime}
                                onChange={(e) => {
                                    setSahulatData({
                                        ...sahulatData,
                                        lifeTime: e
                                    })
                                }}
                            >
                                <Stack spacing={4} direction='row'>
                                    <Radio value={'Y'}>Yes</Radio>
                                    <Radio value={'N'}>No</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Date of Birth*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    value={sahulatData.dateOfBirth}
                                    name='dateOfBirth'
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            dateOfBirth: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormLabel sx={labelStyle}>Minor*</FormLabel>
                            <RadioGroup defaultValue={false}
                                name='minor'
                                value={sahulatData.minor}
                                onChange={(e) => {
                                    setSahulatData({
                                        ...sahulatData,
                                        minor: e
                                    })
                                }}
                            >
                                <Stack spacing={4} direction='row'>
                                    <Radio value={'Y'}>Yes</Radio>
                                    <Radio value={'N'}>No</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Place of Birth*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='placeOfBirth'
                                    value={sahulatData.placeOfBirth}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            placeOfBirth: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>

                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Gender</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    placeholder=''
                                    name='gender'
                                    // value={KYCForm?.gender?.value}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            gender: e.target.value
                                        })
                                    }}
                                >
                                    <option value=''></option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Others'>Others</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Guardian Name*</FormLabel>
                                <Input
                                    h={'55px'}
                                    type='text'
                                    name='guardianName'
                                    value={sahulatData.guardianName}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            guardianName: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Relation With Minor*</FormLabel>
                                <Input
                                    h={'55px'}
                                    type='text'
                                    name='relationWithMinor'
                                    value={sahulatData.relationWithMinor}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            relationWithMinor: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Guardian CNIC*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='guardianCnic'
                                    value={sahulatData.guardianCnic}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            guardianCnic: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Guardian CNIC Issue Date*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    name='guardianCnicIssueDate'
                                    value={sahulatData.guardianCnicIssueDate}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            guardianCnicIssueDate: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormLabel sx={labelStyle}>Guardian CNIC Expiry Date*</FormLabel>
                            <Input sx={inputfiled} type='date' placeholder=''
                                name='guardianCnicExpiryDate'
                                value={sahulatData.guardianCnicExpiryDate}
                                onChange={(e) => {
                                    setSahulatData({
                                        ...sahulatData,
                                        guardianCnicExpiryDate: e.target.value
                                    })
                                }}
                            />
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormLabel sx={labelStyle}>Guardian CNIC Allow Null*</FormLabel>
                            <RadioGroup defaultValue={false}
                                name='guardianCnicAllowNull'
                                value={sahulatData.guardianCnicAllowNull}
                                onChange={(e) => {
                                    setSahulatData({
                                        ...sahulatData,
                                        guardianCnicAllowNull: e
                                    })
                                }}
                            >
                                <Stack spacing={4} direction='row'>
                                    <Radio value={'Y'}>Yes</Radio>
                                    <Radio value={'N'}>No</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Occupation*</FormLabel>
                                <Input h={'55px'} type='text' placeholder=''
                                    name='occupation'
                                    value={sahulatData.occupation}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            occupation: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Residential Status*</FormLabel>
                                <Input h={'55px'} type='text' placeholder=''
                                    name='residentialStatus'
                                    value={sahulatData.residentialStatus}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            residentialStatus: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Source Of Income*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='sourceOfIncome'
                                    value={sahulatData.sourceOfIncome}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            sourceOfIncome: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>

                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Name Of Employer*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='nameOfEmployer'
                                    value={sahulatData.nameOfEmployer}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            nameOfEmployer: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>

                        </Box>
                        <Box w={'full'}>
                            <FormLabel sx={labelStyle}>Zakat Status*</FormLabel>
                            <Select
                                sx={inputfiled}
                                name='zakatStatus'
                                onChange={(e) => {
                                    setSahulatData({
                                        ...sahulatData,
                                        zakatStatus: e.target.value
                                    })
                                }}
                            >
                                <option value='' style={{ display: 'none' }}></option>
                                <option value='Liable'>Liable</option>
                                <option value='Non Liable'>Non Liable</option>
                            </Select>
                        </Box>

                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>

                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Dividend Payout*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='dividendPayout'
                                    value={sahulatData.dividendPayout}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            dividendPayout: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Retirement Age*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='retirementAge'
                                    value={sahulatData.retirementAge}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            retirementAge: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mailing Address 1*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mailingAddress1'
                                    value={sahulatData.mailingAddress1}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            mailingAddress1: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mailing Address 2*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mailingAddress2'
                                    value={sahulatData.mailingAddress2}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            mailingAddress2: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mailing City*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mailingCity'
                                    value={sahulatData.mailingCity}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            mailingCity: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mailing Country*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mailingCountry'
                                    value={sahulatData.mailingCountry}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            mailingCountry: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Address 1*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='address1'
                                    value={sahulatData.address1}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            address1: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Address 2*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='address2'
                                    value={sahulatData.address2}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            address2: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>City*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='city'
                                    value={sahulatData.city}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            city: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Country*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='country'
                                    value={sahulatData.country}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            country: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mob Country Code*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='mobCountryCode'
                                    value={sahulatData.mobCountryCode}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            mobCountryCode: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mob City Code*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='mobCityCode'
                                    value={sahulatData.mobCityCode}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            mobCityCode: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mobile Number*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='mobileNumber'
                                    value={sahulatData.mobileNumber}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            mobileNumber: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Phone Country Code*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='phnCountryCode'
                                    value={sahulatData.phnCountryCode}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            phnCountryCode: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Phone City Code*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='phnCityCode'
                                    value={sahulatData.phnCityCode}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            phnCityCode: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Phone Number*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='phnNumber'
                                    value={sahulatData.phnNumber}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            phnNumber: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Email*</FormLabel>
                                <Input sx={inputfiled} type='email' placeholder=''
                                    name='email'
                                    value={sahulatData.email}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            email: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Nominee Name*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='nomineeName'
                                    value={sahulatData.nomineeName}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            nomineeName: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Nominee Phone Number*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='nomineePhnNumber'
                                    value={sahulatData.nomineePhnNumber}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            nomineePhnNumber: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>iban*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='iban'
                                    value={sahulatData.iban}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            iban: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Additional Disclosure PEP*</FormLabel>
                                <RadioGroup defaultValue={false}
                                    name='additionalDisclosurePEP'
                                    value={sahulatData.additionalDisclosurePEP}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            additionalDisclosurePEP: e
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
                                <FormLabel sx={labelStyle}>Additional Disclosure Position*</FormLabel>
                                <RadioGroup defaultValue={false}
                                    name='additionalDisclosurePosition'
                                    value={sahulatData.additionalDisclosurePosition}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            additionalDisclosurePosition: e
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
                                <FormLabel sx={labelStyle}>VPS Fund Id*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='vpsFundId'
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            vpsFundId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='13464'>Dummy 1</option>
                                    <option value='13464'>Dummy 1</option>
                                    <option value='13464'>Dummy 1</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>SEQ*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='seq'
                                    value={sahulatData.seq}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            seq: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Plan Fund Id*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='planFundId'
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            planFundId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='13464'>Dummy 1</option>
                                    <option value='13464'>Dummy 1</option>
                                    <option value='13464'>Dummy 1</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Equity Sub Fund*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='equitySubFund'
                                    value={sahulatData.equitySubFund}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            equitySubFund: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Debt Sub Fund*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='debtSubFund'
                                    value={sahulatData.debtSubFund}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            debtSubFund: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>mm Sub Fund*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mmSubFund'
                                    value={sahulatData.mmSubFund}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            mmSubFund: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Gross Sale Amount*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='grossSaleAmount'
                                    value={sahulatData.grossSaleAmount}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            grossSaleAmount: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Instrument Type*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='instrumentType'
                                    value={sahulatData.instrumentType}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            instrumentType: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Instrument Number*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='instrumentNumber'
                                    value={sahulatData.instrumentNumber}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            instrumentNumber: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Bank Id*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='bankId'
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            bankId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='2314'>DUMMY-S</option>
                                    <option value='2314'>DUMMY-S</option>
                                    <option value='2314'>DUMMY-S</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>is Realized*</FormLabel>
                                <RadioGroup defaultValue='1'
                                    name='isRealized'
                                    value={sahulatData.isRealized}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            isRealized: e
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
                                <FormLabel sx={labelStyle}>Branch Id*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='branchId'
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            branchId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='1234'>DUMMY-S</option>
                                    <option value='1234'>DUMMY-S</option>
                                    <option value='1234'>DUMMY-S</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Account Number*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='accountNumber'
                                    value={sahulatData.accountNumber}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            accountNumber: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
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
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Reserved 1*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='reserved1'
                                    value={sahulatData.reserved1}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            reserved1: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Reserved 2*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='reserved2'
                                    value={sahulatData.reserved2}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            reserved2: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Reserved 3*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='reserved3'
                                    value={sahulatData.reserved3}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            reserved3: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Reserved 4*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='reserved4'
                                    value={sahulatData.reserved4}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            reserved4: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Reserved 5*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='reserved5'
                                    value={sahulatData.reserved5}
                                    onChange={(e) => {
                                        setSahulatData({
                                            ...sahulatData,
                                            reserved5: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                </Stack>
                <Stack
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                    p={'5'}
                    gap={'4'}
                    borderRadius={'6'}>
                    <Box>
                        <Button
                            isLoading={isLoading}
                            onClick={() => submitSubSale()}
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
                </Stack>
            </form>
        </Stack>
    )
}
