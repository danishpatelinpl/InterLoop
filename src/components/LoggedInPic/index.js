import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../reducers/useReducer';
import { GET } from '../../utils/ApiRequestProvider';
import Cookies from 'js-cookie';

export default function LoggedInPic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.value);
  const [flags, setFlags] = useState([]);

  // let userFlags = new Object.keys(user?.kyc_flags);

  useEffect(() => {
    console.log(user);
    if (user) {
      // setFlags(Object.entries(user.kyc_flags));
    }
    
  }, [user]);

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      gap={{ base: 1, lg: 2, xl: 5 }}
      py={4}
    >
      <Text
        textTransform={'capitalize'}
        fontWeight={500}
        fontSize={{ base: 13, md: 14 }}
      >
        {user?.name ?? 'John Doe'}
      </Text>
      <Menu>
        <MenuButton
          as={Button}
          backgroundColor={'transparent'}
          padding={0}
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
        >
          <Avatar
            size={{ base: 'sm', md: 'md' }}
            name={user?.name ?? 'John Doe'}
            src=""
            border={'2px solid #f79e22'}
            bg={'#f79e22'}
            color={'#535353'}
          />
        </MenuButton>
        <MenuList fontSize={14}>
          <MenuItem as={ReactLink} to={'/Dashboard/OverView'}>
            Dashboard
          </MenuItem>
          {/* <MenuItem as={ReactLink} to={'/Dashboard/UserProfile'}>My Account</MenuItem> */}
          {/* <MenuItem as={ReactLink} to='/Dashboard/Help'>Help</MenuItem> */}
          <MenuItem as={ReactLink} to="/">
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem('user', null);
              Cookies.set('user', null);
              Cookies.set('kycData', null);
              localStorage.clear();
              Cookies.set('kycLevel1', null);
              Cookies.set('kycLevel2', null);
              dispatch(updateUser(null));
              navigate('/');
            }}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          position={'relative'}
          textAlign={'center'}
          as={Button}
          backgroundColor={'transparent'}
          padding={0}
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
        >
          <FaBell size={24} color={'#666e82'} />
          
          {flags?.length > 0 && (
            
            <Text
              position={'absolute'}
              bgColor={'primaryHeading.100'}
              borderRadius={'100%'}
              color={'#535353'}
              w={'20px'}
              h={'20px'}
              fontSize={14}
              top={'0px'}
              right={'10px'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              {flags.length}
            </Text>
          )}
        </MenuButton>
        <MenuList fontSize={14}>
        <Text pl={2} mb={1}>Notification</Text>
          {flags?.length > 0 &&
            flags.map((v, i) => {
              console.log(v);
              return (
                <MenuItem key={i}>
                  <FaCircle size={6} color={'#f79e22'} />
                  <Text ml={2}>{String(v[0]).replace('_', ' ').replace('_', ' ')}{' '}{v[1]}</Text>
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
    </Stack>
  );
}
