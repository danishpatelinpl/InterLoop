import React, { useEffect } from 'react'
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/main-r.png'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import { Stack } from '@chakra-ui/react';
import ContactUs from '../../components/Contact/ContactUs';
import MissionNavBar from '../../components/NavBars/MissionNavBar';
import Whychooseus from '../../components/WhyChooseUs/Whychooseus';

export default function WhyChooseUs() {
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

            <MiniBanner heading={'Why choose us'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
           
        </Stack>
        <MissionNavBar/>
        <Whychooseus/>
       
    </Stack>
  )
}
