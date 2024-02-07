import React from 'react';
import {
  Box,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
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
  Heading,
  UnorderedList,
  ListItem,
  Link,
  OrderedList,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export default function Accordian() {
  return (
    <Box>
      <Accordion allowMultiple>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                      {' '}
                      What is a Mutual Fund?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                A Mutual Fund is a large pool of money managed by a team of
                experienced individuals as part of a licensed Asset Management
                Company. The money collected from investors is invested in
                securities such as stocks, bonds, money market instruments and
                other assets to generate returns for investors.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                      {' '}
                      How does a Mutual Funds operate and regulate?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                Mutual Funds, operated by Asset Management Companies (AMCs), are
                licensed by the regulator after meeting a range of requirements.
                A Mutual Fund is set up under a trust structure with a 3rd party
                entity designated as the trustee. All investments, made by the
                fund, bank accounts, transactions, are managed by the trustee,
                according to the advice of the AMC. The trustee is obligated to
                follow the instructions of the AMC, as long as these
                instructions do not violate the “Trust Deed” which is a legal
                agreement signed by the AMC and the trustee that governs the
                operating framework of the trust. (i.e. the mutual fund).
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                      {' '}
                      What is the role of a regulator?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                Non-banking finance companies (like AMCs, Insurance Companies,
                Investment Banks etc) are regulated by the Securities and
                Exchange Commission of Pakistan, which is empowered by an act of
                parliament to perform this regulatory function. The SECP is
                responsible to protect customer interest by setting rules, under
                which AMCs and Mutual Funds operate. Moreover, it reviews AMCs
                and Mutual Funds consistently to ensure that all the rules
                assigned are being followed.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                      What are Open End funds?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                Open-end mutual funds allow investors to invest and redeem
                (withdraw) their money whenever they want. They continually
                create new units or redeem issued units on demand and are also
                known as Unit Trusts. The unit holders buy the units of the fund
                or may redeem them on a continuous basis at the prevailing Net
                Asset Value (NAV). These units can be purchased and redeemed
                through a Management Company, which announces offer and
                redemption prices on a regular basis.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                      How is NAV calculated? / How do Mutual Funds determine
                      their unit price?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                A fund’s Net Asset Value (NAV) represents the value per unit.
                The NAV is equal to the market worth of assets held in the
                portfolio of a Fund, minus liabilities, divided by the number of
                units currently issued to investors.
                <br />
                <br />
                NAV Per Unit = (Current Market Value of all the Assets –
                Liabilities) / Total Number of Units Outstanding
                <br />
                <br />
                The sales and redemption price of units might be different from
                the NAV if there is an element of “Sales Load / Front End Load”
                or “Back End Load”. The sale and redemption price is declared on
                a daily basis by the funds and can be viewed on their websites.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                      What are back-end and front-end sales load?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                Sales Load/Front-End Load is a small service fee charged to an
                investor when buying or redeeming shares in a mutual fund. The
                fee compensates sales team for their efforts and is mandatory to
                be disclosed before any payment is made.
                <br />
                <br />
                Back-End Load is charged when customers withdraw money from
                funds. This is rarely used and is applied only in case of funds
                that have a “lock in” period. Again, it is mandatory to disclose
                the fee before a customer signs up for the product.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                      What is a Benchmark?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                A benchmark is a standard against which the performance of a
                security, mutual fund or investment manager can be measured. A
                Mutual Fund’s performance is compared with the benchmark in
                order to find out whether the fund performed better than the
                market.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                      What is Capital Gain Tax on Mutual Funds?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                <Text mb={4}>
                  Capital gain arising from disposal/ redemption of securities
                  (including Mutual Funds) shall be chargeable to tax at the
                  rates specified in Division VII of Part 1 the First Schedule
                  of Income Tax Ordinance, 2001.
                </Text>
                <TableContainer mb={6}>
                  <Heading fontSize={'20px'} mb={'4'}>
                    RATE OF CAPITAL GAIN TAX (FOR FILERS)
                  </Heading>
                  <Table border={'1px solid #F79E22 '} variant="simple">
                    <Thead>
                      <Tr>
                        <Th border={'1px solid #F79E22 '} color={'#000'}>
                          Investor Category
                        </Th>
                        <Th border={'1px solid #F79E22 '} color={'#000'}>
                          Stock Funds(Note-1)
                        </Th>
                        <Th border={'1px solid #F79E22 '} color={'#000'}>
                          Other Funds
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td border={'1px solid #F79E22 '}>Individual & AOP</Td>
                        <Td border={'1px solid #F79E22 '}>10%</Td>
                        <Td border={'1px solid #F79E22 '}>10%</Td>
                      </Tr>
                      <Tr>
                        <Td border={'1px solid #F79E22 '}>
                          Company (Other than Insurance & Banks)
                        </Td>
                        <Td border={'1px solid #F79E22 '}>10%</Td>
                        <Td border={'1px solid #F79E22 '}>25%</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <UnorderedList mb={6}>
                  <ListItem>
                    <strong>Note 1</strong> : In case of Stock Fund, Capital
                    Gains Tax will be deducted at the rate of 12.5% if dividend
                    receipts of the fund are less than capital gains.
                  </ListItem>
                  <ListItem>
                    No Capital Gains Tax shall be deducted, if the holding
                    period of the security is more than Six years.
                  </ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>
                    Rates of Capital Gains Tax will be doubled for Non-Filer
                    investors.
                  </ListItem>
                </UnorderedList>
                <Text>
                  Investors are advised to seek independent professional advice
                  in this regard. Capital gain tax and withholding tax on
                  dividend will be charged according to applicable Income Tax
                  Laws.{' '}
                </Text>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What is applicable tax rate on dividend paid in Mutual Funds?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
          <Text>Currently, Withholding tax on dividends from Mutual Funds will be deducted at the rate of 15% (Filer) or 30% (Non-Filer) from investors other than Insurance Companies and Banks. Please refer First Schedule of the Income Tax Ordinance, 2001 for comprehensive understanding.
            <br/><br/>
Investors are advised to seek independent professional advice in this regard. Capital gain tax and withholding tax on dividend will be charged according to Income Tax Laws, if applicable.
</Text>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Why should you invest in Mutual Funds?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                <Text mb={6}>Mutual funds make saving and investing simple, accessible, and affordable. Following are some main advantages:</Text>
                <Box gap={6} display={'grid'}>
                    <Box>
                        <Heading fontSize={'23px'}>Accessibility</Heading>
                        <Text>An online platform makes your transactions very simple, you do not have to worry about who to invest with.</Text>
                    </Box>
                    <Box>
                        <Heading fontSize={'23px'}>Liquidity</Heading>
                        <Text>You can convert your holdings into cash whenever you want. We will transfer the money to your bank account within the next couple of working days.</Text>
                    </Box>
                    <Box>
                        <Heading fontSize={'23px'}>Diversification</Heading>
                        <Text>Your investments are spread across multiple investments, reducing your risk and helping you take advantage of a broad range of available avenues in one go.</Text>
                    </Box>
                    <Box>
                        <Heading fontSize={'23px'}>Professional Management</Heading>
                        <Text>We evaluate all opportunities that arise in the market, carefully examine them and make informed decisions. It is not an easy task for the average individual who also has their daily routine to deal with. </Text>
                    </Box>
                </Box>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    How can I start saving with IAML?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
              <Stack gap={4}>
              <Text >Download our <Link to={''} color={'blue'} fontWeight={600} fontSize={'18px'}>IAML</Link> app and click the “New Customer” button. Please keep the following information handy when opening the account:</Text>
               <UnorderedList pl={4}>
  <ListItem>Your CNIC</ListItem>
  <ListItem>Your Bank Account Number</ListItem>
  <ListItem>Access to your mobile phone and email address</ListItem>
  
</UnorderedList>
<Text>Organizations planning to invest with us can reach out to us at “info@iaml.com” and our team will get in touch with you.</Text>
              </Stack>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Can I invest in more than one fund at a time?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               Yes, you can invest in as many funds as you want.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    How long does one have to invest?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               You can invest for as long as you wish. However, please ensure that the fund you choose is based on the how long you wish to invest and what your financial requirements and risk appetite are.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What is the minimum amount required to make an investment with IAML?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               You can start with as low as Rs 1000.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Will Zakat be deducted from my investment?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                Yes, Zakat will be deducted unless Zakat Exemption Declaration Form (CZ-50) / Zakat Affidavit is submitted to the company. If you have your Zakat Affidavit with you and your profile says that you are not exempt from Zakat, you need to simply take a picture of the Zakat Affidavit from your phone and email it to us at info@iaml.com with your CNIC number from your registered email address and we will take care of the rest.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What is the procedure to withdraw investments?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               Simply login to your IAML account, hit the redeem button and choose the fund from which you wish to withdraw funds. If your account is IBFT Verified, we will transfer the funds to your bank account, otherwise a cheque to your registered address will be sent.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What is the difference between accounts?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                <TableContainer>
            <Table border={'1px solid #F79E22 '} variant="simple">
           
              <Thead>
                <Tr>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>Account type</Th>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>Transaction limit</Th>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>Total investment amount during a year</Th>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>Document required</Th>
                  <Th border={'1px solid #F79E22 '} color={'#000'}>Fund details</Th>
                 
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>Swift Account</Td>
                  <Td border={'1px solid #F79E22 '}>25000 per transaction</Td>
                  <Td border={'1px solid #F79E22 '}>100,000</Td>
                  <Td border={'1px solid #F79E22 '}>CNIC required</Td>
                  <Td border={'1px solid #F79E22 '}>Direct investment in Cash <br/>Management Optimizer using 1Link</Td>
                
                </Tr>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>Level 2 Account</Td>
                  <Td border={'1px solid #F79E22 '}>800,000 per annum</Td>
                  <Td border={'1px solid #F79E22 '}>800,000</Td>
                  <Td border={'1px solid #F79E22 '}>face to face verification/ <br/>biometric verification</Td>
                  <Td border={'1px solid #F79E22 '}>Direct investment in Cash <br/>Management Optimizer using 1Link</Td>
                 
                </Tr>
                <Tr>
                  <Td border={'1px solid #F79E22 '}>Full Account</Td>
                  <Td border={'1px solid #F79E22 '}>Unlimited</Td>
                  <Td border={'1px solid #F79E22 '}>Unlimited</Td>
                  <Td border={'1px solid #F79E22 '}>To fulfill all account<br/> opening requirement</Td>
                  <Td border={'1px solid #F79E22 '}>Any fund of choice</Td>
                 
                </Tr>
                
              </Tbody>
              
            </Table>
          </TableContainer>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Do you charge any fees?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               There are no online transaction fees. If you choose work via one of our distributors or on ground teams, a small fee may be charged on every investment you make.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    How do I monitor the performance of my fund?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
              <Stack>
                <Text>You can utilize our various value added services to access your account balance. To monitor fund performance:</Text>
                <UnorderedList pl={'4'}>
  <ListItem>Log in to your IAML Account to view latest value of your savings</ListItem>
  <ListItem>Your monthly electronic statement will be e-mailed to you every month</ListItem>
  <ListItem>Request for your electronic statement by calling us on our 24/7 toll free number</ListItem>
  <ListItem>SMS “BALYOUR REG NO” on 8622 from your registered mobile number</ListItem>
  <ListItem>Subscribe to our Daily NAV alerts through SMS & EMAIL</ListItem>
</UnorderedList>
              </Stack>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Can I Invest 24×7?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
              Yes, request for investment can be initiated round the clock. However, the transaction execution is based on the Cut-off timings of the respective product during business hours. (Please refer offering documents for the execution timelines)
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Can I Convert From One Fund To Another?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                You can move money from a scheme that you are currently invested in to any of the other schemes that we offer. This is called a conversion transaction. You can do it by filling Conversion Form and submitting it to IAML or you can perform conversion transactions online or through our App.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Can The Units Of Funds By Pledged?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                You can pledge the money held in your account as collateral to avail financing from a financial institution. You can pledge the entire investment value of your account or a specific amount as per your requirements. This facility is offered with selected investment schemes. To make this transaction you need to fill out the Pledge Form
                <Text>For more details <Link to={''} color={'blue'} fontWeight={600}>click here</Link></Text>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What Is A Systematic Investment Plan (SIP)?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               A Systematic Investment Plan (SIP) is a convenient method of investing in mutual funds. Under this plan, an investor contributes a fixed amount towards the mutual fund scheme at regular intervals, and gets units at the prevailing NAV.
              <Text>For more details <Link to={''} color={'blue'} fontWeight={600}>click here</Link></Text>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What Are The Benefits Of Investing In A SIP?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
              Investing in SIP offers two major benefits: – You can start investing with a small amount – You can average out your investment, as SIP involves buying units at different points of time and at different NAV levels.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What Is Rupee Cost Averaging?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               Rupee cost averaging is one method to save regularly and minimize the effect of market volatility on investments. By investing through methods like SIP, you invest a fixed amount in mutual funds at regular intervals. So, you get more units when the NAV is low and fewer units when it is high. Eventually, your average cost per unit is brought down.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Can Overseas Investors Open A Digital Account?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                Yes, any overseas Pakistani National can open his/her online account with Al Meezan subject to the availability of valid email ID, Active Pakistani bank account and contact details (Mobile number).
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Is My Account Opened After Submission Of Form?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                <OrderedList>
                <ListItem>In case of mobile number not registered under customer name, Zoom / Virtual / Online meeting will be set up by compliance for verification.</ListItem>
                <ListItem>In case of unsuccessful verification, Email/SMS and call will be made to customer for guidance.</ListItem>
                <ListItem>In case of successful verification, customer will receive email with instructions to make payment.</ListItem>
                </OrderedList>
                
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What Documents Are Required To Open Digital Account?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                <OrderedList>
                <ListItem>Valid CNIC of Account Holder</ListItem>
<ListItem>KYC Document (Source of Income: Salary Slip / Bank Statement / Tax Return)</ListItem>
<ListItem>Zakat Declaration (Optional)</ListItem>
<ListItem>Signature card on predefine format</ListItem>
<ListItem>Additional Documents in case Mobile Ownership is not under customer name.</ListItem>
<ListItem>Valid CNIC of Nominee (in case nominee is selected)</ListItem>
<ListItem>Signed Disclaimer Statements on predefine format</ListItem>
                </OrderedList>


              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What Does Mobile Ownership Refer To?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                <Text>It means that the Mobile number shall be under the name of Account Holder who is intending to open an Investment account with Al Meezan. In case the mobile number is not under the name of customer then following points will be followed:</Text>
                <OrderedList>
               <ListItem>Mobile Number registered on Family Member name – Affidavit along with CNIC copy of SIM owner required.</ListItem>
               <ListItem>Company Registered Mobile Number – Latest bill copy and letter of authorization from employer will be required to upload during the process.</ListItem>
              <ListItem>International Number – Latest bill copy will be required to upload during the process.</ListItem>
               </OrderedList>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                 Is There Any Requirement To Maintain Minimum Investment Balance?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               There is no such requirement to maintain minimum investment balance.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    How Can I Redeem My Mutual Fund Units?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                Simply, place your request through IAML Whatsapp 111-11-IAML Online or Mobile App for withdrawal of funds and the amount will be transferred to your registered bank account.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Which Banks Support Online Investment With IAML?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                At the moment, following are the Bank’s that facilitate investment in IAML through their Bill payment option via KUICKPAY services; Bank, Bank AlFalah and Habib Bank. 
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What is the difference between a SMA and a Mutual Fund?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
              Unlike an investor in a mutual fund, SMA account holders own the individual securities in their accounts. Your account is ‘separate’ from that of any other investor and the investment strategy is customized to follow your personal investment objectives.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What do IAML Funds SMAs offer?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
              <Text>IAML Funds SMA features include:</Text>
              <UnorderedList>
  <ListItem>Customized individual portfolios</ListItem>
  <ListItem>Professional Management and oversight</ListItem>
  <ListItem>Investment strategy in alignment with investment objectives</ListItem>
  <ListItem>Flexibility</ListItem>
  <ListItem>Transparency</ListItem>
  <ListItem>Diversification</ListItem>
  <ListItem>Liability Management for defined benefit schemes</ListItem>
</UnorderedList>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Who should invest through IAML Funds SMAs?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               The flexibility offered by SMAs means that it can cater to the needs of various clients including individuals, corporate clients, government institutions and employee funds. Every client has different needs that change over time. Your investment manager can help you decide whether SMAs are appropriate for you, based on your current financial situation, investment objectives, time horizon, risk tolerance and other factors.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What is the minimum investment requirement for SMAs?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
               The minimum amount required is as follows:<br/><br/>
Individuals – Rs. 10 million
Corporate Clients & Employee Funds – Rs. 50 million

              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    Are there risks involved in SMA investments?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                All investments involve a certain amount of risk, including the possible loss of the principal amount invested, which varies depending on the securities included in the portfolio. However, we can help develop a portfolio that ensures that risk in the portfolio matches the client’s risk tolerance.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    How do I update myself on my portfolio?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
              Clients will be provided with periodic performance and holding reports that would include details of asset allocation, portfolio activity, performance and market commentary.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    How can I avoid Online Transfers charges, if I am not maintaining my redemption account with BAFL or HBL?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                <UnorderedList>
                <ListItem> You can request to issue a Cheque or Pay Order for redemption payments, and / or</ListItem>
                <ListItem>You can open an account with any nearest branch of Bank Alfalah Limited or Habib Bank Limited, where you can receive your redemption amount free of charges</ListItem>
                </UnorderedList>
         

              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    What would happen if I want to invest higher amount than limit imposed on Sahulat account?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                You will be requested to provide documentary evidence for source of income as per regulations and IAML Funds’ AML & KYC Policy, which you can upload on the App or Portal.
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
        <AccordionItem
          bgColor={'white'}
          marginBottom={{ base: '5px', md: '15px' }}
          
        >
          {({ isExpanded }) => (
            <Stack
              className="chu"
              border={isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'}
            >
              <h2>
                <AccordionButton
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'primaryText.300'}
                  padding={'15px 15px'}
                  _hover={{
                    bgColor: '#fff',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize={{ base: '12px', md: '16px' }}>
                    How can I change my registered Bank account OR profile details?
                    </Text>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color={'primaryText.200'}
                fontSize={'16px'}
              >
                <Text>
                You can download and complete Special Request Form-Local (SRF) as available in application forms on below link:<br/>
www.IAML.com.pk/downloads/other-forms<br/>
and send it to us through mail/courier at our registered address as below:<br/>
Interloop Asset Management Ltd.<br/>
Customer Care Unit<br/>
2nd Floor, Forum<br/>
Clifton ,<br/>
Karachi, Pakistan<br/>


                </Text>
              </AccordionPanel>
            </Stack>
          )}
        </AccordionItem>
       
      </Accordion>
    </Box>
  );
}
