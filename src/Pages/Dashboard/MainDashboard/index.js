import { Stack } from '@chakra-ui/react'
import { useEffect, React } from 'react'
import { useLocation } from 'react-router';
import Sidebar from '../../../components/Dashboard/Sidebar'
import TopNav from '../../../components/Dashboard/TopNav';



export default function MainDashboard({ children }) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split("/")[1].toLowerCase() === 'dashboard') {
      document.getElementById('Footer').style.display = 'none';
      document.getElementById('Header').style.display = 'none';
    } else {
      document.getElementById('Footer').style.display = 'block';
      document.getElementById('Header').style.display = 'block';
    }
  }, [location.pathname])

  return (
    <Stack direction={'row'} gap={{ base: '3', md: '12' }} overflow={{base:'hidden',md:'initial'}}>
      <Stack>
        <Sidebar />
      </Stack>
      <Stack w={'full'} pr={10} >
        <TopNav />
        {children}
      </Stack>
    </Stack>
  )
}

