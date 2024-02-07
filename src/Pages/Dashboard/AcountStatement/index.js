import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import MainDashboard from '../MainDashboard';
import { GET } from '../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../utils/Config';
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccount } from '../../../reducers/useReducer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { usePDF } from 'react-to-pdf';
import PDFViewer from 'pdf-viewer-reactjs';
import { RiPrinterLine } from "react-icons/ri";

export default function AccountStatements() {

  const labelStyle = {
    color: '#7a7a7a',
    fontSize: '13px',
    fontWeight: '600',
  };

  const inputfiled = {
    height: '50px',
  };

  const dispatch = useDispatch();
  const useraccountinfo = useSelector(state => state.useraccount);
  const [isLoading, setisLoading] = useState(false);
  const toast = useToast();
  const [adata, setadata] = useState([]);
  const [account, setaccount] = useState({
    date_from: { value: '' },
    date_to: { value: '' }
  });

  const getFundsList = async () => {
    console.log(account);

    if (account?.date_from?.value === "" || account?.date_from?.value === '') {
      toast({
        description: 'Date are required!',
        status: 'error',
        position: 'bottom-right',
        duration: 3000,
        isClosable: true
      })
    } else {
      setisLoading(true);
      try {
        let fundsResponse = await GET(
          `${baseUrl}/funds/accountStatement?date_from=${account.date_from.value}&date_to=${account.date_to.value}`,
          {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        );
        dispatch(updateAccount(fundsResponse?.data[0]));
        // getPDF(fundsResponse?.data[0]?.['id'])
        setadata(fundsResponse?.data[0]);
      } catch (err) {
        toast({
          description: err?.message,
          status: 'error',
          position: 'bottom-right',
          duration: 3000,
          isClosable: true
        })
      }
      setisLoading(false);
    }
  };

  const [baseString, setBaseString] = useState("");

  const getPDF = async (id) => {
    setisLoading(true);
    if (id) {
      let pdfRes = await GET(`${baseUrl}/funds/accountStatementPDF?id=${id}&date_from=${account.date_from.value}&date_to=${account.date_to.value}`,
        { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
      )
      setisLoading(false);
      setBaseString(pdfRes);
      console.log(pdfRes.dataUrl);
      downloadPdf(pdfRes.dataUrl, 'document.pdf');
    } else {
      toast({
        description: "No statement found!",
        status: 'error',
        position: 'bottom-right',
        duration: 3000,
        isClosable: true
      })
    }
    setisLoading(false);
  }

  function base64ToUint8Array(base64) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
  }

  function downloadPdf(base64String, fileName = 'document.pdf') {
    const uint8Array = base64ToUint8Array(base64String);
    const blob = new Blob([uint8Array], { type: 'application/pdf' });

    const objectUrl = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fileName;

    // Simulate a click on the link to trigger the download
    document.body.appendChild(link)
      ;
    link.click();

    // Remove the link from the document
    document.body.removeChild(link)
      ;

    // Revoke the object URL to free up resources
    URL.revokeObjectURL(objectUrl);
  }

  // Example usage

  return (
    <>
      <MainDashboard>
        <Stack
          style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
          border={'1px solid #e1e1e1'}
          p={'5'}
          gap={'4'}
          borderRadius={'6'}
        >
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            w={'full'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={'6'}
            pb={4}
          >
            <Heading fontSize={'30px'}>Accounts Statement</Heading>
            <Button isLoading={isLoading} bg={'#F79E22'} color={'#535353'} onClick={() => getPDF(useraccountinfo?.id)}><RiPrinterLine /></Button>
          </Flex>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            w={'full'}
            alignItems={'end'}
            justifyContent={'space-between'}
            gap={'6'}
            pb={4}
          >
            <Box w={'full'}>
              <FormControl>
                <FormLabel sx={labelStyle}>Date From*</FormLabel>
                <Input
                  sx={inputfiled}
                  type="date"
                  onChange={e => {
                    setaccount({
                      ...account,
                      date_from: { value: e.target.value },
                    });
                  }}
                />
              </FormControl>
            </Box>
            <Box w={'full'}>
              <FormControl>
                <FormLabel sx={labelStyle}>Date To*</FormLabel>
                <Input
                  sx={inputfiled}
                  type="date"
                  onChange={e => {
                    setaccount({
                      ...account,
                      date_to: { value: e.target.value },
                    });
                  }}
                />
              </FormControl>
            </Box>
            <Box w={'full'}>
              <Button
                width={'full'}
                fontSize={'16px'}
                px={{ md: '10', base: '5' }}
                py={{ md: '6', base: '3' }}
                fontWeight={500}
                color={'#535353'}
                bg={'#F79E22'}
                href={'#'}
                isLoading={isLoading}
                _hover={{
                  bg: '#0d182b',
                  color: '#fff',
                  boxShadow: 'none',
                  transform: 'translateY(2px)',
                }}
                onClick={() => {
                  getFundsList();
                }}
              >
                Show Statement
              </Button>
            </Box>
          </Flex>
          {useraccountinfo ? (
            <Stack
              id="content-to-export"
              border={'1px solid #e1e1e1'}
              style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
              p={'5'}
              gap={'4'}
              borderRadius={'6'}
            >
              <Flex gap={'6'}>
                <Text>
                  <Text fontWeight={600} as={'span'}>
                    User Name
                  </Text>{' '}
                  : {useraccountinfo?.title ?? ''}
                </Text>
                <Text>
                  <Text fontWeight={600} as={'span'}>
                    Registration Number
                  </Text>{' '}
                  : {useraccountinfo?.folio_id ?? ''}
                </Text>
                <Text>
                  <Text fontWeight={600} as={'span'}>
                    Date From
                  </Text>{' '}
                  : {useraccountinfo?.date_from ?? ''}
                </Text>
                <Text>
                  <Text fontWeight={600} as={'span'}>
                    Date To
                  </Text>{' '}
                  : {useraccountinfo?.date_to ?? ''}
                </Text>
              </Flex>
              <TableContainer>
                <Table
                  border={'1px solid #F79E22 '}
                  variant="simple"
                  className="accounTable"
                >
                  <Thead>
                    <Tr>
                      <Th border={'1px solid #F79E22 '} color={'#000'}>
                        Fund Name
                      </Th>
                      <Th border={'1px solid #F79E22 '} color={'#000'}>
                        Type
                      </Th>
                      <Th border={'1px solid #F79E22 '} color={'#000'}>
                        Units
                      </Th>
                      <Th border={'1px solid #F79E22 '} color={'#000'}>
                        Units Price
                      </Th>
                      <Th border={'1px solid #F79E22 '} color={'#000'}>
                        Investment Value
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {useraccountinfo?.funds?.map((v, i) => {
                      return (
                        <Tr key={i}>
                          <Td border={'1px solid #F79E22 '}>{v?.fund_name}</Td>
                          <Td border={'1px solid #F79E22 '}>
                            {useraccountinfo?.type}
                          </Td>
                          <Td border={'1px solid #F79E22 '}>
                            {Number(v?.units).toFixed(4)}
                          </Td>
                          <Td border={'1px solid #F79E22 '}>
                            <Tr>
                              <Th border={'1px solid #F79E22 '} color={'#000'}>
                                amount
                              </Th>
                              <Th border={'1px solid #F79E22 '} color={'#000'}>
                                nav
                              </Th>
                              <Th border={'1px solid #F79E22 '} color={'#000'}>
                                units
                              </Th>
                            </Tr>
                            {v?.txns?.map((v, i) => {
                              return (
                                <Tr>
                                  <Th border={'1px solid #F79E22 '}>
                                    {v.amount}
                                  </Th>
                                  <Th border={'1px solid #F79E22 '}>{v.nav}</Th>
                                  <Th border={'1px solid #F79E22 '}>
                                    {v.units}
                                  </Th>
                                </Tr>
                              );
                            })}
                          </Td>
                          <Td border={'1px solid #F79E22 '}>
                            {Number(v?.amount).toFixed(2)}
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
          ) : null}
        </Stack>
      </MainDashboard>
    </>
  );
}
