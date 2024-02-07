import { Stack } from "@chakra-ui/react";
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from "../../components/Banners/MiniBanner";
import BannerPic from '../../assets/images/secimgs/main-r.png'
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }, [])


  return (
    <>
      <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
      >

        <MiniBanner heading={'About Us'} bannerImage={BannerPic} imageSizePercentage={'50%'} />

      </Stack>
    </>
  )
}
