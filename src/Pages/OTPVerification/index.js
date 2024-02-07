import React, { useEffect, useState } from 'react'
import { Container, Box, Stack, Heading, FormControl, FormLabel, Input, Button, HStack, Link, Checkbox, Text, Toast, useToast } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import { Link as ReactLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { PinInput, PinInputField } from '@chakra-ui/react'
import { baseUrl } from '../../utils/Config';
import { GET, POST } from '../../utils/ApiRequestProvider';

export default function Login() {

  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  useEffect(() => {
    document.getElementById('Footer').style.display = 'none';
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

  const [InputCode, setInputCode] = useState('');
  const [otpCodeFromCookies, setotpCodeFromCookies] = useState('');
  const [secondsToResendOTP, setsecondsToResendOTP] = useState(60);
  const [startTime, setStartTime] = useState(true);
  const [number, setNumber] = useState('');
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    // console.log(InputCode);
  }, [InputCode])

  useEffect(() => {
    if (startTime) {
      if (secondsToResendOTP !== 0 && startTime) {
        setTimeout(() => {
          setsecondsToResendOTP(secondsToResendOTP - 1)
        }, 1000);
      }
    } else {
      setsecondsToResendOTP(0)
    }
  }, [secondsToResendOTP])


  useEffect(() => {
    setotpCodeFromCookies(Cookies.get('sessionValuation'));
    setNumber(localStorage.getItem('usernumber'));
  }, []);

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      CheckCode();
    }
  }

  // const [ViewPassword, setViewPassword] = useState(false);
  const CheckCode = async () => {
    setisLoading(true);

    if (number) {
      try {
        const res = await GET(`${baseUrl}/users/verifyOtp?mobile=${number}&otp=${InputCode}`);
        if (res.status == 'Ok') {
          toast({
            description: 'OTP Verified!',
            status: 'success',
            isClosable: true,
            position: 'bottom-right',
            duration: 4000
          });
          console.log(location.state)
          var response = await POST(`${baseUrl}/users/register`, location.state)
          console.log(response)
          if (response.status === 'ok') {
            toast({
              description: 'User Registered Successfully',
              status: 'success',
              isClosable: true,
              position: 'bottom-right',
              duration: 4000
            });
            navigate('/login');
            localStorage.setItem('isVerified', true);
            localStorage.removeItem('usernumber');
          } else {
            navigate('/register');
            toast({
              description: 'User Already Exist!',
              status: 'error',
              isClosable: true,
              position: 'bottom-right',
              duration: 4000
            });
          }
        } else {
          setStartTime(false)
          // setsecondsToResendOTP(1)
          toast({
            description: 'Invalid OTP!',
            status: 'error',
            isClosable: true,
            position: 'bottom-right',
            duration: 4000
          })
        }
      } catch (error) {
        toast({
          description: error.message,
          status: 'error',
          isClosable: true,
          position: 'bottom-right',
          duration: 4000
        })
      }
    }
    setisLoading(false);

  }

  const resendOTP = async () => {
    let smsResponse = await GET(`${baseUrl}/users/generateOtp?mobile=${number}`);
    if (smsResponse.status == 'Ok') {
      // console.log(smsResponse);
      toast({
        description: `OTP resend!`,
        status: 'success',
        isClosable: true,
        position: 'bottom-right'
      });
      setsecondsToResendOTP(60)
      setStartTime(true)
      setInputCode('')
      return;
    }
  }

  return (
    <Box>
      <Container maxW={'8xl'}>
        <Stack height={'84vh'} direction={'column'} alignItems={'center'} justifyContent={'center'}>
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
            >Verify Mobile Number</Heading>
          </Box>
          <Box
            boxShadow={'0px 0px 20px -15px #111'}
            border={'1px solid #eee'}
            borderRadius={'10px'}
            padding={{ base: '25px 15px', md: '50px 25px 30px' }}
            minW={{ base: '100%', sm: '90%', md: '80%', lg: '620px' }}
            mb={{ base: '45px', md: '35px' }}
          >
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
                  onKeyDownCapture={handleKeyPress}
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
                  <PinInputField 
                  onKeyDownCapture={handleKeyPress}
                  
                  />
                </PinInput>
              </HStack>



              <Stack paddingTop={'15px'} direction={'row'} mb={'25px'} justify={{ base: 'center', md: 'flex-start' }} >
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

              <Box onClick={() => CheckCode()}>
                <PrimaryBtn  isLoading={isLoading}  value='Submit' w={'full'} shadow={'#f79e22'} />
              </Box>

            </FormControl>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}







