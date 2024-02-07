import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import HelpFields from '../Help/HelpFields'
import MainDashboard from '../MainDashboard'
import AccountDetails from './AccountDetails'
import ChangePassword from './ChangePassword'
import Notifications from './Notifications'
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlinePrinter } from 'react-icons/ai'
import { FaEnvelope, FaMapMarked,FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddBank from './AddBank'

export default function UserProfile() {

  const user = useSelector(state => state?.value);

  return (
    <>
      <MainDashboard>
        <Stack gap={6} pb={8}>
          <AccountDetails />
          {/* <ChangePassword /> */}
          <AddBank />
          {/* <Notifications /> */}
          <Stack
            direction={'row'}
            alignItems={'flex-start'}
            justifyContent={'space-between'}
            py={8}
            px={6}
            boxShadow={'0px 0px 26px -10px #bdbdbd'}
          >
            {/* <Box
              w={'48%'}
            >
              <HelpFields />
            </Box> */}
            <Box
              w={'100%'}
            >
              <Stack
                direction={'row'}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
              >
                <Box w={'48%'}>
                  <Heading
                    fontSize={{ base: 18, md: 26 }}
                    pb={6}
                  >Interloop Karachi</Heading>
                  <List listStyleType={'none'}>
                    <ListItem
                      pb={4}
                    >
                      <Link to="#">
                      <ListIcon as={FaWhatsapp} color='black' />
                      0320 1114265
                      </Link>
                    </ListItem>
                    <ListItem
                      pb={4}
                    >
                      <Link to="#">
                      <ListIcon as={FiPhoneCall} color='black' />
                      UAN : 021-111-114265
                      </Link>
                    </ListItem>
                    <ListItem
                      pb={4}
                    >
                      <Link to="#">
                      <ListIcon as={FaMapMarked} color='black' />
                      Suite 205 2nd Floor | The Forum Clifton Block 9 | Khayaban-e-Roomi | Karachi
                      </Link>
                    </ListItem>
                    <ListItem
                      pb={4}
                    >
                      <Link to="#">
                      <ListIcon as={FaEnvelope} color='black' />
                      cs@iaml.com.pk
                      </Link>
                    </ListItem>
                  </List>
                </Box>
                {/* <Box w={'48%'}>
                  <Heading
                    fontSize={{ base: 18, md: 26 }}
                    pb={6}
                  >Interloop Islamabad</Heading>
                  <List listStyleType={'none'}>
                    <ListItem
                      pb={4}
                    >
                      <Link to="#">
                      <ListIcon as={FiPhoneCall} color='black' />
                      +92-32-01114265
                      </Link>
                    </ListItem>
                    <ListItem
                      pb={4}
                    >
                      <Link to="#">
                      <ListIcon as={FaMapMarked} color='black' />
                      Plot No 29 | Street No 40 | G 10/4 | Islamabad
                      </Link>
                    </ListItem>
                    <ListItem
                      pb={4}
                    >
                      <Link to="#">
                      <ListIcon as={FaEnvelope} color='black' />
                      cs@iaml.com.pk
                      </Link>
                    </ListItem>
                  </List>
                </Box> */}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  )
}
