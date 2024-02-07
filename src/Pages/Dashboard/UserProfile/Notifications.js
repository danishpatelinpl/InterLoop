import { Avatar, Box, Button, Checkbox, FormLabel, Heading, Input, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Notifications() {

    const user = useSelector(state => state.value);

    const [Notifications, setNotifications] = useState({
        email: {
            basic: true,
            newFunds: false,
            kyc: true,
            offers: true,
            redemption: false
        },
        sms: {
            basic: true,
            newFunds: false,
            kyc: false,
            offers: true,
            redemption: false
        }
    });

    useEffect(() => {
        // console.log(Notifications);
    }, [Notifications])


    return (
        <>
            <Stack py={8} px={6} boxShadow={'0px 0px 26px -10px #bdbdbd'}>
                <Heading
                    fontSize={{ base: 22, md: 30 }}
                >Notifications</Heading>
                <Text
                    fontSize={{ base: 13, md: 15 }}
                    display={'flex'}
                    gap={1}
                    color={'primaryText.400'}
                    pb={4}
                    flexWrap={'wrap'}
                >
                    Set your Notifications type as per your need.</ Text>
                <Stack
                    direction={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-start'}
                    spacing={0}
                    gap={16}
                >
                    <Stack
                        pb={6}
                    >
                        <Text
                            fontWeight={600}
                            pb={4}
                        >Email Notifications</Text>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.email.basic}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    email: {
                                        ...Notifications.email,
                                        basic: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Recieve an email notification.</Box>
                        </Checkbox>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.email.newFunds}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    email: {
                                        ...Notifications.email,
                                        newFunds: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Recieve an email notification for new funds.</Box>
                        </Checkbox>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.email.kyc}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    email: {
                                        ...Notifications.email,
                                        kyc: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Recieve an email notification for KYC flags.</Box>
                        </Checkbox>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.email.offers}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    email: {
                                        ...Notifications.email,
                                        offers: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Receive an email notifications for Announcements and special offers.</Box>
                        </Checkbox>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.email.redemption}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    email: {
                                        ...Notifications.email,
                                        redemption: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Recieve an email notification for Redemptions.</Box>
                        </Checkbox>
                    </Stack>
                    <Stack
                        pb={6}
                    >
                        <Text
                            fontWeight={600}
                            pb={4}
                        >SMS Notifications</Text>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.sms.basic}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    sms: {
                                        ...Notifications.sms,
                                        basic: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Recieve an SMS notification.</Box>
                        </Checkbox>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.sms.newFunds}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    sms: {
                                        ...Notifications.sms,
                                        newFunds: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Recieve an SMS notification for new funds.</Box>
                        </Checkbox>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.sms.kyc}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    sms: {
                                        ...Notifications.sms,
                                        kyc: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Recieve an SMS notification for KYC flags.</Box>
                        </Checkbox>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.sms.offers}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    sms: {
                                        ...Notifications.sms,
                                        offers: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Receive an SMS notifications for Announcements and special offers.</Box>
                        </Checkbox>
                        <Checkbox colorScheme='yellow' color={'#666e82'}
                            defaultChecked={Notifications.sms.redemption}
                            onChange={(e) => {
                                setNotifications({
                                    ...Notifications,
                                    sms: {
                                        ...Notifications.sms,
                                        redemption: e.target.checked
                                    }
                                })
                            }}
                        >
                            <Box fontSize={{ base: '12px', lg: '14px' }} as={'span'}>Recieve an SMS notification for Redemptions.</Box>
                        </Checkbox>
                    </Stack>
                </Stack>
            </Stack>
        </>

    )
}
