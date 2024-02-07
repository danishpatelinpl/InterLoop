import { Box, Container, Heading, Icon, Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from '../../components/Banners/MiniBanner';
import BannerPic from '../../assets/images/secimgs/goals.png';
import { AiOutlineDownload } from 'react-icons/ai';
import Individuals from '../../assets/doc/AOFIndividualIAML.pdf'
import Institutions  from '../../assets/doc/AOFInstitutionalIAML.pdf'
 
export default function Accountopening() {
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
          heading={'Account Opening'}
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
                <Heading mb={4} fontSize={'23px'}>Account Opening Form for Individuals</Heading>
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
                  download={'Individuals'}
                  to={Individuals}
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
                <Heading mb={4} fontSize={'23px'}>Account Opening Form for Institutions</Heading>
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
                  to={Institutions}
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
                <Heading mb={4} fontSize={'23px'}>Account Upgrade Form</Heading>
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
                  to={'../../assets/doc/Doc1.docx'}
                >
                  Pending Download File{' '}
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
                <Heading mb={4} fontSize={'23px'}>Sahulat Sarmayakari Account Opening  Form</Heading>
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
                  to={'../../assets/doc/Doc1.docx'}
                >
                  Pending Download File{' '}
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
  );
}
