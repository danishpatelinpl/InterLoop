import React, { useEffect, useState } from 'react'
import { Container, Box, Stack, Heading, FormControl, FormLabel, Input, Button, HStack, Link, Checkbox, Text, Image, Tooltip } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import d01 from '../../assets/images/directors/d1.jpg';

export default function Login() {

  useEffect(() => {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }, [])


  const labelStyles = {
    cursor: 'pointer',
    fontWeight: '700',
    color: '#0d182b',
    mb: '20px'
  }

  const inputStyles = {
    border: '2px solid #e1e1e1',
    bg: 'white',
    fontSize: '14px',
    borderRadius: '0',
    margin: '0 0 30px 0',
    padding: '20px 10px',
  }

  const [ViewPassword, setViewPassword] = useState(false);

  return (
    <Box >
      <Container maxW={'8xl'}>
        <Stack py={'28'} direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Box textAlign={'center'} w={'full'}>

            <Heading
              as={'h2'}
              color={'primaryBgDarkBlue.100'}
              fontWeight={'700'}
              fontSize={{ base: '32px', md: '42px' }}
              mb={'30px'}
            >Account Details</Heading>
          </Box>
          <Box
            boxShadow={'0px 0px 20px -15px #111'}
            border={'1px solid #eee'}
            borderRadius={'10px'}
            padding={{ base: '25px 15px', md: '50px 25px 30px' }}
            minW={{ base: '100%', sm: '90%', md: '80%', lg: '820px' }}
            mb={{ base: '45px', md: '35px' }}
          >
            <FormControl isRequired>
              <Box >
                <Heading
                  as={'h2'}
                  color={'primaryBgDarkBlue.100'}
                  fontWeight={'700'}
                  fontSize={{ base: '20px', md: '25px' }}

                >Add Account Details</Heading>
                <Text color={'#666e82'} fontSize={{ base: '14px', md: '15px' }} >Provide your account info as per your CNIC</Text>
              </Box>
              <Stack py={'10'}>
                <Tooltip hasArrow label='Upload Profile' bg='#f79e22' color={"white"} borderRadius={4}>
                  <Button borderRadius={'50%'} p={'0'} overflow={'hidden'} w={'120px'} height={'120px'} border={'2px solid #f89e23'}>
                    <Image
                      alt={'d-1'}
                      src={d01}
                      w={'120px'}
                      objectFit={'cover'}
                    />
                  </Button>
                </Tooltip>
              </Stack>
              <HStack>
                <Box w={'100%'}>
                  <FormLabel
                    htmlFor='name'
                    style={labelStyles}
                    fontSize={{ base: '15px', md: '17px' }}
                  >
                    Full Name</FormLabel>
                  <Input
                    id='name'
                    placeholder='Your Name'
                    type={'text'}
                    style={inputStyles}
                  />
                </Box>
                <Box w={'100%'}>
                  <FormLabel
                    htmlFor='IdType'
                    style={labelStyles}
                    fontSize={{ base: '15px', md: '17px' }}
                  >
                    ID Type</FormLabel>
                  <Input
                    id='IdType'
                    placeholder='Id Type'
                    type={'text'}
                    style={inputStyles}
                  />
                </Box>

              </HStack>
              <HStack>
                <Box w={'100%'}>
                  <FormLabel
                    htmlFor='name'
                    style={labelStyles}
                    fontSize={{ base: '15px', md: '17px' }}
                  >
                    CNIC/NICOP Number*</FormLabel>
                  <Input
                    id='name'
                    placeholder='00000-0000-000'
                    type={'text'}
                    style={inputStyles}
                  />
                </Box>
                <Box w={'100%'}>
                  <FormLabel
                    htmlFor='IdType'
                    style={labelStyles}
                    fontSize={{ base: '15px', md: '17px' }}
                  >
                    Country</FormLabel>
                  <Input
                    id='IdType'
                    placeholder='Enter Country Name'
                    type={'text'}
                    style={inputStyles}
                  />
                </Box>

              </HStack>




              <PrimaryBtn value='Submit' w={'full'} shadow={'#f79e22'} />

            </FormControl>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}
