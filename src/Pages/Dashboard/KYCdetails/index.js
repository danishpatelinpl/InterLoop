import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn';
import KycForm from '../../../components/Dashboard/KYCForm/KycForm'
import KycForm2 from '../../../components/Dashboard/KYCForm/KycForm2';
import { updateKYC, updateTokens } from '../../../reducers/useReducer';
import MainDashboard from '../MainDashboard'
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { localUrl } from '../../../utils/Config';

export default function KYCdetails() {
  console.log("data", JSON.parse(localStorage.getItem('bank')))

  const dispatch = useDispatch();
  const userKyc = useSelector(state => state.kycData);
  const tokens = useSelector(state => state.tokens);
  const [kycLevel, setkycLevel] = useState(0);
  const user = useSelector(state => state.value);

  useEffect(() => {
    console.log(user)
    if (user?.kyc_level === 1) {
      setkycLevel(1)
    }
    // console.log(userKyc);
    if (Cookies.get('kycLevel1')) {
      dispatch(updateKYC(JSON.parse(Cookies.get('kycLevel1'))))
      // setkycLevel(1)
    }
  }, [userKyc])

  return (
    <>
      <MainDashboard>
        <Stack style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}  border={'1px solid #e1e1e1'} mb={'10'} p={'5'} borderRadius={'6'}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box mb={'4'} textAlign={'left'}>
              <Heading
                as={'h6'}

                color={'#0d182b'}
                fontSize={{ base: '16px', md: '36px' }}
                fontWeight={'bold'}
                textTransform={'capitalize'}

              >{`KYC Details Level ${kycLevel} `}</Heading>
              <Text
                fontSize={{ base: "12px", md: "14px" }}
                fontWeight={"400"}
                color={"#666e82"}
                mt={'0'}
                lineHeight={{ md: "24px", base: "20px" }}
              >Enter your details for us to create an investing account for you.</Text>
            </Box>
            <Box>
              {
                user?.kyc_level === 1 &&
                <Button
                  onClick={() => setkycLevel(kycLevel === 1 ? 0 : 1)}
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
                    transform: 'translateY(2px)'
                  }}
                >
                  Switch Form
                </Button>
              }
            </Box>
          
          </Stack>
          {
            kycLevel === 0 ?
              <KycForm setkycLevel={setkycLevel} />
              :
              <KycForm2 />
          }
        </Stack>
        <Box py={'4'}></Box>
      </MainDashboard>
    </>
  )
}
