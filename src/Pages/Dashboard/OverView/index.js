import { Container, Grid, GridItem, Stack } from '@chakra-ui/react';
import { useEffect, React, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import FundReviews from '../../../components/Dashboard/OverView/FundReviews/index.js';
import TotalFund from '../../../components/Dashboard/OverView/TotalFund/index.js';
import MyFunds from '../../../components/Dashboard/OverView/MyFunds/index.js';
import MainDashboard from '../MainDashboard/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { GET, POST } from '../../../utils/ApiRequestProvider.js';
import {
  updateFunds,
  updateRegisteredBanks,
  updateTokens,
  updateUserBankList,
} from '../../../reducers/useReducer.js';
import { baseUrl } from '../../../utils/Config.js';

export default function Index() {
  const [fund, setFund] = useState([]);
  const [userBanks, setuserBanks] = useState([]);
  const bank = useSelector(state => state.userBankList);
  const fundsFromReducer = useSelector(state => state.fundsList);
  const registeredBanksList = useSelector(state => state.registeredBanks);

  const user = useSelector(state => state.value);
  const tokens = useSelector(state => state.tokens);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setuserBanks(bank);
  }, [bank]);

  useEffect(() => {
    if (fundsFromReducer) {
      setFund(fundsFromReducer);
    } else {
      getFundsList();
    }
    if (!bank) {
      getBanksList();
    }
    if (!registeredBanksList) {
      getListOfRegisterdBanks();
    }
    getCdcToken();
  }, [user]);

  const getCdcToken = async () => {
    // let tokenRes = await GET(`${baseUrl}/api/cdc/getToken`, { token:  })
  };

  const getFundsList = async () => {
    let fundsResponse = await GET(`${baseUrl}/funds/getFunds`, {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    if (fundsResponse.message == 'unauthorized') {
      let newToken = await POST(`${baseUrl}/users/refresh`, {
        refresh_token: localStorage.getItem('refresh_token'),
      });
      // console.log(newToken);
      if (newToken.status == 'ok') {
        let fundsResponse = await GET(`${baseUrl}/funds/getFunds`, {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        });
        // console.log(fundsResponse);
        dispatch(updateTokens(newToken.data));
      }
    }
    console.log('fundsResponse', fundsResponse);
    setFund(fundsResponse?.data);
    dispatch(updateFunds(fundsResponse?.data));
  };

  // console.log("testing" + fund);

  const getBanksList = async () => {
    let bankListResponse = await GET(`${baseUrl}/banks/userBankAccountsList`, {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    console.log(bankListResponse);
    if (bankListResponse.message == 'unauthorized') {
      let newToken = await POST(`${baseUrl}/users/refresh`, {
        refresh_token: tokens?.refresh_token,
      });
      console.log(newToken);
      if (newToken.status == 'ok') {
        let bankListResponse = await GET(
          `${baseUrl}/funds/userBankAccountsList`,
          { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        );
        console.log(bankListResponse);
        dispatch(updateUserBankList(bankListResponse?.data));
        dispatch(updateTokens(newToken.data));
      }
    } else {
      console.log('was here');
      setuserBanks(bankListResponse?.data);
      dispatch(updateUserBankList(bankListResponse?.data));
    }
  };

  useEffect(() => {
    getListOfRegisterdBanks();
  }, []);

  const getListOfRegisterdBanks = async () => {
    let bankList = await GET(`${baseUrl}/banks/registeredBankList`, {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    console.log('saleem', bankList);
    if (bankList?.message == 'unauthorized') {
      let newToken = await POST(`${baseUrl}/users/refresh`, {
        refresh_token: localStorage.getItem('refresh_token'),
      });
      // console.log(newToken);
      if (newToken?.status == 'ok') {
        let bankList = await GET(`${baseUrl}/banks/registeredBankList`, {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        });
        // console.log(bankList);
        dispatch(updateRegisteredBanks(bankList?.data));
        dispatch(updateTokens(newToken?.data));
      }
      if (newToken?.message == 'session_not_found') {
        // toast({
        //   description: 'Session expired, please login again!',
        //   status: 'error',
        //   position: 'bottom-left',
        //   isClosable: true,
        //   duration: 4000
        // })
        // localStorage.setItem('user', null);
        // localStorage.clear();
        // Cookies.set('user', null)
        // Cookies.set('kycData', null)
        // Cookies.set('kycLevel1', null)
        // Cookies.set('kycLevel2', null)
        // dispatch(updateUser(null))
        // navigate('/')
      }
    } else {
      dispatch(updateRegisteredBanks(bankList?.data));
      // setRegisteredBanks(bankList?.data)
    }
  };

  return (
    <MainDashboard>
      <FundReviews />
      <Stack>
        <Container maxW={'full'} px={{ base: 0, '2xl': 0 }}>
          <Stack pb={{ base: '5', md: '14' }}>
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={{ base: 2, sm: 6 }}
              alignItems={'flex-start'}
            >
              <GridItem colSpan={{ base: '12', xl: '7' }}>
                <Stack
                  style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                  border={'1px solid #e1e1e1'}
                  p={'5'}
                  borderRadius={'6'}
                  pr={2}
                >
                  <TotalFund value={fund} userBanks={userBanks} />
                </Stack>
              </GridItem>
              <GridItem colSpan={{ base: '12', xl: '5' }}>
                <Stack
                  style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
                  border={'1px solid #e1e1e1'}
                  p={'5'}
                  borderRadius={'6'}
                  pr={2}
                >
                <MyFunds />
                </Stack>
              </GridItem>
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </MainDashboard>
  );
}
