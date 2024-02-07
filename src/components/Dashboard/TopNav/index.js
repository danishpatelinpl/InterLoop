import {
  Avatar,
  Button,
  ListItem,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Text,
  UnorderedList,
  MenuButton,
  Box,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { FiRefreshCw } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import './TopNav.css';
import LoggedInPic from '../../LoggedInPic';
import { Icon } from '@chakra-ui/icons';
import { GET } from '../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../utils/Config';
import { useDispatch } from 'react-redux';
import { updateTokens, updateUser } from '../../../reducers/useReducer';

export default function TopNav() {
  const dispatch = useDispatch();
  const toast = useToast();
  const user = useSelector(state => state);
  const [isLoading, setisLoading] = useState(false);
  const [isNavShowed, setisNavShowed] = useState(false);
  const [navItems] = useState([
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Company',
      url: '/company/who-we-are',
    },
    {
      name: 'Funds',
      url: '/Funds/Mutualfund',
    },
    {
      name: 'How to Invest',
      url: '/Howtoinvest/HowToInvest',
    },
    {
      name: 'Downloads',
      url: '/Downloads',
    },
    {
      name: 'Investor Education',
      url: '/Howtoinvest/MutualFundsBasic',
    },
  ]);

  const getUserData = async () => {
    setisLoading(true);
    let data = await GET(`${baseUrl}/users/getUserDetail`, {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    console.log('hit', data.data);

    if (data.status === 'ok') {
      toast({
        description: 'Data Updated Successfully',
        status: 'success',
        isClosable: true,
        position: 'bottom-right',
      });
    }

    dispatch(updateUser(data.data));

    localStorage.setItem('user', JSON.stringify(data.data));
    setisLoading(false);
  };

  return (
    <Stack
      position={'relative'}
      mb={'6'}
      border={'1px solid #e1e1e1'}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'flex-end'}
      bg={'white'}
      style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
      borderRadius={7}
      mt={4}
      px={3}
      pl={6}
    >
      <Stack w={'full'}>
        <Button
         bg={'#f79e22'}
         color={'#535353'}
          isLoading={isLoading}
          marginLeft={{ base: '30%', md: '0' }}
          onClick={() => {
            getUserData();
          }}
          w={'fit-content'}
        >
          <Icon as={FiRefreshCw} />
        </Button>
      </Stack>
      <Stack>
        <LoggedInPic />
      </Stack>
    </Stack>
  );
}

const TopNavLinks = ({ name, url }) => {
  return (
    <Button
      paddingY={3}
      _hover={{
        color: 'primaryHeading.100',
        _before: {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left',
        },
      }}
      _before={{
        content: `""`,
        position: 'absolute',
        w: '100%',
        h: '3px',
        transform: 'scaleX(0)',
        bottom: '-2px',
        left: '0px',
        borderRadius: '25px',
        backgroundColor: 'primaryHeading.100',
        transformOrigin: 'bottom right',
        transition: 'transform 0.3s ease-in-out',
      }}
      as={ReactLink}
      fontSize={{ base: '13px', xl: '16px' }}
      fontWeight={500}
      variant={'link'}
      color={'$666e82'}
      to={url}
    >
      {name}
    </Button>
  );
};
