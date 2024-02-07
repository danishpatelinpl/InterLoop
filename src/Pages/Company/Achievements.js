import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import MissionNavBar from '../../components/NavBars/MissionNavBar'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/Achievement.png'
import Achievement from '../../components/Achievements/Achievement';

export default function Achievements() {

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

            <MiniBanner heading={'Achievements'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
           
        </Stack>
        <MissionNavBar/>
        <Achievement/>
        <ContactUs/>
    </Stack>
  )
}
