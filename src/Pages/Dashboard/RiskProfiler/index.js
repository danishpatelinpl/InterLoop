import { Box, Button, Heading, ListItem, Stack, Text, UnorderedList, Icon, useToast, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn';
import SingleFund from '../../../components/Dashboard/OverView/TotalFund/SingleFund';
import MainDashboard from '../MainDashboard'
import CustomCheckBoxes from './CalculateDetailsRow/CustomCheckBoxes';
import { useSelector } from 'react-redux';
import Myfund from '../../../components/Dashboard/OverView/MyFunds/Myfund';
import { AiFillWarning } from 'react-icons/ai'
import RetrieveFund from '../../../components/Dashboard/OverView/MyFunds/RetrieveFund';
import { useEffect } from 'react';
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../utils/Config';

export default function RiskProfiler() {

  const [isLoading, setIsLoading] = useState(false);
  const [riskScore, setRiskScore] = useState(0);

  return (
    <>
      <MainDashboard>
        <Stack
          gap={6}
          marginBottom={'120px'}
        >
          <RiskProfileBrackets score={riskScore} isLoading={isLoading} />
          <RiskProfileCalculator setRiskScore={setRiskScore} riskScore={riskScore} setIsLoading={setIsLoading} />
        </Stack>
      </MainDashboard>
    </>
  )
}

// Risk Profile Top Section

function RiskProfileBrackets({ score, isLoading }) {

  const [StaticRiskName] = useState(['Low', 'High']);
  const [DynamicRiskName, setDynamicRiskName] = useState('');
  const [DynamicRiskNameColors] = useState(['gray.600', 'gray.700']);

  const [fund] = useState([
    { name: 'fundname1', code: 'Convention | Equity', nav: 'Rs.231', return: '+3.29%', risk: 'High', openvalue: 'Rs.231' },
    { name: 'fundname2', code: 'Convention | Equity', nav: 'Rs.241', return: '+3.27%', risk: 'Normal', openvalue: 'Rs.231' },
    { name: 'fundname3', code: 'Convention | Equity', nav: 'Rs.251', return: '+3.26%', risk: 'High', openvalue: 'Rs.231' },
  ]);
  const user = useSelector(state => state.value);

  useEffect(() => {
    score <= 20 ?
      setDynamicRiskName('Low')
      :
      setDynamicRiskName('High')
  }, [score])

  return (
    <Stack
      style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
      border={'1px solid #e1e1e1'}
      padding={6}
      borderRadius={7}
    >
      <Heading
        fontSize={{ base: 22, md: 30 }}
      >Risk Profiling Calculator
        {
          isLoading &&
          <Spinner
            ml={'10px'}
          />
        }
      </Heading>
      <Text
        fontSize={{ base: 13, md: 15 }}
        display={'flex'}
        gap={1}
        color={'primaryText.400'}
        pb={6}
        flexWrap={'wrap'}
      >
        You have score <Text
          fontWeight={600}
          color={'black'}
        >
          {score}</Text> and you fall under <Text
            fontWeight={600}
            color={'black'}
          >
          {DynamicRiskName}</Text> bracket.</ Text>
      <Stack
        direction={'row'}
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        gap={0}
        spacing={0}
        borderRadius={4}
        overflow={'hidden'}
        pb={6}
      >
        {
          StaticRiskName.map((v, i) => {
            return (
              <Box
                paddingY={1.5}
                w={'full'}
                key={i}
                textAlign={'center'}
                bg={
                  v === DynamicRiskName ?
                    'primaryHeading.100'
                    :
                    DynamicRiskNameColors[i]
                }
                color={'#fff'}
              >{v}</Box>
            )
          })
        }
      </Stack>


    </Stack>
  )
}

// Risk Profile Bottom Section

function RiskProfileCalculator({ setRiskScore, riskScore, setIsLoading }) {
  const user = useSelector(state => state.value);
  const toast = useToast();

  // Age Component Data
  const [AgeButton] = useState([
    {
      value: 1,
      title: 'Above 60'
    },
    {
      value: 2,
      title: '40 - 60 Years',
    },
    {
      value: 3,
      title: '30 - 45 Years'
    },
    {
      value: 4,
      title: 'Below 30'
    },
  ]);
  const [AgeValue, setAgeValue] = useState(0);

  // Income Component Data

  const [IncomeButton] = useState([
    {
      value: 1,
      title: 'Bank Deposits'
    },
    {
      value: 2,
      title: 'Money Markets/National Savings'
    },
    {
      value: 3,
      title: 'Fixed Income/Debt'
    },
    {
      value: 4,
      title: 'Equity/Forex/Commodity'
    },
  ]);
  const [IncomeValue, setIncomeValue] = useState(0);

  // Time Component Data

  const [TimeButton] = useState([
    {
      value: 1,
      title: 'Upto 6 months'
    },
    {
      value: 2,
      title: 'Upto 1 year'
    },
    {
      value: 3,
      title: '1 to 3 Years'
    },
    {
      value: 4,
      title: 'More than 3 Years'
    },
  ]);
  const [TimeValue, setTimeValue] = useState(0);

  // Experience Component Data

  const [ExperienceButton] = useState([
    {
      value: 1,
      title: 'None'
    },
    {
      value: 2,
      title: 'Fresh/Basic'
    },
    {
      value: 3,
      title: 'Well-Versed'
    },
    {
      value: 4,
      title: 'Expert'
    },
  ]);
  const [ExperienceValue, setExperienceValue] = useState(0);

  // Objective Component Data

  const [ObjectiveButton] = useState([
    {
      value: 1,
      title: 'Liquidity management'
    },
    {
      value: 2,
      title: 'Regular Income'
    },
    {
      value: 3,
      title: 'Medium Term Capital Apprecation'
    },
    {
      value: 4,
      title: 'Long Term Wealth Accumulation'
    },
  ]);
  const [ObjectiveValue, setObjectiveValue] = useState(0);

  // Risk Component Data

  const [RiskButton] = useState([
    {
      value: 1,
      title: 'Lower'
    },
    {
      value: 2,
      title: 'Low'
    },
    {
      value: 3,
      title: 'Moderate'
    },
    {
      value: 4,
      title: 'High'
    },
  ]);
  const [RiskValue, setRiskValue] = useState(0);

  const validateRisk = async () => {
    let totalScore;
    if (AgeValue === 0 || IncomeValue === 0 || TimeValue === 0 || ExperienceValue === 0 || ObjectiveValue === 0 || RiskValue === 0) {
      toast({
        description: 'All fields are required!',
        position: 'bottom-right',
        isClosable: true,
        status: 'error',
        duration: 3000
      });
    } else {
      totalScore = Number(AgeValue) + Number(IncomeValue) + Number(TimeValue) + Number(ExperienceValue) + Number(ObjectiveValue) + Number(RiskValue);
      setRiskScore(totalScore);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      let newData = new Object({
        risk_score: totalScore > 19 ? totalScore : 6,
        mobile: String(user?.phone).replace('+', ''),
        risk: {
          age: Number(AgeValue),
          horizon: Number(TimeValue),
          knowledge: Number(ExperienceValue),
          risk: Number(RiskValue),
          exp: Number(IncomeValue),
          obj: Number(ObjectiveValue),
          risk_score: riskScore > 19 ? totalScore : 6
        }
      });
      console.log(newData)
      let riskRes = await POST(`${baseUrl}/users/updateRisk`, newData, { Authorization: `Bearer ${localStorage.getItem('access_token')}` });
      console.log(riskRes)
      toast({
        description: 'Risk profile updated!',
        position: 'bottom-right',
        isClosable: true,
        status: 'success',
        duration: 3000
      });
    }
  }

  useEffect(() => {
    if (user) {
      (async () => {
        let riskData;
        setIsLoading(true);
        let getRiskRes = await GET(`${baseUrl}/users/getRisk?mobile=${String(user?.phone).replace('+', '')}`, { Authorization: `Bearer ${localStorage.getItem('access_token')}` })
        console.log(getRiskRes.data);
        if(getRiskRes?.data?.length > 0){
          riskData = JSON.parse(getRiskRes.data);
          if (getRiskRes?.status === 'Ok') {
            setAgeValue(riskData?.age);
            setExperienceValue(riskData?.knowledge);
            setTimeValue(riskData?.horizon);
            setRiskValue(riskData?.risk);
            setObjectiveValue(riskData?.obj);
            setIncomeValue(riskData?.exp);
            setRiskScore(riskData?.risk_score);
          }
        }
        setIsLoading(false);
      })();
    }
  }, [user]);


  return (
    <Stack
      pb={12}
    >
      <Stack
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        border={'1px solid #e1e1e1'}
        padding={6}
        borderRadius={7}
        gap={5}
      >
        <Heading
          fontSize={{ base: 22, md: 30 }}
        >Risk Profiling Calculator</Heading>
        <Text
          fontSize={15}
          color={'primaryText.400'}
          mb={4}
        >
          Enter your details for risk profiling
        </ Text>
        {/* Age Checkboxes */}
        <CustomCheckBoxes
          question={'Your Age?'}
          buttonValues={AgeButton}
          AgeValue={AgeValue}
          setAgeValue={setAgeValue}
        />
        {/* Time Period Checkboxes */}
        <CustomCheckBoxes
          question={'What is your investment horizon?'}
          buttonValues={TimeButton}
          AgeValue={TimeValue}
          setAgeValue={setTimeValue}
        />
        {/* Experience Checkboxes */}
        <CustomCheckBoxes
          question={'Define your investment knowledge?'}
          buttonValues={ExperienceButton}
          AgeValue={ExperienceValue}
          setAgeValue={setExperienceValue}
        />
        {/* Risk Checkboxes */}
        <CustomCheckBoxes
          question={'What is your risk appetite?'}
          buttonValues={RiskButton}
          AgeValue={RiskValue}
          setAgeValue={setRiskValue}
        />
        {/* Income Checkboxes */}
        <CustomCheckBoxes
          question={'How well you define your investment experience by asset classes?'}
          buttonValues={IncomeButton}
          AgeValue={IncomeValue}
          setAgeValue={setIncomeValue}
        />
        {/* Objective Checkboxes */}
        <CustomCheckBoxes
          question={'Investment Objective?'}
          buttonValues={ObjectiveButton}
          AgeValue={ObjectiveValue}
          setAgeValue={setObjectiveValue}
        />
        <Stack>
          <Button
            onClick={() => validateRisk()}
            width={'auto'}
            fontSize={'md'}
            px={{ md: '10', base: '5' }}
            fontWeight={600}
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            color={'white'}
            bg={'#f79e22'}
            boxShadow={`0px 15px 15px -15px transparent'}`}
            _hover={{
              bg: '#ffbb5c',
              boxShadow: 'none',
              transform: 'translateY(2px)'
            }}
          >
            Update
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}