import {
  Box,
  Container,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Table,
  Thead,
  Icon,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import React from 'react';

export default function Mutualfundsbasic() {
  return (
    <Stack>
      <Container
        maxW={'8xl'}
        py={{ base: '6', md: '16' }}
        as={Stack}
        spacing={'10'}
      >
        <Box>
          <Heading as="h2" size={{ base: 'md', md: 'xl' }} mb={'4'}>
            Mutual Funds Basics
          </Heading>
          <Text
            fontSize={{ base: '12px', md: '16px' }}
            fontWeight={'400'}
            color={'#666e82'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            A mutual fund is a professionally-managed trust that pools the
            savings of its many investors and invests them in securities such as
            stocks, bonds, and short-term money market instruments. These funds
            are managed by professional fund managers in accordance with each
            fund’s objectives.
            <br />
            <br />
            The benefits of investing in mutual funds are that they’re generally
            well diversified and offer an attractive way for savings to be
            managed without paying high fees or requiring constant attention
            from individual investors. Mutual funds present an option for
            investors who lack the time or knowledge to make traditional and
            complex investment decisions. By putting your money in a mutual
            fund, you allow the fund manager to make essential investment
            decisions for you.
            <br />
            <br />
            Mutual funds benefit all investors, allowing them to diversify their
            financial resources and reap the benefits of investing in mutual
            funds. If you want to learn how to invest in mutual funds and what
            are mutual fund advantages, feel free to reach out to us, and we’ll
            be more than happy to help you out.
          </Text>
        </Box>
        <Box>
          <Heading  textTransform={'capitalize'} as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
            How do Mutual Funds work in Pakistan?
          </Heading>
          <Text
            fontSize={{ base: '12px', md: '16px' }}
            fontWeight={'400'}
            color={'#666e82'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            Mutual Funds or Collective Investment Schemes (CIS) are pools of
            investment of investors savings which are managed by professional
            fund managers. The ownership of the fund rests with the investors
            and the title of assets is with the trustee of the mutual fund. The
            Fund Manager (Asset Management Company) actively manages the
            placement of these assets in various securities. A mutual fund
            invests in securities based on the investment objective of a
            particular scheme which is clearly laid down in the Offering
            document for that scheme.
            <br />
            <br />
            The fund adds value to the investment in two ways: Income Earned and
            Capital Appreciation. This is shared between unit holders in
            proportion to the number of units they own.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size={{ base: 'sm', md: 'lg' }} mb={'4'}>
            Regulatory Framework For Mutual Funds
          </Heading>
          <Text
            fontSize={{ base: '12px', md: '16px' }}
            fontWeight={'400'}
            color={'#666e82'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            The mutual fund’s industry in Pakistan is regulated by the SECP with
            an objective of protection of the investors and promotion and
            development of the capital market in the country.
            <br />
            <br />
            SECP has notified the Non-Banking Finance Company Rules, 2003, and
            the Non-Banking Finance Companies & Notified Entities Regulations,
            2008, which specify key parameters for AMCs to ensure their conduct
            in relation to the management of a mutual fund is acceptable. The
            regulatory framework requires adequate disclosure by the AMCs in
            relation to a mutual fund, to enable investors to make informed
            investment decisions.
            <br />
            <br />
            The governing regulatory framework for the mutual fund industry
            includes:
            <br />
            <br />
            <UnorderedList>
              <ListItem>
                Non-Banking Finance Companies (Establishment & Regulation)
                Rules, 2003
              </ListItem>
              <ListItem>
                Non-Banking Finance Companies & Notified Entities Regulations,
                2008
              </ListItem>
              <ListItem>The Companies Ordinance, 1984</ListItem>
              <ListItem>
                Circulars and Directives issued by the SECP under the provisions
                of the Ordinance
              </ListItem>
            </UnorderedList>
          </Text>
        </Box>
        
      </Container>
    </Stack>
  );
}
