import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import Bdirector from '../../assets/images/secimgs/director.png'
import WhoweareNavBar from '../../components/NavBars/WhoweareNavBar';
import BoardOfdirector from '../../components/Boardofdirectors'


export default function BoardOfdirectors() {

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

            <MiniBanner heading={'Board Of Directors'} bannerImage={Bdirector} imageSizePercentage={'50%'} />
           
        </Stack>
        <WhoweareNavBar/>
        <BoardOfdirector/>
        
    </Stack>
  )
}
