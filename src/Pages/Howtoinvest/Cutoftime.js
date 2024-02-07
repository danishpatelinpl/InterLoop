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


export default function Cutoftime() {
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
    
           <MiniBanner heading={'Cut Off Timing'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
          
       </Stack>
       
      
       <Stack>
      <Container
        maxW={'8xl'}
        pb={{ base: '6', md: '10' }}
        as={Stack}
        spacing={'10'}
      >
        <Stack pt={12}>
        <Heading as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
        Cut Off Timing
          </Heading>
          <TableContainer>
            <Table border={'1px solid #F79E22 '} variant="simple">
           
              <Thead>
                <Tr>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>FUND</Th>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>MON-THU</Th>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>FRI</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>Interloop Asset Management Limited Money Market Fun</Td>
                  <Td border={'1px solid #F79E22 '}>3:00 PM</Td>
                  <Td border={'1px solid #F79E22 '}>4:00 PM</Td>
                </Tr>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>Interloop Asset Management Limited Equity Fund</Td>
                  <Td border={'1px solid #F79E22 '}>3:00 PM</Td>
                  <Td border={'1px solid #F79E22 '}>4:00 PM</Td>
                </Tr>
                
              </Tbody>
              
            </Table>
          </TableContainer>
        </Stack>
     
      </Container>
    </Stack>
       
    </Stack>
      )
}
