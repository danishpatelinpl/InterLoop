import {
  Box,
  Heading,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function Myfund({ contant }) {
  return (
    <>
      <Stack
        alignItems={'center'}
        direction={'row'}
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        p={'5'}
        border={'1px solid #e1e1e1'}
        borderRadius={'6'}
      >
        <Stack>
          <Stack mb={4}>
            <Heading
              as={'h6'}
              color={'#0d182b'}
              fontSize={{ base: '16px', md: '16px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
              overflow={'hidden'}
             
              textOverflow={'ellipsis'}
              
            >
              {contant.fund}
            </Heading>
          </Stack>
          <Box
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            w={'full'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
          >
            <Stack   textAlign={'center'}>
              <Heading
                as={'h6'}
                color={'#68c900'}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight={'bold'}
                textTransform={'capitalize'}
              >
                {String(contant?.current_value).split('.')[0]}
              </Heading>
              <Text
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight={'400'}
                color={'#666e82'}
                mt={'0'}
                lineHeight={{ md: '24px', base: '20px' }}
              >
                Value
              </Text>
            </Stack>
            <Stack   textAlign={'center'}>
              <Heading
                as={'h6'}
                color={'#68c900'}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight={'bold'}
                textTransform={'capitalize'}
              >
               {Number(contant.nav).toFixed(1)}
              </Heading>
              <Text
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight={'400'}
                color={'#666e82'}
                mt={'0'}
                lineHeight={{ md: '24px', base: '20px' }}
              >
                Nav
              </Text>
            </Stack>
            <Stack  textAlign={'center'}>
              <Heading
                as={'h6'}
                color={'#68c900'}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight={'bold'}
                textTransform={'capitalize'}
              >
                 {Number(contant.units).toFixed(2)}
              </Heading>
              <Text
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight={'400'}
                color={'#666e82'}
                mt={'0'}
                lineHeight={{ md: '24px', base: '20px' }}
              >
                units
              </Text>
            </Stack>
            <Stack  textAlign={'center'}>
              <Heading
                as={'h6'}
                color={'#68c900'}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight={'bold'}
                textTransform={'capitalize'}
              >
                {String(contant?.investment).split('.')[0]}
              </Heading>
              <Text
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight={'400'}
                color={'#666e82'}
                mt={'0'}
                lineHeight={{ md: '24px', base: '20px' }}
              >
                investment
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
