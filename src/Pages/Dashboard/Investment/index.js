import { ListItem, Stack, Text, Icon, UnorderedList } from '@chakra-ui/react'
import FundReviews from '../../../components/Dashboard/OverView/FundReviews/index.js';
import MainDashboard from '../MainDashboard'
import TotalFund from '../../../components/Dashboard/OverView/TotalFund/index.js'
import React, { useState } from 'react'
import RetrieveFund from '../../../components/Dashboard/OverView/MyFunds/RetrieveFund.js';
import { useSelector } from 'react-redux';
import { AiFillWarning } from 'react-icons/ai';


export default function Investment() {

  const [fund] = useState([
    { name: 'fundname1', code: 'Convention | Equity', nav: 'Rs.231', return: '+3.29%', risk: 'High', openvalue: 'Rs.231' },
    { name: 'fundname2', code: 'Convention | Equity', nav: 'Rs.241', return: '+3.27%', risk: 'Normal', openvalue: 'Rs.231' },
    { name: 'fundname3', code: 'Convention | Equity', nav: 'Rs.251', return: '+3.26%', risk: 'High', openvalue: 'Rs.231' },
    { name: 'fundname4', code: 'Convention | Equity', nav: 'Rs.261', return: '+3.25%', risk: 'High', openvalue: 'Rs.231' }
  ]);

  const user = useSelector(state => state.value)

  return (
    <>
      <MainDashboard>
        <Stack
          style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
          border={'1px solid #e1e1e1'}
          mb={'10'}
          p={'5'}
          borderRadius={'6'}>
          <FundReviews />
          <UnorderedList listStyleType={'none'} margin={'0'}>
            {
              user?.holdings?.items?.length > 0 ?
                user?.holdings?.items?.map((v, i) => {
                  return (
                    <ListItem mb={'6'} key={i} ><RetrieveFund contant={v} /></ListItem>
                  )
                })
                :
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                >
                  <Icon as={AiFillWarning} color={'primaryHeading.100'} />
                  <Text fontSize={'14px'}>No funds are currently active!</Text>
                </Stack>
            }
          </UnorderedList>
        </Stack>
      </MainDashboard>
    </>
  )
}
