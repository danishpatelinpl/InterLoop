import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react'
import Management from './Management';
import Aliya  from '../../assets/images/directors/Aliya.jpg';
import Zafar  from '../../assets/images/directors/zafar.jpg';
import test  from '../../assets/images/directors/test.jpg';
import Gill  from '../../assets/images/directors/gill.jpg';

export default function Managementteams() {
  return (
    <>
       <Stack>
            <Container maxW={'8xl'} px={{ base: 10, "2xl": 0 }} py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}>
                <Stack textAlign={'center'}>
                    <Grid
                        templateColumns='repeat(12, 1fr)'
                        gap={6}
                    >
                       
                     
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Management
                           Teamimg={Aliya}
                           TeamName={'Aaliya K. Dossa'}
                           Teamdesignation={'Chief Executive Officer'}
                           Teamsummary={<Text>Ms. Aaliya Dossa is Chief Executive Officer of Interloop Asset Management Limited. She has more than 25 years’ experience in Capital Markets in Pakistan, Canada and the UAE, across both Buy and Sell-side Equity and Fixed-Income. Ms Dossa holds an MBA from the Institute of Business Administration, University of Karachi, and her expertise spans Fundamental Research, Equity, Fixed-Income and Alternatives Strategy and Portfolio Management.</Text>}
                           Teamdetail={
                                    `Ms. Aaliya Dossa is Chief Executive Officer of Interloop Asset Management Limited. She has more than 25 years’ experience in Capital Markets in Pakistan, Canada and the UAE, across both Buy and Sell-side Equity and Fixed-Income. Ms Dossa holds an MBA from the Institute of Business Administration, University of Karachi, and her expertise spans Fundamental Research, Equity, Fixed-Income and Alternatives Strategy and Portfolio Management.\n
                                    Prior to joining Interloop, from 2018 onwards, Aaliya was Director Research & Business Development at Taurus Securities, and led Taurus, Joint-Bookrunners with National Bank of Pakistan, on the landmark, USD1.2Bn Sukuk (Islamic Bond) issue. Aaliya has comprehensive experience in equity and fixed income valuation and research, financial planning; and investment portfolio management for private individuals, retirement funds, and institutions.\n 
                                    In her role as Chief Investment Officer at Arif Habib Investment Management Ltd. (now MCB-Arif Habib Savings & Investments), 2001-2008, she was responsible for research, strategy, execution and monitoring. Prior to that, Aaliya headed Equity Research, at National Investment Trust Ltd. the largest public sector Unit Trust (open-end Mutual Fund) in Pakistan. `
                                }
                                TeamAdditionalInfo={`Aaliya is a Member of the National Committee for Investment, Aga Khan University Foundation, Pakistan Branch for the last 15 years. `}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Management
                            Teamimg={Zafar}
                            TeamName={'Zafar Rehman'}
                            Teamdesignation={'Head of Advisory'}
                            Teamsummary={<Text>Zafar Rehman is Head of Advisory at Interloop Asset Management Limited.</Text>}
                            Teamdetail={
                                    `Zafar Rehman is Head of Advisory at Interloop Asset Management Limited. Zafar brings with him, a rich and varied experience in debt and money markets, fixed income funds, bank treasury management, sales and operations. Fixed Income Fund Management, Marketing and Structured products are Zafar’s core expertise. 
                                    Prior to joining IAML in October 2022, Zafar Headed Fixed Income and Separately Managed Accounts, managing a team of 5 Fund Managers at BMA Asset Management from 2017 onwards. Zafar was Head of Treasury at U-Microfinance Bank for 4 years, Head of Corporate Sales at Summit Capital and before that, 10 years at AHIM (now MCB-Arif Habib Savings & Investment), heading Debt & Money Market Funds and Institutional Marketing. Zafar holds a Masters in Business Administration from the Institute of Business and Technology, Karachi. He has a keen interest in Portfolio Risk Optimization and is also knowledgeable in Equity portfolio management and construction. 
                                    Zafar has delivered differentiated and exceptional outcomes for active fixed income and total return mandates for both Institutional and High Net Worth Individual Portfolios.
                                     `
                                }
                                
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Management
                            Teamimg={Gill}
                            TeamName={'Muhammad Shaif Gill'}
                            Teamdesignation={'Chief Financial Officer'}
                            Teamsummary={<Text></Text>}
                            Teamdetail={
                                    `Muhammad Shafiq Gill is a MBA in Finance, in addition to that he also had LLB Degree and Diploma in Banking.  Before Joining IAML as Chief Financial Officer , he served National Investment  Trust, a largest and oldest open end Mutual Fund, as Head of Operations/ UHRS  about 16 years. Before that he served Investment Corporation of Pakistan , a close end Mutual Fund about Two decades in different capacities  and left ICP  as Chief Financial Officer.
                                    He is on the Board of M/s Shams Textile Millis Limited as a Nominee Director of NITL. He has  also rich experience in the field of Feasibility Study & Resource Packaging, Project Implementation /Monitoring & Disbursement as well as underwriting.
                                     `
                                }
                                
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Management
                            Teamimg={test}
                            TeamName={'Mohsin Pervaiz'}
                            Teamdesignation={'Equity Fund Manager'}
                            Teamsummary={<Text></Text>}
                            Teamdetail={
                                    `Mohsin brings to IAML unique and valuable experience of more than 20 years, as he has considerable expertise in both fundamental Equity Portfolio Management and Risk Management. Mohsin has a keen interest in quantitative and qualitative analysis, financial modelling and a deep insight into global financial markets. Mohsin was Head of Risk Management at MCB Arif Habib Savings & Investment (MCB-AH) before joining IAML. Prior to that Mohsin headed SMAs at MCB-AH and also managed the Equity and Asset Allocation Funds, while at Arif Habib Investment Management. Mohsin is an MBA Finance, from the IBA and a B.E. in Mechanical Engineering from NED. `
                                }
                                
                            />
                        </GridItem>
                       
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Management
                            Teamimg={test}
                            TeamName={'Faisal Hameed'}
                            Teamdesignation={'Chief Compliance Officer '}
                            Teamsummary={<Text></Text>}
                            Teamdetail={
                                    `With almost 12 years of experience, Faisal has played a leading role in designing and implementing internal controls, compliance programs, risk management frameworks, policy formulation, organizational restructuring and business process re-engineering across several sectors including financial services, aviation, technology & communication, and manufacturing.
                                    As the Chief Compliance Officer at Interloop Asset Management Limited, Faisal is responsible for ensuring the company's adherence to regulatory guidelines and industry standards. His extensive experience in the field enables him to provide strategic direction and guidance to the organization in matters related to compliance and risk management, contributing significantly to the Group's commitment to maintaining a culture of compliance and ethical behavior, ensuring the protection of stakeholders' interests and maintaining the trust and confidence of its clients.
                                    Faisal's previous professional experience includes working with JS Bank, BMA Funds, BMA Capital Management, A.F. Ferguson & Co., Chartered Accountants, KPMG Taseer Hadi & Co., Chartered Accountants and PIA.
                                     `
                                }
                                
                            />
                        </GridItem>
                       
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    </>
  )
}
