import {
  Box,
  Container,
  Heading,
  Icon,
  Link,
  Stack,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from '../../components/Banners/MiniBanner';
import BannerPic from '../../assets/images/secimgs/goals.png';
import Fmr from '../../assets/doc/fmr.pdf';
import FmrOct from '../../assets/doc/FMROCT2023.pdf'
import FmrNov from '../../assets/doc/FMRNOV2023.pdf'
import FmrDec from '../../assets/doc/FMRDEC2023.pdf'
import FmrJan from '../../assets/doc/FMR-JAN2024.pdf'
import { AiOutlineDownload } from 'react-icons/ai';

export default function Fundmanagerreports() {
  return (
    <>
      <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
      >
        <MiniBanner
          textTransform={'capitalize'}
          heading={'Fund manager reports'}
          bannerImage={BannerPic}
          imageSizePercentage={'50%'}
        />
      </Stack>
      <Stack>
        <Container
          maxW={'8xl'}
          py={{ base: '6', md: '24' }}
          px={{ xl: 16, '2xl': 0 }}
        >
          <Stack gap={9}>
            <Box>
              <Heading mb={'4'} textTransform={'uppercase'}>
                fmr iamlef
              </Heading>
            </Box>
            <TableContainer>
              <Table border={'1px solid #F79E22 '} variant="simple">
                <Thead>
                  <Tr>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>
                      FMR IAMLEF Monthly Reports
                    </Th>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>
                      Download
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>FMR of September 2023</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Link
                        bg={'#f79e22'}
                        fontSize={'14px'}
                        display={'inline-block'}
                        padding={'12px 15px'}
                        boxShadow={`0px 15px 15px -15px`}
                        color={'#fff'}
                        borderRadius={'8px'}
                        _hover={{
                          bg: '#ffbb5c',
                          boxShadow: 'none',
                          transform: 'translateY(2px)',
                        }}
                        as={ReactLink}
                        target="_blank"
                        download
                        to={Fmr}
                      >
                        {' '}
                        Download File
                        <Icon
                          as={AiOutlineDownload}
                          verticalAlign={'middle'}
                          ml={4}
                          fontSize={'20px'}
                          color={'#fff'}
                        />
                      </Link>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}> FMR of October 2023 </Td>
                    <Td border={'1px solid #F79E22 '}>
                    <Link
                        bg={'#f79e22'}
                        fontSize={'14px'}
                        display={'inline-block'}
                        padding={'12px 15px'}
                        boxShadow={`0px 15px 15px -15px`}
                        color={'#fff'}
                        borderRadius={'8px'}
                        _hover={{
                          bg: '#ffbb5c',
                          boxShadow: 'none',
                          transform: 'translateY(2px)',
                        }}
                        as={ReactLink}
                        target="_blank"
                        download
                        to={FmrOct}
                      >
                        {' '}
                        Download File
                        <Icon
                          as={AiOutlineDownload}
                          verticalAlign={'middle'}
                          ml={4}
                          fontSize={'20px'}
                          color={'#fff'}
                        />
                      </Link>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}> FMR of November 2023 </Td>
                    <Td border={'1px solid #F79E22 '}>
                    <Link
                        bg={'#f79e22'}
                        fontSize={'14px'}
                        display={'inline-block'}
                        padding={'12px 15px'}
                        boxShadow={`0px 15px 15px -15px`}
                        color={'#fff'}
                        borderRadius={'8px'}
                        _hover={{
                          bg: '#ffbb5c',
                          boxShadow: 'none',
                          transform: 'translateY(2px)',
                        }}
                        as={ReactLink}
                        target="_blank"
                        download
                        to={FmrNov}
                      >
                        {' '}
                        Download File
                        <Icon
                          as={AiOutlineDownload}
                          verticalAlign={'middle'}
                          ml={4}
                          fontSize={'20px'}
                          color={'#fff'}
                        />
                      </Link>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}> FMR of December 2023 </Td>
                    <Td border={'1px solid #F79E22 '}>
                    <Link
                        bg={'#f79e22'}
                        fontSize={'14px'}
                        display={'inline-block'}
                        padding={'12px 15px'}
                        boxShadow={`0px 15px 15px -15px`}
                        color={'#fff'}
                        borderRadius={'8px'}
                        _hover={{
                          bg: '#ffbb5c',
                          boxShadow: 'none',
                          transform: 'translateY(2px)',
                        }}
                        as={ReactLink}
                        target="_blank"
                        download
                        to={FmrDec}
                      >
                        {' '}
                        Download File
                        <Icon
                          as={AiOutlineDownload}
                          verticalAlign={'middle'}
                          ml={4}
                          fontSize={'20px'}
                          color={'#fff'}
                        />
                      </Link>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}> FMR of January 2024 </Td>
                    <Td border={'1px solid #F79E22 '}>
                    <Link
                        bg={'#f79e22'}
                        fontSize={'14px'}
                        display={'inline-block'}
                        padding={'12px 15px'}
                        boxShadow={`0px 15px 15px -15px`}
                        color={'#fff'}
                        borderRadius={'8px'}
                        _hover={{
                          bg: '#ffbb5c',
                          boxShadow: 'none',
                          transform: 'translateY(2px)',
                        }}
                        as={ReactLink}
                        target="_blank"
                        download
                        to={FmrJan}
                      >
                        {' '}
                        Download File
                        <Icon
                          as={AiOutlineDownload}
                          verticalAlign={'middle'}
                          ml={4}
                          fontSize={'20px'}
                          color={'#fff'}
                        />
                      </Link>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            {/* <Box>
            <Heading mb={'4'} textTransform={'uppercase'}>fmr iamlmmf</Heading>
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
              as={ReactLink} target="_blank" download to={'../../assets/doc/Doc1.docx'}>Pending File <Icon as={AiOutlineDownload} verticalAlign={'middle'}  ml={4} fontSize={'20px'} color={'#fff'} /></Link>
            </Box> */}
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
