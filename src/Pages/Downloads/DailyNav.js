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
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from '../../components/Banners/MiniBanner';
import BannerPic from '../../assets/images/secimgs/goals.png';


export default function DailyNav() {

  const dailyNavData = [
    { "date": "15-Sep-23", "val1": 10, "val2": 10, "val3": 10 },
    { "date": "18-Sep-23", "val1": 10.0179, "val2": 10.0179, "val3": 10.0179 },
    { "date": "19-Sep-23", "val1": 10.0223, "val2": 10.0223, "val3": 10.0223 },
    { "date": "20-Sep-23", "val1": 10, "val2": 10, "val3": 10 },
    { "date": "21-Sep-23", "val1": 10.0044, "val2": 10.0044, "val3": 10.0044 },
    { "date": "22-Sep-23", "val1": 10.0089, "val2": 10.0089, "val3": 10.0089 },
    { "date": "25-Sep-23", "val1": 10.0222, "val2": 10.0222, "val3": 10.0222 },
    { "date": "26-Sep-23", "val1": 10.0266, "val2": 10.0266, "val3": 10.0266 },
    { "date": "27-Sep-23", "val1": 10.0311, "val2": 10.0311, "val3": 10.0311 },
    { "date": "28-Sep-23", "val1": 10.0355, "val2": 10.0355, "val3": 10.0355 },
    { "date": "02-Oct-23", "val1": 10.0533, "val2": 10.0533, "val3": 10.0533 },
    { "date": "03-Oct-23", "val1": 10.0577, "val2": 10.0577, "val3": 10.0577 },
    { "date": "04-Oct-23", "val1": 10.0621, "val2": 10.0621, "val3": 10.0621 },
    { "date": "05-Oct-23", "val1": 10.0611, "val2": 10.0611, "val3": 10.0611 },
    { "date": "06-Oct-23", "val1": 10.0628, "val2": 10.0628, "val3": 10.0628 },
    { "date": "09-Oct-23", "val1": 10.1027, "val2": 10.1027, "val3": 10.1027 },
    { "date": "10-Oct-23", "val1": 10.1271, "val2": 10.1271, "val3": 10.1271 },
    { "date": "11-Oct-23", "val1": 10.1635, "val2": 10.1635, "val3": 10.1635 },
    { "date": "12-Oct-23", "val1": 10.2352, "val2": 10.2352, "val3": 10.2352 },
    { "date": "13-Oct-23", "val1": 10.2851, "val2": 10.2851, "val3": 10.2851 },
    { "date": "16-Oct-23", "val1": 10.2888, "val2": 10.2888, "val3": 10.2888 },
    { "date": "17-Oct-23", "val1": 10.2469, "val2": 10.2469, "val3": 10.2469 },
    { "date": "18-Oct-23", "val1": 10.264, "val2": 10.264, "val3": 10.264 },
    { "date": "19-Oct-23", "val1": 10.376, "val2": 10.376, "val3": 10.376 },
    { "date": "20-Oct-23", "val1": 10.446, "val2": 10.446, "val3": 10.446 },
    { "date": "23-Oct-23", "val1": 10.5146, "val2": 10.5146, "val3": 10.5146 },
    { "date": "24-Oct-23", "val1": 10.5091, "val2": 10.5091, "val3": 10.5091 },
    { "date": "25-Oct-23", "val1": 10.4715, "val2": 10.4715, "val3": 10.4715 },
    { "date": "26-Oct-23", "val1": 10.4809, "val2": 10.4809, "val3": 10.4809 },
    { "date": "27-Oct-23", "val1": 10.4871, "val2": 10.4871, "val3": 10.4871 },
    { "date": "30-Oct-23", "val1": 10.5635, "val2": 10.5635, "val3": 10.5635 },
    { "date": "31-Oct-23", "val1": 10.6388, "val2": 10.6388, "val3": 10.6388 },
    { "date": "01-Nov-23", "val1": 10.7048, "val2": 10.7048, "val3": 10.7048 },
    { "date": "02-Nov-23", "val1": 10.75, "val2": 10.75, "val3": 10.75 },
    { "date": "03-Nov-23", "val1": 10.7438, "val2": 10.7438, "val3": 10.7438 },
    { "date": "06-Nov-23", "val1": 10.8083, "val2": 10.8083, "val3": 10.8083 },
    { "date": "07-Nov-23", "val1": 10.8338, "val2": 10.8338, "val3": 10.8338 },
    { "date": "08-Nov-23", "val1": 10.8938, "val2": 10.8938, "val3": 10.8938 },
    { "date": "10-Nov-23", "val1": 11.0773, "val2": 11.0773, "val3": 11.0773 },
    { "date": "13-Nov-23", "val1": 11.2812, "val2": 11.2812, "val3": 11.2812 },
    { "date": "14-Nov-23", "val1": 11.279, "val2": 11.279, "val3": 11.279 },
    { "date": "15-Nov-23", "val1": 11.2487, "val2": 11.2487, "val3": 11.2487 },
    { "date": "16-Nov-23", "val1": 11.3118, "val2": 11.3118, "val3": 11.3118 },
    { "date": "17-Nov-23", "val1": 11.4917, "val2": 11.4917, "val3": 11.4917 },
    { "date": "20-Nov-23", "val1": 11.1917, "val2": 11.1917, "val3": 11.1917 },
    { "date": "21-Nov-23", "val1": 11.1991, "val2": 11.1991, "val3": 11.1991 },
    { "date": "22-Nov-23", "val1": 11.2607, "val2": 11.2607, "val3": 11.2607 },
    { "date": "23-Nov-23", "val1": 11.2629, "val2": 11.2629, "val3": 11.2629 },
    { "date": "24-Nov-23", "val1": 11.2901, "val2": 11.2901, "val3": 11.2901 },
    { "date": "27-Nov-23", "val1": 11.3191, "val2": 11.3191, "val3": 11.3191 },
    { "date": "28-Nov-23", "val1": 11.3848, "val2": 11.3848, "val3": 11.3848 },
    { "date": "29-Nov-23", "val1": 11.4325, "val2": 11.4325, "val3": 11.4325 },
    { "date": "30-Nov-23", "val1": 11.4497, "val2": 11.4497, "val3": 11.4497 },
    { "date": "01-Dec-23", "val1": 11.5007, "val2": 11.5007, "val3": 11.5007 },
    { "date": "04-Dec-23", "val1": 11.6132, "val2": 11.6132, "val3": 11.6132 },
    { "date": "05-Dec-23", "val1": 11.6772, "val2": 11.6772, "val3": 11.6772 },
    { "date": "06-Dec-23", "val1": 11.7234, "val2": 11.7234, "val3": 11.7234 },
    { "date": "07-Dec-23", "val1": 11.7486, "val2": 11.7486, "val3": 11.7486 },
    { "date": "08-Dec-23", "val1": 11.8916, "val2": 11.8916, "val3": 11.8916 },
    { "date": "11-Dec-23", "val1": 11.9817, "val2": 11.9817, "val3": 11.9817 },
    { "date": "12-Dec-23", "val1": 12.0357, "val2": 12.0357, "val3": 12.0357 },
    { "date": "13-Dec-23", "val1": 11.8878, "val2": 11.8878, "val3": 11.8878 },
    { "date": "14-Dec-23", "val1": 11.9356, "val2": 11.9356, "val3": 11.9356 },
    { "date": "15-Dec-23", "val1": 11.9779, "val2": 11.9779, "val3": 11.9779 },
    { "date": "18-Dec-23", "val1": 11.8837, "val2": 11.8837, "val3": 11.8837 },
    { "date": "19-Dec-23", "val1": 11.6589, "val2": 11.6589, "val3": 11.6589 },
    { "date": "20-Dec-23", "val1": 11.6606, "val2": 11.6606, "val3": 11.6606 },
    { "date": "21-Dec-23", "val1": 11.6642, "val2": 11.6642, "val3": 11.6642 },
    { "date": "22-Dec-23", "val1": 11.5766, "val2": 11.5766, "val3": 11.5766 },
    { "date": "25-Dec-23", "val1": 11.5803, "val2": 11.5803, "val3": 11.5803 },
    { "date": "26-Dec-23", "val1": 11.2611, "val2": 11.2611, "val3": 11.2611 },
    { "date": "27-Dec-23", "val1": 11.4394, "val2": 11.4394, "val3": 11.4394 },
    { "date": "28-Dec-23", "val1": 11.591, "val2": 11.591, "val3": 11.591 },
    { "date": "29-Dec-23", "val1": 11.6761, "val2": 11.6761, "val3": 11.6761 },
    { "date": "01-Jan-2024", "val1": 11.9957, "val2": 11.9957,"val3": 11.9957 },
    { "date": "02-Jan-2024", "val1": 11.9364, "val2": 11.9364,"val3": 11.9364 },
    { "date": "03-Jan-2024", "val1": 12.0296, "val2": 12.0296,"val3": 12.0296 },
    { "date": "04-Jan-2024", "val1": 12.0794, "val2": 12.0794,"val3": 12.0794 },
    { "date": "05-Jan-2024", "val1": 12.0312, "val2": 12.0312,"val3": 12.0312 },
    { "date": "08-Jan-2024", "val1": 12.0866, "val2": 12.0866,"val3": 12.0866 },
    { "date": "09-Jan-2024", "val1": 12.1081, "val2": 12.1081,"val3": 12.1081 },
    { "date": "10-Jan-2024", "val1": 12.0599, "val2": 12.0599,"val3": 12.0599 },
    { "date": "11-Jan-2024", "val1": 12.1591, "val2": 12.1591,"val3": 12.1591  },
    { "date": "12-Jan-2024", "val1": 12.7690, "val2": 12.7690,"val3": 12.7690},
    { "date": "15-Jan-2024", "val1": 12.1638, "val2": 12.1638,"val3": 12.1638 },
  { "date": "16-Jan-2024", "val1": 12.0789, "val2": 12.0789, "val3": 12.0789 },
  { "date": "17-Jan-2024", "val1": 12.1220, "val2": 12.1220,"val3": 12.1220 },
  { "date": "18-Jan-2024", "val1": 12.0744, "val2": 12.0744 ,"val3": 12.0744},
  { "date": "19-Jan-2024", "val1": 12.1032, "val2": 12.1032 ,"val3": 12.1032},
  { "date": "22-Jan-2024", "val1": 12.2722, "val2": 12.2722 ,"val3": 12.2722},
  { "date": "23-Jan-2024", "val1": 12.4004, "val2": 12.4004,"val3": 12.4004 },
  { "date": "24-Jan-2024", "val1": 12.5195, "val2": 12.5195,"val3": 12.5195 },
  { "date": "25-Jan-2024", "val1": 12.4450, "val2": 12.4450 ,"val3": 12.4450},
  { "date": "26-Jan-2024", "val1": 12.4237, "val2": 12.4237 ,"val3": 12.4237},
  { "date": "29-Jan-2024", "val1": 12.2467, "val2": 12.2467,"val3": 12.2467 },
  { "date": "30-Jan-2024", "val1": 12.1399, "val2": 12.1399,"val3": 12.1399  },
  { "date": "31-Jan-2024", "val1": 12.1596, "val2": 12.1596, "val3": 12.1596 }
  ]

  return (
    <div>
      <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
      >
        <MiniBanner
          textTransform={'capitalize'}
          heading={'Daily NAV'}
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
          <Stack pt={12}>
            <Heading as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
              Historical NAVs
            </Heading>
            <TableContainer>
              <Table border={'1px solid #F79E22 '} variant="simple">

                <Thead>
                  <Tr>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>FUND</Th>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>Date</Th>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>NAV</Th>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>Offer Price</Th>
                    <Th border={'1px solid #F79E22 '} color={'#000'}>Redemption Price</Th>

                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}><strong>EQUITY SCHEME</strong></Td>
                  </Tr>
                  {/* <Tr>
                    <Td border={'1px solid #F79E22 '}>Interloop Asset Management Limited - Equity Fund</Td>
                    <Td border={'1px solid #F79E22 '}>15-Sep-23</Td>
                    <Td border={'1px solid #F79E22 '}>10</Td>
                    <Td border={'1px solid #F79E22 '}>10</Td>
                    <Td border={'1px solid #F79E22 '}>10</Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>Interloop Asset Management Limited - Equity Fund</Td>
                    <Td border={'1px solid #F79E22 '}>18-Sep-23</Td>
                    <Td border={'1px solid #F79E22 '}> 10.0179</Td>
                    <Td border={'1px solid #F79E22 '}> 10.0179</Td>
                    <Td border={'1px solid #F79E22 '}> 10.0179</Td>
                  </Tr>
                  <Tr>
                    <Td border={'1px solid #F79E22 '}>Interloop Asset Management Limited - Equity Fund</Td>
                    <Td border={'1px solid #F79E22 '}>19-Sep-23</Td>
                    <Td border={'1px solid #F79E22 '}> 10.0223</Td>
                    <Td border={'1px solid #F79E22 '}> 10.0223</Td>
                    <Td border={'1px solid #F79E22 '}> 10.0223</Td>
                  </Tr> */}
                  {
                    dailyNavData.map(val =>
                      <Tr key={val.date}>
                        <Td border={'1px solid #F79E22 '}>Interloop Asset Management Limited - Equity Fund</Td>
                        <Td border={'1px solid #F79E22 '}>{val.date}</Td>
                        <Td border={'1px solid #F79E22 '}>{val.val1}</Td>
                        <Td border={'1px solid #F79E22 '}>{val.val2}</Td>
                        <Td border={'1px solid #F79E22 '}>{val.val3}</Td>
                      </Tr>
                    )
                  }


                </Tbody>

              </Table>
            </TableContainer>
          </Stack>
        </Container>
      </Stack>
    </div>
  )
}
