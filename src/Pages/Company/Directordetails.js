import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactUs from '../../components/Contact/ContactUs'
import WhoweareNavBar from "../../components/NavBars/WhoweareNavBar";
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import Bdirector from '../../assets/images/secimgs/director.png'
import Singledirector from '../../components/Boardofdirectors/Singledirector';
import { useLocation } from 'react-router-dom';

export default function Directordetails(props) {
  const location = useLocation();
  useEffect(() => {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }, []);
  return (
    <Stack>
      <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
      >

        <MiniBanner heading={'Director Detail'} bannerImage={Bdirector} imageSizePercentage={'50%'} />

      </Stack>
      <WhoweareNavBar />
      <Singledirector {...location.state} />
      <ContactUs />
    </Stack>
  )
}
