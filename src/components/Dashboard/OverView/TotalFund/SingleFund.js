import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateTokens,
  updateHoldings,
  updateUser,
} from '../../../../reducers/useReducer';
import { GET, POST } from '../../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../../utils/Config';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

export default function SingleFund({ contant, userBanks }) {
  console.log(contant, '=====> content here');
  const navigate = useNavigate();
  const tokens = useSelector(state => state.tokens);
  const toast = useToast();
  const dispatch = useDispatch();
  const [bankData, setBankData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isOpen: isDetailsOpen,
    onOpen: onDetailsOpen,
    onClose: onDetailsClose,
  } = useDisclosure();
  const {
    isOpen: isTransOpen,
    onOpen: onTransOpen,
    onClose: onTransClose,
  } = useDisclosure();

  const labelStyle = {
    color: '#7a7a7a',
    fontSize: '13px',
    fontWeight: '600',
  };
  // console.log("dv", contant);
  const inputfiled = {
    height: '55px',
  };

  const [transData, setTransData] = useState({
    bank_account_id: '',
    fund_id: contant?.id,
    amount: '',
    txn_type: 1,
    txr_type: 1,
    month_day: 0,
  });

  useEffect(() => {
    setBankData(userBanks);
  }, [userBanks]);

  const getHolding = async () => {
    // console.log('triggering');
    let createTransResponse = await GET(`${baseUrl}/funds/getHoldings`, {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    // console.log(createTransResponse);
    if (createTransResponse.message == 'unauthorized') {
      let newToken = await POST(`${baseUrl}/users/refresh`, {
        refresh_token: localStorage.getItem('refresh_token'),
      });
      // console.log(newToken);
      if (newToken.status == 'ok') {
        let createTransResponse = await POST(`${baseUrl}/funds/getHoldings`, {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        });
        // console.log(createTransResponse);
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
          description: 'Something Went Wrong!',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
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
      dispatch(updateHoldings(createTransResponse.data));
      // console.log(updateHoldings);
      toast({
        description: 'Transaction Success!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    } else {
      // console.log('transaction completed')
    }
  };

  const finalSubmitReq = async id => {
    try {
      let finalSubmit = await POST(
        `${baseUrl}/funds/submitTransaction`,
        { session_id: id },
        { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
      );
      // console.log(finalSubmit);
      if (finalSubmit?.status === 'ok')
        toast({
          description: 'Transaction Request submitted!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
    } catch (err) {
      toast({
        description: err,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  const createTrans = async () => {

 
    if (transData.amount === '') {
        toast({
            description: 'Amount is Requird!',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'bottom-right'
        })
    } else {
    setIsLoading(true);
    // console.log(transData);
    let createTransResponse = await POST(
      `${baseUrl}/funds/createTransaction`,
      transData,
      { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
    );
    // console.log(createTransResponse);
    if (createTransResponse?.status === 'ok') {
      finalSubmitReq(createTransResponse?.data?.id);
    } else if (createTransResponse.message == 'unauthorized') {
      let newToken = await POST(`${baseUrl}/users/refresh`, {
        refresh_token: localStorage.getItem('refresh_token'),
      });
      // console.log(newToken);
      if (newToken.status == 'ok') {
        let createTransResponse = await POST(
          `${baseUrl}/funds/createTransaction`,
          { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        );
        // console.log(createTransResponse);
        if (createTransResponse === 'ok')
          finalSubmitReq(createTransResponse?.data?.id);
        dispatch(updateTokens(newToken.data));
        getHolding();
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
      getHolding();
    } else {
      // console.log('transaction completed')
    }
    setIsLoading(false);
    onTransClose();
    // setTransData({
    //     bank_account_id: '',
    //     fund_id: contant?.id,
    //     amount: '',
    //     type: 1
    // })
    }
  };

  return (
    <Stack
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      alignItems={'center'}
      direction={'row'}
      justifyContent={'space-between'}
      style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
      border={'1px solid #e1e1e1'}
      p={'5'}
      borderRadius={'6'}
     
    >
      <Stack>
        <Stack minW={{ base: '46%', md: '25%' }} mb={{ base: 4, md: 4 }}>
          <Heading
          
            color={'#0d182b'}
            fontSize={{ base: '16px', md: '18px' }}
            fontWeight={'bold'}
            textTransform={'capitalize'}
        
            textOverflow={'ellipsis'}
            overflow={'hidden'}
            textDecor={'none !important'}
            title={contant?.name}
          >
            {contant?.name}
          </Heading>

          <Text
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={'400'}
            color={'#666e82'}
            mt={'0'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            {contant?.code} | {contant?.rat}
          </Text>
        </Stack>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={{ base: '100%', md: '70%' }}
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
          <Stack
            textAlign={{ base: 'right', md: 'center' }}
           
            mb={{ base: 4, md: 0 }}
          >
            <Heading
              as={'h6'}
              color={'#f79e22'}
              fontSize={{ base: '16px', md: '18px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {String(contant?.nav).split('.')[0]}
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
          {contant?.openvalue && (
            <Stack textAlign={'center'} minW={{ base: '46%', md: '25%' }}>
              <Heading
                as={'h6'}
                color={'#000'}
                fontSize={{ base: '16px', md: '18px' }}
                fontWeight={'bold'}
                textTransform={'capitalize'}
              >
                {contant?.openvalue}
              </Heading>
              <Text
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight={'400'}
                color={'#666e82'}
                mt={'0'}
                lineHeight={{ md: '24px', base: '20px' }}
              >
                Open Value (24h)
              </Text>
            </Stack>
          )}
          <Stack
            textAlign={{ base: 'left', md: 'center' }}
           
          >
            <Heading
              as={'h6'}
              color={'#68c900'}
              fontSize={{ base: '16px', md: '18px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {contant?.ret ? contant?.ret?.['30d'] : contant?.return}
            </Heading>
            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={'400'}
              color={'#666e82'}
              mt={'0'}
              lineHeight={{ md: '24px', base: '20px' }}
            >
              Return
            </Text>
          </Stack>
          <Stack
            textAlign={{ base: 'right', md: 'center' }}
           
          >
            <Heading
              as={'h6'}
              color={
                contant?.risk === 'Low'
                  ? '#68c900'
                  : contant?.risk === 'Medium'
                  ? 'primaryHeading.100'
                  : '#ff0000'
              }
              fontSize={{ base: '16px', md: '18px' }}
              fontWeight={'bold'}
              textTransform={'capitalize'}
            >
              {contant?.risk === '' ? 'N/A' : contant?.risk}
            </Heading>
            <Text
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={'400'}
              color={'#666e82'}
              mt={'0'}
              lineHeight={{ md: '24px', base: '20px' }}
            >
              Risk
            </Text>
          </Stack>
        </Box>
      </Stack>
      <Box
        m={0}
        w={{ base: '100%', md: 'auto' }}
        textAlign={{ base: 'center', md: 'right' }}
      >
        <Button
          onClick={onDetailsOpen}
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
          Invest Now
        </Button>
      </Box>
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
                <Text>{contant?.name}</Text>
              </Box>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table
              border={'1px solid'}
              borderColor={'#fafafa'}
              overflow={'auto'}
              fontSize={16}
              className={'customTableModal'}
            >
              <Tbody>
                <Tr>
                  <Td
                    fontWeight={'bold'}
                    border={'1px solid'}
                    borderColor={'#adadad'}
                  >
                    Code
                  </Td>
                  <Td
                    fontWeight={'bold'}
                    border={'1px solid'}
                    borderColor={'#adadad'}
                  >
                    Value
                  </Td>
                  <Td
                    fontWeight={'bold'}
                    border={'1px solid'}
                    borderColor={'#adadad'}
                  >
                    Rat
                  </Td>
                  <Td
                    fontWeight={'bold'}
                    border={'1px solid'}
                    borderColor={'#adadad'}
                  >
                    Management Fees
                  </Td>
                  <Td
                    fontWeight={'bold'}
                    border={'1px solid'}
                    borderColor={'#adadad'}
                  >
                    Risk
                  </Td>
                </Tr>
                <Tr>
                  <Td>{contant?.code}</Td>
                  <Td>{contant?.nav}</Td>
                  <Td>{contant?.rat}</Td>
                  <Td>{contant?.mgmt}</Td>
                  <Td>{contant?.risk}</Td>
                </Tr>
                <Tr>
                  <Td
                    fontWeight={'bold'}
                    border={'1px solid'}
                    borderColor={'#adadad'}
                  >
                    Objective
                  </Td>
                  <Td colSpan={4} fontSize={12}>
                    {contant?.obj}
                  </Td>
                </Tr>
                {contant?.ret && (
                  <>
                    <Tr>
                      <Td
                        rowSpan={3}
                        fontWeight={'bold'}
                        border={'1px solid'}
                        borderColor={'#adadad'}
                      >
                        Return
                      </Td>
                      <Td>
                        <Text fontWeight={'bold'} as={'span'}>
                          1d:{' '}
                        </Text>
                        {`${contant?.ret['1d'] ?? '-'}`}
                      </Td>
                      <Td>
                        <Text fontWeight={'bold'} as={'span'}>
                          15d:{' '}
                        </Text>
                        {`${contant?.ret['15d'] ?? '-'}`}
                      </Td>
                      <Td>
                        <Text fontWeight={'bold'} as={'span'}>
                          30d:{' '}
                        </Text>
                        {`${contant?.ret['30d'] ?? '-'}`}
                      </Td>
                      <Td>
                        <Text fontWeight={'bold'} as={'span'}>
                          9d:{' '}
                        </Text>
                        {`${contant?.ret['90d'] ?? '-'}`}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text fontWeight={'bold'} as={'span'}>
                          180d:{' '}
                        </Text>
                        {`${contant?.ret['180d'] ?? '-'}`}
                      </Td>
                      <Td>
                        <Text fontWeight={'bold'} as={'span'}>
                          270d:{' '}
                        </Text>
                        {`${contant?.ret['270d'] ?? '-'}`}
                      </Td>
                      <Td>
                        <Text fontWeight={'bold'} as={'span'}>
                          365d:{' '}
                        </Text>
                        {`${contant?.ret['365d'] ?? '-'}`}
                      </Td>
                      <Td>
                        <Text fontWeight={'bold'} as={'span'}>
                          mtd:{' '}
                        </Text>
                        {`${contant?.ret['mtd'] ?? '-'}`}
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button
              _hover={{ bgColor: '#1a1a1a' }}
              bgColor={'primaryHeading.100'}
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onDetailsClose();
                onTransOpen();
              }}
            >
              Invest Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isTransOpen} onClose={onTransClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box>
                <Text>{contant?.name}</Text>
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
                  value={transData?.amount}
                  onChange={e => {
                    setTransData({
                      ...transData,
                      amount: parseInt(e.target.value),
                    });
                  }}
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              _hover={{ bgColor: '#1a1a1a' }}
              bgColor={'primaryHeading.100'}
              colorScheme="blue"
              mr={3}
              onClick={() => createTrans()}
            >
              Create Transaction
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
