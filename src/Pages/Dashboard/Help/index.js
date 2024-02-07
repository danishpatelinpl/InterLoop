import { Box, FormLabel, Grid, GridItem, Heading, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn'
import MainDashboard from '../MainDashboard'
import Accordian from '../../../components/AskedQuestions/Accordian';
import HelpFields from './HelpFields';

export default function Help() {

  return (
    <>
      <MainDashboard>
        <Stack>
          <Heading
            fontSize={{ base: 22, md: 30 }}
          >Help</Heading>
          <Text
            fontSize={{ base: 13, md: 15 }}
            display={'flex'}
            gap={1}
            color={'primaryText.400'}
            pb={12}
            flexWrap={'wrap'}
          >
            Contact us on below</ Text>
        </Stack>
        <HelpFields />
        <Stack
          py={12}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            alignItems={'flex-start'}
            justifyContent={'space-between'}
            pb={8}
          >
            <Box
              w={{ base: '100%', md: '50%' }}
            >
              <Heading
                fontSize={{ base: 18, md: 26 }}
                pb={6}
              >Frequently Asked Questions</Heading>
              <Text
                fontSize={{ base: 13, md: 15 }}
                display={'flex'}
                gap={1}
                color={'primaryText.400'}
                pb={2}
                flexWrap={'wrap'}
              >The purpose of lorem ipsum is to create a natural looking block of text that doesn'tdistract
                from the layout laying out pages with meaningle</Text>
            </Box>
            <Box
              w={{ base: '100%', md: '25%', xl: '20%' }}
            >
              <FormLabel>Select Type of FAQ</FormLabel>
              <Select
                borderRadius={0}
                fontSize={14}
                height={'50px'}
              >
                <option selected>Mutual Funds</option>
                <option>KYC</option>
                <option>Investment</option>
                <option>Risk Profile</option>
              </Select>
            </Box>
          </Stack>
          <Grid
            templateColumns='repeat(12, 1fr)'
            gap={{ base: '0', md: '4' }}
            mb={{ base: '10px', md: '80px' }}
          >
            <GridItem colSpan={{ base: 12, md: 6, lg: 6 }} alignItems={'flex-start'} >
              <Stack spacing={{ base: '2', md: '6' }}>
                <Accordian />
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6, lg: 6 }} alignItems={'flex-start'} >
              <Stack spacing={{ base: '2', md: '6' }}>
                <Accordian />
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </MainDashboard>
    </>
  )
}
