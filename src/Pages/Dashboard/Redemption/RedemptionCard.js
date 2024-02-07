import {
    Stack,
    Text,
    Heading,
    StackDivider,
    useBreakpointValue,
} from '@chakra-ui/react'

export default function RedemptionCard({ conventionalEquity, units, amount, paymentMode, status }) {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        isMobile ?
            (
                <RedemptionCardMobile
                    conventionalEquity={conventionalEquity}
                    units={units}
                    amount={amount}
                    paymentMode={paymentMode}
                    status={status}
                />
            )
            :
            (
                <RedemptionCardDesktop
                    conventionalEquity={conventionalEquity}
                    units={units}
                    amount={amount}
                    paymentMode={paymentMode}
                    status={status}
                />
            )
    )
}

export function RedemptionCardDesktop({ conventionalEquity, units, amount, paymentMode, status }) {
    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            boxShadow={'base'}
            border={'1px solid rgba(0,0,0,0.01)'}
            rounded={'md'}
            padding={4}
            width={'100%'}
            marginBottom={'30px'}
            divider={<StackDivider bg={'gray.900'} w={'2px'} />}
            mb={2}
        >
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                border={'1px solid rgba(0,0,0,0.01)'}
                width={'70%'}
            >
                <Stack direction={'column'}>
                    <Heading fontSize={'md'}>
                        {conventionalEquity}
                    </Heading>
                    <Text fontSize={'15px'} color={'gray.500'}>
                        Conventional | Equity
                    </Text>
                </Stack>
                <Stack direction={'column'}>
                    <Heading fontSize={'md'}>
                        {units}
                    </Heading>
                    <Text fontSize={'15px'} color={'gray.500'}>
                        Units
                    </Text>
                </Stack>
                <Stack direction={'column'}>
                    <Heading fontSize={'md'}>
                        Rs.{amount}
                    </Heading>
                    <Text fontSize={'15px'} color={'gray.500'}>
                        Amount
                    </Text>
                </Stack>
                <Stack direction={'column'}>
                    <Heading fontSize={'md'}>
                        {paymentMode}
                    </Heading>
                    <Text fontSize={'15px'} color={'gray.500'}>
                        Payment Mode
                    </Text>
                </Stack>
            </Stack>
            <Stack direction={'column'} paddingRight={'50'}>
                <Heading fontSize={'md'}>
                    {status}
                </Heading>
                <Text fontSize={'15px'} color={'gray.500'}>
                    Status
                </Text>
            </Stack>
        </Stack>
    )
}

export function RedemptionCardMobile({ conventionalEquity, units, amount, paymentMode, status }) {
    return (
        <Stack
            direction={'column'}
            justifyContent={'space-between'}
            boxShadow={'base'}
            border={'1px solid rgba(0,0,0,0.01)'}
            rounded={'md'}
            padding={4}
            width={'100%'}
            marginBottom={'30px'}
            divider={<StackDivider bg={'gray.900'} w={'2px'} />}
            mb={2}
        >
            <Stack
            direction={'column'}
            justifyContent={'space-between'}
                border={'1px solid rgba(0,0,0,0.01)'}
                width={'75%'}
            >
                <Stack direction={'column'}>
                    <Heading fontSize={'md'}>
                        {conventionalEquity}
                    </Heading>
                    <Text fontSize={'15px'} color={'gray.500'}>
                        Conventional | Equity
                    </Text>
                </Stack>
                <Stack direction={'column'}>
                    <Heading fontSize={'md'}>
                        {units}
                    </Heading>
                    <Text fontSize={'15px'} color={'gray.500'}>
                        Units
                    </Text>
                </Stack>
                <Stack direction={'column'}>
                    <Heading fontSize={'md'}>
                        Rs.{amount}
                    </Heading>
                    <Text fontSize={'15px'} color={'gray.500'}>
                        Amount
                    </Text>
                </Stack>
                <Stack direction={'column'}>
                    <Heading fontSize={'md'}>
                        {paymentMode}
                    </Heading>
                    <Text fontSize={'15px'} color={'gray.500'}>
                        Payment Mode
                    </Text>
                </Stack>
            </Stack>
            <Stack direction={'column'} paddingRight={'50'}>
                <Heading fontSize={'md'}>
                    {status}
                </Heading>
                <Text fontSize={'15px'} color={'gray.500'}>
                    Status
                </Text>
            </Stack>
        </Stack>
    )
}