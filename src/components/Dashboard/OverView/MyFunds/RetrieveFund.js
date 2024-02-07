import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { POST } from '../../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../../utils/Config';
import { useDispatch, useSelector } from 'react-redux';
import { updateTokens, updateUser } from '../../../../reducers/useReducer';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

export default function RetrieveFund({ contant }) {
  const {
    isOpen: isDetailsOpen,
    onOpen: onDetailsOpen,
    onClose: onDetailsClose,
  } = useDisclosure();
  console.log(contant);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [fundId, setFundId] = useState('');
  const tokens = useSelector(state => state.tokens);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const labelStyle = {
    color: '#7a7a7a',
    fontSize: '13px',
    fontWeight: '600',
  };
  const createTrans = async () => {
    setIsLoading(true);
    let data = {
      fund_id: fundId,
      amount: Number(amount),
    };
    console.log(data);
    let createTransResponse = await POST(`${baseUrl}/funds/redeem`, data, {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    console.log('reedm', createTransResponse);
    console.log(createTransResponse);
    if (createTransResponse?.status === 'ok') {
    } else if (createTransResponse.message == 'unauthorized') {
      let newToken = await POST(`${baseUrl}/users/refresh`, {
        refresh_token: localStorage.getItem('refresh_token'),
      });
      // console.log(newToken);
      if (newToken.status == 'ok') {
        let createTransResponse = await POST(`${baseUrl}funds/redeem`, data, {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        });
        console.log(createTransResponse);
        dispatch(updateTokens(newToken.data));
        toast({
          description: 'Transaction Success!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
      } else {
        toast({
          description: 'Session Expired, Please re-login to proceed!',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
        localStorage.setItem('user', null);
        localStorage.clear();
        Cookies.set('user', null);
        Cookies.set('kycData', null);
        Cookies.set('kycLevel1', null);
        Cookies.set('kycLevel2', null);
        dispatch(updateUser(null));
        navigate('/');
      }
    } else if (createTransResponse.message == 'internal_error') {
      toast({
        description: createTransResponse.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    } else if (createTransResponse.status == 'ok') {
      toast({
        description: 'Transaction Success!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
    
    else {
      toast({
        description: String(createTransResponse?.message).replace('_', ' '),
        status: createTransResponse?.status,
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
    setIsLoading(false);
    onDetailsClose();
    // setTransData({
    //     bank_account_id: '',
    //     fund_id: contant?.id,
    //     amount: '',
    //     type: 1
    // })
  };

  return (
    <>
      <Stack direction={{ base: 'column', lg: 'row' }} mb={{ base: 4, lg: 0 }}>
        <Box w={'100%'}>
          <Heading
            pb={4}
            as={'h6'}
            color={'#0d182b'}
            fontSize={{ base: '16px', md: '23px' }}
            fontWeight={'bold'}
            textTransform={'capitalize'}
            mb={'1'}
          >
            Investment
          </Heading>
        </Box>
      </Stack>

      <Stack
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        border={'1px solid #e1e1e1'}
        p={'5'}
        borderRadius={'6'}
      >
        <Stack mb={4}>
          <Heading
            as={'h6'}
            color={'#0d182b'}
            fontSize={{ base: '16px', md: '20px' }}
            fontWeight={'bold'}
            textTransform={'capitalize'}
          >
            {contant.fund}
          </Heading>
        </Stack>
        <Box
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          w={'full'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack textAlign={'center'}>
            <Heading
              as={'h6'}
              color={'#68c900'}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {Number(contant.returns).toFixed(4)}
            </Heading>
            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={'400'}
              color={'#666e82'}
              mt={'0'}
              lineHeight={{ md: '24px', base: '20px' }}
            >
              Returns
            </Text>
          </Stack>
          <Stack textAlign={'center'}>
            <Heading
              as={'h6'}
              color={'#68c900'}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {Number(contant.nav).toFixed(4)}
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
          <Stack textAlign={'center'}>
            <Heading
              as={'h6'}
              color={'#68c900'}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {Number(contant.units).toFixed(4)}
            </Heading>
            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={'400'}
              color={'#666e82'}
              mt={'0'}
              lineHeight={{ md: '24px', base: '20px' }}
            >
              Units
            </Text>
          </Stack>
          <Stack textAlign={'center'}>
            <Heading
              as={'h6'}
              color={'#68c900'}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {Number(contant.annual_returns).toFixed(4)}
            </Heading>
            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={'400'}
              color={'#666e82'}
              mt={'0'}
              lineHeight={{ md: '24px', base: '20px' }}
            >
              Annual Returns
            </Text>
          </Stack>
          <Stack textAlign={'center'}>
            <Heading
              as={'h6'}
              color={'#68c900'}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {String(contant.investment).split('.')[0]}
            </Heading>
            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={'400'}
              color={'#666e82'}
              mt={'0'}
              lineHeight={{ md: '24px', base: '20px' }}
            >
              Investment
            </Text>
          </Stack>
          <Stack textAlign={'center'}>
            <Heading
              as={'h6'}
              color={'#68c900'}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {String(contant.current_value).split('.')[0]}
            </Heading>
            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={'400'}
              color={'#666e82'}
              mt={'0'}
              lineHeight={{ md: '24px', base: '20px' }}
            >
              Current Value
            </Text>
          </Stack>
          <Button
            onClick={() => {
              setFundId(contant?.fund_id);
              onDetailsOpen();
            }}
            width={'auto'}
            fontSize={'16px'}
            px={{ base: '5', lg: '5' }}
            fontWeight={500}
            w={{ base: '100%', md: 'auto' }}
            mt={{ base: 5, md: 0 }}
            color={'white'}
            bg={'#f79e22'}
            href={'#'}
            boxShadow={'0px 15px 15px -15px '}
            _hover={{
              bg: '#ffbb5c',
              boxShadow: 'none',
              transform: 'translateY(2px)',
            }}
          >
            Redeem Now
          </Button>
        </Box>
      </Stack>
      <Modal isOpen={isDetailsOpen} onClose={onDetailsClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box>
                <Text>{contant?.fundname}</Text>
              </Box>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={'full'} pb={4}>
              <FormControl>
                <FormLabel sx={labelStyle}>Amount</FormLabel>
                <Input
                  h={'55px'}
                  type="number"
                  placeholder="amount"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              disabled={amount === 0 || amount === '' ? true : false}
              isLoading={isLoading}
              _hover={{ bgColor: '#1a1a1a' }}
              bgColor={'primaryHeading.100'}
              colorScheme="blue"
              mr={3}
              onClick={() => createTrans()}
            >
              Redeem Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
