import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Spinner,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import React, { useState, useEffect, useId, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  updateKYC,
  updateTokens,
  updateUser,
  updateUserAccessToken,
  updateUserRefreshToken,
} from '../../../reducers/useReducer';
import { GET, POST } from '../../../utils/ApiRequestProvider';
import { baseUrl } from '../../../utils/Config';
import { IMaskMixin } from 'react-imask';

export default function KycForm({ setkycLevel }) {
  const user = useSelector(state => state.value);
  const userKyc = useSelector(state => state.kycData);
  const tokens = useSelector(state => state.tokens);
  const bank = useSelector(state => state.userBankList);
  const [registeredBanksList, setregisteredBanksList] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const [frontPhoto, setfrontPhoto] = useState({});
  const [inputValue, setInputValue] = useState('');
  const frontPhotoRef = useRef(null);
  const [backPhoto, setbackPhoto] = useState({});
  const backPhotoRef = useRef(null);

  useEffect(() => {
    setregisteredBanksList(JSON.parse(localStorage.getItem('bank')));
    console.log('bank1', registeredBanksList);
  }, []);

  const handleInputChange = e => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    let formattedValue = numericValue.substring(0, 5);

    if (numericValue.length > 5) {
      formattedValue += '-' + numericValue.substring(5, 12);
    }

    if (numericValue.length > 12) {
      formattedValue += '-' + numericValue.substring(12, 13);
    }

    // Update the KYCForm state with the new CNIC number value
    setKYCForm({
      ...KYCForm,
      cnic_num: { value: formattedValue },
    });
  };

  const handleocinc = e => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    let formattedValue = numericValue.substring(0, 5);

    if (numericValue.length > 5) {
      formattedValue += '-' + numericValue.substring(5, 12);
    }

    if (numericValue.length > 12) {
      formattedValue += '-' + numericValue.substring(12, 13);
    }

    // Update the KYCForm state with the new CNIC number value
    setKYCForm({
      ...KYCForm,
      phone_owner_cnic: { value: formattedValue },
    });
  };

  function onFileInput(e, stateAttr) {
    console.log(stateAttr);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = e => {
      if (stateAttr === 1) {
        setKYCForm({
          ...KYCForm,
          doc_cnic_front: { data: e.target.result },
        });
      } else {
        setKYCForm({
          ...KYCForm,
          doc_cnic_back: { data: e.target.result },
        });
      }
    };
    // stateAttr.value = JSON.stringify(e.target.files[0]);
  }

  let accToken = user?.access_token,
    refreshToken = user?.refresh_token;

  const labelStyle = {
    color: '#7a7a7a',
    fontSize: '13px',
    fontWeight: '600',
  };

  const inputfiled = {
    height: '55px',
  };

  const getUserFields = async () => {
    console.log(user);
    setisLoading(true);
    let userFieldsData = await GET(`${baseUrl}/users/listUserKycData`, {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    console.log(userFieldsData);
    if (userFieldsData?.message == 'unauthorized') {
      let newToken = await POST(`${baseUrl}/users/refresh`, {
        refresh_token: tokens?.refresh_token,
      });
      if (newToken.success === false) {
        toast({
          description: 'Session expired, please login again!',
          status: 'error',
          position: 'bottom-right',
          isClosable: true,
          duration: 4000,
        });
        localStorage.setItem('user', null);
        Cookies.set('user', null);
        Cookies.set('kycData', null);
        Cookies.set('kycLevel1', null);
        dispatch(updateUser(null));
        navigate('/');
      }
      // navigate('/Dashboard/OverView')
      // console.log(newToken);
      if (newToken?.status == 'ok') {
        let userFieldsData = await GET(`${baseUrl}/users/listUserKycData`, {
          Authorization: `Bearer ${newToken?.data?.access_token}`,
        });
        console.log(userFieldsData);
        localStorage.setItem(
          'kycFinalData',
          JSON.stringify(userFieldsData?.data?.data)
        );
        dispatch(updateTokens(newToken?.data));
        dispatch(updateKYC(userFieldsData?.data?.data));
        setKYCForm(userFieldsData?.data?.data);
        toast({
          description: 'KYC data retrieved!',
          status: 'success',
          position: 'bottom-right',
          isClosable: true,
          duration: 4000,
        });
      }
      if (newToken?.message == 'session_not_found') {
        toast({
          description: 'Session expired, please login again!',
          status: 'error',
          position: 'bottom-right',
          isClosable: true,
          duration: 4000,
        });
        localStorage.setItem('user', null);
        Cookies.set('user', null);
        Cookies.set('kycData', null);
        Cookies.set('kycLevel1', null);
        dispatch(updateUser(null));
        navigate('/');
      }
      setisLoading(false);
    } else {
      setKYCForm(userFieldsData?.data?.data);
    }
    setisLoading(false);
  };
  useEffect(() => {
    getUserFields();
  }, []);

  useEffect(() => {
    let data = localStorage.getItem('kycFinalData');
    console.log(data);
    if (data) {
      // console.log(data)
      setKYCForm(JSON.parse(data));
    } else {
      let localCount = 1;
      if (localCount === 1 && tokens) {
        getUserFields();
        ++localCount;
      }
    }
  }, []);

  const [KYCForm, setKYCForm] = useState({
    phone: { value: '' },
    phone_owner: { value: '' },
    email: { value: '' },
    name: { value: '' },
    gender: { value: '' },
    mother_maiden: { value: '' },
    occupation: { value: '' },
    cnic_num: { value: '' },
    cnic_dob: { value: '' },
    cnic_iss: { value: '' },
    cnic_exp: { value: '' },
    cnic_life: { value: '' },
    addr_res: { value: '' },
    res_cnic_same: { value: '' },
    res_status: { value: '' },
    addr_mail: { value: '' },
    addr_mail_same: { value: '' },
    birth_city: { value: '' },
    pep: { value: '' },
    bank_name: { value: '' },
    bank_iban: { value: '' },
    kin_name: { value: '' },
    kin_rel: { value: '' },
    kin_ph: { value: '' },
    kin_addr: { value: '' },
    pep_sth: { value: '' },
    pep_goh: { value: '' },
    pep_pol: { value: '' },
    pep_gof: { value: '' },
    pep_jud: { value: '' },
    pep_mil: { value: '' },
    pep_seio: { value: '' },
    pep_ppo: { value: '' },
    pep_eio: { value: '' },
    pep_mbio: { value: '' },
    pep_nature: { value: '' },
    pep_name: { value: '' },
    pep_dc: { value: '' },
    pep_des: { value: '' },
    pep_gr: { value: '' },
    doc_cnic_front: { value: '' },
    doc_cnic_back: { value: '' },
    contact_person_self: { value: '' },
    income_src: { value: '' },
    mail_addr: { value: '' },
    nationality: { value: '' },
    phone_owner_self: { value: '' },
    phone_owner_rel: { value: '' },
    phone_owner_cnic: { value: '' },
    contact_person: { value: '' },
    contact_person_email: { value: '' },
    contact_person_phone: { value: '' },
  });

  const handleInputChangee = e => {
    const inputValue = e.target.value;

    // Define the minimum length requirement
    const minLength = 24;

    setKYCForm({
      ...KYCForm,
      bank_iban: { value: inputValue },
    });
  };

  const isInvalid = KYCForm?.bank_iban?.value.length < 24;




  useEffect(() => {
    console.log('kyc', KYCForm);
  }, [KYCForm]);

  const submitKYC = async () => {
    setisLoading(true);

    try {
      let data = new Object(KYCForm);

      if (!String(data?.phone?.value).includes('+')) {
        data = {
          ...data,
          phone: { value: `+${data?.phone?.value}` },
        };
      }

      if (
        !String(data?.kin_ph?.value).includes('+') &&
        String(data?.kin_ph?.value) !== ''
      ) {
        data = {
          ...data,
          kin_ph: { value: `+${data?.kin_ph?.value}` },
        };
      }

      if (
        !String(data?.contact_person_phone?.value).includes('+') &&
        String(data?.contact_person_phone?.value)
      ) {
        data = {
          ...data,
          contact_person_phone: {
            value: `+${data?.contact_person_phone?.value}`,
          },
        };
      }

      if (data?.contact_person_phone?.value === '+undefined') {
        delete data?.contact_person_phone;
      }
      if (data?.kin_ph?.value === '+undefined') {
        delete data?.kin_ph;
      }
      if (data?.bank_iban?.value === '') {
        delete data?.bank_iban;
      }
      if (data?.cnic_exp?.value === '') {
        delete data?.cnic_exp;
      }
      
      console.log(data, 'final data going...');
      // changes bank is requird
      let response = await POST(`${baseUrl}/users/updateUserKyc`, data, {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      });
      if (response.status === 'ok') {
        // setkycLevel(2)
        let updateKycStatus = await GET(
          `${baseUrl}/users/submitUserKyc?level=2`,
          {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        );
        console.log(updateKycStatus);
        localStorage.setItem('kycFinalData', JSON.stringify(response?.data));
        dispatch(updateKYC(response?.data));
        setKYCForm(response?.data);
      }
      console.log(response);

      if (response.message === 'unauthorized') {
        let newToken = await POST(`${baseUrl}/users/refresh`, {
          refresh_token: localStorage.getItem('access_token'),
        });
        console.log(newToken);
        if (newToken?.status == 'ok') {
          let response = await POST(`${baseUrl}/users/updateUserKyc`, data, {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          });
          console.log(response);
          dispatch(updateTokens(newToken?.data));

          toast({
            description: 'Update KYC Submitted!',
            status: response.status === 'ok' ? 'success' : 'error',
            position: 'bottom-right',
            isClosable: true,
            duration: 3000,
          });
          if (response.status === 'ok') {
            localStorage.setItem(
              'kycFinalData',
              JSON.stringify(response?.data)
            );
            dispatch(updateKYC(response?.data));
            setKYCForm(response?.data);
          }
        }
      } else if (response.message === 'invalid_data') {
        let errorMessage = Object.entries(response?.data);
        console.log(errorMessage);
        toast({
          description: `${String(errorMessage[0][0])
            .replace('_', ' ')
            .replace('_', ' ')} is ${String(errorMessage[0][1]).replace(
              '_',
              ' '
            )}`,
          status: 'error',
          position: 'bottom-right',
          isClosable: true,
          duration: 4000,
        });
      } else {
        toast({
          description:
            response.status === 'ok'
              ? 'Update KYC Submitted!'
              : response?.message,
          status: response.status === 'ok' ? 'success' : 'error',
          position: 'bottom-right',
          isClosable: true,
          duration: 3000,
        });
      }
      setisLoading(false);
      // changes bank is requird
      // if (
      //   KYCForm?.bank_iban?.value === '' ||
      //   KYCForm?.bank_name?.value === ''
      // ) {
      //   toast({
      //     description: 'Bank is required!',
      //     status: 'error',
      //     position: 'top-right',
      //     isClosable: true,
      //     duration: 3000,
      //   });
      // } else {

      // }
    } catch (err) {
      toast({
        description: err,
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
        duration: 4000,
      });
    }
  };

  return (
    <Stack gap={'6'}>
      <Stack
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        border={'1px solid #e1e1e1'}
        p={'5'}
        gap={'4'}
        borderRadius={'6'}
      >
        <Box mb={'4'}>
          <Heading
            as={'h6'}
            color={'#0d182b'}
            fontSize={{ base: '16px', md: '28px' }}
            fontWeight={'bold'}
            textTransform={'capitalize'}
          >
            Personal Information
            {isLoading && <Spinner fontSize={'12px'} ml={'20px'} />}
          </Heading>
          {/* <Text
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={'400'}
            color={'#666e82'}
            mt={'0'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            Update your account info incase you entered incorrect info
          </Text> */}
        </Box>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Name as per CNIC*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.name?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    name: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Mothers maiden Name*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.mother_maiden?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    mother_maiden: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Email Address*</FormLabel>
              <Input
                sx={inputfiled}
                type="email"
                value={KYCForm?.email?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    email: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Date of Birth*</FormLabel>
              <Input
                sx={inputfiled}
                type="date"
                value={KYCForm?.cnic_dob?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    cnic_dob: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Gender</FormLabel>
              <Select
                sx={inputfiled}
                value={KYCForm?.gender?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    gender: { value: e.target.value },
                  });
                }}
              >
                <option style={{ display: 'none' }} value="">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Occupation*</FormLabel>
              <Select
                sx={inputfiled}
                value={KYCForm?.occupation?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    occupation: { value: e.target.value },
                  });
                }}
              >
                <option style={{ display: 'none' }} value="">
                  Select Occupation
                </option>
                <option value="Property Dealer">Property Dealer</option>
                <option value="Govt. Service">Govt. Service</option>
                <option value="Accountant">Accountant</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Business">Business</option>
                <option value="Commission Agent">Commission Agent</option>
                <option value="Doctor">Doctor</option>
                <option value="Engineer">Engineer</option>
                <option value="House wife">House wife</option>
                <option value="Industrialist">Industrialist</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Pvt. Sector Service">Pvt. Sector Service</option>
                <option value="Public Sector Service">Public Sector Service</option>
                <option value="Retired">Retired</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
          alignItems={'flex-end'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel alignItems={'flex-end'} display={'flex'} sx={labelStyle}>Mobile Number* <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>(92)</Text></FormLabel>
              <Input
                sx={inputfiled}
                placeholder="92"
                type="num"
                maxLength={13}
                value={KYCForm?.phone?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    phone: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>

          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Source of Income*</FormLabel>
              <Select
                sx={inputfiled}
                value={KYCForm?.income_src?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    income_src: { value: e.target.value },
                  });
                }}
              >
                <option style={{ display: 'none' }} value="">
                  Select Income Source
                </option>
                <option value="Business Income">Business Income</option>
                <option value="Commission">Commission</option>
                <option value="Gift">Gift</option>
                <option value="Inheritance">Inheritance</option>
                <option value="Investment Income">Investment Income</option>
                <option value="Property Income">Property Income</option>
                <option value="Remittance">Remittance</option>
                <option value="Retirement Benefit">Retirement Benefit</option>
                <option value="Salary / Wage">Salary / Wage</option>
                <option value="Savings">Savings</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Country*</FormLabel>
              <Select
                sx={inputfiled}
                value={KYCForm?.nationality?.value}
                placeholder="Country"
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    nationality: { value: e.target.value },
                  });
                }}
              >
                <option style={{ display: 'none' }} value="">
                  Select Nationality
                </option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Åland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua & Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BQ">Caribbean Netherlands</option>
                <option value="BA">Bosnia & Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo - Brazzaville</option>
                <option value="CD">Congo - Kinshasa</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d’Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czechia</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Islas Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard & McDonald Islands</option>
                <option value="VA">Vatican City</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">North Korea</option>
                <option value="KR">South Korea</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">North Macedonia</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar (Burma)</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Curaçao</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestine</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn Islands</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="RW">Rwanda</option>
                <option value="BL">St. Barthélemy</option>
                <option value="SH">St. Helena</option>
                <option value="KN">St. Kitts & Nevis</option>
                <option value="LC">St. Lucia</option>
                <option value="MF">St. Martin</option>
                <option value="PM">St. Pierre & Miquelon</option>
                <option value="VC">St. Vincent & Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">São Tomé & Príncipe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="CS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia & South Sandwich Islands
                </option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard & Jan Mayen</option>
                <option value="SZ">Eswatini</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syria</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad & Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks & Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">U.S. Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="VG">British Virgin Islands</option>
                <option value="VI">U.S. Virgin Islands</option>
                <option value="WF">Wallis & Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </Select>
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Place of Birth*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.birth_city?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    birth_city: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Resident Status*</FormLabel>
              <Select
                sx={inputfiled}
                value={KYCForm?.res_status?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    res_status: { value: e.target.value },
                  });
                }}
              >
                <option style={{ display: 'none' }} value="">
                  Select Resident Status
                </option>
                <option value="Resident">Resident</option>
                <option value="NonResident">Non Resident</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Bank</FormLabel>
              <Select
                sx={inputfiled}
                onChange={e => {
                  let bankItem = JSON.parse(e.target.value);
                  setKYCForm({
                    ...KYCForm,
                    bank_code: { value: bankItem?.bank_code },
                    bank_name: { value: bankItem?.bank_name },
                  });
                }}
              >
                <option value="" style={{ display: 'none' }}>
                  {KYCForm?.bank_name?.value}
                </option>
                {registeredBanksList?.length > 0 &&
                  registeredBanksList?.map(v => {
                    return (
                      <option
                        key={v?.id}
                        value={JSON.stringify({
                          bank_code: v?.code,
                          bank_name: v?.name,
                        })}
                      >
                        {v?.name}
                      </option>
                    );
                  })}
              </Select>
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel display={'flex'} alignItems={'flex-end'} sx={labelStyle}>Bank IBAN* {isInvalid && (
                <Text pl={2} style={{ color: 'red', fontSize: '14px' }}>
                  IBAN must be at least 24 characters long
                </Text>
              )}</FormLabel>

              <Input
                sx={inputfiled}
                type="text"
                maxLength={24}
                value={KYCForm?.bank_iban?.value}
                onChange={handleInputChangee}
              />

            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>CNIC Number*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                onChange={handleInputChange}
                value={KYCForm?.cnic_num?.value}
                id="cnic_num"
              />
            </FormControl>
          </Box>
          <Box w={'full'} >
            <FormControl>
              <FormLabel sx={labelStyle}>CNIC Issue Date*</FormLabel>
              <Input
                sx={inputfiled}
                type="date"
                value={KYCForm?.cnic_iss?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    cnic_iss: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'} style={{ display: KYCForm?.cnic_life?.value === 'yes' ? 'none' : 'initial' }}>
            <FormControl>
              <FormLabel sx={labelStyle}>CNIC Expiry Date*</FormLabel>
              <Input
                sx={inputfiled}
                type="date"
                value={KYCForm?.cnic_exp?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    cnic_exp: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>Phone number Ownership</FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.phone_owner_self?.value}
              onChange={e => {
                if (e === 'yes') {
                  setKYCForm({
                    ...KYCForm,
                    phone_owner_self: { value: e },
                    phone_owner: { value: KYCForm?.name?.value },
                    phone_owner_cnic: { value: KYCForm?.cnic_num?.value },
                    phone_owner_rel: { value: 'self' },
                  });
                } else {
                  setKYCForm({
                    ...KYCForm,
                    phone_owner_self: { value: e },
                    phone_owner: { value: '' },
                    phone_owner_cnic: { value: '' },
                    phone_owner_rel: { value: '' },
                  });
                }
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>CNIC Lifetime*</FormLabel>
            <RadioGroup
              defaultValue={false}
              value={KYCForm?.cnic_life?.value}
              onChange={e => {
                if (e === 'yes') {
                  setKYCForm({
                    ...KYCForm,
                    cnic_life: { value: e },
                    cnic_iss: { value: '' },
                    
                  });
                } else {
                  setKYCForm({
                    ...KYCForm,
                    cnic_life: { value: e },
                  });
                }
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              Are you a family or close associate of <br />
              any public figure/politicaly exposed person
            </FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Flex>
        <Flex
          style={{
            display:
              KYCForm?.phone_owner_self?.value === 'yes' ? 'none' : 'flex',
          }}
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>
                Mobile Number Registered against*
              </FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.phone_owner?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    phone_owner: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Phone number Owner Relation</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.phone_owner_rel?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    phone_owner_rel: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Phone number Owner CNIC</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.phone_owner_cnic?.value}
                onChange={handleocinc}
                id="phone_owner_cnic"
              />
            </FormControl>

          </Box>
        </Flex>
      </Stack>

      <Stack
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        border={'1px solid #e1e1e1'}
        p={'5'}
        gap={'4'}
        borderRadius={'6'}
      >
        <Box mb={'2'}>
          <Heading
            as={'h6'}
            color={'#0d182b'}
            fontSize={{ base: '16px', md: '22px' }}
            fontWeight={'bold'}
            textTransform={'capitalize'}
          >
            Contact Details
          </Heading>
          {/* <Text
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={'400'}
            color={'#666e82'}
            mt={'0'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            Update your account info incase you entered incorrect info
          </Text> */}
        </Box>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>
                Residential Address on CNIC*
              </FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.res_cnic_same?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    res_cnic_same: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>
                Current Residential Address*
              </FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.addr_res?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    addr_res: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              Mailing Address same as Residential
            </FormLabel>
            <RadioGroup
              defaultValue="no"
              value={KYCForm?.addr_mail_same?.value}
              onChange={e => {
                if (e === 'yes') {
                  setKYCForm({
                    ...KYCForm,
                    addr_mail_same: { value: e },
                    mail_addr: { value: KYCForm?.addr_res?.value },
                    addr_mail: { value: KYCForm?.addr_res?.value },
                  });
                } else {
                  setKYCForm({
                    ...KYCForm,
                    addr_mail_same: { value: e },
                    mail_addr: { value: '' },
                    addr_mail: { value: '' },
                  });
                }
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>


        </Flex>
        <Flex
          style={{
            display:
              KYCForm?.addr_mail_same?.value === 'yes' ? 'none' : 'block',
          }}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Current Postal Address*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.addr_mail?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    mail_addr: { value: e.target.value },
                    addr_mail: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          gap={'6'}
        >

          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              Contact Person info is same as Personal info
            </FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.contact_person_self?.value}
              onChange={e => {
                if (e === 'yes') {
                  setKYCForm({
                    ...KYCForm,
                    contact_person_self: { value: e },
                    contact_person: { value: KYCForm?.name?.value },
                    contact_person_email: { value: KYCForm?.email?.value },
                    contact_person_phone: { value: KYCForm?.phone?.value },
                  });
                } else {
                  setKYCForm({
                    ...KYCForm,
                    contact_person_self: { value: e },
                    contact_person: { value: '' },
                    contact_person_email: { value: '' },
                    contact_person_phone: { value: '' },
                  });
                }
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Flex>
        <Flex
          style={{
            display:
              KYCForm?.contact_person_self?.value === 'yes' ? 'none' : 'flex',
          }}
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          alignItems={'flex-end'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Contact Person Name</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.contact_person?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    contact_person: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Contact Person Email</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.contact_person_email?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    contact_person_email: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel display={'flex'} alignItems={'flex-end'} sx={labelStyle}>Contact Person Phone Number <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>(92)</Text></FormLabel>
              <Input
                sx={inputfiled}
                type="tel"
                placeholder='92'
                maxLength={13}
                value={KYCForm?.contact_person_phone?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    contact_person_phone: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>
      </Stack>
      <Stack
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        border={'1px solid #e1e1e1'}
        p={'5'}
        gap={'4'}
        borderRadius={'6'}
      >
        <Box mb={'2'}>
          <Heading
            as={'h6'}
            color={'#0d182b'}
            fontSize={{ base: '16px', md: '22px' }}
            fontWeight={'bold'}
            textTransform={'capitalize'}
          >
            Nominee Details
          </Heading>
          {/* <Text
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={'400'}
            color={'#666e82'}
            mt={'0'}
            lineHeight={{ md: '24px', base: '20px' }}
          >
            Update your account info incase you entered incorrect info
          </Text> */}
        </Box>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Nominee Name*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.kin_name?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    kin_name: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Nominee Relationship*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.kin_rel?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    kin_rel: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel display={'flex'} alignItems={'flex-end'} sx={labelStyle}>Nominee Phone Number* <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>(92)</Text></FormLabel>
              <Input
                sx={inputfiled}
                type="tel"
                maxLength={13}
                placeholder={'92'}
                value={KYCForm?.kin_ph?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    kin_ph: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>Nominee Address*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.kin_addr?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    kin_addr: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>
                Family member or Close Assoicate*
              </FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.pep_nature?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    pep_nature: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>
                PEP Name (If family member or close associate)
              </FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.pep_name?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    pep_name: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>PEP Department / Company*</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.pep_dc?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    pep_dc: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>PEP Designation</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.pep_des?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    pep_des: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
          <Box w={'full'}>
            <FormControl>
              <FormLabel sx={labelStyle}>PEP Grade / Rank</FormLabel>
              <Input
                sx={inputfiled}
                type="text"
                value={KYCForm?.pep_gr?.value}
                onChange={e => {
                  setKYCForm({
                    ...KYCForm,
                    pep_gr: { value: e.target.value },
                  });
                }}
              />
            </FormControl>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>PEP - Head of State</FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_sth?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_sth: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>PEP - Senior Politician</FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_pol?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_pol: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>PEP - Government Official</FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_gof?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_gof: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              PEP - Senior Judicial Official
            </FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_jud?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_jud: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              PEP - Senior Military Official
            </FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_mil?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_mil: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              PEP - Senior Executive of International Organization
            </FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_seio?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_seio: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              PEP - Political Party Official
            </FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_ppo?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_ppo: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              PEP - Member of Board, International Organization
            </FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_mbio?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_mbio: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>
              PEP - Executive International Organization
            </FormLabel>
            <RadioGroup
              defaultValue="1"
              value={KYCForm?.pep_eio?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_eio: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          justifyContent={'space-between'}
          gap={'6'}
        >
          <Box w={'full'}>
            <FormLabel sx={labelStyle}>PEP - Head of Government</FormLabel>
            <RadioGroup
              defaultValue="No"
              value={KYCForm?.pep_goh?.value}
              onChange={e => {
                setKYCForm({
                  ...KYCForm,
                  pep_goh: { value: e },
                });
              }}
            >
              <Stack spacing={4} direction="row">
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Flex>
      </Stack>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        w={'full'}
        justifyContent={'space-between'}
        gap={'6'}
      >
        <Box w={'full'}>
          <FormControl>
            <FormLabel alignItems={'flex-end'} display={'flex'}  sx={labelStyle}>
              Upload Your CNIC Front Picture
              <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>png, jpeg, jpg</Text>
            </FormLabel>
            <Input
              ref={frontPhotoRef}
              display={'none'}
              h={'55px'}
              type="file"
              onChange={e => {
                setfrontPhoto(e.target.files[0]);
                onFileInput(e, 1);
              }}
            />
            <Box
              border={'1px solid'}
              borderColor={'#adadad'}
              borderRadius={6}
              w={'100%'}
              py={'1'}
              cursor={'pointer'}
              onClick={() => frontPhotoRef.current.click()}
              role={'group'}
            >
              <Button
                bgColor={'primaryHeading.200'}
                color={'white.100'}
                fontWeight={{ base: 400, md: 500 }}
                marginLeft={'5px'}
                border={'2px solid'}
                borderColor={'primaryHeading.200'}
                _groupHover={{
                  bgColor: '#000',
                  color: '#fff',
                }}
              >
                Choose File:
              </Button>
              <Text as={'span'} fontSize={{ base: '11px', lg: '13px' }}>
                {frontPhoto?.name}
              </Text>
            </Box>
          </FormControl>
        </Box>
        <Box w={'full'}>
          <FormControl>
            <FormLabel alignItems={'flex-end'} display={'flex'}  sx={labelStyle}>Upload Your CNIC Back Picture  <Text pl={2} color={'red'} fontSize={'16px'} fontWeight={700}>png, jpeg, jpg</Text></FormLabel>
            <Input
              ref={backPhotoRef}
              display={'none'}
              h={'55px'}
              type="file"
              onChange={e => {
                setbackPhoto(e.target.files[0]);
                onFileInput(e, 2);
              }}
            />
            <Box
              border={'1px solid'}
              borderColor={'#adadad'}
              borderRadius={6}
              w={'100%'}
              py={'1'}
              cursor={'pointer'}
              onClick={() => backPhotoRef.current.click()}
              role={'group'}
            >
              <Button
                bgColor={'primaryHeading.200'}
                color={'white.100'}
                fontWeight={{ base: 400, md: 500 }}
                marginLeft={'5px'}
                border={'2px solid'}
                borderColor={'primaryHeading.200'}
                _groupHover={{
                  bgColor: '#000',
                  color: '#fff',
                }}
              >
                Choose File:
              </Button>
              <Text as={'span'} fontSize={{ base: '11px', lg: '13px' }}>
                {backPhoto?.name}
              </Text>
            </Box>
          </FormControl>
        </Box>
      </Flex>

      <Stack
        style={{ boxShadow: '0px 0px 26px -10px #bdbdbd' }}
        p={'5'}
        gap={'4'}
        borderRadius={'6'}
      >
        <Box>
          <Button
            isLoading={isLoading}
            onClick={() => submitKYC()}
            width={'full'}
            fontSize={'16px'}
            px={{ md: '10', base: '5' }}
            fontWeight={500}
            color={'white'}
            bg={'#0d182b'}
            href={'#'}
            boxShadow={'0px 15px 15px -15px '}
            _hover={{
              bg: '#ffbb5c',
              boxShadow: 'none',
              transform: 'translateY(2px)',
            }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
