import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateKYC2,
  updateKYC,
  updateTokens,
  updateUser,
  updateUserAccessToken,
  updateUserRefreshToken,
} from '../../../reducers/useReducer';
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../utils/Config';
import { useNavigate } from 'react-router';

export default function KycForm2() {
  const user = useSelector(state => state.value);
  const tokens = useSelector(state => state.tokens);
  const toast = useToast();
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const labelStyle = {
    color: '#7a7a7a',
    fontSize: '13px',
    fontWeight: '600',
  };
  const inputfiled = {
    height: '55px',
  };
  const [currentPhoto, setcurrentPhoto] = useState({});
  const currentPhotoRef = useRef(null);
  const [documentOfZakat, setdocumentOfZakat] = useState({});
  const documentOfZakatRef = useRef(null);
  const [proofOfAddress, setproofOfAddress] = useState({});
  const proofOfAddressRef = useRef(null);
  const [proofOfIncome, setproofOfIncome] = useState({});
  const proofOfIncomeRef = useRef(null);

  function onFileInput(e, stateAttr) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = e => {
      stateAttr.data = e.target.result;
    };
    stateAttr.data = JSON.stringify(e.target.files[0]);
  }

  const getUserFields = async () => {
    console.log(user);
    setisLoading(true);
    let userFieldsData = await GET(`${baseUrl}/users/listUserKycData`, {
      Authorization: `Bearer ${tokens?.accessToken}`,
    });

    const submitKYC = async () => {
        setisLoading(true)

      

        let response = await GET(`${baseUrl}/users/submitUserKyc`, KYCForm, { Authorization: `Bearer ${localStorage.getItem('access_token')}` });

        // console.log(response);

        if (response.message == "unauthorized") {

            let newToken = await POST(`${baseUrl}/users/refresh`, { refresh_token: localStorage.getItem('refresh_token') });
            // console.log(newToken?.data?.access_token);
            let accessToken = newToken?.data?.access_token;
            let response = await GET(`${baseUrl}/users/submitUserKyc`, KYCForm, { Authorization: `Bearer ${localStorage.getItem('access_token')}` });

            // console.log(response, 'final response');
            dispatch(updateTokens(newToken?.data))
            
            Cookies.set('kycLevel2', JSON.stringify(KYCForm));
            // dispatch(updateKYC2(KYCForm))
            toast({
                description: 'Kyc Updated!',
                status: 'success',
                position: 'bottom-right',
                isClosable: true,
                duration: 4000
            })
            setisLoading(false)
        } else if (response.message == "malformed_body") {
            setisLoading(false)
            Cookies.set('kycLevel2', JSON.stringify(KYCForm));
            return toast({
                description: 'Something went wrong!',
                status: 'error',
                position: 'bottom-right',
                isClosable: true,
                duration: 4000
            })
        } else {
            // setisLoading(false)
            // Cookies.set('kycLevel2', JSON.stringify(KYCForm));
            // dispatch(updateKYC2(KYCForm))
            // return toast({
            //     description: 'Kyc Updated!',
            //     status: 'success',
            //     position: 'bottom-left',
            //     isClosable: true,
            //     duration: 4000
            // })
        }
    }
    setisLoading(false);
  };

  const [KYCForm, setKYCForm] = useState({
    education: {
      value: '',
    },
    income_mon: {
      value: '',
    },
    inv_txn_annual: {
      value: '',
    },
    inv_annual: {
      value: '',
    },
    refusal_acc_fl: {
      value: '',
    },
    doc_zakat: {
      data: '',
    },
    doc_addr: {
      data: '',
    },
    doc_income: {
      data: '',
    },
    doc_signature: {
      data: '',
    },
  });

  // console.log(KYCForm);

  const submitKYC = async () => {
    try {
      let response = await POST(`${baseUrl}/users/updateUserKyc`, KYCForm, {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,

      });
      if (response.status === 'ok') {
        localStorage.setItem('kycFinalData', JSON.stringify(response?.data));
        dispatch(updateKYC(response?.data));
        setKYCForm(response?.data);
      }
      console.log(response);

      if (response.message === 'unauthorized') {
        let newToken = await POST(`${baseUrl}/users/refresh`, {
          refresh_token: localStorage.getItem('refresh_token'),
        });
        console.log(newToken);
        if (newToken?.status == 'ok') {
          let response = await POST(`${baseUrl}/users/updateUserKyc`, KYCForm, {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          });
          console.log(response);
          dispatch(updateTokens(newToken?.data));

          toast({
            description: 'Update KYC Submitted!',
            status: response.status === 'ok' ? 'success' : 'error',
            position: 'bottom-right',
            isClosable: true,
            duration: 3000,
          });
          if (response.status === 'ok') {
            localStorage.setItem(
              'kycFinalData',
              JSON.stringify(response?.data)
            );
            dispatch(updateKYC(response?.data));
            setKYCForm(response?.data);
          }
        }
      }
      toast({
        description:
          response.status === 'ok'
            ? 'Update KYC Submitted!'
            : response?.message,
        status: response.status === 'ok' ? 'success' : 'error',
        position: 'bottom-right',
        isClosable: true,
        duration: 3000,
      });
      setisLoading(false);
    } catch (err) {
      toast({
        description: err,
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
        duration: 4000,
      });
    }
  };

  useEffect(() => {
    getUserFields();
  }, [])
  

  return (
    <Stack gap={'6'}>
      <Stack
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        p={'5'}
        gap={'4'}
        borderRadius={'6'}
      >
        <Box mb={'4'}>
          <Heading
            as={'h6'}
            color={'#0d182b'}
            fontSize={{ base: '16px', md: '26px' }}
            fontWeight={'bold'}
            textTransform={'capitalize'}
          >
            Personal Information
          </Heading>
          <Text
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={'400'}
            color={'#666e82'}
            mt={'0'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            Update your account info incase you entered incorrect info
          </Text>
        </Box>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Your Education*</FormLabel>
              <Select
                sx={inputfiled}
                value={KYCForm?.education.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    education: { value: e.target.value },
                  });
                }}
              >
                <option style={{ display: 'none' }} value="">Select Education</option>
                <option value="undergraduate">Under Graduate</option>
                <option value="graduate">Graduate</option>
                <option value="postGraduate">Post Graduate</option>
                <option value="professional">Professional etc</option>
              </Select>
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Monthly Income*</FormLabel>
              <Input
                sx={inputfiled}
                type="number"
                placeholder="Monthly Income"
                value={KYCForm.income_mon?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    income_mon: {
                      value: e.target.value,
                    },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Annual Investment Transaction*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                placeholder=""
                value={KYCForm.inv_txn_annual.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    inv_txn_annual: {
                      value: e.target.value,
                    },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Expected Annual Investment*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                placeholder=""
                value={KYCForm.inv_annual.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    inv_annual: {
                      value: e.target.value,
                    },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>Any Financial Accounts?*</FormLabel>
            <RadioGroup
              defaultValue={false}
              value={KYCForm?.refusal_acc_fl?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  refusal_acc_fl: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel  alignItems={'flex-end'}
               display={'flex'} sx={labelStyle}>Signature Picture* <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>png, jpeg, pdf, jpg</Text></FormLabel>
              <Input
                ref={currentPhotoRef}
                display={'none'}
                h={'55px'}
                type="file"
                onChange={e => {
                  setcurrentPhoto(e.target.files[0]);
                  onFileInput(e, KYCForm.doc_signature);
                }}
              />
              <Box
                border={'1px solid'}
                borderColor={'#adadad'}
                borderRadius={6}
                w={'100%'}
                py={'1'}
                cursor={'pointer'}
                onClick={() => currentPhotoRef.current.click()}
                role={'group'}
              >
                <Button
                  bgColor={'primaryHeading.200'}
                  color={'white.100'}
                  fontWeight={{ base: 400, md: 500 }}
                  marginLeft={'5px'}
                  border={'2px solid'}
                  borderColor={'primaryHeading.200'}
                  _groupHover={{
                    bgColor: '#000',
                    color: '#fff',
                  }}
                >
                  Choose File:
                </Button>
                <Text as={'span'} fontSize={{ base: '11px', lg: '13px' }}>
                  {currentPhoto?.name}
                </Text>
              </Box>
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel alignItems={'flex-end'} display={'flex'} sx={labelStyle}>Document of Zakat* <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>png, jpeg, jpg</Text></FormLabel>
              <Input
                ref={documentOfZakatRef}
                display={'none'}
                h={'55px'}
                type="file"
                onChange={e => {
                  setdocumentOfZakat(e.target.files[0]);
                  onFileInput(e, KYCForm.doc_zakat);
                }}
              />
              <Box
                border={'1px solid'}
                borderColor={'#adadad'}
                borderRadius={6}
                w={'100%'}
                py={'1'}
                cursor={'pointer'}
                onClick={() => documentOfZakatRef.current.click()}
                role={'group'}
              >
                <Button
                  bgColor={'primaryHeading.200'}
                  color={'white.100'}
                  fontWeight={{ base: 400, md: 500 }}
                  marginLeft={'5px'}
                  border={'2px solid'}
                  borderColor={'primaryHeading.200'}
                  _groupHover={{
                    bgColor: '#000',
                    color: '#fff',
                  }}
                >
                  Choose File:
                </Button>
                <Text as={'span'} fontSize={{ base: '11px', lg: '13px' }}>
                  {documentOfZakat?.name}
                </Text>
              </Box>
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          alignItems={'flex-end'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel alignItems={'flex-end'} display={'flex'}  sx={labelStyle}>
                Proof of address (in case address is different from NIC)*
                <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>png, jpeg, jpg</Text>
              </FormLabel>
              <Input
                ref={proofOfAddressRef}
                display={'none'}
                h={'55px'}
                type="file"
                onChange={e => {
                  setproofOfAddress(e.target.files[0]);
                  onFileInput(e, KYCForm.doc_addr);
                }}
              />
              <Box
                border={'1px solid'}
                borderColor={'#adadad'}
                borderRadius={6}
                w={'100%'}
                py={'1'}
                cursor={'pointer'}
                onClick={() => proofOfAddressRef.current.click()}
                role={'group'}
              >
                <Button
                  bgColor={'primaryHeading.200'}
                  color={'white.100'}
                  fontWeight={{ base: 400, md: 500 }}
                  marginLeft={'5px'}
                  border={'2px solid'}
                  borderColor={'primaryHeading.200'}
                  _groupHover={{
                    bgColor: '#000',
                    color: '#fff',
                  }}
                >
                  Choose File:
                </Button>
                <Text as={'span'} fontSize={{ base: '11px', lg: '13px' }}>
                  {proofOfAddress?.name}
                </Text>
              </Box>
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel alignItems={'flex-end'} display={'flex'}  sx={labelStyle}>
                Proof of Income ( Salary Slip )*
                <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>png, jpeg, pdf, jpg</Text>
              </FormLabel>
              <Input
                ref={proofOfIncomeRef}
                display={'none'}
                h={'55px'}
                type="file"
                onChange={e => {
                  setproofOfIncome(e.target.files[0]);
                  onFileInput(e, KYCForm.doc_income);
                }}
              />
              <Box
                border={'1px solid'}
                borderColor={'#adadad'}
                borderRadius={6}
                w={'100%'}
                py={'1'}
                cursor={'pointer'}
                onClick={() => proofOfIncomeRef.current.click()}
                role={'group'}
              >
                <Button
                  bgColor={'primaryHeading.200'}
                  color={'white.100'}
                  fontWeight={{ base: 400, md: 500 }}
                  marginLeft={'5px'}
                  border={'2px solid'}
                  borderColor={'primaryHeading.200'}
                  _groupHover={{
                    bgColor: '#000',
                    color: '#fff',
                  }}
                >
                  Choose File:
                </Button>
                <Text as={'span'} fontSize={{ base: '11px', lg: '13px' }}>
                  {proofOfIncome?.name}
                </Text>
              </Box>
            </FormControl>
          </Box>
        </Flex>
        <Box w={'full'}>
          <Stack
            style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
            // p={'5'}
            gap={'4'}
            borderRadius={'6'}
          >
            <Box>
              <Button
                onClick={() => submitKYC()}
                width={'full'}
                fontSize={'16px'}
                px={{ md: '10', base: '5' }}
                fontWeight={500}
                color={'white'}
                bg={'#0d182b'}
                href={'#'}
                boxShadow={'0px 15px 15px -15px '}
                _hover={{
                  bg: '#ffbb5c',
                  boxShadow: 'none',
                  transform: 'translateY(2px)',
                }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
