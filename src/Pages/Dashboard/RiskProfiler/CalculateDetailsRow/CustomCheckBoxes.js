import { Button, Stack, Text } from '@chakra-ui/react';
import React from 'react'

export default function CustomCheckBoxes({ question, buttonValues, AgeValue, setAgeValue }) {
  return (
    <Stack>
      <Stack>
        <Text
          fontSize={15}
          fontWeight={600}
        >{question}</Text>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} flexWrap={{ base: 'wrap', md: 'nowrap' }} gap={{ base: 2, md: 0 }}>
        {
          buttonValues?.map((v, i) => {
            return (
              <Button
                key={i}
                value={v.value}
                id={`age${v.value}`}
                marginLeft={'0 !important'}
                width={{ base: '100%', md: '24%' }}
                bgColor={AgeValue == v.value ? 'primaryHeading.100' : 'transparent'}
                border={'2px solid'}
                borderColor={AgeValue == v.value ? 'primaryHeading.100' : '#979ca5'}
                color={AgeValue == v.value ? 'white' : 'primaryColor.400'}
                fontSize={11}
                borderRadius={6}
                fontWeight={400}
                transition={'.3s'}
                _hover={{
                  borderColor: 'primaryHeading.100',
                }}
                onClick={(e) => {
                  setAgeValue(e.target.value);
                }}
              >
                {v.title}
              </Button>
            )
          })
        }
      </Stack>
    </Stack>
  )
};