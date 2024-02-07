import React, { useEffect } from 'react'
import { Button } from '@chakra-ui/react';

export default function PrimaryBtn(props) {

  return (



    <Button
      isLoading={props.isLoading}
      width={props?.w ? props?.w : 'auto'}
      fontSize={'md'}
      px={{ md: '10', base: '5' }}
      fontWeight={600}
      size={{ base: 'sm', md: 'md', lg: 'lg' }}
      color={'white'}
      bg={'#f79e22'}
      href={'#'}
      boxShadow={`0px 15px 15px -15px ${props?.shadow ?? 'transparent'}`}
      _hover={{
        bg: '#ffbb5c',
        boxShadow: 'none',
        transform: 'translateY(2px)'
      }}
      disabled={
        (props?.disabled === undefined || props?.disabled) ? false : true}
    >
      {props.value}
    </Button>

  )
}
