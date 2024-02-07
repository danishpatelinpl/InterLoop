import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MiniBanner from '../../components/Banners/MiniBanner'
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import BannerPic from '../../assets/images/secimgs/main-r.png'
import HelpNavBar from '../../components/NavBars/HelpNavBar';
import AskedQuestions from '../../components/AskedQuestions/AskedQuestions';

export default function Faqs() {
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

       <MiniBanner heading={'faqs'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
      
   </Stack>
   <HelpNavBar/>
   <AskedQuestions/>
    </Stack>
  )
}
