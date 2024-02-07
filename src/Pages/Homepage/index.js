import { Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import MainBanner from '../../components/Heros/MainBanner';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import HowitWork from '../../components/Howitwork/HowitWork';
import LatestNews from '../../components/LatestNews';
import Counter from '../../components/Counter/Counter';
import InvestmentFound from '../../components/Founds/InvestmentFound';
import AskedQuestions from '../../components/AskedQuestions/AskedQuestions';
import CounterCts from '../../components/Counter/CounterCts';
import Digitalaccount from '../../components/Digitalacount';
import { refreshToken} from "../../../src/utils/ApiRequestProvider";
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie'
import axios from "axios";
import { baseUrl } from '../../utils/Config';
import { updateUser } from '../../reducers/useReducer';
import { useNavigate } from 'react-router';

export default function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const user = useSelector(state => state.value)
useEffect(() => {
console.log('user' ,user);
if(user){
  (async()=>{
    try {
      const response = await axios.post(`${baseUrl}/users/refresh`,{ refresh_token: localStorage.getItem('refresh_token') },);
      console.log('dd',response);
      if(response?.data?.message === "session_not_found" )
      {
        localStorage.setItem('user', null);
              Cookies.set('user', null);
              Cookies.set('kycData', null);
              localStorage.clear();
              Cookies.set('kycLevel1', null);
              Cookies.set('kycLevel2', null);
              dispatch(updateUser(null));
              navigate('/');
      }
      else
      {
        const newAccessToken = response.data.data.access_token;
        const newRefreshToken = response.data.data.refresh_token;
        console.log('api provier access token ',response);
        localStorage.setItem('access_token', newAccessToken);
        localStorage.setItem('refresh_token', newRefreshToken);
      
      }
     
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  })()
}
}, [user])


  useEffect(() => {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }, [])

  return (
    <Stack>
      <Stack
      bg={'#fff'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}
        position={'relative'}
        zIndex={0}
      >
        <MainBanner />
      </Stack>
      <HowitWork />
      {/* <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
      >
        <Counter />
        <CounterCts />
      </Stack> */}
      <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
      >
      <Digitalaccount/>
      <CounterCts />
      </Stack>
      <InvestmentFound />
      {/* <AskedQuestions /> */}
      {/* <LatestNews /> */}
    </Stack>
  );
}

