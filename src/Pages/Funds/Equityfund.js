import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/main-r.png'
import FundNavBar from '../../components/NavBars/FundNavBar';
import AskedQuestions from '../../components/AskedQuestions/AskedQuestions';
import Mutualfunds from '../../components/Founds/Mutualfunds';
import EquityDetails from '../../components/Founds/EquityDetails';
import FundTabledetails from '../../components/Founds/FundTabledetails';



export default function Equityfund() {
  useEffect(() => {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }, [])
  return (
    <Stack>
    <Stack 
   bgImage={mainbackSvg}
   bgSize={'cover'}
   bgRepeat={'no-repeat'}
   bgAttachment={'fixed'}
   py={12}
   >

       <MiniBanner heading={'Equity fund'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
      
   </Stack>
   <FundNavBar/>
   <EquityDetails/>
   <FundTabledetails/>
   <Mutualfunds/>
  
</Stack>
  )
}
