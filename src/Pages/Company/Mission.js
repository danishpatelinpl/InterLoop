import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import MissionPic from '../../assets/images/secimgs/mission.png'
import ContactUs from '../../components/Contact/ContactUs';
import MissionNavBar from '../../components/NavBars/MissionNavBar';
import WorldClassTab from '../../components/Mission/WorldClassTab';

export default function Mission() {

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

            <MiniBanner heading={'Mission & Vision'} bannerImage={MissionPic} imageSizePercentage={'50%'} />
           
        </Stack>
        <MissionNavBar/>
        <WorldClassTab/>
        
    </Stack>
  )
}
