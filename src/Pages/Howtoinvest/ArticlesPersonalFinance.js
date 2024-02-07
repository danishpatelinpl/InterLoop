import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/main-r.png'
import InvestNavBar from '../../components/NavBars/InvestNavBar';
import Articlespersonalfinance from '../../components/Howtoinvest/Articlespersonalfinance';



export default function ArticlesPersonalFinance() {
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

       <MiniBanner heading={'Articles Finance'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
      
   </Stack>
   <InvestNavBar/>
   <Articlespersonalfinance/>
   <ContactUs/>
</Stack>
  )
}

