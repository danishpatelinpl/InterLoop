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
  
  
  export default function Risk() {
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
      
             <MiniBanner heading={'Risk Profile'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
            
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
            Risk Profile
          </Heading>
          <Box pb={'6'}>
            <Heading as="h4" fontSize={'20px'} mb={'4'}>
              Determine Your Risk Profile
            </Heading>
            <UnorderedList>
              <ListItem>
                Complete the Risk Profiling Questionnaire to determine your risk
                profile
              </ListItem>
             
              <ListItem>
                When you have selected your preferred fund, invest in that fund.
              </ListItem>
            </UnorderedList>
          </Box>
          <TableContainer>
            <Table border={'1px solid #F79E22 '} variant="simple">
              <Thead>
                <Tr>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>
                    Risk Profile
                  </Th>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>
                    Investor Profile{' '}
                  </Th>
                  {/* <Th border={'1px solid #F79E22 '} color={'#000'}>
                    Possible Asset Allocation
                  </Th> */}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>Very Low Risk</Td>
                  <Td border={'1px solid #F79E22 '}>
                    <Text fontSize={'18px'}>
                      Very low risk capacity and tolerance; unable to take on
                      risk due to having
                      <br /> too many financial obligations and/or modest income
                      and wealth build up; has low tolerance towards risk.
                    </Text>
                  </Td>
                  {/* <Td border={'1px solid #F79E22 '}>
                    <Text>
                      Equity : 0-10% <br />
                      Debt and Cash : 90-100%
                    </Text>
                  </Td> */}
                </Tr>
                <Tr>
                  <Td border={'1px solid #F79E22 '}> Low Risk</Td>
                  <Td border={'1px solid #F79E22 '}>
                    <Text fontSize={'18px'}>
                      Low risk capacity and tolerance; cannot take on too much
                      risk due to having financial obligations and/or modest{' '}
                      <br />
                      income and wealth build up; has low tolerance towards
                      risk; slightly higher risk profile as compared <br />
                      to the 'Very low risk' investor.
                    </Text>
                  </Td>
                  {/* <Td border={'1px solid #F79E22 '}>
                    <Text>
                      Equity : 10-30% <br />
                      Debt and Cash : 70-90%
                    </Text>
                  </Td> */}
                </Tr>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>Medium Risk</Td>
                  <Td border={'1px solid #F79E22 '}>
                    <Text fontSize={'18px'}>
                      Medium level of risk capacity and tolerance; can take on
                      risk but not too much due <br />
                      to financial obligations and/or modest income and wealth
                      build up; has low-medium <br />
                      tolerance towards risk; higher risk profile as compared to
                      the 'Low risk' investor.
                    </Text>
                  </Td>
                  {/* <Td border={'1px solid #F79E22 '}>
                    <Text>
                      Equity : 40-60% <br />
                      Debt and Cash : 40-60%
                    </Text>
                  </Td> */}
                </Tr>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>High Risk</Td>
                  <Td border={'1px solid #F79E22 '}>
                    <Text fontSize={'18px'}>
                      High level of risk capacity and tolerance; can take on
                      risk; financial obligations are taken care
                      <br /> of, has good income and wealth build up; has
                      medium-high tolerance towards risk;
                      <br /> higher risk profile as compared to the 'Medium
                      risk' investor.
                    </Text>
                  </Td>
                  {/* <Td border={'1px solid #F79E22 '}>
                    <Text>
                      Equity : 70-90% <br />
                      Debt and Cash : 10-30%
                    </Text>
                  </Td> */}
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
  