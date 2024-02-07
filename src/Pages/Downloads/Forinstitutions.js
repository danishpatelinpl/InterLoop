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

export default function Forinstitutions() {
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
          heading={'For institutions'}
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
            <Heading fontSize={'40px'}>For Institutions</Heading>
            <UnorderedList spacing={4}>
              <ListItem>
                Duly filled and signed Account Opening Form along with
                disclosure of Beneficial Ownership and FATCA Addendum to Account
                Opening Form.
              </ListItem>
              <ListItem>
                Duly filled and signed W-8BEN-E Form of the Entity.
              </ListItem>
              <ListItem>
                Duly filled and signed CRS-2 Form of the Entity.
              </ListItem>
              <ListItem>
                In case of Passive Non-Financial Entity, duly filled and signed
                CRS-3 Forms of all Controlling Persons of the Entity [Passive
                Non-Financial Entity is the entity which earns more than 50% of
                its gross income through passive income e.g. interest,
                dividends, rents, royalties, etc. rather than through active
                trade or business].
              </ListItem>
              <ListItem>
                List of other required documents is provided below:
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
                      <Heading fontSize={'20px'}>Sole Proprietorship</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Heading fontSize={'20px'}>
                          Investment balance below Rs. 10 Million:
                        </Heading>
                        <Text>
                          (a) A copy of valid CNIC/ SNIC/ NICOP/ SNICOP/ POC/
                          ARC (in case of local individuals only) <br />
                          or an attested* copy of Passport having valid visa on
                          it or any other proof of legal stay along <br />
                          with Passport (in case of foreign national individuals
                          only) of the Sole-Proprietor.
                          <br />
                          (b) Account opening requisition on business letter
                          head addressed to the Management Company.
                          <br />
                          (c) Attested* copy of registration certificate for
                          registered concerns only.
                          <br />
                          (d) A copy of sales tax registration or NTN
                          Certificate, wherever applicable.
                          <br />
                          (e) A copy of latest utility bills paid or Rental
                          Agreement of the business place <br />
                          or Financial Statements or Bank Statement for
                          verification of Registered/ Business address.
                          <br />
                        </Text>
                        <Heading fontSize={'20px'}>
                          Investment balance equal to or above Rs. 10 Million:
                        </Heading>
                        <Text>
                          (a) All documents as mentioned for investment balance
                          below Rs. 10 million; and
                          <br />
                          (b) Any documentary evidence about its annual income
                          such as
                          <br /> copy of latest income tax return and wealth
                          statement submitted to FBR or latest accounts, etc.
                          <br />
                          * Document can be attested by the gazetted officer
                          (BPS-17 and above) <br />
                          or notary public or authorized officer/ distributor of
                          the Management Company.
                          <br />
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>2</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>Partnership</Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a)Copies of valid identity documents as per Serial
                          No. I (a) above of all Partners and Authorized
                          Signatories.
                          <br />
                          <br />
                          (b) Attested* copy of Partnership Deed.
                          <br />
                          <br />
                          (c) Attested* copy of Registration Certificate with
                          Registrar of Firms. In case the partnership is
                          unregistered,
                          <br />
                          <br />
                          this fact shall be clearly mentioned on the Account
                          Opening Form.
                          <br />
                          <br />
                          (d) Authority letter from all partners, in original,
                          authorizing the person(s) to operate firm’s account.
                          <br />
                          <br />
                          (e) A copy of latest utility bills paid or Rental
                          Agreement of the business place or Financial <br />
                          <br />
                          Statements or Bank Statement for verification of
                          Registered/ Business address.
                          <br />
                          <br />
                          (f) Latest documentary evidence to justify investment
                          amount such as Bank Statement <br />
                          <br />
                          of at least previous six (6) months or copy of income
                          tax returns or latest financial statements, etc.
                          <br />
                          <br />* Document can be attested by the gazetted
                          officer (BPS-17 and above) or notary public.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>3</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                        Limited Liability
                        <br /> Partnership (LLP)
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                          (a) Copies of valid identity documents as per Serial
                          No. I (a) above of all Partners and Authorized
                          Signatories.
                          <br />
                          <br />
                          (b) A certified* copy of Limited Liability Partnership
                          Deed/ Agreement.
                          <br />
                          <br />
                          (c) A certified* copy of LLP-Form-III having detail of
                          partners/ designated partner
                          <br /> in case of newly incorporated LLP or a
                          certified copy of LLP-Form-V regarding change in
                          partners/ designated partner <br/>in case of already
                          incorporated LLP.
                          <br />
                          <br />
                          (d) Authority letter signed by all partners,
                          authorizing the person(s) to operate LLP account.
                          <br />
                          <br />
                          (e) A copy of latest utility bills paid or Rental
                          Agreement of the business place or
                          <br /> Financial Statements or Bank Statement for
                          verification of Registered/ Business address.
                          <br />
                          <br />
                          (f) Latest documentary evidence to justify investment
                          amount such as Bank Statement <br />
                          of at least previous six (6) months or copy of latest
                          income tax return submitted to FBR or latest financial
                          statements, etc.
                          <br />
                          <br />* Any Authorized Person having custody of the
                          Original document can certify these documents.
                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>4</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                      Limited Companies/<br/> Corporations
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                        (a)     Copies of valid identity documents as per Serial No. I <br/>(a) above of all Directors and persons authorized to open and operate the account.<br/><br/>
(b)     Duly certified* Register of Ultimate Beneficial Ownership maintained under Section 123A of the <br/>Companies Act, 2017 or duly signed Form-43 or duly signed letter disclosing the Individual Beneficial Owner(s)<br/> (natural person(s)) along with the copies of their valid identity documents as per Serial No. I (a) above.<br/><br/>
(c)      Certified* copy of Resolution of Board of Directors for opening of <br/>account specifying the person(s) authorized to open and operate the account.<br/>
(d)     Certified* copy of Memorandum and Articles of Association.<br/>
(e)      Certified* copy of Certificate of Incorporation.<br/>
(f)       Certified* copy of latest Form-A/ Form-B.<br/>
(g)     Certified* copy of Incorporate Form II in case of newly incorporated company and Form-A/ Form-C <br/>whichever is applicable; and Form-29 in case of already incorporated companies;<br/>
(h)      A copy of latest available Audited Financial Statements in case of Listed Companies only.<br/>
(i)       A copy of latest available Financial Statements filed under the Section 234 of the Companies Act 2017 in case of other companies.<br/>
(j)       NTN Certificate.<br/>
* Any Authorized Person having custody of the Original document can certify these documents.<br/><br/>
 
Notes:<br/><br/>
(i)      The condition of obtaining Board Resolution is not necessary for foreign companies/entities belonging <br/>to countries where said requirements are not enforced under their laws/regulations. However, such foreign companies will <br/>have to furnish Power of Attorney from the competent authority <br/>for establishing Business Relationship to the satisfaction of the Management Company.<br/><br/>
(ii)     The condition of obtaining copies of identity documents of directors of Limited Companies/Corporations<br/> is relaxed in case of Government/ Semi Government entities, where the Management Company will obtain copies of valid identity <br/>documents of only those directors and persons who are authorized to open and operate the<br/> account. However, the Management Company shall validate identity information including CNIC numbers <br/>of other directors from certified copies of Form-A/ Form-B/ Form-29.

                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>5</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                      Trust, Clubs, <br/>Societies and<br/> Associationsetc.

                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                        (a)     Certified* copy of Certificate of Registration/ Instrument of Trust.<br/>
(b)     Certified* copy of By-laws/Rules & Regulations.<br/>
(c)      Resolution of the Governing Body/ Board of Trustees/ Executive Committee, if it is ultimate<br/> governing body, for opening of account authorizing the person(s) to operate the account.<br/><br/>
(d)     Copies of valid identity documents as per Serial No. I (a) above of the authorized person(s) <br/>and of the members of Governing Body/ Board of Trustees/ Executive Committee, if it is ultimate governing body.<br/><br/>
(e)      A copy of latest utility bills paid or Rental Agreement of the business place or Financial<br/> Statements or Bank Statement for verification of Registered address/ Business address.<br/><br/>
(f)       Any other documents as deemed necessary including its latest annual accounts/ financial <br/>statements or disclosures in any form which may help to ascertain the detail of its<br/> activities, sources and usage of funds in order to assess the risk profile of the prospective customer.<br/>
(g)     NTN Certificate.
* Any Authorized Person having custody of the Original document can certify these documents.

                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>6</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                      NGOs/ NPOs/ <br/>Charities accounts
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                        (a)     Certified* copy of Registration documents/ certificate.<br/>
(b)     Certified* copy of By-laws/Rules & Regulations.<br/>
(c)      Resolution of the Governing Body/ Board of Trustees/ Executive Committee, if it is <br/>ultimate governing body, for opening of account authorizing the person(s) to operate the account.<br/><br/>
(d)     Copies of valid identity documents as per Serial No. I (a) above of the authorized <br/>person(s) and of the members of Governing Body/ Board of Trustees/ Executive Committee, if it is ultimate governing body.<br/><br/>
(e)      Any other documents as deemed necessary including its latest annual accounts/ financial statements<br/> or disclosures in any form which may help to ascertain the detail of its activities, sources and usage of funds in order to assess <br/>the risk profile of the prospective customer.<br/><br/>
(f)       A copy of latest Utility Bills paid or Rental Agreement of the business place or<br/> Financial Statements or Bank Statement for verification of Registered address/ Business address.<br/><br/>
(g)     NTN Certificate.<br/>
* Any Authorized Person having custody of the Original document can certify these documents.

                        </Text>
                      </Stack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>7</Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Heading fontSize={'20px'}>
                      Branch Office<br/> or Liaison Office<br/> of Foreign Companies
                      </Heading>
                    </Td>
                    <Td border={'1px solid #F79E22 '}>
                      <Stack gap={3}>
                        <Text>
                        (a)     A copy of permission letter from relevant authority i.e. Board of Investment.<br/><br/>
(b)     Copies of valid passports of all the signatories of account.<br/><br/>
(c)      List of directors on company letter head or prescribed format under relevant laws/regulations.<br/><br/>
(d)     Certified* copy of Form-II about particulars of directors, principal officer, etc. <br/>in case of newly registered branch or liaison office of a foreign company or certified* copy of Form-III about change in directors,<br/> principal officer, etc. in already registered foreign companies branch or liaison office of a foreign company.<br/><br/>
(e)      A Letter from Principal Office of the entity authorizing the person(s) to open and operate the account.<br/>
(f)       A copy latest Utility Bills paid or Rental Agreement of the business<br/> place or Financial Statements or Bank Statement for verification of Branch/Liaison office address.<br/><br/>
(g)     Any other documents as deemed necessary including its latest annual accounts/ financial statements or <br/>disclosures in any form which may help to ascertain the detail of its activities, sources and usage of funds in <br/>order to assess the risk profile of the prospective customer.<br/><br/>
* Any Authorized Person having custody of the Original document can certify these documents.


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
