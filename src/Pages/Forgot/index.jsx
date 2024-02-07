import React, { useEffect, useState } from 'react'
import { Spinner, Container, Box, Stack, useToast, Heading, FormControl, FormLabel, Input, Button, HStack, Link, Checkbox, Text, Toast, PinInput, PinInputField, Divider } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import { GET, POST } from '../../utils/ApiRequestProvider';
import { updateKYC, updateTokens, updateUser } from '../../reducers/useReducer';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { baseUrl } from '../../utils/Config';



export default function Index() {

  const [IsLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }, [])

  const labelStyles = {
    cursor: 'pointer',
    fontWeight: '700',
    color: '#0d182b',
    mb: '20px'
  }

  const inputStyles = {
    border: '2px solid #e1e1e1',
    bg: 'white',
    fontSize: '14px',
    borderRadius: '0',
    margin: '0 0 30px 0',
    padding: '20px 10px',
  }

  const toast = useToast()
  const [ViewPassword, setViewPassword] = useState(false);
  const [UserPhone, setUserPhone] = useState('92');
  const [UserPassword, setUserPassword] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [InputCode, setInputCode] = useState();
  const [secondsToResendOTP, setsecondsToResendOTP] = useState(60);

  useEffect(() => {
    if (secondsToResendOTP !== 0) {
      setTimeout(() => {
        setsecondsToResendOTP(secondsToResendOTP - 1)
      }, 1000);
    }
  }, [secondsToResendOTP])

useEffect(() => {
  console.log(UserPhone);
}, [UserPhone])

let phoneuser = {
       
  phone: `+${UserPhone}`,
 
};

  const submitNumber = async () => {
    setIsLoading(true)
    try {
     
      console.log('forgot2',phoneuser);
      let smsResponse = await POST(`${baseUrl}/users/resetPasswordRequest`,phoneuser);
      console.log('forgot',smsResponse);
      
      toast({
        description: smsResponse?.status === 'ok' ? 'OTP has been sent to your number' : String(smsResponse?.message).replace('_', ' ').replace('_', ' '),
        status: smsResponse.status === 'ok' ? 'success' : 'error',
        position: 'bottom-right',
        isClosable: true,
        duration: 3000,
      });

      if(smsResponse?.status === 'ok')
      {
        setIsCodeSent(true)
      }
      
    } catch (error) {
      toast({
        description: error,
        status: 'error',
        duration: 3000,
        position: 'bottom-right',
        isClosable: true
      })
    }
    setIsLoading(false)
  }

  const resendOTP = async () => {
    let smsResponse = await POST(`${baseUrl}/users/resetPasswordRequest`,phoneuser);
    console.log('resendotp',smsResponse);
    if (smsResponse.status == 'ok') {
    
      toast({
        description: `OTP resend!`,
        status: 'success',
        isClosable: true,
        position: 'bottom-right'
      });

      
    }
  }

  // const CheckCode = async () => {
  //   try {
  //     const res = await GET(`${baseUrl}/users/verifyOtp?mobile=${UserPhone}&otp=${InputCode}`);
  //     if (res.status == 'Ok') {
  //       toast({
  //         description: 'OTP Verified!',
  //         status: 'success',
  //         isClosable: true,
  //         position: 'bottom-left',
  //         duration: 4000
  //       });
  //       localStorage.setItem('isVerified', true);
  //       // localStorage.removeItem('usernumber');
  //       // navigate('/login');
  //       submitNewPassReq()

  //     } else {
  //       setsecondsToResendOTP(0)
  //       toast({
  //         description: 'Invalid OTP!',
  //         status: 'error',
  //         isClosable: true,
  //         position: 'bottom-left',
  //         duration: 4000
  //       })
  //     }
  //   } catch (error) {
  //     toast({
  //       description: error.message,
  //       status: 'error',
  //       isClosable: true,
  //       position: 'bottom-left',
  //       duration: 4000
  //     })
  //   }
  // }
const resetfield = () => {
  setIsCodeSent(false)
  setInputCode('')
  setUserPassword('')
}
  const submitNewPassReq = async () => {
    setIsLoading(true)
    try {
      let data = {
        phone: phoneuser.phone,
        password: UserPassword,
        code : InputCode
      }
      console.log(data);
      let newPassReqRes = await POST(`${baseUrl}/users/resetPassword`, data);
      console.log(newPassReqRes);
      toast({
        description: `${newPassReqRes?.status === 'ok' ?  `Password change successfully` : String(newPassReqRes?.message).replace('_', ' ')}`,
        status: newPassReqRes.status === 'ok' ? 'success' : 'error',
        isClosable: true,
        position: 'bottom-right'
      });
    newPassReqRes.status === 'ok' ? navigate('/login') : newPassReqRes.message === 'same_password' ? setIsCodeSent(true) : resetfield()
    
    } catch (err) {
      toast({
        description: err,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right'
      })
    }
    setIsLoading(false)
  }

  return (
    <Box >
      <Container maxW={'8xl'}>
        <Stack py={'28'} direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Box textAlign={'center'} w={'full'}>
            <Heading
              as={'h6'}
              color={'primaryHeading.100'}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={'600'}
              textTransform={'uppercase'}
              mb={'15px'}
            >Welcome To Interloop</Heading>
            <Heading
              as={'h2'}
              color={'primaryBgDarkBlue.100'}
              fontWeight={'700'}
              fontSize={{ base: '32px', md: '42px' }}
              mb={'30px'}
            >Forgot Password</Heading>
          </Box>
          <Box
            boxShadow={'0px 0px 20px -15px #111'}
            border={'1px solid #eee'}
            borderRadius={'10px'}
            padding={{ base: '25px 15px', md: '50px 25px 30px' }}
            minW={{ base: '100%', sm: '90%', md: '80%', lg: '620px' }}
            mb={{ base: '45px', md: '35px' }}
          >
            {
              isCodeSent ?
                <>
                  <HStack w={'full'} mb={'4'} justifyContent={'center'}>
                    <Text color={'#666e82'} fontSize={{ base: '14px', md: '16px' }} >Enter the OTP sent on your number.</Text>
                  </HStack>
                  <FormControl isRequired textAlign={'center'} display={'flex'} flexDirection={'column'} alignItems={"center"} justifyContent={'center'}>

                    <FormLabel
                      htmlFor='OTP'
                      style={labelStyles}
                      fontSize={{ base: '15px', md: '17px' }}
                      paddingBottom={'5px'}
                    >
                      Enter OTP</FormLabel>
                    <HStack>
                      <PinInput
                        size={'lg'}
                        id='OTP'
                        style={inputStyles}
                        value={InputCode}
                        onChange={(e) => setInputCode(e)}
                      >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </HStack>

                    <Divider mt={'25px'} bgColor={'#000'} h={'1px'} />

                    <Box
                      w={'full'}
                      position={'relative'}
                    >
                      <FormLabel
                        mt={'25px'}
                        htmlFor='name'
                        textAlign={'left !important'}
                        style={labelStyles}
                        fontSize={{ base: '15px', md: '17px' }}
                      >
                        New Password</FormLabel>
                      <Input
                        id='name'
                       
                        placeholder='Password'
                        type={ViewPassword ? 'text' : 'password'}
                        value={UserPassword}
                        style={inputStyles}
                        onChange={(e) => { setUserPassword(e.target.value) }}
                      />
 <Button
                  position={'absolute'}
                  right={'0'}
                  top={'60%'}
              
                  bg={'transparent'}
                  zIndex={'1'}
                  padding={'0'}
                  h={'0'}
                  _hover={{
                    bg: 'transparent',
                  }}
                >
                  {ViewPassword ? (
                    <ViewIcon
                      w={4}
                      h={4}
                      cursor={'pointer'}
                      onClick={() => setViewPassword(false)}
                    />
                  ) : (
                    <ViewOffIcon
                      w={4}
                      h={4}
                      cursor={'pointer'}
                      onClick={() => setViewPassword(true)}
                    />
                  )}
                </Button>
                    

                    </Box>

                    <Stack direction={'row'} mb={'25px'} justify={{ base: 'center', md: 'flex-start' }} >
                      <Text color={'#666e82'} fontSize={{ base: '14px', md: '15px' }}> Resend OTP in</Text>
                      {
                        secondsToResendOTP > 0 ?
                          <Link fontSize={{ base: '14px', md: '15px' }} fontWeight={'bold'} color={'primaryHeading.100'} as={'a'} href='#'>{secondsToResendOTP} seconds</Link>
                          :
                          <Link fontSize={{ base: '14px', md: '15px' }} fontWeight={'bold'} color={'primaryHeading.100'} as={'button'} onClick={() => {
                            resendOTP()
                          }} >Resend</Link>
                      }
                    </Stack>

                    <Box w={'full'} onClick={() => submitNewPassReq()}>
                      <PrimaryBtn value='Submit' w={'full'} shadow={'#f79e22'} />
                    </Box>

                  </FormControl>
                </>
                :
                <FormControl isRequired>

                  <FormLabel
                    htmlFor='name'
                    style={labelStyles}
                    fontSize={{ base: '15px', md: '15px' }}
                    alignItems={'flex-end'}  display={'flex'} 
                  >
                    Phone Number<Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>(92)</Text></FormLabel>
                  <Input
                    id='name'
                    placeholder='92'
                    type='num'
                    maxLength={12}
                    value={UserPhone}
                    style={inputStyles}
                    onChange={(e) => { setUserPhone(e.target.value) }}
                  />

                  {
                    IsLoading ?
                      <Box w={'100%'} textAlign={'center'}>
                        <Spinner w={'25px'} color={'#f79e22'} />
                      </Box>
                      :
                      <Link onClick={() => { submitNumber() }}>
                        <PrimaryBtn value='Submit' w={'full'} shadow={'#f79e22'} />
                      </Link>
                  }

                </FormControl>
            }

          </Box>
          <HStack w={'full'} justify={'center'}>
            <Text color={'#666e82'} fontSize={{ base: '14px', md: '16px' }} >Doesn't have an account, <Link onClick={() => { navigate('/register') }} color={'primaryHeading.100'}>Create Here</Link></Text>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}
