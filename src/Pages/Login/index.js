import React, { useEffect, useState } from 'react';
import {
  Spinner,
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
  Toast,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import { GET, POST } from '../../utils/ApiRequestProvider';
import { updateKYC, updateTokens, updateUser } from '../../reducers/useReducer';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { baseUrl } from '../../utils/Config';

export default function Login() {
  const user = useSelector(state => state.value);
  const [IsLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }, []);

  useEffect(() => {
    // console.log(user);

    if (user === undefined || user === null) {
      navigate('/login');
    } else {
      navigate('/dashboard/OverView');
    }
  }, [user]);

  const labelStyles = {
    cursor: 'pointer',
    fontWeight: '700',
    color: '#0d182b',
    mb: '20px',
  };

  const inputStyles = {
    border: '2px solid #e1e1e1',
    bg: 'white',
    fontSize: '14px',
    borderRadius: '0',
    margin: '0 0 30px 0',
    padding: '20px 10px',
  };

  const toast = useToast();

  const [ViewPassword, setViewPassword] = useState(false);
  const [UserPhone, setUserPhone] = useState('92');
  const [UserPassword, setUserPassword] = useState('');

 

 const getUserData = async (accessToken, refreshToken) => {
    let data = await GET(`${baseUrl}/users/getUserDetail`, {
      Authorization: `Bearer ${accessToken}`,
    });

    let fetchedData = data?.data;
    fetchedData.access_token = accessToken;
    fetchedData.refresh_token = refreshToken;

    let tokens = {
      access_token: fetchedData.access_token,
      refresh_token: fetchedData.refresh_token,
    };

    toast({
      title: `Login Success`,
      status: 'success',
      isClosable: true,
      position: 'bottom-right',
    });

    dispatch(updateUser(fetchedData));
    // dispatch(updateKYC(kycData.data.data))
    dispatch(updateTokens(tokens));
    localStorage.setItem('user', JSON.stringify(fetchedData));

    setIsLoading(false);
  };

  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      Submit();
    }
  };

  const Submit = async () => {
    setIsLoading(true);

    let data = {
      phone: `+${UserPhone}`,
      password: UserPassword,
    };

    // if (localStorage.getItem('isVerified') === false) {
    //   toast({
    //     title: `Unverified User, Please Enter OTP!`,
    //     status: 'error',
    //     isClosable: true,
    //     position: 'bottom-left'
    //   });
    //   navigate('/OTPVerification');
    //   return
    // }

    let response = await POST(`${baseUrl}/users/login`, data);

    console.log('response', response);

    if (response.status === 'ok') {
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      getUserData(response.data.access_token, response.data.refresh_token);
    } else {
      toast({
        title: String(response?.message).replace('_', ' '),
        status: response.status,
        isClosable: true,
        position: 'bottom-right',
      });
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Container maxW={'8xl'}>
        <Stack
          py={'28'}
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box textAlign={'center'} w={'full'}>
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
              Login
            </Heading>
          </Box>
          <Box
            boxShadow={'0px 0px 20px -15px #111'}
            border={'1px solid #eee'}
            borderRadius={'10px'}
            padding={{ base: '25px 15px', md: '50px 25px 30px' }}
            minW={{ base: '100%', sm: '90%', md: '80%', lg: '620px' }}
            mb={{ base: '45px', md: '35px' }}
          >
            <FormControl isRequired>
              <FormLabel
               alignItems={'flex-end'}
               display={'flex'}
                htmlFor="name"
                style={labelStyles}
                fontSize={{ base: '15px', md: '15px' }}
              >
                Phone Number{' '}
                <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>
                  (92)
                </Text>
              </FormLabel>
              <Input
                id="name"
                maxLength={12}
                placeholder='92'
                type={'tel'}
                value={UserPhone}
                style={inputStyles}
                onChange={e => {
                  setUserPhone(e.target.value);
                }}
              />

              <FormLabel
                htmlFor="password"
                style={labelStyles}
                fontSize={{ base: '15px', md: '15px' }}
              >
                Password
              </FormLabel>
              <Box position={'relative'}>
                <Input
                  onKeyDownCapture={handleKeyPress}
                  // onKeyDown={handleKeyPress}
                  id="password"
                  placeholder="Your Password"
                  type={ViewPassword ? 'text' : 'password'}
                  style={inputStyles}
                  value={UserPassword}
                  onChange={e => {
                    setUserPassword(e.target.value);
                  }}
                  mb={{ base: '15px !important', md: '10px !important' }}
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

              <HStack py={'4'} justify={{ base: 'center', md: 'flex-end' }}>
                <Link
                  as={ReactLink}
                  to="/forgotPass"
                  color={'primaryHeading.100'}
                  fontSize={'14px'}
                >
                  Forgot Password
                </Link>
              </HStack>

              {IsLoading ? (
                <Box w={'100%'} textAlign={'center'}>
                  <Spinner w={'25px'} color={'#f79e22'} />
                </Box>
              ) : (
                <Link
                  onClick={() => {
                    Submit();
                  }}
                >
                  <PrimaryBtn value="Submit" w={'full'} shadow={'#f79e22'} />
                </Link>
              )}
            </FormControl>
          </Box>
          <HStack w={'full'} justify={'center'}>
            <Text color={'#666e82'} fontSize={{ base: '14px', md: '16px' }}>
              Don't have an account,{' '}
              <Link
                onClick={() => {
                  navigate('/register');
                }}
                color={'primaryHeading.100'}
              >
                Create Here
              </Link>
            </Text>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}


