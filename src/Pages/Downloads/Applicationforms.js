import { Box, Container, Heading, Icon, Link, Stack } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/goals.png'
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Applicationforms() {
  return (
    <>
    <Stack 
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
        >

            <MiniBanner textTransform={'capitalize'} heading={'Application Forms'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
           
        </Stack>  
        <Stack>
        <Container
          maxW={'8xl'}
          py={{ base: '6', md: '24' }}
          px={{ xl: 16, '2xl': 0 }}
        >
          <Stack gap={9}>
            <Box >
              <Heading mb={'4'} >Account Opening</Heading>
              <Link  
               bg={'#f79e22'}
               display={'inline-block'}
               padding={'12px 20px'}
               boxShadow={`0px 15px 15px -15px`}
               color={'#fff'}
               borderRadius={'8px'}
               _hover={{
                 bg: '#ffbb5c',
                 boxShadow: 'none',
                 transform: 'translateY(2px)'
               }}
              as={ReactLink}  to={'/Downloads/Accountopening'}>View More <Icon as={AiOutlineArrowRight} verticalAlign={'middle'}  ml={4} fontSize={'20px'} color={'#fff'} /></Link>
            </Box>
            <Box>
            <Heading mb={'4'} >Transaction Form</Heading>
            <Link  
            
               bg={'#f79e22'}
               display={'inline-block'}
               padding={'12px 20px'}
               boxShadow={`0px 15px 15px -15px`}
               color={'#fff'}
               borderRadius={'8px'}
               _hover={{
                 bg: '#ffbb5c',
                 boxShadow: 'none',
                 transform: 'translateY(2px)'
               }}
              as={ReactLink} to={'/Downloads/Transactionforms'}>View More <Icon as={AiOutlineArrowRight} verticalAlign={'middle'}  ml={4} fontSize={'20px'} color={'#fff'} /></Link>
            </Box>
            <Box>
            <Heading mb={'4'} >Others</Heading>
            <Link  
            
               bg={'#f79e22'}
               display={'inline-block'}
               padding={'12px 20px'}
               boxShadow={`0px 15px 15px -15px`}
               color={'#fff'}
               borderRadius={'8px'}
               _hover={{
                 bg: '#ffbb5c',
                 boxShadow: 'none',
                 transform: 'translateY(2px)'
               }}
              as={ReactLink} to={'/Downloads/Other'}>View More <Icon as={AiOutlineArrowRight} verticalAlign={'middle'}  ml={4} fontSize={'20px'} color={'#fff'} /></Link>
            </Box>
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
