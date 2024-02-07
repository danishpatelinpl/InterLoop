import { Stack } from "@chakra-ui/react";
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/goals.png'
import WhoweareNavBar from "../../components/NavBars/WhoweareNavBar";
import { useLocation } from 'react-router';
import { useEffect } from "react";
import Whoweare from "../../components/Whoweare/Whoweare";
import ContactUs from "../../components/Contact/ContactUs";


export default function WhoWeAre() {

  const location = useLocation();
  
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

            <MiniBanner heading={'Who We are'} bannerImage={BannerPic} imageSizePercentage={'50%'} />
           
        </Stack>  
        <WhoweareNavBar/>
        <Whoweare/>
        <ContactUs/>
    </Stack>
  )
}
