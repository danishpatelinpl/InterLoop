import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CountUp from 'react-countup';

export default function FundReviews({
  fundheading,
  funddetails,
  statnumber,
  statarow,
  type,
  fundicon,
}) {
  return (
    <Stack>
      <Box
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        p={'5'}
        border={'1px solid #e1e1e1'}
        borderRadius={'6'}
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
            <Icon color={'#535353'} fontSize={'20px'} as={fundicon} />
          </Box>
          <Heading
            as={'h6'}
            color={'#0d182b'}
            fontSize={{ base: '16px', lg: '20px' }}
            fontWeight={'bold'}
            textTransform={'capitalize'}
            mb={'15px'}
          >
            {' '}
            {fundheading}
          </Heading>
        </Stack>
        <Text
          fontSize={{ base: '12px', md: '14px' }}
          fontWeight={'400'}
          color={'#666e82'}
          mb={'4'}
          lineHeight={{ md: '24px', base: '20px' }}
        >
          {funddetails}
        </Text>

        <Stat>
          <HStack alignItems={'baseline'}>
            <Text
              fontWeight={'bold'}
              color={'#f79e22'}
              fontSize={{ base: '12px', md: '14px' }}
              as={'sub'}
            >
              Rs
            </Text>
            <StatNumber
              fontSize={{ base: '12px', md: '26px' }}
              color={'#535353'}
            >
              {' '}
              {statnumber}
            </StatNumber>
            {/* <StatHelpText bg={'#edf8e0'} p={'1'} borderRadius={'8'} fontSize={'12px'} color={'#48bb78'} fontWeight={'bold'}>
              <StatArrow type={type} />
              {statarow}
            </StatHelpText> */}
          </HStack>
        </Stat>
      </Box>
    </Stack>
  );
}
