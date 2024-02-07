import { Container, Stack, Heading, 
    ListItem,
    UnorderedList,} from '@chakra-ui/react';
import mainbackSvg from '../../assets/images/backgrounds/mainback.jpg';
import React from 'react';


export default function Whychooseus() {
  return (
    <Stack>
      <Container
        maxW={'8xl'}
        pt={{ base: '6', md: '20' }}
        px={{ base: 10, '2xl': 0 }}
      >
        <Stack mb={'20'} pr={{ base: '0', lg: '60' }}>
          <Heading as="h2" size={{ base: 'md', md: 'xl' }}>
            Why Choose Us
          </Heading>
          <UnorderedList>
            <ListItem>Easy to save and invest</ListItem>
            <ListItem>Money is Managed by experienced professional</ListItem>
            <ListItem>SECP Regulated Organization</ListItem>
            <ListItem>Financial assets are safe with CDC</ListItem>
          </UnorderedList>
        </Stack>
      </Container>
      <Stack
        bgImage={mainbackSvg}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
      ></Stack>
    </Stack>
  );
}
