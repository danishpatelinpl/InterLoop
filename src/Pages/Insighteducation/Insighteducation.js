import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/invest.png'
import EduNav from '../../components/NavBars/EduNav';
import HowitWork from '../../components/Howitwork/HowitWork';
import Howtoinvestcontent from '../../components/Howtoinvest/Howtoinvestcontent';

export default function Insighteducation() {

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

       <MiniBanner heading={'Insight & Education'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
      
   </Stack>
   <EduNav/>
  
  <Howtoinvestcontent/>
   <ContactUs/>
</Stack>
  )
}
