import {
  Stack,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import MainDashboard from '../MainDashboard'
import RedemptionCard from './RedemptionCard';
import { Link as ReactLink } from 'react-router-dom';

export default function Redemption() {
  const [redemptions, setRedemptions] = useState([]);
  const [constraint, setConstraint] = useState("ALL");

  useEffect(() => {
    if (constraint === "ALL") {
      // Hit All Redemptions API
      setRedemptions([
        {
          conventialEquity: "Stock Funds",
          units: 1000,
          amount: '500,000',
          paymentMode: 'cheque',
          status: "Trustee Pending"
        },
        {
          conventialEquity: "Mutual Funds",
          units: 500,
          amount: '350,000',
          paymentMode: 'cheque',
          status: "Trustee Approved"
        },
        {
          conventialEquity: "Equity Funds",
          units: 3500,
          amount: '450,000',
          paymentMode: 'cheque',
          status: "Trustee Declined"
        },
        {
          conventialEquity: "Life Insurance Funds",
          units: 1500,
          amount: '350,000',
          paymentMode: 'cheque',
          status: "Trustee Approved"
        },
        {
          conventialEquity: "Forex Funds",
          units: 9500,
          amount: '200,000',
          paymentMode: 'cheque',
          status: "Trustee Approved"
        }
      ]);
    } else if (constraint === "APPLIED") {
      // Hit Applied Redemptions API
      setRedemptions([
        {
          conventialEquity: "Forex Funds",
          units: 1500,
          amount: '500,000',
          paymentMode: 'cheque',
          status: "Trustee Applied"
        },
        {
          conventialEquity: "Equity Funds",
          units: 500,
          amount: '350,000',
          paymentMode: 'cheque',
          status: "Trustee Applied"
        },
        {
          conventialEquity: "Mutual Funds",
          units: 1500,
          amount: '500,000',
          paymentMode: 'cheque',
          status: "Trustee Applied"
        }
      ]);
    } else if (constraint === "RELEASED") {
      // Hit Released Redemptions API
      setRedemptions([
        {
          conventialEquity: "Forex Funds",
          units: 1500,
          amount: '500,000',
          paymentMode: 'cheque',
          status: "Trustee Released"
        },
        {
          conventialEquity: "Stock Funds",
          units: 500,
          amount: '350,000',
          paymentMode: 'cheque',
          status: "Trustee Released"
        },
        {
          conventialEquity: "Interest Funds",
          units: 1500,
          amount: '500,000',
          paymentMode: 'cheque',
          status: "Trustee Released"
        }
      ]);
    }
  }, [constraint]);

  function TabButton({ active, constraint, text }) {
    return (
      <Button
        bg={active ? 'primaryHeading.100' : 'gray.300'}
        fontSize={'sm'}
        boxShadow={active ? '0px 0px 15px rgba(247, 158, 34, 0.7)' : 'none'}
        color={'white'}
        h={'50px'}
        w={'110px'}
        _hover={{ bg: (active ? 'primaryHeading.200' : 'gray.400'), boxShadow: (active ? '0px 0px 20px rgba(247, 158, 34, 0.8)' : 'none') }}
        _active={{ bg: (active ? 'primaryHeading.300' : 'gray.500'), boxShadow: (active ? '0px 0px 20px rgba(247, 158, 34, 1)' : 'none') }}
        onClick={() => setConstraint(constraint)}
      >
        {text}
      </Button>
    )
  }

  return (
    <MainDashboard>
      <Stack pb={12}>
        {/* Top Button Row */}
        <Stack direction={{base:'column',sm:'column',lg:'row'}} justify={'space-between'} align={{base:'left',lg:'center'}} mb={'6'}>
          <Stack>
            <Heading fontSize={{ base: 22, md: 30 }}>Redemption</Heading>
            <Text fontSize={{ base: 13, md: 15 }} color={'gray.500'}>Manage your redemptions form here</Text>
          </Stack>
          <Button
            bg={'primaryHeading.100'}
            boxShadow={'0px 0px 15px rgba(247, 158, 34, 0.7)'}
            color={'white'}
            h={{base:'40px',lg:'50px'}}
            w={'200px'}
            _hover={{ bg: 'primaryHeading.200', boxShadow: '0px 0px 20px rgba(247, 158, 34, 0.8)' }}
            _active={{ bg: 'primaryHeading.300', boxShadow: '0px 0px 20px rgba(247, 158, 34, 1)' }}
            as={ReactLink}
            to={'/Dashboard/Redemption/RedemptionForm'}
          >
            Apply Redemption
          </Button>
        </Stack>

        {/* Card */}
        <Stack boxShadow={'0px 0px 26px -10px #bdbdbd'} padding={'5'} rounded={'xl'}>
          {/* Button Row */}
          <Stack direction={{base:"column",lg:'row'}} justifyContent={'space-between'} marginBottom={'30px'}>
            <Stack >
              <Heading fontSize={'25px'}>Redemption</Heading>
              <Text color={'gray.500'} fontSize={'sm'}>Manage your redemptions form here</Text>
            </Stack>
            <Stack direction={'row'} flex>
              <TabButton active={constraint === "ALL"} constraint="ALL" text={"All"} />
              <TabButton active={constraint === "APPLIED"} constraint="APPLIED" text={"Applied"} />
              <TabButton active={constraint === "RELEASED"} constraint="RELEASED" text={"Released"} />
            </Stack>
          </Stack>

          {/* Fund Card */}
          {
            redemptions.map((redemption, i) =>
              <RedemptionCard
                key={i}
                conventionalEquity={redemption.conventialEquity}
                units={redemption.units}
                amount={redemption.amount}
                paymentMode={redemption.paymentMode}
                status={redemption.status}
              />
            )
          }
        </Stack>
      </Stack>
    </MainDashboard>
  )
}