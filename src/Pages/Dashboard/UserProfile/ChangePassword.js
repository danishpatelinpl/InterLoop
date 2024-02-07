import { Avatar, Box, Button, FormLabel, Heading, Input, Radio, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn';

export default function ChangePassword() {

    const user = useSelector(state => state.value);

    const [FormDetails, setFormDetails] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        passwordMatched: false
    });
    const [HasLower, setHasLower] = useState(false);
    const [HasOneNumber, setHasOneNumber] = useState(false);
    const [HasUpperCase, setHasUpperCase] = useState(false);
    const [LimitedChars, setLimitedChars] = useState(false);

    const checkLimit = () => {
        if (FormDetails.confirmNewPassword.length > 7 && FormDetails.confirmNewPassword.length < 17) {
            setLimitedChars(true)
        } else {
            setLimitedChars(false)
        }
    }

    const checkNumbers = () => {
        if (/\d/.test(FormDetails.confirmNewPassword)) {
            setHasOneNumber(true)
        } else {
            setHasOneNumber(false)
        }
    }

    const checkLowerCase = () => {
        if (/[a-z]+/.test(FormDetails.confirmNewPassword)) {
            setHasLower(true)
        } else {
            setHasLower(false)
        }
    }

    const checkUpperCase = () => {
        if (/[A-Z]+/.test(FormDetails.confirmNewPassword)) {
            setHasUpperCase(true)
        } else {
            setHasUpperCase(false)
        }
    }

    useEffect(() => {
        checkLimit();
        checkNumbers();
        checkLowerCase();
        checkUpperCase();
        if ((FormDetails.newPassword === FormDetails.confirmNewPassword) && (FormDetails.confirmNewPassword !== '')) {
            setFormDetails({
                ...FormDetails,
                passwordMatched: true
            })
        } else {
            setFormDetails({
                ...FormDetails,
                passwordMatched: false
            })
        }
    }, [FormDetails.confirmNewPassword])

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
                        >Change Password</Heading>
                        <Text
                            fontSize={{ base: 13, md: 15 }}
                            display={'flex'}
                            gap={1}
                            color={'primaryText.400'}
                            pb={4}
                            flexWrap={'wrap'}
                        >
                            Change your password time to time to keep your account safe from hackers.</ Text>
                    </Box>
                    <Box>
                        <Box w={{ base: '100%', md: 'initial' }}>
                            <Text color={'#666e82'} fontSize={{ base: '13px', lg: '16px' }} marginBottom={'10px'}>Password must contain:</Text>
                            <Stack color={'#000'} className='customRadio' spacing={4} direction='row' marginBottom={'10px'}>
                                <Radio isDisabled={!HasLower} isChecked={HasLower} id='lowerRadio' colorScheme={'green'} value='1'>Lower-case</Radio>
                                <Radio isDisabled={!HasOneNumber} isChecked={HasOneNumber} id='oneRadio' value='2' colorScheme={'green'}>Atleast one number</Radio>
                            </Stack>
                            <Stack color={'#000'} className='customRadio' spacing={4} direction='row'>
                                <Radio isDisabled={!HasUpperCase} isChecked={HasUpperCase} id='upperRadio' value='3' colorScheme={'green'}>Upper-case</Radio>
                                <Radio isDisabled={!LimitedChars} isChecked={LimitedChars} id='charRadio' value='4' colorScheme={'green'}>8-16 characters</Radio>
                            </Stack>
                        </Box>
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
                        <FormLabel>Old Password</FormLabel>
                        <Input
                            type={'text'}
                            placeholder={'********'}
                            borderRadius={0}
                            fontSize={14}
                            value={FormDetails.oldPassword}
                            onChange={(e) => setFormDetails({
                                ...FormDetails,
                                oldPassword: e.target.value
                            })}
                        />
                    </Box>
                    <Box
                        w={'24%'}
                    >
                        <FormLabel>New Password</FormLabel>
                        <Input
                            type={'text'}
                            placeholder={'********'}
                            borderRadius={0}
                            fontSize={14}
                            value={FormDetails.newPassword}
                            onChange={(e) => setFormDetails({
                                ...FormDetails,
                                newPassword: e.target.value
                            })}
                        />
                    </Box>
                    <Box
                        w={'24%'}
                    >
                        <FormLabel>Confirm New Password</FormLabel>
                        <Input
                            type={'text'}
                            placeholder={'********'}
                            borderRadius={0}
                            fontSize={14}
                            value={FormDetails.confirmNewPassword}
                            onChange={(e) => setFormDetails({
                                ...FormDetails,
                                confirmNewPassword: e.target.value
                            })}
                        />
                    </Box>
                    <Box
                        w={'24%'}
                    >
                        <PrimaryBtn w={'100%'} value={'Submit'} disabled={FormDetails.passwordMatched} />
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}
