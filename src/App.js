import React, { useEffect } from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import RoutesMaster from './Routes';
import "./assets/css/app.css";
import { updateKYC, updateKYC2, updateTokens, updateUser ,updateRegisteredBanks} from './reducers/useReducer';
import { useDispatch } from 'react-redux';
import {RefreshToken, refreshToken} from "../src/utils/ApiRequestProvider";
import Cookies from 'js-cookie'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  primaryHeading:{
    100:'#f79e22',
  },
  primaryText:{
    100:'#cccccc',
    200:'#7a7f83',
    300:'#808080',
    400:'#666e82'
  },
  primaryBgDarkBlue:{
    100:'#0d182b'
  },
}

const theme = extendTheme({ colors })

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async()=>{
      if(localStorage.getItem('user') !== null){
        let user = JSON.parse(localStorage.getItem('user') ?? '{}')
        dispatch(updateUser(user))
        let tokens = {
          access_token: user?.access_token,
          refresh_token: user?.refresh_token
        }
        dispatch(updateTokens(tokens))
        let kycData = JSON.parse(localStorage.getItem('kycData') ?? '{}')
        dispatch(updateKYC(kycData))
      }else if(Cookies.get('user') !== undefined){
        let user = JSON.parse(Cookies.get('user') ?? '{}')
        dispatch(updateUser(user))
        let kycData = JSON.parse(Cookies.get('kycData') ?? '{}')
        dispatch(updateKYC(kycData))
        let kycData2 = JSON.parse(Cookies.get('kycData2') ?? '{}')
        dispatch(updateKYC2(kycData2))
     dispatch(updateRegisteredBanks(JSON.parse(localStorage.getItem('bank'))) );
      }

    })()
  }, []);

  const refreshAccessToken = async () => {
    try {
      await refreshToken(); // Call the refreshToken function
    } catch (error) {
      // Handle any errors, e.g., log the user out
      console.error('Unable to refresh token:', error);
    }
  };

  useEffect(() => {
    const refreshTokenInterval = setInterval(refreshAccessToken, 120000);
    return () => clearInterval(refreshTokenInterval);
  }, []);
  
  return (
    <ChakraProvider theme={theme}>
      <RoutesMaster />
    </ChakraProvider>
  );
}

export default App;
