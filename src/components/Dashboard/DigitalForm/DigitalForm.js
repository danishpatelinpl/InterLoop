import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Select, Stack, Text, useToast } from '@chakra-ui/react'
import Cookies from 'js-cookie';
import { async } from 'q';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateCdcToken, updateKYC, updateTokens, updateUser, updateUserAccessToken, updateUserRefreshToken } from '../../../reducers/useReducer';
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { baseUrl, dataImage } from '../../../utils/Config';
import getCurrentDateTime from '../../../utils/TimeFormatter';

export default function DigitalForm() {

    const user = useSelector(state => state.value);
    const userKyc = useSelector(state => state.kycData);
    const tokens = useSelector(state => state.tokens)
    const toast = useToast();
    const cdcToken = useSelector(state => state.cdcToken);
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

    const [digitalData, setDigitalData] = useState({
        folioType: "",
        salutation: "",
        title: "",
        gender: "",
        dateOfBirth: "",
        minor: "",
        relationWithMinor: "",
        guardianName: "",
        fatherName: "",
        motherName: "",
        principleCnic: "",
        lifeTime: "",
        principleCnicExpiryDate: "",
        guardianCnic: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        mailingAddress1: "",
        mailingAddress2: "",
        mailingCity: "",
        mailingCountry: "",
        mobCountryCode: "",
        mobCityCode: "",
        mobileNumber: "",
        phnCountryCode: "",
        phnCityCode: "",
        phnNumber: "",
        email: "",
        occupation: "",
        sourceOfIncome: "",
        retirementAge: "",
        zakatStatus: "",
        nomineeName: "",
        nomineePhnNumber: "",
        // PK49ALFH0031001007532231
        iban: "",
        dividendPayout: "",
        maritalStatus: "",
        numOfDependents: "",
        education: "",
        annualIncome: "",
        ultimateBeneficiaryName: "",
        ultimateBeneficiaryCNIC: "",
        cnicIssueDate: "",
        guardianCnicIssueDate: "",
        guardianCnicExpiryDate: "",
        guardianCnicAllowNull: "",
        nameOfEmployer: "",
        residentialStatus: "",
        vpsFundId: "",
        planFundId: "",
        seq: "",
        equitySubFund: "",
        debtSubFund: "",
        mmSubFund: "",
        reserved1: "",
        reserved2: "",
        reserved3: "",
        reserved4: "",
        reserved5: ""
    });

    const submitDigitalForm = async () => {

        let data = digitalData;

        data.dateOfBirth = String(data.dateOfBirth).split('-');
        // console.log(data.dateOfBirth)
        let dobFormatted = [data.dateOfBirth[2], data.dateOfBirth[1], data.dateOfBirth[0]]
        // console.log(dobFormatted)
        data.dateOfBirth = dobFormatted;
        data.dateOfBirth = `${data.dateOfBirth[0]}/${data.dateOfBirth[1]}/${data.dateOfBirth[2]}`

        setisLoading(true)
        // console.log(digitalData)
        let response = await POST(`${baseUrl}/cdc/submitDigitalAccount`, digitalData, {
            "content-type": "application/json",
            credentials: `${cdcToken}`,
        });

        // console.log(response);

        if (response.responseMessage == "Request Timeout") {

            let newToken = await POST(`${baseUrl}/cdc/getRefreshToken`, { token: cdcToken });
            // console.log(newToken);

            if (newToken?.responseMessage == "Success") {
                let submitResponse = await POST(`${baseUrl}/cdc/submitDigitalAccount`, digitalData, {
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
            <form id="digitalForm">
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
                                        setDigitalData({
                                            ...digitalData,
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
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.title}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                <FormLabel sx={labelStyle}>Gender</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    placeholder=''
                                    name='gender'
                                    value={digitalData.gender}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                <FormLabel sx={labelStyle}>Date of Birth*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    name='dateOfBirth'
                                    value={digitalData.dateOfBirth}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                value={digitalData.minor}
                                onChange={(e) => {
                                    setDigitalData({
                                        ...digitalData,
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
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Relation With Minor*</FormLabel>
                                <Input
                                    h={'55px'}
                                    type='text'
                                    name='relationWithMinor'
                                    value={digitalData.relationWithMinor}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            relationWithMinor: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Guardian Name*</FormLabel>
                                <Input
                                    h={'55px'}
                                    type='text'
                                    name='guardianName'
                                    value={digitalData.guardianName}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            guardianName: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Father Name*</FormLabel>
                                <Input
                                    sx={inputfiled}
                                    type='text'
                                    name='fatherName'
                                    value={digitalData.fatherName}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            fatherName: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>

                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mother Name*</FormLabel>
                                <Input
                                    sx={inputfiled}
                                    type='text'
                                    name='motherName'
                                    value={digitalData.motherName}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    type='text'
                                    name='principleCnic'
                                    value={digitalData.principleCnic}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            principleCnic: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormLabel sx={labelStyle}>CNIC Lifetime*</FormLabel>
                            <RadioGroup defaultValue={false}
                                name='lifeTime'
                                value={digitalData.lifeTime}
                                onChange={(e) => {
                                    setDigitalData({
                                        ...digitalData,
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
                                <FormLabel sx={labelStyle}>CNIC Expiry Date*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    value={digitalData.principleCnicExpiryDate}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            principleCnicExpiryDate: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Guardian CNIC*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='guardianCnic'
                                    value={digitalData.guardianCnic}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            guardianCnic: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Address 1*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='address1'
                                    value={digitalData.address1}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            address1: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Address 2*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='address2'
                                    value={digitalData.address2}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.city}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            city: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Country*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='country'
                                    value={digitalData.country}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            country: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mailing Address 1*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mailingAddress1'
                                    value={digitalData.mailingAddress1}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            mailingAddress1: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mailing Address 2*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mailingAddress2'
                                    value={digitalData.mailingAddress2}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.mailingCity}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            mailingCity: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mailing Country*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mailingCountry'
                                    value={digitalData.mailingCountry}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            mailingCountry: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Mob Country Code*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mobCountryCode'
                                    value={digitalData.mobCountryCode}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.mobCityCode}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.mobileNumber}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.phnCountryCode}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.phnCityCode}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.phnNumber}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.email}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            email: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Occupation*</FormLabel>
                                <Input h={'55px'} type='text' placeholder=''
                                    name='occupation'
                                    value={digitalData.occupation}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            occupation: e.target.value
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
                                    value={digitalData.sourceOfIncome}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            sourceOfIncome: e.target.value
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
                                    value={digitalData.retirementAge}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            retirementAge: e.target.value
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
                                    setDigitalData({
                                        ...digitalData,
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
                                <FormLabel sx={labelStyle}>Nominee Name*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='nomineeName'
                                    value={digitalData.nomineeName}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            nomineeName: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Nominee Phone Number*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='nomineePhnNumber'
                                    value={digitalData.nomineePhnNumber}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            nomineePhnNumber: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Iban*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='iban'
                                    value={digitalData.iban}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                <FormLabel sx={labelStyle}>Dividend Payout*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='dividendPayout'
                                    value={digitalData.dividendPayout}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            dividendPayout: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Marital Status*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='maritalStatus'
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            maritalStatus: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='single'>Single</option>
                                    <option value='married'>Married</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Number of Dependants*</FormLabel>
                                <Input sx={inputfiled} type='number' placeholder=''
                                    name='numOfDependents'
                                    value={digitalData.numOfDependents}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            numOfDependents: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Education*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='education'
                                    value={digitalData.education}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            education: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Annual Income*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='annualIncome'
                                    value={digitalData.annualIncome}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            annualIncome: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Ultimate Beneficiary Name*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='ultimateBeneficiaryName'
                                    value={digitalData.ultimateBeneficiaryName}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            ultimateBeneficiaryName: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Ultimate Beneficiary CNIC*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='ultimateBeneficiaryCNIC'
                                    value={digitalData.ultimateBeneficiaryCNIC}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            ultimateBeneficiaryCNIC: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>CNIC Issue Date*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    name='cnicIssueDate'
                                    value={digitalData.cnicIssueDate}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            cnicIssueDate: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Guardian CNIC Issue Date*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    name='cnicIssueDate'
                                    value={digitalData.guardianCnicIssueDate}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            guardianCnicIssueDate: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>

                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Guardian CNIC Expiry Date*</FormLabel>
                                <Input sx={inputfiled} type='date' placeholder=''
                                    name='guardianCnicExpiryDate'
                                    value={digitalData.guardianCnicExpiryDate}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            guardianCnicExpiryDate: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>No Guardian CNIC*</FormLabel>
                                <RadioGroup defaultValue={false}
                                    name='guardianCnicAllowNull'
                                    // value={KYCForm?.cnic_life?.value}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            guardianCnicAllowNull: e
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
                                <FormLabel sx={labelStyle}>Name of Employer*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='nameOfEmployer'
                                    value={digitalData.nameOfEmployer}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            nameOfEmployer: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Residential Status*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='residentialStatus'
                                    value={digitalData.residentialStatus}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            residentialStatus: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>VPS Fund Id*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='vpsFundId'
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            vpsFundId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='1234'>Dummy 1</option>
                                    <option value='1234'>Dummy 2</option>
                                    <option value='1234'>Dummy 3</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Plan Fund Id*</FormLabel>
                                <Select
                                    sx={inputfiled}
                                    name='planFundId'
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            planFundId: e.target.value
                                        })
                                    }}
                                >
                                    <option value='' style={{ display: 'none' }}></option>
                                    <option value='123464'>Dummy 1</option>
                                    <option value='123464'>Dummy 2</option>
                                    <option value='123464'>Dummy 3</option>
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
                                    value={digitalData.seq}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            seq: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Equity Sub Fund*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='equitySubFund'
                                    value={digitalData.equitySubFund}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            equitySubFund: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Debt Sub Fund*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='debtSubFund'
                                    value={digitalData.debtSubFund}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            debtSubFund: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Flex>
                    <Flex flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} gap={'6'}>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>mm Sub Fund*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='mmSubFund'
                                    value={digitalData.mmSubFund}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
                                            mmSubFund: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box w={'full'}>
                            <FormControl>
                                <FormLabel sx={labelStyle}>Reserved 1*</FormLabel>
                                <Input sx={inputfiled} type='text' placeholder=''
                                    name='reserved1'
                                    value={digitalData.reserved1}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.reserved2}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.reserved3}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.reserved4}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                                    value={digitalData.reserved5}
                                    onChange={(e) => {
                                        setDigitalData({
                                            ...digitalData,
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
                            onClick={() => submitDigitalForm()}
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
