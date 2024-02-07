import {
  Box,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import achievementsmap from '../../assets/images/backgrounds/map.png';
import React from "react";

export default function Achievement() {
  return (
    <Stack>
      <Container
        maxW={"8xl"}
        pt={{ base: "6", md: "20" }}
        px={{ base: 10, "2xl": 0 }}
      >
        <Stack textAlign={"center"} mb={"20"}>
          <Heading as="h2" size={{ base: "md", md: "xl" }}>
            Our Achievements and Awards
          </Heading>
          <Text
            fontSize={{ base: "12px", md: "16px" }}
            fontWeight={"400"}
            color={"#666e82"}
            lineHeight={{ md: "24px", base: "20px" }}
          >
            Interloop Ltd, at the fore-front of textile and fibre innovation, dominates hosiery exports <br/>
Launched with 10 knitting machines in 1992, ILP is the largest hosiery manufacturer in Pakistan with the next largest competitor <br/> being ten times smaller in size in terms of production capacity. 

          </Text>
        </Stack>
        <Stack 
        bgImage={achievementsmap}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={{base:'2',lg:'10'}}>
            <GridItem display={{base:'none',lg:'flex'}} colSpan={{ base: "4", md: "1" }}></GridItem>
            <GridItem colSpan={{ base: "12", md: "4" }}>
              <Stack h={"172px"} mb={"16"} display={{base:'none',lg:'flex'}}></Stack>
              <Stack
                p={"7"}
                border={"2px solid #0d182b"}
                borderRadius={"6"}
                position={"relative"}
                mb={{base:'7',lg:'16'}}
                bg={'#fff'}
              >
                <Box position={"absolute"} top={"-27px"} p={"2"} bg={"#fff"}>
                  <Text color={"#f79e22"} fontSize={"29px"} fontWeight={"600"}>
                   
                  </Text>
                </Box>
                {/* <Heading
                  as="h3"
                  fontSize={{ base: "18px", md: "20px" }}
                  mb={{ base: "0", md: "1.5" }}
                  textTransform={"uppercase"}
                >
                  Rapid Growth
                </Heading> */}
                <Text
                  fontSize={{ base: "12px", md: "16px" }}
                  fontWeight={"400"}
                  color={"#666e82"}
                  lineHeight={{ md: "24px", base: "20px" }}
                >
                 5 vertically integrated manufacturing facilities are spread across South Asia including 4 in Pakistan, and 1 in Sri Lanka. 
                </Text>
              </Stack>
              <Stack h={"172px"} mb={"16"} display={{base:'none',lg:'flex'}}></Stack>
              <Stack
                p={"7"}
                border={"2px solid #0d182b"}
                borderRadius={"6"}
                position={"relative"}
                bg={'#fff'}
                mb={{base:'7',lg:'0'}}
              >
                <Box position={"absolute"} top={"-27px"} p={"2"} bg={"#fff"}>
                  <Text color={"#f79e22"} fontSize={"29px"} fontWeight={"600"}>
                    
                  </Text>
                </Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "18px", md: "20px" }}
                  mb={{ base: "0", md: "1.5" }}
                  textTransform={"uppercase"}
                >
                 
                </Heading>
                <Text
                  fontSize={{ base: "12px", md: "16px" }}
                  fontWeight={"400"}
                  color={"#666e82"}
                  lineHeight={{ md: "24px", base: "20px" }}
                >
                  Interloop is also one of Pakistan’s largest exporting firms and one of the largest listed companies on PSX, in terms of market capitalization USD 389m (PKR 66bn). ILP has more than a 60% market share within hosiery exports of Pakistan. 
                </Text>
              </Stack>
            </GridItem>
            <GridItem display={{base:'none',lg:'block'}} colSpan={{ base: "4", md: "2" }}>
              <Center>
                <Divider
                  orientation="vertical"
                  borderWidth={"2px"}
                  h={"80px"}
                  borderColor={"#666e82"}
                />
              </Center>
              <Center
                boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                borderRadius={"50%"}
                h={"30px"}
                w={"30px"}
                margin={"auto"}
              >
                <Box
                  borderRadius={"50%"}
                  bg={"#f79e22"}
                  h={"10px"}
                  w={"10px"}
                ></Box>
              </Center>
              <Center>
                <Divider
                  orientation="vertical"
                  borderWidth={"2px"}
                  h={"190px"}
                  borderColor={"#666e82"}
                />
              </Center>
              <Center
                boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                borderRadius={"50%"}
                h={"30px"}
                w={"30px"}
                margin={"auto"}
              >
                <Box
                  borderRadius={"50%"}
                  bg={"#f79e22"}
                  h={"10px"}
                  w={"10px"}
                ></Box>
              </Center>
              <Center>
                <Divider
                  orientation="vertical"
                  borderWidth={"2px"}
                  h={"190px"}
                  borderColor={"#666e82"}
                />
              </Center>
              <Center
                boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                borderRadius={"50%"}
                h={"30px"}
                w={"30px"}
                margin={"auto"}
              >
                <Box
                  borderRadius={"50%"}
                  bg={"#f79e22"}
                  h={"10px"}
                  w={"10px"}
                ></Box>
              </Center>
              <Center>
                <Divider
                  orientation="vertical"
                  borderWidth={"2px"}
                  h={"190px"}
                  borderColor={"#666e82"}
                />
              </Center>
              <Center
                boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                borderRadius={"50%"}
                h={"30px"}
                w={"30px"}
                margin={"auto"}
              >
                <Box
                  borderRadius={"50%"}
                  bg={"#f79e22"}
                  h={"10px"}
                  w={"10px"}
                ></Box>
              </Center>
              <Center>
                <Divider
                  orientation="vertical"
                  borderWidth={"2px"}
                  h={"70px"}
                  borderColor={"#666e82"}
                />
              </Center>
              <Center>
                <Divider
                  orientation="vertical"
                  borderWidth={"2px"}
                  h={"70px"}
                  borderColor={"#666e82"}
                />
              </Center>
              <Center>
                <Divider
                  orientation="vertical"
                  borderWidth={"2px"}
                  h={"70px"}
                  borderColor={"#666e82"}
                />
              </Center>
              <Center
                boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                borderRadius={"50%"}
                h={"30px"}
                w={"30px"}
                margin={"auto"}
              >
                <Box
                  borderRadius={"50%"}
                  bg={"#f79e22"}
                  h={"10px"}
                  w={"10px"}
                ></Box>
              </Center>
              <Center>
                <Divider
                  orientation="vertical"
                  borderWidth={"2px"}
                  h={"70px"}
                  borderColor={"#666e82"}
                />
              </Center>
            </GridItem>
            <GridItem colSpan={{ base: "12", md: "4" }}>
              <Stack
                p={"7"}
                border={"2px solid #0d182b"}
                borderRadius={"6"}
                position={"relative"}
                mb={{base:'7',lg:'16'}}
                bg={'#fff'}
              >
                <Box position={"absolute"} top={"-27px"} p={"2"} bg={"#fff"}>
                  <Text color={"#f79e22"} fontSize={"29px"} fontWeight={"600"}>
                    
                  </Text>
                </Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "18px", md: "20px" }}
                  mb={{ base: "0", md: "1.5" }}
                  textTransform={"uppercase"}
                >
                  Humble Beginnings
                </Heading>
                <Text
                  fontSize={{ base: "12px", md: "16px" }}
                  fontWeight={"400"}
                  color={"#666e82"}
                  lineHeight={{ md: "24px", base: "20px" }}
                >
                From scratch, to becoming a USD 300m company, Interloop produces 700 million pairs of Socks and Tights annually, for top international brands & retailers. 
                </Text>
              </Stack>
              <Stack h={"172px"} mb={"16"} display={{base:'none',lg:'flex'}}></Stack>
              <Stack
                p={"7"}
                border={"2px solid #0d182b"}
                borderRadius={"6"}
                position={"relative"}
                mb={{base:'7',lg:'16'}}
                bg={'#fff'}
              >
                <Box position={"absolute"} top={"-27px"} p={"2"} bg={"#fff"}>
                  <Text color={"#f79e22"} fontSize={"29px"} fontWeight={"600"}>
                    
                  </Text>
                </Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "18px", md: "20px" }}
                  mb={{ base: "0", md: "1.5" }}
                  textTransform={"uppercase"}
                >
                
                </Heading>
                <Text
                  fontSize={{ base: "12px", md: "16px" }}
                  fontWeight={"400"}
                  color={"#666e82"}
                  lineHeight={{ md: "24px", base: "20px" }}
                >
                  With over 5,000 latest Italian Knitting Machines, 24,000+ employees and an organizational network spread over 3 continents, Interloop has the proficiency to work with different materials and make a wide range of products. 
                </Text>
              </Stack>
              <Stack h={"172px"} mb={"16"} display={{base:'none',lg:'flex'}}></Stack>
              <Stack
                p={"7"}
                border={"2px solid #0d182b"}
                borderRadius={"6"}
                position={"relative"}
                mb={{base:'7',lg:'16'}}
                bg={'#fff'}
              >
                <Box position={"absolute"} top={"-27px"} p={"2"} bg={"#fff"}>
                  <Text color={"#f79e22"} fontSize={"29px"} fontWeight={"600"}>
                    
                  </Text>
                </Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "18px", md: "20px" }}
                  mb={{ base: "0", md: "1.5" }}
                  textTransform={"uppercase"}
                >
                
                </Heading>
                <Text
                  fontSize={{ base: "12px", md: "16px" }}
                  fontWeight={"400"}
                  color={"#666e82"}
                  lineHeight={{ md: "24px", base: "20px" }}
                >
                   An extract from the latest Annual Report FY21 highlights the strong margins, bottom-line growth and balance sheet strength over recent years. 
                </Text>
              </Stack>
            </GridItem>
            <GridItem display={{base:'none',lg:'flex'}} colSpan={{ base: "4", md: "1" }}></GridItem>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}
