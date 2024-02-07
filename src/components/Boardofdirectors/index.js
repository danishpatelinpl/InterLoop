import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react'
import Directors from './Directors'
import Tariqiqbalkhan  from '../../assets/images/directors/tariqiqbalkhan.png';
import MahammadMaqsood  from '../../assets/images/directors/MahammadMaqsood.png';
import faryalSadiq  from '../../assets/images/directors/faryalSadiq.png';
import FerozeAhmed  from '../../assets/images/directors/FerozeAhmed.png';
import Iqbalawan  from '../../assets/images/directors/iqbalawan.jpg';
import Saeedakhter  from '../../assets/images/directors/Saeedakhter.jpg';
import Umerjaved  from '../../assets/images/directors/Umerjaved.jpg';
import Aliya  from '../../assets/images/directors/Aliya.jpg';
import Zafar  from '../../assets/images/directors/zafar.jpg';
export default function index() {
    return (
        <Stack>
            <Container maxW={'8xl'} px={{ base: 10, "2xl": 0 }} py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}>
                <Stack textAlign={'center'}>
                    <Grid
                        templateColumns='repeat(12, 1fr)'
                        gap={6}
                    >
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Directors
                            Directorimg={Tariqiqbalkhan}
                                DirectorName={'Tariq Iqbal Khan'}
                                Directordesignation={'Non-Executive Director/Chairman'}
                                Directorsummary={<Text>Mr. Tariq Iqbal Khan is a Fellow Chartered Accountant. He is currently serving on the Boards of numerous listed companies; Silk Bank Limited, Interloop Limited, Pakistan Oil Limited, Attock Refinery Limited, Packages Limited and three unlisted companies; Chairman Packages Converters Limited, Kia Lucky Motors</Text>}
                                Directordetail={
                                    `Mr. Tariq Iqbal Khan is a Fellow Chartered Accountant. He is currently serving on the Boards of numerous listed companies; Silk Bank Limited, Interloop Limited, Pakistan Oil Limited, Attock Refinery Limited, Packages Limited and three unlisted companies; Chairman Packages Converters Limited, Kia Lucky Motors.\n
                                    He has held numerous key positions including President Islamabad Stock Exchange, Member Federal Board of Revenue, Commissioner and Acting Chairman of SECP and Chairman of National Investment Trust Limited (NIT). He has also served as Chairman on the Boards of Attock Refinery Limited, Sui Northern Gas Pipelines Limited, Pakistan Banking Association. Pakhtunkhwa Energy Development Organization (PEDO), Khyber Pakhtunkhwa Oil and Gas Company Limited (KPOGCL).\n
                                    He has also served as Director on the Boards of  National Refinery Limited, AWT Investments Limited, DCR-VIS Credit Rating Agency Limited, Central Depository Company Limited, Glaxo Smith Kline (GSK) Limited, Sanofi Aventis, Siemens Engineering, British Oxygen, ICI Pakistan Limited, Bank Al Habib Limited, Prime Bank Limited, Faisal Bank Limited, PICIC Bank Limited, Askari Commercial Bank Limited, Atlas Bank Limited, International Steels Limited, International Industries, Gillette Pakistan Limited and Bata Pakistan Limited.`
                                }
                                DirectorAdditionalInfo={`He has also been associated with A. F. Ferguson & Co., Chartered Accountants and Tariq Ayub Anwar & Co., Chartered Accountants.`}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Directors
                             Directorimg={MahammadMaqsood}
                                DirectorName={'Muhammad Maqsood'}
                                Directordesignation={'Executive Director'}
                                Directorsummary={<Text>Muhammad Maqsood is President / Group CFO of Interloop Limited. He is also Executive Director of Interloop Limited's Board. He is a Member of the Boards of Interloop Dairies (Pvt.) Limited, Interloop Holdings (Pvt.) Limited, IRC Dairy Products (Pvt.) Limited, Texlan Center (Pvt.) Limited, Shifa Medical Centre, Shifa National Hospital, and Interloop Welfare Trust. With an overall experience of 25 years, Maqsood's association with Interloop spans 18 years. His current responsibility portfolio includes finance, taxation, yarn sales and supply chain & logistics. He strives to take the Company and the group to higher levels of efficiency thus contributing towards organization's efforts of moving up the value chain.</Text>}
                                Directordetail={
                                    `Muhammad Maqsood is President / Group CFO of Interloop Limited. He is also Executive Director of Interloop Limited's Board. He is a Member of the Boards of Interloop Dairies (Pvt.) Limited, Interloop Holdings (Pvt.) Limited, IRC Dairy Products (Pvt.) Limited, Texlan Center (Pvt.) Limited, Shifa Medical Centre, Shifa National Hospital, and Interloop Welfare Trust. With an overall experience of 25 years, Maqsood's association with Interloop spans 18 years. His current responsibility portfolio includes finance, taxation, yarn sales and supply chain & logistics. He strives to take the Company and the group to higher levels of efficiency thus contributing towards organization's efforts of moving up the value chain.\n
                                    Maqsood is a fellow member of Institute of Chartered Accountants of Pakistan and the Institute of Financial Accountants, UK. He has also obtained certified training on Strategic Financial Management in Global Markets from INSEAD University France. As of October, 2018, Muhammad Maqsood has been certified under the Directors Training Program as prescribed by the Securities & Exchange Commission of Pakistan, under Listed Companies (Code of Corporate Governance) Regulations, 2017.`
                                }
                                DirectorAdditionalInfo={`As of October, 2018, Muhammad Maqsood has been certified under the Directors Training Program as prescribed by the Securities & Exchange Commission of Pakistan, under Listed Companies (Code of Corporate Governance) Regulations, 2017.`}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Directors
                            Directorimg={Saeedakhter}
                                DirectorName={'Saeed Akhter Abbasi'}
                                Directordesignation={'Non-Executive Director'}
                                Directorsummary={<Text>Mr. Saeed Abbasi has a wealth of advanced-level engineering expertise in the Information Technology sector, with over 17 years’ of leadership experience at IBM, growing and developing their comprehensive IT infrastructure and services platform. Mr. Abbasi led and grew one of the largest professional services organizations in the world, helping enterprise clients across all industries, transforming their businesses through consulting services, strategy, technology, and operations. Expertise spans large-scale comprehensive enterprise solutions, network implementation and all aspects of data management, business continuity and server and storage implementation.</Text>}
                                Directordetail={
                                    `Mr. Saeed Abbasi has a wealth of advanced-level engineering expertise in the Information Technology sector, with over 17 years’ of leadership experience at IBM, growing and developing their comprehensive IT infrastructure and services platform. Mr. Abbasi led and grew one of the largest professional services organizations in the world, helping enterprise clients across all industries, transforming their businesses through consulting services, strategy, technology, and operations. Expertise spans large-scale comprehensive enterprise solutions, network implementation and all aspects of data management, business continuity and server and storage implementation. Mr. Abbasi also specializes in leading high-performing and multi-disciplinary teams from the project development stage through to product launch. His deep expertise also encompasses project, people and resource management to meet revenue and operational KPIs for business unit targets and profitability.`
                                }
                                DirectorAdditionalInfo={`Mr. Saeed Abbasi has a wealth of advanced-level engineering expertise in the Information Technology sector, with over 17 years’ of leadership experience at IBM, growing and developing their comprehensive IT infrastructure and services platform.`}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Directors
                            Directorimg={Iqbalawan}
                                DirectorName={'Muhammad Iqbal Awan'}
                                Directordesignation={'Independent Director'}
                                Directorsummary={<Text>Mr. Muhammad Iqbal Awan has been serving as a civil servant. He has retired as Additional Secretary from Ministry of Finance. During his career he has served on various important positions in the Federal Government.</Text>}
                                Directordetail={
                                    `Mr. Muhammad Iqbal Awan has been serving as a civil servant. He has retired as Additional Secretary from Ministry of Finance. During his career he has served on various important positions in the Federal Government.\n
                                    He received his M.S. in Economic Policy Management from Columbia University, USA, Certification in Budgeting & Financial Management from University of Pittsburgh, Pennsylvania, M.Sc. from Government College, Lahore and LLB from Islamia University.
                                    Presently he is serving as Director on the Board of Rawalpindi Waste Management Company and Interloop Asset Management Limited.\n
                                    Previously, he has served as Director on the Boards of listed and non-listed public sector companies and corporations such as OGDC, PPL, POL, PGCL, ARL, NRL, PARCO, PSO, SNGPKL, SSGCL and a number of other companies in various sectors such as Telecom Sector, Industrial Sector, Agriculture Sector, Banking sector, Health Sector and the Social Sector.`
                                }
                                DirectorAdditionalInfo={`Previously, he has served as Director on the Boards of listed and non-listed public sector companies and corporations such as OGDC, PPL, POL, PGCL, ARL, NRL, PARCO, PSO, SNGPKL, SSGCL and a number of other companies in various sectors such as Telecom Sector, Industrial Sector, Agriculture Sector, Banking sector, Health Sector and the Social Sector.`}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Directors
                            Directorimg={Umerjaved}
                                DirectorName={'Umer Javed'}
                                Directordesignation={'Non-Executive Director'}
                                Directorsummary={<Text>Umer Javed is Head of Finance at Interloop Holdings (Private) Limited. He is also a Director of Momentum Logistics (Pvt.) Limited, Socks & Socks (Pvt.) Limited and Octans Digital (Pvt.) Limited, which are subsidiaries of Interloop Holdings. Umer’s association with Interloop spans over 12 years. His current responsibility portfolio includes managing group finance, accounts and investments. He strives to take the Interloop Holdings Group to higher levels of efficiency thus contributing towards organization's efforts of moving up the value chain. Umer is a fellow Member of Association of Chartered Certified Accountants and a member of CFA Institute, USA. He has been certified under the Directors Training Program as prescribed by the Securities & Exchange Commission of Pakistan, under Listed Companies (Code of Corporate Governance) Regulations, 2019.</Text>}
                                Directordetail={
                                    `Umer Javed is Head of Finance at Interloop Holdings (Private) Limited. He is also a Director of Momentum Logistics (Pvt.) Limited, Socks & Socks (Pvt.) Limited and Octans Digital (Pvt.) Limited, which are subsidiaries of Interloop Holdings. Umer’s association with Interloop spans over 12 years. His current responsibility portfolio includes managing group finance, accounts and investments. He strives to take the Interloop Holdings Group to higher levels of efficiency thus contributing towards organization's efforts of moving up the value chain. Umer is a fellow Member of Association of Chartered Certified Accountants and a member of CFA Institute, USA. He has been certified under the Directors Training Program as prescribed by the Securities & Exchange Commission of Pakistan, under Listed Companies (Code of Corporate Governance) Regulations, 2019.`
                                }
                                DirectorAdditionalInfo={`He has been certified under the Directors Training Program as prescribed by the Securities & Exchange Commission of Pakistan, under Listed Companies (Code of Corporate Governance) Regulations, 2019.`}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: '12', md: '3' }} >
                            <Directors
                             Directorimg={FerozeAhmed}
                                DirectorName={'Feroze Ahmed'}
                                Directordesignation={'Non-Executive Director'}
                                Directorsummary={<Text>As Vice President Denim Feroze Ahmed oversees New Business Development, Operations & Quality Assurance functions at Interloop Denim. He is also a Director of Momentum Logistics (Pvt.) Limited, and Octans Digital (Pvt.) Limited. Feroze began his career in consulting at Ernst & Young UK. Prior to joining Interloop, Feroze was managing the implementation of digital initiatives across the corporate, retail, and wealth segment in the UK banking sector. Feroze graduated in Economics from the University of Toronto, Canada, and holds a masters’ degree in International Business & Emerging Markets from the University of Edinburgh, UK.</Text>}
                                Directordetail={
                                    `As Vice President Denim Feroze Ahmed oversees New Business Development, Operations & Quality Assurance functions at Interloop Denim. He is also a Director of Momentum Logistics (Pvt.) Limited, and Octans Digital (Pvt.) Limited. Feroze began his career in consulting at Ernst & Young UK. Prior to joining Interloop, Feroze was managing the implementation of digital initiatives across the corporate, retail, and wealth segment in the UK banking sector. Feroze graduated in Economics from the University of Toronto, Canada, and holds a masters’ degree in International Business & Emerging Markets from the University of Edinburgh, UK.`
                                }
                                DirectorAdditionalInfo={`Feroze has been certified under the Directors Training Program as prescribed by the Securities & Exchange Commission of Pakistan, under Listed Companies (Code of Corporate Governance) Regulations, 2017.`}
                            />
                        </GridItem>
                      
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    )
}
