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
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
export default function Howtoinvestcontent() {
  return (
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
                  <Td border={'1px solid #F79E22 '}>IAML Money Market Fun</Td>
                  <Td border={'1px solid #F79E22 '}>3:00 PM</Td>
                  <Td border={'1px solid #F79E22 '}>4:00 PM</Td>
                </Tr>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>IAML Equity Fund</Td>
                  <Td border={'1px solid #F79E22 '}>3:00 PM</Td>
                  <Td border={'1px solid #F79E22 '}>4:00 PM</Td>
                </Tr>
                
              </Tbody>
              
            </Table>
          </TableContainer>
        </Stack>
        <Box pt={'4'}>
          <Heading as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
            How to Invest ?
          </Heading>
          <UnorderedList>
            <ListItem>Step 1 : Fill the Account Opening Form</ListItem>
            <ListItem>Step 2 : Attach the Relevent Documents</ListItem>
            <ListItem>Step 3 : </ListItem>
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
              as={ReactLink} target="_blank" download to={'../../assets/doc/Doc1.docx'}>Download File <Icon as={AiOutlineDownload} verticalAlign={'middle'}  ml={4} fontSize={'20px'} color={'#fff'} /></Link>
            
             
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
              as={ReactLink} target="_blank" download to={'../../assets/doc/Doc1.docx'}>Download File <Icon as={AiOutlineDownload} verticalAlign={'middle'}  ml={4} fontSize={'20px'} color={'#fff'} /></Link>
            
             
            </ListItem>
          </UnorderedList>
        </Box>
        {/* <Box>
          <Heading as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
            Fill in the Account Opening Form
          </Heading>
          <UnorderedList>
            <ListItem>
              Download an A/C Opening booklet,{' '}
              <a
                href="https://www.nbpfunds.com/wp-content/uploads/2022/01/Account-Opening-Form-Booklet-03-Jan-2022-Combine-1.pdf"
                target={'_blank'}
              >
                Click Here
              </a>{' '}
              for the booklet.{' '}
            </ListItem>
          </UnorderedList>
          <br />
          <Text
            fontSize={{ base: '12px', md: '16px' }}
            fontWeight={'400'}
            color={'#666e82'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            Once the Investor Account has been opened, IAML Equity Fund or IAML
            Money Market Fund Account No.
            <br /> will be allotted which would be used for all future
            investment and others transactions.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
            Attach the Relevant Documents
          </Heading>

          <Text
            fontSize={{ base: '12px', md: '16px' }}
            fontWeight={'400'}
            color={'#666e82'}
            lineHeight={{ md: '24px', base: '20px' }}
            mb={'5'}
          >
            Carefully read the instructions mentioned on the booklet and attach
            the following relevant documents:
          </Text>
          <Heading as="h4" size={{ base: 'sm', md: 'md' }} mb={'4'}>
            For Individual Investors
          </Heading>
          <UnorderedList mb={'4'}>
            <ListItem>
              Copy of valid Computerized National Identity Card (CNIC)
              <br />
              Note: If your CNIC is expired and is submitted with NADRA for
              renewal; kindly attach the renewal slip. <br />
              And once the CNIC is renewed please submit the renewed CNIC copy
              with us.
            </ListItem>
            <ListItem>
              Zakat Affidavit (CZ-50) in case of Zakat Exemption
            </ListItem>
            <ListItem>
              Proof of income like Job card / Employment Card / Visiting Card.
              (For individuals only)
            </ListItem>
            <ListItem>
              Business/Employment Proof in case of Sole Proprietorship.
            </ListItem>
          </UnorderedList>
          <Heading as="h4" size={{ base: 'sm', md: 'md' }} mb={'4'}>
            For Partnerships
          </Heading>
          <UnorderedList mb={'4'}>
            <ListItem>Partnership Deed / Certificate of Registration.</ListItem>
            <ListItem>
              Detail of Partners (Name, Address, Phone Numbers).
            </ListItem>
            <ListItem>Copy of NIC of all partners.</ListItem>
            <ListItem>Copy of latest Financials.</ListItem>
          </UnorderedList>
          <Heading as="h4" size={{ base: 'sm', md: 'md' }} mb={'4'}>
            Corporate bodies, Registered societies, Institutions, Companies or
            Trusts
          </Heading>
          <UnorderedList mb={'4'}>
            <ListItem>
              List of Authorized Signatories along with copies of CNIC and their
              specimen signatures.
            </ListItem>
            <ListItem>
              Memorandum and Articles of Associations/Trust Deeds.
            </ListItem>
            <ListItem>
              Copy of CNIC of all Directors/Trustees/ sole proprietor.
            </ListItem>
            <ListItem>
              Board/Trustee/Governing body Resolution authorizing for investment
              in NBP Funds.
            </ListItem>
            <ListItem>Copies of Certificates of Registrations.</ListItem>
            <ListItem>Audited/Latest Financial of the Company.</ListItem>
            <ListItem>
              Power of attorney and / or relevant resolutions of the board of
              directors delegating any of its officers <br />
              to open account with IAML Funds and invest in the fund and / or to
              realize the investments.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
        
          <Heading as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
            Make Payment
          </Heading>
          <Heading as="h4" size={{ base: 'sm', md: 'md' }} mb={'4'}>
            Payment can be made in the form of:
          </Heading>
          <UnorderedList mb={'4'}>
            <ListItem>Cross Cheque</ListItem>
            <ListItem>Pay Order</ListItem>
            <ListItem>Demand Draft Note: Cash will not be accepted.</ListItem>
          </UnorderedList>
          <Heading as="h4" size={{ base: 'sm', md: 'md' }} mb={'4'}>
            Payment shall be made in favor of:
          </Heading>
          <UnorderedList mb={'4'}>
            <ListItem>
              For Investment in Funds: CDC Trustee “IAML Equity Fund”
            </ListItem>
          </UnorderedList>
          <Heading as="h4" size={{ base: 'sm', md: 'md' }} mb={'4'}>
            Note:
          </Heading>
          <UnorderedList>
            <ListItem>
              The payment instrument shall accompany the investment form.
            </ListItem>
            <ListItem>This is applicable for individuals only.</ListItem>
          </UnorderedList>
        </Box> */}

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
                Use the Risk Profile filter in the Fund Search tool to view
                funds in each risk category
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
  );
}
