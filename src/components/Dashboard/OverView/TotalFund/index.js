import {
  Box,
  Button,
  Heading,
  Icon,
  HStack,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import SingleFund from './SingleFund';
export default function Index({ value, userBanks }) {
  return (
    <>
      <Stack
      pr={5}
      
       maxH={'540px'}
       overflow={'scroll'}
      >
        <Stack
         
        >
             <Stack alignItems={'center'} direction={'row'}>
              <Box
                display={'flex'}
                bg={'#f79e22'}
                borderRadius={'50%'}
                justifyContent={'center'}
                alignItems={'center'}
                w={'40px'}
                h={'40px'}
              >
                {' '}
                <Icon
                  color={'#535353'}
                  fontSize={'20px'}
                  as={AiOutlineFundProjectionScreen}
                />
              </Box>
              <Heading
                as={'h6'}
                color={'#0d182b'}
                fontSize={{ base: '16px', md: '23px' }}
                fontWeight={'bold'}
                textTransform={'capitalize'}
                mb={'1'}
              >
                Funds
              </Heading>
            </Stack>
          <Box w={'100%'}>
           

            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={'400'}
              color={'#666e82'}
              mb={{ base: 0, lg: '4' }}
              lineHeight={{ md: '24px', base: '20px' }}
            >
              Interloop Asset Management Limited Fund List
            </Text>
          </Box>
          
        </Stack>
        <Stack>
          <UnorderedList listStyleType={'none'} margin={'0'}>
            {value?.length > 0 &&
              value?.map((v, i) => {
                return (
                  <ListItem mb={'6'} key={i}>
                    <SingleFund contant={v} userBanks={userBanks} />
                  </ListItem>
                );
              })}
          </UnorderedList>
        </Stack>
      </Stack>
    </>
  );
}
