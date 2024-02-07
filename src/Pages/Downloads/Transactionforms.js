import { Box, Container, Heading, Icon, Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from '../../components/Banners/MiniBanner';
import BannerPic from '../../assets/images/secimgs/goals.png';
import { AiOutlineDownload } from 'react-icons/ai';
import Conversion from '../../assets/doc/ConversionIAML.pdf'
import Investment from '../../assets/doc/InvestmentFormIAML.pdf'
import Redemption from '../../assets/doc/RedemptionFormIAML.pdf'

export default function Transactionforms() {
  return (
    <>
    <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
        py={12}
      >
        <MiniBanner
          textTransform={'capitalize'}
          heading={'Transaction Forms'}
          bannerImage={BannerPic}
          imageSizePercentage={'50%'}
        />
      </Stack>
      <Stack>
        <Container
          maxW={'8xl'}
          py={{ base: '6', md: '24' }}
          px={{ xl: 16, '2xl': 0 }}
        >
          <Stack gap={9}>
            <UnorderedList listStyleType={'none'} spacing={8}>
              <ListItem>
                <Heading mb={4} fontSize={'23px'}>Conversion forms for funds</Heading>
                <Link
                  bg={'#f79e22'}
                  display={'inline-block'}
                  padding={'10px 15px'}
                  boxShadow={`0px 15px 15px -15px`}
                  color={'#fff'}
                  borderRadius={'8px'}
                  _hover={{
                    bg: '#ffbb5c',
                    boxShadow: 'none',
                    transform: 'translateY(2px)',
                  }}
                  as={ReactLink}
                  target="_blank"
                  download
                  to={Conversion}
                >
                  Download File
                  <Icon
                    as={AiOutlineDownload}
                    verticalAlign={'middle'}
                    ml={4}
                    fontSize={'20px'}
                    color={'#fff'}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Heading mb={4} fontSize={'23px'}>Investment form</Heading>
                <Link
                  bg={'#f79e22'}
                  display={'inline-block'}
                  padding={'10px 15px'}
                  boxShadow={`0px 15px 15px -15px`}
                  color={'#fff'}
                  borderRadius={'8px'}
                  _hover={{
                    bg: '#ffbb5c',
                    boxShadow: 'none',
                    transform: 'translateY(2px)',
                  }}
                  as={ReactLink}
                  target="_blank"
                  download
                  to={Investment}
                >
                  Download File{' '}
                  <Icon
                    as={AiOutlineDownload}
                    verticalAlign={'middle'}
                    ml={4}
                    fontSize={'20px'}
                    color={'#fff'}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Heading mb={4} fontSize={'23px'}>Redemption Request Forms</Heading>
                <Link
                  bg={'#f79e22'}
                  display={'inline-block'}
                  padding={'10px 15px'}
                  boxShadow={`0px 15px 15px -15px`}
                  color={'#fff'}
                  borderRadius={'8px'}
                  _hover={{
                    bg: '#ffbb5c',
                    boxShadow: 'none',
                    transform: 'translateY(2px)',
                  }}
                  as={ReactLink}
                  target="_blank"
                  download
                  to={Redemption}
                >
                  Download File
                  <Icon
                    as={AiOutlineDownload}
                    verticalAlign={'middle'}
                    ml={4}
                    fontSize={'20px'}
                    color={'#fff'}
                  />
                </Link>
              </ListItem>
             
            </UnorderedList>
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
