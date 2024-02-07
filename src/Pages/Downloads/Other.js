import { Box, Container, Heading, Icon, Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import React from 'react';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import MiniBanner from '../../components/Banners/MiniBanner';
import BannerPic from '../../assets/images/secimgs/goals.png';
import { AiOutlineDownload } from 'react-icons/ai';
import CRS from '../../assets/doc/CRS-1.pdf';
import Corporate from '../../assets/doc/CorporateCRS.pdf';
import KYCRAICA from '../../assets/doc/KYC.pdf';
import RiskProfiling from '../../assets/doc/RiskValidation&MismatchformIAML.PDF';
import RiskQuestionnaire from '../../assets/doc/RPQ.pdf';
import SpecialInstruction from '../../assets/doc/SpecialInstructionFormIAML.pdf';



export default function Other() {
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
          heading={'Other Forms'}
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
                <Heading mb={4} fontSize={'23px'}>Auto debit form BAHL</Heading>
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
                <Heading mb={4} fontSize={'23px'}>CDS UNH form</Heading>
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
                <Heading mb={4} fontSize={'23px'}>CRS 1</Heading>
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
                  to={CRS}
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
                <Heading mb={4} fontSize={'23px'}> Corporate CRS</Heading>
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
                  to={Corporate}
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
                <Heading mb={4} fontSize={'23px'}>Form W9</Heading>
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
                <Heading mb={4} fontSize={'23px'}>KYC & RAICA form for single person</Heading>
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
                  to={KYCRAICA}
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
                <Heading mb={4} fontSize={'23px'}>KYC & RAICA form for Joint holders</Heading>
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
                <Heading mb={4} fontSize={'23px'}>KYC for institutional investors</Heading>
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
                <Heading mb={4} fontSize={'23px'}>Plede Form G1</Heading>
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
                <Heading mb={4} fontSize={'23px'}>Risk Profiling form</Heading>
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
                  to={RiskProfiling}
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
                <Heading mb={4} fontSize={'23px'}>Risk Profiling Questionnaire</Heading>
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
                  to={RiskQuestionnaire}
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
                <Heading mb={4} fontSize={'23px'}>Special Instruction Form</Heading>
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
                  to={SpecialInstruction}
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
                <Heading mb={4} fontSize={'23px'}>Systematic investment plan subscription form</Heading>
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
                <Heading mb={4} fontSize={'23px'}>Transfer form F1 general </Heading>
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
                <Heading mb={4} fontSize={'23px'}>Transmission & merger (form J1)</Heading>
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
                <Heading mb={4} fontSize={'23px'}>W-8BEN-E (for corporate)</Heading>
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
                <Heading mb={4} fontSize={'23px'}>W-8BEN</Heading>
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
  )
}
