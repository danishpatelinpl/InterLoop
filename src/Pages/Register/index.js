import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Stack,
  useToast,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Link,
  Checkbox,
  Text,
  RadioGroup,
  Radio,
  useBreakpointValue,
  Toast,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';
import { Link as ReactLink } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { AiOutlineCheck } from 'react-icons/ai';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import { GET, POST } from '../../utils/ApiRequestProvider';
import Cookies from 'js-cookie';
import { baseUrl } from '../../utils/Config';

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.getElementById('Footer').style.display = 'none';
  }, []);

  const labelStyles = {
    cursor: 'pointer',
    fontWeight: '700',
    color: '#0d182b',
    mb: '20px',
  };

  const inputStyles = {
    border: '2px solid #e1e1e1',
    bg: 'white',
    borderRadius: '0',
    margin: '0 0 10px 0',
    padding: '20px 10px',
  };

  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);

  const [UserName, setUserName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('92');
  const [Password, setPassword] = useState('');
  const [conformPassword, setconformPassword] = useState('');
  const [EnableNumField, setEnableNumField] = useState(false);
  const [EnablePassField, setEnablePassField] = useState(false);
  const [HasLower, setHasLower] = useState(false);
  const [HasOneNumber, setHasOneNumber] = useState(false);
  const [HasUpperCase, setHasUpperCase] = useState(false);
  const [LimitedChars, setLimitedChars] = useState(false);

  const [submitEnabled, setsubmitEnabled] = useState(false);
  const [Terms, setTerms] = useState(false);
  const [PhoneVerified, setPhoneVerified] = useState(false);
  const [ViewPassword, setViewPassword] = useState(false);
  const [conPassword, setconPassword] = useState(false);

  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      Submit();
    }
  };

  const Submit = async () => {
    setisLoading(true);
    try {
      // setting up data in a json format
      let data = {
        name: UserName,
        phone: `+${PhoneNumber}`,
        password: Password,
      };

      if (UserName && PhoneNumber && Password) {
        // var response = await POST(`${baseUrl}/users/register`, data)

        let code = Math.floor(100000 + Math.random() * 900000);
        Cookies.set('sessionValuation', code, { expires: 1 });
        localStorage.setItem('isVerified', false);
        // if (response.status == 'ok') {
        let smsResponse = await GET(
          `${baseUrl}/users/generateOtp?mobile=${PhoneNumber}`
        );
        if (smsResponse.status == 'Ok') {
          // console.log(smsResponse);
          toast({
            description: `OTP has been sent to your number`,
            status: 'success',
            isClosable: true,
            position: 'bottom-right',
          });
          localStorage.setItem('usernumber', PhoneNumber);
          navigate('/OTPVerification', { state: data });
          return;
        } else {
          toast({
            title: smsResponse.message,
            status: 'success',
            isClosable: true,
            position: 'bottom-right',
          });
          // }
        }

        // console.log(smsResponse);
        // if (smsResponse.Response === 'sent') {
        //     navigate('/OTPVerification');
        //     toast({
        //         title: `Registration Success, Enter OTP`,
        //         status: 'success',
        //         isClosable: true,
        //         position: 'bottom-left'
        //     })
        // } else {
        //     toast({
        //         title: `Something Went Wrong!`,
        //         status: 'error',
        //         isClosable: true,
        //         position: 'bottom-left'
        //     })
        // }
      }
      // toast({
      //     title: response.message,
      //     status: response.status,
      //     isClosable: true,
      //     position: 'bottom-left'
      // })
      // console.log(response);
    } catch (err) {
      toast({
        title: err.message,
        status: 'error',
        isClosable: true,
        position: 'bottom-right',
      });
    }
    setisLoading(false);
  };

  useEffect(() => {
    if (UserName.length >= 3) {
      setEnableNumField(true);
    } else {
      setEnableNumField(false);
      setEnablePassField(false);
    }
  }, [UserName]);

  useEffect(() => {
    if (PhoneNumber.length === 12) {
      if (String(PhoneNumber)[0] === '9') {
        setEnablePassField(true);
        setPhoneVerified(true);
      } else {
        setEnablePassField(false);
        setPhoneVerified(false);
      }
    } else {
      setEnablePassField(false);
      setPhoneVerified(false);
    }
  }, [PhoneNumber]);

  const checkLimit = () => {
    if (Password.length > 7 && Password.length < 17) {
      setLimitedChars(true);
    } else {
      setLimitedChars(false);
    }
  };

  const checkNumbers = () => {
    if (/\d/.test(Password)) {
      setHasOneNumber(true);
    } else {
      setHasOneNumber(false);
    }
  };

  const checkLowerCase = () => {
    if (/[a-z]+/.test(Password)) {
      setHasLower(true);
    } else {
      setHasLower(false);
    }
  };

  const checkUpperCase = () => {
    if (/[A-Z]+/.test(Password)) {
      setHasUpperCase(true);
    } else {
      setHasUpperCase(false);
    }
  };



  useEffect(() => {
    checkLimit();
    checkNumbers();
    checkLowerCase();
    checkUpperCase();
  }, [Password]);

  useEffect(() => {
    if (
      UserName.length >= 3 &&
      PhoneNumber &&
      Password &&
      HasLower &&
      HasOneNumber &&
      HasUpperCase &&
      LimitedChars
      &&
      Password === conformPassword 
     
    ) {
      setsubmitEnabled(true);
    } else {
      setsubmitEnabled(false);
    }
  }, [
    UserName,
    PhoneNumber,
    Password,
    HasLower,
    HasOneNumber,
    HasUpperCase,
    LimitedChars,
    Terms,
    Password,
    conformPassword
  ]);

  

  return (
    <Box>
      <Container maxW={'8xl'}>
        <Stack
          height={'auto'}
          direction={'column'}
          justifyContent={'flex-start'}
          pt={'50px'}
          pb={'60px'}
        >
          {/* Heading Box */}
          <Box
            pl={{ base: '0px', md: '25px', '2xl': '50px' }}
            w={'full'}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Heading
              as={'h6'}
              color={'primaryHeading.100'}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight={'600'}
              textTransform={'uppercase'}
              mb={'15px'}
            >
              WELCOME TO INTERLOOP ASSET MANAGEMENT LIMITED
            </Heading>
            <Heading
              as={'h2'}
              color={'primaryBgDarkBlue.100'}
              fontWeight={'700'}
              fontSize={{ base: '32px', md: '42px' }}
              mb={'30px'}
            >
              Create Your Account
            </Heading>
          </Box>
          {/* Heading Box */}

          <Stack w={'full'}>
            {/* first check */}
            <HStack
              alignItems={'center'}
              flexWrap={{ base: 'wrap', lg: 'initial' }}
              justifyContent={{ base: 'space-between', lg: 'flex-start' }}
            >
              <LeftSideHeading
                heading={'Full name'}
                subHeading={'Name as per CNIC'}
              />

              <Box
                position={'relative'}
                padding={'8px 0'}
                _before={useBreakpointValue({
                  base: {
                    content: '""',
                    position: 'absolute',
                    top: '0%',
                    left: '48.5%',
                    width: '2px',
                    height: '100%',
                    bgColor: '#666e82',
                    zIndex: '-1',
                  },
                  lg: {
                    content: '""',
                    position: 'absolute',
                    top: '-32%',
                    left: '47.5%',
                    width: '2px',
                    height: '200%',
                    bgColor: '#666e82',
                    zIndex: '-1',
                  },
                })}
                className={UserName.length >= 3 ? 'verified' : ''}
              >
                <Box bg={'white'} height={{ base: '48px', lg: '56px' }}>
                  {UserName.length >= 3 ? (
                    <Icon
                      fill={'#f79e22'}
                      borderColor={'#f79e22 !important'}
                      w={{ base: '12', lg: '14' }}
                      h={{ base: '12', lg: '14' }}
                      border={'2px solid #666e82'}
                      borderRadius={'100%'}
                      padding={'8px'}
                      as={AiOutlineCheck}
                    />
                  ) : (
                    <Text
                      fontSize={{ base: '24px', lg: '30px' }}
                      borderColor={'#666e82'}
                      w={{ base: '12', lg: '14' }}
                      h={{ base: '12', lg: '14' }}
                      border={'2px solid #666e82'}
                      borderRadius={'100%'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      1
                    </Text>
                  )}
                </Box>
              </Box>

              <Box
                padding={{ base: '0px', lg: '8px 25px' }}
                w={{ base: '100%', lg: '50%' }}
              >
                <FormControl isRequired>
                  <FormLabel
                    htmlFor="name"
                    style={labelStyles}
                    fontSize={{ base: '14px', md: '15px' }}
                  >
                    Username
                  </FormLabel>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    type={'text'}
                    style={inputStyles}
                    value={UserName}
                    fontSize={{ base: '14px', lg: '15px' }}
                    onChange={e => setUserName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            {/* first check */}

            {/* second check */}
            <HStack
              alignItems={'center'}
              flexWrap={{ base: 'wrap', lg: 'initial' }}
              justifyContent={{ base: 'space-between', lg: 'flex-start' }}
            >
              <LeftSideHeading
                heading={'Phone Number'}
                subHeading={'Enter Your Phone Number'}
              />

              <Box
                position={'relative'}
                padding={'8px 0'}
                _before={useBreakpointValue({
                  base: {
                    content: '""',
                    position: 'absolute',
                    top: '0%',
                    left: '48.5%',
                    width: '2px',
                    height: '100%',
                    bgColor: '#666e82',
                    zIndex: '-1',
                  },
                  lg: {
                    content: '""',
                    position: 'absolute',
                    top: '-32%',
                    left: '47.5%',
                    width: '2px',
                    height: '200%',
                    bgColor: '#666e82',
                    zIndex: '-1',
                  },
                })}
                className={PhoneVerified ? 'verified' : ''}
              >
                <Box bg={'white'} height={{ base: '48px', lg: '56px' }}>
                  {PhoneVerified ? (
                    <Icon
                      fill={'#f79e22'}
                      borderColor={'#f79e22 !important'}
                      w={{ base: '12', lg: '14' }}
                      h={{ base: '12', lg: '14' }}
                      border={'2px solid #666e82'}
                      borderRadius={'100%'}
                      padding={'8px'}
                      as={AiOutlineCheck}
                    />
                  ) : (
                    <Text
                      fontSize={{ base: '24px', lg: '30px' }}
                      borderColor={'#666e82'}
                      w={{ base: '12', lg: '14' }}
                      h={{ base: '12', lg: '14' }}
                      border={'2px solid #666e82'}
                      borderRadius={'100%'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      2
                    </Text>
                  )}
                </Box>
              </Box>

              <Box
                padding={{ base: '0px', lg: '8px 25px' }}
                w={{ base: '100%', lg: '50%' }}
              >
                <FormControl isRequired>
                  <FormLabel
                    alignItems={'flex-end'}
                    display={'flex'}
                    opacity={EnableNumField ? '1' : '0.5'}
                    htmlFor="phone"
                    style={labelStyles}
                    fontSize={{ base: '14px', md: '15px' }}
                  >
                    Phone{' '}
                    <Text
                      pl={2}
                      color={'red'}
                      fontSize={'16px'}
                      fontWeight={700}
                    >
                      (92)
                    </Text>
                  </FormLabel>
                  <Input
                    opacity={EnableNumField ? '1' : '0.5'}
                    cursor={EnableNumField ? 'text' : 'not-allowed'}
                    id="phone"
                    placeholder="92"
                    type={'tel'}
                    maxLength={12}
                    style={inputStyles}
                    readOnly={!EnableNumField}
                    value={PhoneNumber}
                    fontSize={{ base: '13px', lg: '14px' }}
                    onChange={e => setPhoneNumber(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            {/* second check */}

            {/* third check */}
            <HStack
              alignItems={'center'}
              flexWrap={{ base: 'wrap', lg: 'initial' }}
              justifyContent={{ base: 'space-between', lg: 'flex-start' }}
            >
              <LeftSideHeading
                heading={'Password'}
                subHeading={'Enter your Password'}
              />

              <Box
                position={'relative'}
                padding={'8px 0'}
                _before={useBreakpointValue({
                  base: {
                    content: '""',
                    position: 'absolute',
                    top: '0%',
                    left: '48.5%',
                    width: '2px',
                    height: '100%',
                    bgColor: '#666e82',
                    zIndex: '-1',
                  },
                  lg: {
                    content: '""',
                    position: 'absolute',
                    top: '-32%',
                    left: '47.5%',
                    width: '2px',
                    height: '200%',
                    bgColor: '#666e82',
                    zIndex: '-1',
                  },
                })}
                className={
                  LimitedChars && HasLower && HasUpperCase && HasOneNumber
                    ? 'verified'
                    : ''
                }
              >
                <Box bg={'white'} height={{ base: '48px', lg: '56px' }}>
                  {HasLower && HasOneNumber && HasUpperCase && LimitedChars ? (
                    <Icon
                      fill={'#f79e22'}
                      borderColor={'#f79e22 !important'}
                      w={{ base: '12', lg: '14' }}
                      h={{ base: '12', lg: '14' }}
                      border={'2px solid #666e82'}
                      borderRadius={'100%'}
                      padding={'8px'}
                      as={AiOutlineCheck}
                    />
                  ) : (
                    <Text
                      fontSize={{ base: '24px', lg: '30px' }}
                      borderColor={'#666e82'}
                      w={{ base: '12', lg: '14' }}
                      h={{ base: '12', lg: '14' }}
                      border={'2px solid #666e82'}
                      borderRadius={'100%'}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      3
                    </Text>
                  )}
                </Box>
              </Box>

              <Box
                padding={{ base: '0px', lg: '8px 25px' }}
                w={{ base: '100%', lg: '50%' }}
                position={'relative'}
              >
                <HStack>
                  <FormControl isRequired>
                    <FormLabel
                      opacity={EnablePassField ? '1' : '0.5'}
                      htmlFor="password"
                      style={labelStyles}
                      fontSize={{ base: '14px', md: '15px' }}
                    >
                      Password
                    </FormLabel>
                    <Box position={'relative'}>
                      <Input
                        onKeyDownCapture={handleKeyPress}
                        opacity={EnablePassField ? '1' : '0.5'}
                        cursor={EnablePassField ? 'text' : 'not-allowed'}
                        id="password"
                        placeholder="Your Password"
                        type={ViewPassword ? 'text' : 'password'}
                        style={inputStyles}
                        readOnly={!EnablePassField}
                        value={Password}
                        fontSize={{ base: '13px', lg: '14px' }}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <Button
                        position={'absolute'}
                        right={'0'}
                        top={'40%'}
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
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel
                      opacity={EnablePassField ? '1' : '0.5'}
                      htmlFor="password"
                      style={labelStyles}
                      fontSize={{ base: '14px', md: '15px' }}
                    >
                      Confirm Password
                    </FormLabel>
                    <Box position={'relative'}>
                      <Input
                        opacity={EnablePassField ? '1' : '0.5'}
                        cursor={EnablePassField ? 'text' : 'not-allowed'}
                        id="password"
                        placeholder="Your Password"
                        type={conPassword ? 'text' : 'password'}
                        style={inputStyles}
                        readOnly={!EnablePassField}
                        fontSize={{ base: '13px', lg: '14px' }}
                        onChange={e => setconformPassword(e.target.value)}
                      />
                      <Button
                        position={'absolute'}
                        right={'0'}
                        top={'40%'}
                        bg={'transparent'}
                        zIndex={'1'}
                        padding={'0'}
                        h={'0'}
                        _hover={{
                          bg: 'transparent',
                        }}
                      >
                        {conPassword ? (
                          <ViewIcon
                            w={4}
                            h={4}
                            cursor={'pointer'}
                            onClick={() => setconPassword(false)}
                          />
                        ) : (
                          <ViewOffIcon
                            w={4}
                            h={4}
                            cursor={'pointer'}
                            onClick={() => setconPassword(true)}
                          />
                        )}
                      </Button>
                    </Box>
                  </FormControl>
                </HStack>
                <Box
                  position={'absolute'}
                  pb={'60px'}
                  w={{ base: '100%', md: 'initial' }}
                >
                  <Text
                    color={'#666e82'}
                    fontSize={{ base: '13px', lg: '16px' }}
                    marginBottom={'10px'}
                  >
                    Password must contain:
                  </Text>
                  <Stack
                    color={'#000'}
                    className="customRadio"
                    spacing={4}
                    direction="row"
                    marginBottom={'10px'}
                  >
                    <Radio
                      isDisabled={!HasLower}
                      isChecked={HasLower}
                      id="lowerRadio"
                      colorScheme={'green'}
                      value="1"
                    >
                      Lower-case
                    </Radio>
                    <Radio
                      isDisabled={!HasUpperCase}
                      isChecked={HasUpperCase}
                      id="upperRadio"
                      value="3"
                      colorScheme={'green'}
                    >
                      Upper-case
                    </Radio>
                    <Radio
                      isDisabled={!LimitedChars}
                      isChecked={LimitedChars}
                      id="charRadio"
                      value="4"
                      colorScheme={'green'}
                    >
                      8-16 characters
                    </Radio>
                  </Stack>
                  <Stack
                    mb={'25px'}
                    color={'#000'}
                    className="customRadio"
                    spacing={4}
                    direction="row"
                  >
                    <Radio
                      isDisabled={!HasOneNumber}
                      isChecked={HasOneNumber}
                      id="oneRadio"
                      value="2"
                      colorScheme={'green'}
                    >
                      Atleast one number
                    </Radio>
                    <Radio
                      isDisabled={!LimitedChars}
                      isChecked={ Password === conformPassword && Password.length > 7}
                      id="charRadio"
                      value="4"
                      colorScheme={'green'}
                    >
                      Both Password mast be same
                    </Radio>
                  </Stack>
                  {/* <Stack direction={'row'} my={'25px'} justify={{ base: 'flex-start', md: 'flex-start' }} >
                                            <Checkbox colorScheme='yellow' color={'#666e82'} onChange={(e) => { setTerms(e.target.checked) }} >
                                                <Box fontSize={{ base: '14px', lg: '16px' }} as={'span'}>I agree to the</Box>
                                            </Checkbox>
                                            <Link position={'relative'} bottom={{ base: '-1.5px', lg: '0' }} fontSize={{ base: '14px', lg: '16px' }} color={'primaryHeading.100'} as={'a'} href='#'>Terms & Conditions</Link>
                                        </Stack> */}
                  <Link
                    onClick={() => {
                      Submit();
                    }}
                  >
                    <PrimaryBtn
                      isLoading={isLoading}
                      disabled={submitEnabled}
                      value="Submit"
                      w={'full'}
                      shadow={'#f79e22'}
                    />
                  </Link>
                </Box>
              </Box>
            </HStack>
            {/* third check */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export const LeftSideHeading = ({ heading, subHeading }) => {
  return (
    <Box
      textAlign={{ base: 'left', lg: 'right' }}
      padding={{ base: '10px', lg: '8px 25px' }}
      minW={{ base: '80%', lg: '230px', '2xl': '18%' }}
    >
      <Heading
        fontSize={{ base: '15px', lg: '19px' }}
        fontWeight={'600'}
        color={'primaryBgDarkBlue.100'}
      >
        {heading}
      </Heading>
      <Text fontSize={{ base: '12px', lg: '14px' }} color={'#666e82'}>
        {subHeading}
      </Text>
    </Box>
  );
};
