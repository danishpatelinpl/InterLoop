import { Container, Grid, GridItem, Heading, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import React from 'react'
import Counter from '../Counter/Counter'

export default function WorldClassTab() {
  return (
    <Stack>
      <Container maxW={'8xl'} py={{ base: '6', md: '20' }} px={{ base: 10, "2xl": 0 }}>
        <Grid
          templateColumns='repeat(12, 1fr)'
          gap={6} alignItems={'center'}
        >
          <GridItem colSpan={{ base: '12', md: '6' }} >
            <Heading as='h2' mb={8} size={{ base: 'md', md: 'xl' }}>
              World Class Finance <Text as={'span'} color={'#f79e22'} >Experts</Text>
            </Heading>
            <Box>
              <Tabs borderColor={'#fff'}>
                <TabList>
                  <Tab>Mission</Tab>
                  <Tab>Vision</Tab>
                  
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text fontSize={{ base: '12px', md: '17px' }} fontWeight={'400'} color={'#666e82'} lineHeight={{ md: '30px', base: '20px' }}>
                    To be an agent of positive change for the stakeholders and community by pursuing an ethical and sustainable business
                    </Text>
                  </TabPanel>
                  <TabPanel>
                  <Text fontSize={{ base: '12px', md: '17px' }} fontWeight={'400'} color={'#666e82'} lineHeight={{ md: '30px', base: '20px' }}>
                  To strive for and advance the best interests of our Clients and Stakeholders, at all times, and build an enduring Wealth Management Firm, committed to the highest standards of ethical practices, valued and trusted by all our Stakeholders.
                    </Text>
                  </TabPanel>
                  
                </TabPanels>
              </Tabs>
            </Box>

          </GridItem>
          
        </Grid>
      </Container>
     
    </Stack>
  )
}
