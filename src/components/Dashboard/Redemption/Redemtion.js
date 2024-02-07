import { Box, Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import React from 'react'

export default function KycForm() {


    const labelStyle =
    {
        color: '#7a7a7a',
        fontSize: '13px',
        fontWeight:'600'
    }


    return (
        <Stack
            style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
            p={'5'}
            borderRadius={'6'}>
            <Flex w={'full'} justifyContent={'space-between'} gap={'6'}>
                <Box w={'full'}>
                    <FormControl>
                        <FormLabel sx={labelStyle}>Name as per CNIC*</FormLabel>
                        <Input h={'55px'} type='email' placeholder='Your Name' />
                    </FormControl>
                </Box>
                <Box w={'full'}>
                    <FormControl>
                        <FormLabel sx={labelStyle}>Father/Husband name per CNIC*</FormLabel>
                        <Input h={'55px'} type='email' placeholder='Enter Father/Husband Name' />
                    </FormControl>
                </Box>
                <Box w={'full'}>
                    <FormControl>
                        <FormLabel sx={labelStyle}>Mothers maiden Name*</FormLabel>
                        <Input h={'55px'} type='email' placeholder='Enter Number' />
                    </FormControl>
                </Box>
                
            </Flex>
        </Stack>
    )
}
