import { Box, Divider, Heading, Image, Stack, Text, Link } from '@chakra-ui/react'
import d01 from '../../assets/images/directors/d1.jpg';
import React from 'react'
import { createSearchParams, Link as ReactLink } from 'react-router-dom';

export default function Directors({ Directorimg, DirectorName, Directordesignation, Directorsummary, Directordetail, DirectorAdditionalInfo }) {
    return (
        <Stack>
            <Link 
                as={ReactLink} 
                to={`/company/Board-Of-Directors/${DirectorName}`} 
                state={{Directorimg, DirectorName, Directordesignation, Directordetail, DirectorAdditionalInfo }} 
                className='directorBlock'
            >
                <Box position={'relative'} borderRadius={'12px'} overflow={'hidden'} >
                    <Image
                        alt={'d-1'}
                        src={Directorimg}
                        w={'100%'}
                        
                    />
                    <Box textAlign={'left'} py={'2'} display={'flex'} alignItems={'flex-end'} bottom={'0'}  w={'100%'} h={'100%'}>
                        <Box>
                            <Heading as='h5' fontSize={{ base: '18px', md: '20px' }} mb={{ base: '0', md: '1.5' }} color={'#000'}>
                                {DirectorName}
                                <Text as='h6' fontSize={{ base: '18px', md: '16px' }} color={'#f79e22'}>{Directordesignation}</Text>
                            </Heading>
                            <Divider borderWidth={'1px'} borderColor={'#c9c0c0'} my={'2'} />
                           
                        </Box>
                    </Box>
                </Box>
            </Link>

        </Stack>
    )
}
