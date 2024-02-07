import { Box, Image, Stack ,Link, Icon} from '@chakra-ui/react'
import React from 'react'
import v1 from '../../assets/images/vedio/v1.jpg';
import { Link as ReactLink } from 'react-router-dom';
import { AiOutlinePlayCircle} from 'react-icons/ai'

export default function Vedio() {
  return (
    <Stack>
      <Box position={'relative'} borderRadius={'12px'} overflow={'hidden'}>
      <Image
          alt={'v1'}
          margin={{ xl: 'auto', '2xl': '0 0 0 auto' }}
         
          src={v1} />
        <Box textAlign={'center'} px={'5'} py={'2'} position={'absolute'} justifyContent={'center'} display={'flex'} alignItems={'center'} bottom={'0'} bg={'#0b3168a1'} h={'100%'} w={'100%'}>
        <Link as={ReactLink} to={'/'} ><Icon color={'#fff'} fontSize={'80px'}  as={AiOutlinePlayCircle}></Icon></Link>
        </Box>
      </Box>
    </Stack>
  )
}
