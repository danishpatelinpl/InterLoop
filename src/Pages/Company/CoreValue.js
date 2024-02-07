import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import Corebanner from '../../assets/images/secimgs/core.png'
import ContactUs from '../../components/Contact/ContactUs';
import MissionNavBar from '../../components/NavBars/MissionNavBar';
import Corevalue from '../../components/CoreValue/Corevalue';

export default function CoreValue() {
  
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

            <MiniBanner heading={'Core Value'} bannerImage={Corebanner} imageSizePercentage={'50%'} />
           
        </Stack>
        <MissionNavBar/>
        <Corevalue/>
      
    </Stack>
  )
}
