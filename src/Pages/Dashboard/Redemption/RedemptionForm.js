import {
    Stack,
    Text,
    Heading,
    Input,
    Select,
    RadioGroup,
    Radio,
    Checkbox,
    Button,
    extendTheme,
} from '@chakra-ui/react'
import MainDashboard from '../MainDashboard';
import { MdArrowDropDown } from 'react-icons/md';
import { useState, useEffect } from 'react';
import RedemptionNewForm from './RedemptionNewForm';


export function RedemptionInput({ state, setState, placeholder }) {
    return (
        <Input
            placeholder={placeholder}
            size="lg"
            width={{ lg: '300px', sm: 'full' }}
            boxShadow={'base'}
            value={state}
            onChange={e => setState(e.target.value)}
            _focus={{ boxShadow: '0px 0px 2px #f79e22', border: '1px solid #f79e22' }}
        />
    )
}
export default function RedemptionForm() {
    const [formState, setFormState] = useState({
        fundName: '',
        fundType: '',
        fundPlanCode: '',
        units: '',
        noOfUnits: '',
        amount: '',
        physicalCertificate: '',
        certificateNumber: '',
        reasonOfRedemption: '',
        other: '',
        SelectAnyOne: '',
        accountTitle: '',
        iban: '',
        bankName: '',
        branchName: '',
        paymentMode: ''
    });
    const [selectStyle, setSelectstyle] = useState({ backgroundColor: '#fff' });

    useEffect(() => {
        if (!formState) setFormState({
            fundName: '',
            fundType: '',
            fundPlanCode: '',
            units: '',
            noOfUnits: '',
            amount: '',
            physicalCertificate: '',
            certificateNumber: '',
            reasonOfRedemption: '',
            other: '',
            SelectAnyOne: '',
            accountTitle: '',
            iban: '',
            bankName: '',
            branchName: '',
            paymentMode: ''
        })

        if (
            formState?.fundName !== "" ||
            formState?.fundType !== "" ||
            formState?.fundPlanCode !== "" ||
            formState?.units !== "" ||
            formState?.noOfUnits !== "" ||
            formState?.amount !== "" ||
            formState?.physicalCertificate !== "" ||
            formState?.certificateNumber !== "" ||
            formState?.reasonOfRedemption !== "" ||
            formState?.other !== "" ||
            formState?.accountTitle !== "" ||
            formState?.iban !== "" ||
            formState?.bankName !== "" ||
            formState?.branchName !== "" ||
            formState?.paymentMode !== ""
        ) {
            localStorage.setItem('redemption_form', JSON.stringify(formState))
        }
    }, [formState]);

    useEffect(() => {
        let datastore = localStorage.getItem('redemption_form');
        datastore = JSON.parse(datastore)
        setFormState(datastore)
    }, []);

    const breakpoints = {
        sm: '375px',
        md: '700',
    }

    function handleSubmitClick() {
        // hit API
        localStorage.setItem("redemption_form", undefined);
        setFormState({
            fundName: '',
            fundType: '',
            fundPlanCode: '',
            units: '',
            noOfUnits: '',
            amount: '',
            physicalCertificate: '',
            certificateNumber: '',
            reasonOfRedemption: '',
            other: '',
            SelectAnyOne: '',
            accountTitle: '',
            iban: '',
            bankName: '',
            branchName: '',
            paymentMode: ''
        });
    }
    return (
        <MainDashboard>
            <Stack py={6}>
                <Stack>
                    <Heading>Redemption Form</Heading>
                    <Text color={'gray.500'}>Enter your details for us createon investing account for you.</Text>
                </Stack>
                <RedemptionNewForm />
            </Stack>
        </MainDashboard>
    );
} 