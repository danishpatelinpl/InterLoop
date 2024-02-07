import { Avatar, Box, Button, FormLabel, Heading, Input, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn';

export default function AccountDetails() {

    const user = useSelector(state => state.value);

    const [FormDetails, setFormDetails] = useState({
        username: user?.name,
        phone: user?.phone,
        email: '',
    })

    return (
        <>
            <Stack py={8} px={6} boxShadow={'0px 0px 26px -10px #bdbdbd'}>
                <Heading
                    fontSize={{ base: 22, md: 30 }}
                >My Account</Heading>
                <Text
                    fontSize={{ base: 13, md: 15 }}
                    display={'flex'}
                    gap={1}
                    color={'primaryText.400'}
                    pb={4}
                    flexWrap={'wrap'}
                >
                    Update your account info incase you entered incorrect info.</ Text>
                {/* <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={3}
                    pb={8}
                >
                    <Avatar
                        name={user?.name ?? 'John Doe'}
                        border={'2px solid #f79e22'}
                        bg={'#f79e22'}
                        h={20}
                        w={20}
                        src={user?.profilePic ?? ''}
                    />
                    <Box>
                        <Heading textTransform={'capitalize'}>{user?.name ?? <Spinner color='#f79e22' w={8} h={8} />}</Heading>
                        <Link
                            to="#"
                            style={{ color: '#f79e22', fontSize: 13 }}
                        >
                            Upload Profile Pic</Link>
                    </Box>
                </Stack> */}
                <Stack
                    direction={'row'}
                    alignItems={'flex-end'}
                    justifyContent={'space-between'}
                    spacing={0}
                >
                    <Box
                        w={'37%'}
                    >
                        <FormLabel>Username</FormLabel>
                        <Input
                            readOnly
                            type={'text'}
                            placeholder={'Your name'}
                            borderRadius={0}
                            fontSize={14}
                            value={FormDetails.username}
                            onChange={(e) => setFormDetails({
                                ...FormDetails,
                                username: e.target.value
                            })}
                        />
                    </Box>
                    <Box
                        w={'37%'}
                    >
                        <FormLabel>Phone</FormLabel>
                        <Input
                            readOnly
                            type={'num'}
                            maxLength={12}
                            placeholder={'Your Number'}
                            borderRadius={0}
                            fontSize={14}
                            value={Number(FormDetails.phone)}
                            onChange={(e) => setFormDetails({
                                ...FormDetails,
                                phone: e.target.value
                            })}
                        />
                    </Box>
                    {/* <Box
                        w={'24%'}
                    >
                        <FormLabel>Email</FormLabel>
                        <Input
                            type={'text'}
                            placeholder={'Your name'}
                            borderRadius={0}
                            fontSize={14}
                            value={FormDetails.email}
                            onChange={(e) => setFormDetails({
                                ...FormDetails,
                                email: e.target.value
                            })}
                        />
                    </Box> */}
                    <Box
                        w={'24%'}
                    >
                        <PrimaryBtn w={'100%'} value={'Submit'} />
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}
