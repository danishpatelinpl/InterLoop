import { Avatar, Box, Button, FormLabel, Heading, Icon, Input, Radio, Select, Spinner, Stack, Text, useToast } from '@chakra-ui/react'
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn';
import { updateRegisteredBanks, updateTokens, updateUser, updateUserBankList } from '../../../reducers/useReducer';
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../utils/Config';
import { FiLoader } from 'react-icons/fi';
import { AiOutlineReload } from 'react-icons/ai';

export default function AddBank() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const user = useSelector(state => state.value);
    const userExistingBanks = useSelector(state => state.userBankList);
    const tokens = useSelector(state => state.tokens);
    const registeredBanksList = useSelector(state => state.registeredBanks)

    const [isLoading, setisLoading] = useState(false);
    const [bankLoading, setBankLoading] = useState(false);
    const [registeredBanks, setRegisteredBanks] = useState([]);
    const [FormDetails, setFormDetails] = useState({
        bank_id: '',
        name: '',
        number: '',
    });

    const getListOfRegisterdBanks = async () => {
        let bankList = await GET(`${baseUrl}/banks/registeredBankList`, { Authorization: `Bearer ${localStorage.getItem('access_token')}` })
        
        if (bankList?.message == "unauthorized") {
            let newToken = await POST(`${baseUrl}/users/refresh`, { refresh_token: localStorage.getItem('refresh_token') });
            // console.log(newToken);
            if (newToken?.status == 'ok') {
                let bankList = await GET(`${baseUrl}/banks/registeredBankList`, { Authorization: `Bearer ${localStorage.getItem('access_token')}` });
                // console.log(bankList);
                setRegisteredBanks(bankList?.data)
                dispatch(updateRegisteredBanks(bankList?.data))
                dispatch(updateTokens(newToken?.data))
            }
            if (newToken?.message == "session_not_found") {
                toast({
                    description: 'Session expired, please login again!',
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
            }
        } else {
            setRegisteredBanks(bankList?.data)
        }
    }

    const addBankAccount = async () => {
        setisLoading(true);
        // console.log('divi' + FormDetails);
        let createBankResponse = await POST(`${baseUrl}/banks/createUserBankAccount`, FormDetails, { Authorization: `Bearer ${localStorage.getItem('access_token')}` })
        // console.log(createBankResponse);
        if (createBankResponse?.message == "unauthorized") {
            let newToken = await POST(`${baseUrl}/users/refresh`, { refresh_token: localStorage.getItem('access_token') });
            // console.log(newToken);
            if (newToken?.status == 'ok') {
                createBankResponse = await POST(`${baseUrl}/banks/createUserBankAccount`, FormDetails, { Authorization: `Bearer ${localStorage.getItem('access_token')}` })
                dispatch(updateTokens(newToken?.data))
                // console.log(createBankResponse);
                if (createBankResponse?.status == 'ok') {
                    toast({
                        description: 'Account Added Successfully!',
                        status: 'success',
                        position: 'bottom-left',
                        isClosable: true,
                        duration: 4000
                    })
                    setFormDetails({
                        bank_id: '',
                        name: '',
                        number: '',
                    })
                } else {
                    toast({
                        description: 'Something Went Wrong!',
                        status: 'Error',
                        position: 'bottom-left',
                        isClosable: true,
                        duration: 4000
                    })
                }
            } else {
                toast({
                    description: 'Session expired, login again!',
                    status: 'warning',
                    position: 'bottom-left',
                    isClosable: true,
                    duration: 4000
                })
                localStorage.setItem('user', null);
                Cookies.set('user', null)
                Cookies.set('kycData', null)
                Cookies.set('kycLevel1', null)
                localStorage.clear();
                Cookies.set('kycLevel2', null)
                dispatch(updateUser(null))
                navigate('/')
            }
        } else {
            toast({
                description: 'Account Added Successfully!',
                status: 'success',
                position: 'bottom-left',
                isClosable: true,
                duration: 4000
            })
        }
        setisLoading(false);
    }

    useEffect(() => {
        console.log(userExistingBanks)
        if (registeredBanksList === undefined) {
            getListOfRegisterdBanks();
            // console.log("data1" + registeredBanks);
        }
    }, [])

    useEffect(() => {
        // console.log(registeredBanksList);
        setRegisteredBanks(registeredBanksList)
    }, [registeredBanksList])

    const getBanksList = async () => {
        setBankLoading(true);
        let bankListResponse = await GET(`${baseUrl}/banks/userBankAccountsList`, { Authorization: `Bearer ${localStorage.getItem('access_token')}` });
        console.log(bankListResponse);
        if (bankListResponse.message == "unauthorized") {
            let newToken = await POST(`${baseUrl}/users/refresh`, { refresh_token: tokens?.refresh_token });
            console.log(newToken);
            if (newToken.status == 'ok') {
                let bankListResponse = await GET(`${baseUrl}/funds/userBankAccountsList`, { Authorization: `Bearer ${localStorage.getItem('access_token')}` });
                console.log(bankListResponse);
                dispatch(updateUserBankList(bankListResponse?.data))
                dispatch(updateTokens(newToken.data))
            }
        } else {
            console.log('was here')
            dispatch(updateUserBankList(bankListResponse?.data))
        }
        setBankLoading(false)
    }

    return (
        <>
            <Stack py={8} px={6} boxShadow={'0px 0px 26px -10px #bdbdbd'}>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                >
                    <Box>
                        <Heading
                            fontSize={{ base: 22, md: 30 }}
                            pb={2}
                        >Add Bank</Heading>
                        <Text
                            fontSize={{ base: 13, md: 15 }}
                            display={'flex'}
                            gap={1}
                            color={'primaryText.400'}
                            pb={4}
                            flexWrap={'wrap'}
                        >
                            Add bank details to ease the transactions to your funds.</ Text>
                    </Box>
                </Stack>
                <Stack
                    direction={'row'}
                    alignItems={'flex-end'}
                    justifyContent={'space-between'}
                    spacing={0}
                >
                    <Box
                        w={'24%'}
                    >
                        <FormLabel>Select Bank</FormLabel>
                        <Select
                            borderRadius={0}
                            fontSize={14}
                            placeholder='Select Bank'
                            onChange={(e) => {
                                setFormDetails({
                                    ...FormDetails,
                                    bank_id: e.target.value
                                })
                            }}
                        >
                            {
                                registeredBanks?.length > 0 &&
                                registeredBanks?.map((v, i) => <option
                                    value={v?.id}
                                    key={i}
                                >
                                    {v?.name}</option>)
                            }
                        </Select>
                    </Box>
                    <Box
                        w={'24%'}
                    >
                        <FormLabel>Name</FormLabel>
                        <Input
                            type={'text'}
                            placeholder={'Name'}
                            borderRadius={0}
                            fontSize={14}
                            value={FormDetails.name}
                            onChange={(e) => setFormDetails({
                                ...FormDetails,
                                name: e.target.value
                            })}
                        />
                    </Box>
                    <Box
                        w={'24%'}
                    >
                        <FormLabel>Account Number / IBAN</FormLabel>
                        <Input
                            maxLength={'24'}
                            type={'text'}
                            placeholder={'Account Number'}
                            borderRadius={0}
                            fontSize={14}
                            value={FormDetails.number}
                            onChange={(e) => setFormDetails({
                                ...FormDetails,
                                number: e.target.value
                            })}
                        />
                    </Box>
                    <Box
                        w={'24%'}
                        onClick={() => addBankAccount()}
                    >
                        <PrimaryBtn isLoading={isLoading} w={'100%'} value={'Submit'} />
                    </Box>
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'flex-end'}
                    margin={'20px 0 0 0 !important'}
                    pb={4}
                >
                    <Box>
                        <Heading
                            fontSize={{ base: 22, md: 30 }}
                            pb={2}
                        >Your Existing Banks</Heading>
                        <Text
                            fontSize={{ base: 13, md: 15 }}
                            display={'flex'}
                            gap={1}
                            color={'primaryText.400'}
                            flexWrap={'wrap'}
                        >
                            Below is the list of your existing banks.</ Text>
                    </Box>
                    <Box>
                        <Button
                            isLoading={bankLoading}
                            onClick={() => getBanksList()}
                            bgColor={'primaryHeading.100'}
                            color={'#fff'}
                            _hover={{ bgColor: 'primaryHeading.100' }}
                        >
                            <Icon as={AiOutlineReload} />
                        </Button>
                    </Box>
                </Stack>
                <Stack
                    direction={'column'}
                    alignItems={'flex-end'}
                    spacing={0}
                    w={'full'}
                >
                    <Stack
                        direction={'row'}
                        spacing={0}
                        w={'full'}
                        border={'1px solid #adadad'}
                        p={'5px'}
                    >
                        <Text fontWeight={800} w={'32%'}>Title</Text>
                        <Text fontWeight={800} w={'32%'}>Bank Name</Text>
                        <Text fontWeight={800} w={'32%'}>Bank Number</Text>
                    </Stack>
                    {
                        userExistingBanks?.length > 0 &&
                        userExistingBanks.map((v, i) =>
                            <Stack
                                border={'1px solid #adadad'}
                                p={'5px'}
                                w={'full'}
                                key={i}
                                direction={'row'}
                                spacing={0}
                            >
                                <Text w={'32%'}>{v?.name}</Text>
                                <Text w={'32%'}>{v?.bank_name}</Text>
                                <Text w={'32%'}>{v?.number}</Text>
                            </Stack>
                        )
                    }
                </Stack>
            </Stack>
        </>
    )
}
