import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/funds.png'
import FundNavBar from '../../components/NavBars/FundNavBar';
import AskedQuestions from '../../components/AskedQuestions/AskedQuestions';
import Mutualfunds from '../../components/Founds/Mutualfunds';


export default function Mutualfund() {
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

       <MiniBanner heading={'Mutual Funds'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
      
   </Stack>
   <FundNavBar/>
   <Mutualfunds/>
  
</Stack>
  )
}
