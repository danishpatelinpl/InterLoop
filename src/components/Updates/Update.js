import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'
import NewsImage from '../../assets/images/news image/news.jpg'
import { Link as ReactLink } from 'react-router-dom'

export default function Update() {
  return (
    <Link as={ReactLink} to='/' w={{base:'48%', md:'31%', lg:'22%'}} borderRadius={'12px !important'}>
        <Box
            boxShadow={'lg'} 
            transition={'.3s'}
            _hover={{
                boxShadow:'base',
                transform:'translateY(-2px)'
            }}
        >
            <Box>
                <Image w={'100%'} alt='news image' src={NewsImage} />
            </Box>
            <Box paddingY={'25px'} paddingX={'15px'}>
                <Heading as={'h5'} mb={{base:'5px',md:'15px'}} fontSize={{base:'16px',md:'23px'}} lineHeight={'1.5'} fontWeight={'700'} color={'primaryBgDarkBlue.100'}>The purpose of lorem looking block.</Heading>
                <Text color={'primaryHeading.100'} fontWeight={'600'} fontSize={{base:'12px',md:'14px'}}>January 22, 2021</Text>
            </Box>
        </Box>
    </Link>
  )
}