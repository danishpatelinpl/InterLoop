import { Box, Container, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/goals.png'
import Dividend from '../../assets/doc/DividendAnnouncement.pdf'
import { AiOutlineDownload } from 'react-icons/ai';
export default function Announcementsnews() {
  return (
    <>
     
     <Stack 
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
        >

            <MiniBanner textTransform={'capitalize'} heading={'Announcements / News'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
           
        </Stack>  
        <Stack>
        <Container
          maxW={'8xl'}
          py={{ base: '6', md: '24' }}
          px={{ xl: 16, '2xl': 0 }}
        >
          <Stack gap={9}>
            <Box >
              <Heading mb={'4'}  textTransform={'capitalize'}>Dividend Announcement of IAML – Equity Fund</Heading>
              <Text mb={6}>First Interim Dividend of IAML-Equity Fund for the Period Ended September 20, 2023</Text>
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
              as={ReactLink} target="_blank" download to={Dividend}>Download File <Icon as={AiOutlineDownload} verticalAlign={'middle'}  ml={4} fontSize={'20px'} color={'#fff'} /></Link>
            </Box>
           
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
