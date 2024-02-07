import {
  Container,
  Heading,
  Stack,
  ListItem,
  UnorderedList,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Box,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import MiniBanner from '../../components/Banners/MiniBanner';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import BannerPic from '../../assets/images/secimgs/main-r.png';

export default function Forindividual() {
  useEffect(() => {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }, []);
  return (
    <Stack>
      <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
      >
        <MiniBanner
          heading={'For Individual'}
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
          <Stack gap={4}>
            <Heading fontSize={'40px'}>For Individual</Heading>
            <UnorderedList spacing={4}>
              <ListItem>
                Duly filled and signed Booklet Account Opening Form (including
                Risk Profiling Questionnaire, KYC, FATCA and CRS-1 sections) of
                the Principal Account Holder.
              </ListItem>
              <ListItem>
                Duly filled and signed KYC, FATCA and CRS-1 Form of Joint
                Account Holder/ Ultimate Beneficiary (if any).
              </ListItem>
              <ListItem>
                Legible attested copy of valid and unexpired identity document
                of Principal Account Holder and Joint Account Holder/ Guardian/
                Ultimate Beneficiary (if any). Identity document for local
                individual includes Computerized National Identity Card (CNIC),
                Smart National Identity Card (SNIC), National Identity Card for
                Overseas Pakistani (NICOP/SNICOP), Pakistan Origin Card (POC)
                and Alien Registration Card (ARC). Identity document for foreign
                national individual includes Passport having valid visa on it or
                any other proof of legal stay along with Passport. Identity
                document for minor includes Form-B, Juvenile Card, Family
                Registration Certificate (FRC) and Child Registration
                Certificate (CRC).
              </ListItem>
              <ListItem>
                Attested passport size photograph in case of an Individual
                Investor with shaky/immature signatures or thumb impression.
              </ListItem>
              <ListItem>
                If the residential address of the Principal Account Holder is
                different from the addresses mentioned on his/her identity
                document, then a copy of latest Utility Bill paid/ Bank
                Statement/ Credit Card Statement/ Rental Agreement bearing the
                name of the Principal Applicant for verification of residential
                address.
              </ListItem>
              <ListItem>
                List of required source(s) of income/funds documents is provided
                below:
              </ListItem>
            </UnorderedList>
            <TableContainer>
              <Table border={'1px solid #F79E22 '} variant="simple">
                <Thead>
                  <Tr>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>
                      S.No
                    </Th>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>
                      Source of Income/ Funds
                    </Th>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>
                      Required Documents
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>1</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Salary Income</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Heading fontSize={'20px'}>
                          Investment balance below Rs. 10 Million:
                        </Heading>
                        <Text>
                          An attested copy of unexpired Service/ Job Card issued
                          by the employer OR an attested copy of Certificate{' '}
                          <br />
                          or Letter on letter head of the employer (not more
                          than three (3) months old).
                        </Text>
                        <Heading fontSize={'20px'}>
                          Investment balance equal to or above Rs. 10 Million:
                        </Heading>
                        <Text>
                          (a) An attested copy of unexpired Service/ Job Card
                          issued by the employer OR an attested copy of
                          Certificate or Letter on letter
                          <br /> head of the employer (not more than three (3)
                          months old) OR an attested copy of Salary Slip (not
                          more than three (3) months old)
                          <br /> showing the name of employer; and
                          <br />
                          (b) Documentary evidence to justify the investment
                          balance such as an attested copy of Salary Slip (not
                          more than three (3) months old)
                          <br /> showing the name of employer or latest complete
                          income tax return and wealth statement submitted to
                          FBR, etc. Note:
                          <br />
                          The Customer can get the copy attested by his/ her
                          Human Resources/ Payroll Department or show original
                          document to our Sales Person who will mark <br />
                          “Attested & Original Seen” on the copy with his/ her
                          signature.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>2</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Home Remittance</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Heading fontSize={'20px'}>
                          Investment balance up to Rs. 5 Million:
                        </Heading>
                        <Text>
                          Proceeds Realization Certificate (PRC) OR Swift Slip
                          OR Remittance Slip (such as Western Union)
                          <br /> OR Bank Statement reflecting the amount of
                          remitted proceeds.
                        </Text>
                        <Heading fontSize={'20px'}>
                          Investment balance above Rs. 5 Million but below Rs.
                          10 Million:
                        </Heading>
                        <Text>
                          (a) Proceeds Realization Certificate (PRC) OR Swift
                          Slip OR Remittance Slip (such as Western Union) OR
                          Bank Statement
                          <br />
                          reflecting the amount of remitted proceeds; and
                          <br />
                          (b) Disclosure of relationship with the Remitter and
                          identity of the Remitter.
                        </Text>
                        <Heading fontSize={'20px'}>
                          Investment balance equal to or above Rs. 10 Million:
                        </Heading>
                        <Text>
                          (a) Proceeds Realization Certificate (PRC) OR Swift
                          Slip OR Remittance Slip (such as Western Union)
                          <br /> OR Bank Statement reflecting the amount of
                          remitted proceeds;
                          <br />
                          (b) Disclosure of relationship with the Remitter and
                          identity of the Remitter;
                          <br />
                          (c) KYC Form of the Remitter; and
                          <br />
                          (d) If the investment balance exceeds the amount of
                          remitted proceeds as provided in bullet (a) <br />
                          above then latest documentary evidence to justify
                          investment balance such as Bank Statement of at least
                          previous six
                          <br /> (6) months or copy of latest income tax return
                          and wealth statement submitted to FBR, etc.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>3</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Inheritance</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) Notarized copy of Succession Certificate/ Heirship
                          Certificate issued by competent Court; OR
                          <br />
                          (b) Notarized copy of decision taken by Punchayat/
                          Mahalla Committee duly attested by Gazetted Officer
                          (BPS-17 or above)/ branch <br />
                          manager of the bank/ notary public/ authorized officer
                          of the Company; OR
                          <br />
                          (c) A copy of duly executed Will/ Gift Deed/ Transfer
                          Deed attested by Gazetted Officer (BPS-17 or above)/
                          branch
                          <br /> manager of the bank/ notary public/ authorized
                          officer of the Company; OR
                          <br />
                          (d) A copy of latest complete income tax return and
                          wealth statement submitted to FBR.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>4</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Savings/ Investments</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) Bank Statement of at least previous six (6)
                          months; OR
                          <br />
                          (b) IPS Statement or CDC Statement or Broker Statement
                          or Investment Statement of at least previous six (6)
                          months; OR
                          <br />
                          (c) A copy of latest income tax return and wealth
                          statement submitted to FBR.
                          <br />
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>5</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Retirement Benefits</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Heading fontSize={'20px'}>
                          Investment balance below Rs. 10 Million:
                        </Heading>
                        <Text>
                          A copy of Retirement Letter OR Settlement Letter OR
                          Pension Book OR any other valid document disclosing{' '}
                          <br />
                          the amount of retirement benefits received on
                          retirement.
                        </Text>
                        <Heading fontSize={'20px'}>
                          Investment balance equal to or above Rs. 10 Million:
                        </Heading>
                        <Text>
                          (a) A copy of Retirement Letter OR Settlement Letter
                          OR Pension Book OR any other valid document disclosing
                          <br /> the amount of retirement benefits received on
                          retirement and justifying the amount of investment; OR
                          <br />
                          (b) A copy of latest complete Income Tax Return and
                          Wealth Statement submitted to FBR.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>6</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Agriculture Income</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) A copy of Pass Book OR any other document that
                          validates the ownership of agriculture property; and
                          <br />
                          (b) Latest documentary evidence to justify investment
                          balance such as Bank Statement of at least previous
                          twelve <br />
                          (12) months OR copy of latest income tax return and
                          wealth statement submitted to FBR OR any other valid
                          documentary evidence.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>7</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Rental Income</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Heading fontSize={'20px'}>
                          Investment balance below Rs. 10 Million:
                        </Heading>
                        <Text>
                          A copy of rental agreement where rental income is
                          shown.
                        </Text>
                        <Heading fontSize={'20px'}>
                          Investment balance equal to or above Rs. 10 Million:
                        </Heading>
                        <Text>
                          a) A copy of rental agreement where rental income is
                          shown; and
                          <br />
                          b) If the investment balance is not justified with the
                          rental income as shown in the rental agreement
                          <br /> then documentary evidence to justify the
                          investment balance such as Bank Statement of at least
                          previous six <br />
                          (6) months or copy of latest income tax return and
                          wealth statement submitted to FBR, etc.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>8</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        Disposal Proceeds
                        <br /> of the Property
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Heading fontSize={'20px'}>
                          Investment balance below Rs. 10 Million:
                        </Heading>
                        <Text>
                          A copy of duly executed Sale deed OR Sale Agreement OR{' '}
                          <br />
                          Transfer deed showing the amount of disposal proceeds.
                        </Text>
                        <Heading fontSize={'20px'}>
                          Investment balance equal to or above Rs. 10 Million:
                        </Heading>
                        <Text>
                          (a) A copy of duly executed Sale deed OR Sale
                          Agreement OR Transfer deed showing the amount of
                          disposal proceeds; and
                          <br /> (b) Bank Statement showing the amount of
                          disposal proceeds. <br />
                          (c) If the investment balance is not justified with
                          the amount of disposal proceeds then documentary
                          <br />
                          evidence to justify the investment balance such as
                          Bank Statement of at least previous six (6) months or
                          <br />
                          copy of latest income tax return and wealth statement
                          submitted, etc.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>9</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Disposal Proceeds of</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) A copy of sale receipt showing the amount of sale
                          proceeds; and
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>10</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        Business Income of
                        <br /> Self Employed Person
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Heading fontSize={'20px'}>
                          Investment balance below Rs. 10 million:
                        </Heading>
                        <Text>
                          (a) Account opening requisition on business letter
                          head addressed to the Management Company;
                          <br />
                          (b) A copy of sales tax registration or NTN
                          Certificate, wherever applicable; and
                          <br />
                          (c) A copy of latest utility bills paid OR Rental
                          Agreement of the business
                          <br /> place OR Bank Statement for verification of
                          Registered/ Business address.
                          <br />
                        </Text>
                        <Heading fontSize={'20px'}>
                          Investment balance equal to or above Rs. 10 million:
                        </Heading>
                        <Text>
                          (a) Account opening requisition on business letter
                          head addressed to the Management Company;
                          <br />
                          (b) A copy of sales tax registration or NTN
                          Certificate, wherever applicable;
                          <br />
                          (c) A copy of latest utility bills paid OR Rental
                          Agreement of the <br />
                          business place OR Bank Statement for verification of
                          Registered/ Business address; and
                          <br />
                          (d) Any documentary evidence about annual income such
                          as copy of latest income tax return <br />
                          and wealth statement submitted to FBR or latest
                          accounts of sole proprietorship, etc.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>11</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        Income of Partner <br />
                        of the Partnership
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Heading fontSize={'20px'}>
                          Investment balance below Rs. 10 million:
                        </Heading>
                        <Text>(a) Attested copy Partnership Deed.</Text>
                        <Heading fontSize={'20px'}>
                          Investment balance equal to or above Rs. 10 million:
                        </Heading>
                        <Text>
                          (a) Attested copy Partnership Deed; and
                          <br />
                          (b) Any documentary evidence about annual income such
                          as copy of latest income tax
                          <br /> return and wealth statement submitted to FBR or
                          latest accounts of partnership, etc.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>12</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        Housewife receiving
                        <br /> funds from
                        <br /> husband/ child/
                        <br /> blood relative
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) Self-declaration (of customer) for source and
                          beneficial ownership of funds;
                          <br />
                          (b) Duly filled and signed KYC Form and a copy of
                          valid identity <br />
                          document of the provider of the funds, if any; and
                          <br />
                          (c) Documentary evidence for source of funds as
                          covered in Serial No. 1 to 11.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>13</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        Student 18 <br />
                        years old <br />
                        or above receiving
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) A copy of Student ID card;
                          <br />
                          (b) Self-declaration (of customer) for source and
                          beneficial ownership of funds;
                          <br />
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>14</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        funds from
                        <br />
                        blood relative
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (c) Duly filled and signed KYC Form and a copy of
                          valid <br />
                          identity document of the provider of the funds, if
                          any; and
                          <br />
                          (d) Documentary evidence for source of funds as
                          covered in Serial No. 1 to 11.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>15</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        Investment on
                        <br /> behalf of Minor
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) Duly filled and signed KYC Form of the Guardian;
                          and
                          <br />
                          (b) Documentary evidence for source(s) of income/
                          funds <br />
                          of the Guardian as covered in Serial No. 1 to 11.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>16</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        Executors and <br />
                        Administrators
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) A copy of valid identity document of the
                          Executor/Administrator;
                          <br />
                          (b) A certified copy of Letter of Administration or
                          Probate;
                          <br />
                          (c) A copy of latest Utility Bills paid or Rental
                          Agreement of the
                          <br /> business place for verification of Registered
                          address/ Business address; and
                          <br />
                          (d) Documentary evidence for source of funds as
                          covered in Serial No. 1 to 11.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>17</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Investment by Agent</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          Copies of valid identity documents of the agent and
                          principal;
                          <br />
                          <br />
                          (b) Certified copy of Power of Attorney or Agency
                          Agreement;
                          <br />
                          (c) A copy of latest Utility Bills paid or Rental
                          Agreement of the <br />
                          business place for verification of Registered/
                          Business address; and
                          <br />
                          (d) Documentary evidence for source of funds as
                          covered in Serial No. 1 to 11.
                          <br />
                          <br />
                          7. If payment instrument is issued by any third party
                          in favour of the <br />
                          Individual Investor, then the following document shall
                          also be provided:
                          <br />
                          <br />
                          1. No Objection Declaration (NOD) from the Payment
                          Instrument Issuer in favour of the Individual
                          Investor.
                          <br />
                          <br />
                          2. Duly filled and signed KYC Form of the Payment
                          Instrument Issuer.
                          <br />
                          <br />
                          3. A copy of valid identity document of the Payment
                          Instrument Issuer.
                          <br />
                          <br />
                          4. Documentary evidence for source(s) of income/funds
                          of the Payment
                          <br /> Instrument Issuer as covered in Serial No. 1 to
                          11 of Table under Paragraph 6 above.
                          <br />
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
