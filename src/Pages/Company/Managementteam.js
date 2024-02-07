import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import Bdirector from '../../assets/images/secimgs/director.png'
import WhoweareNavBar from '../../components/NavBars/WhoweareNavBar';
import Managementteams from '../../components/Managementteams';

export default function Managementteam() {
  return (
    <>
    <Stack>
          <Stack 
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
        >

            <MiniBanner heading={'Management Team'} bannerImage={Bdirector} imageSizePercentage={'50%'} />
           
        </Stack>
        <WhoweareNavBar/>
       <Managementteams/>
        
    </Stack>
    </>
  )
}
