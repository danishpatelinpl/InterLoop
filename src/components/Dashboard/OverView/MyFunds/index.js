import {
  Box,
  Heading,
  Icon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Myfund from './Myfund';
import { AiFillWarning } from 'react-icons/ai';
import {BiCoinStack} from 'react-icons/bi';
export default function Index() {
  const [fund, setFund] = useState([]);

  const user = useSelector(state => state.value);

  console.log(user);

  return (
    <>
      <Stack pr={5} minH={'297px'} maxH={'540px'} overflow={'scroll'}>
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
                  as={BiCoinStack}
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
            My Funds
          </Heading>
      </Stack>
     
        <Box w={'100%'}>
          
          <Text
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={'400'}
            color={'#666e82'}
            mb={'4'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            Manage your funds from here
          </Text>
        </Box>
        <Box>
          <UnorderedList listStyleType={'none'} margin={'0'}>
            {user?.holdings?.items?.length > 0 ? (
              user?.holdings?.items?.map((v, i) => {
                return (
                  <ListItem mb={'6'} key={i}>
                    <Myfund contant={v} />
                  </ListItem>
                );
              })
            ) : (
              <Stack direction={'row'} alignItems={'center'}>
                <Icon as={AiFillWarning} color={'primaryHeading.100'} />
                <Text fontSize={'14px'}>No funds are currently active!</Text>
              </Stack>
            )}
          </UnorderedList>
        </Box>
      </Stack>
    </>
  );
}
