import { Box, Heading, Input, Select, Stack, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn'

export default function HelpFields() {

    const [HelpForm, setHelpForm] = useState([{
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: ''
    }]);


    return (
        <Stack>
            <Heading
                fontSize={{ base: 18, md: 26 }}
                pb={6}
            >Contact Us</Heading>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                alignItems={'center'}
                justifyContent={'space-between'}
                spacing={{ base: 3, md: 0 }}
                w={'100%'}
                pb={2}
            >
                <Box
                    w={{ base: '100%', md: '49%' }}
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                >
                    <Input type={'text'} placeholder={'Your Name'}
                        value={HelpForm.name}
                        onChange={(e) => setHelpForm({ ...HelpForm, name: e.target.value })}
                        borderRadius={0}
                        fontSize={14}
                        py={6}
                    />
                </Box>
                <Box
                    w={{ base: '100%', md: '49%' }}
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                >
                    <Input type={'email'} placeholder={'Your Email'}
                        value={HelpForm.email}
                        onChange={(e) => setHelpForm({ ...HelpForm, email: e.target.value })}
                        borderRadius={0}
                        fontSize={14}
                        py={6}
                    />
                </Box>
            </Stack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                alignItems={'center'}
                justifyContent={'space-between'}
                spacing={{ base: 3, md: 0 }}
                w={'100%'}
                pb={2}
            >
                <Box
                    w={{ base: '100%', md: '49%' }}
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                >
                    <Input type={'text'} placeholder={'Your Contact'}
                        value={HelpForm.contact}
                        onChange={(e) => setHelpForm({ ...HelpForm, contact: e.target.value })}
                        borderRadius={0}
                        fontSize={14}
                        py={6}
                    />
                </Box>
                <Box
                    w={{ base: '100%', md: '49%' }}
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                >
                    <Select
                        borderRadius={0}
                        fontSize={14}
                        height={'50px'}
                        onChange={(e) => setHelpForm({ ...HelpForm, subject: e.target.value })}
                    >
                        <option style={{ display: 'none' }}>Select Subject</option>
                        <option>KYC</option>
                        <option>Investment</option>
                        <option>Risk Profile</option>
                    </Select>
                </Box>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                spacing={0}
                w={'100%'}
                pb={{ base: 3, md: 6 }}
            >
                <Box
                    w={'100%'}
                    style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                >
                    <Textarea
                        value={HelpForm.message}
                        placeholder='Your Message'
                        borderRadius={0}
                        fontSize={14}
                        height={'150px'}
                        resize={'none'}
                        onChange={(e) => setHelpForm({ ...HelpForm, message: e.target.value })}
                    >

                    </Textarea>
                </Box>
            </Stack>
            <Link to='#'>
                <PrimaryBtn value={'Submit'} w={{ base: '100%', md: '200px' }} />
            </Link>
        </Stack>
    )
}
