import {
    Box,
    Container,
    Heading,
    ListItem,
    Stack,
    Table,
    Thead,
    Icon,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Link,
    UnorderedList,
  } from '@chakra-ui/react';
  import { AiOutlineDownload } from 'react-icons/ai';
  import { Link as ReactLink } from 'react-router-dom';
  import React, { useEffect } from 'react'
  import ContactUs from '../../components/Contact/ContactUs'
  import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
  import MiniBanner from "../../components/Banners/MiniBanner";
  import BannerPic from '../../assets/images/secimgs/invest.png'
  import InvestNavBar from '../../components/NavBars/InvestNavBar';
  import HowitWork from '../../components/Howitwork/HowitWork';
  import Howtoinvestcontent from '../../components/Howtoinvest/Howtoinvestcontent';
  
  
  export default function Invest() {
      useEffect(() => {
          document.getElementById('Footer').style.display = 'block';
          document.getElementById('Header').style.display = 'block';
        }, [])
        return (
          <Stack>
          <Stack 
         bgImage={mainbackSvg}
         bgSize={'cover'}
         bgRepeat={'no-repeat'}
         bgAttachment={'fixed'}
         py={12}
         >
      
             <MiniBanner heading={'How to Invest'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
            
         </Stack>
         
        
         <Stack>
      <Container
        maxW={'8xl'}
        pb={{ base: '6', md: '10' }}
        as={Stack}
        spacing={'10'}
      >
     
        <Box pt={'4'}>
          <Heading  textTransform={'capitalize'} as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
            How to Invest ?
          </Heading>
          <UnorderedList>
            <ListItem>Step 1 : Fill the Account Opening Form</ListItem>
            <ListItem>Step 2 : Attach the Relevent Documents</ListItem>
            <ListItem>Step 3 : Attach payment instrument - cross Cheque Pay Order,Demand Draft</ListItem>
            <ListItem>
              Step 4 : Submit the Account Opening Boolet and Documents
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
        <Heading as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
        Download / Application Form
          </Heading>
          <UnorderedList spacing={12}>
            <ListItem>
            <Heading as="h3" fontSize={'18px'} mb={'4'}>
            Account Opening With Physical form
          </Heading>
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
              as={ReactLink} target="_blank" download to={'../../assets/doc/Doc1.docx'}>Pending Download File <Icon as={AiOutlineDownload} verticalAlign={'middle'}  ml={4} fontSize={'20px'} color={'#fff'} /></Link>
            
             
            </ListItem>
            <ListItem>
            <Heading as="h3" fontSize={'18px'} mb={'4'}>
            Account Opening With Online Process
          </Heading>
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
              as={ReactLink}  to={'/register'}>Get Started</Link>
            
             
            </ListItem>
          </UnorderedList>
        </Box>
       
      </Container>
    </Stack>
         
      </Stack>
        )
  }
  