import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/main-r.png'
import InvestNavBar from '../../components/NavBars/InvestNavBar';
import Calculatorform from '../../components/Calculator/Calculatorform';



export default function Calculator() {
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

       <MiniBanner heading={'Calculator'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
      
   </Stack>
   <InvestNavBar/>
  <Calculatorform/>
   <ContactUs/>
</Stack>
  )
}

