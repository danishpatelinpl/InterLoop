import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/invest.png'
import InvestNavBar from '../../components/NavBars/InvestNavBar';
import Mutualfundsbasic from '../../components/Howtoinvest/Mutualfundsbasic';



export default function DailyMarketOutlook() {
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

       <MiniBanner heading={'Daily Market Outlook'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
      
   </Stack>
   <InvestNavBar/>
   <Mutualfundsbasic/>
   <ContactUs/>
</Stack>
  )
}



