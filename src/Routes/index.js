import { Center, Spinner, Stack } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import RouteSwitch from "../components/RouteSwitch/RouteSwitch"
import Homepage from "../Pages/Homepage"
import Login from "../Pages/Login"
import ForgotPass from "../Pages/Forgot"
import NavBar from '../components/NavBars/NavBar';
import Footer from "../components/Footers/Footer"
import About from "../Pages/About/About"
import WhoWeAre from '../Pages/Company/WhoWeAre'
import Register from "../Pages/Register/index"
import Mission from "../Pages/Company/Mission"
import CoreValue from "../Pages/Company/CoreValue"
import Achievements from "../Pages/Company/Achievements"
import WhyChooseUs from "../Pages/Company/WhyChooseUs"
import BoardOfdirectors from "../Pages/Company/BoardOfdirectors"
import Directordetails from "../Pages/Company/Directordetails"
import Managementteam from "../Pages/Company/Managementteam"
import Mutualfund from "../Pages/Funds/Mutualfund"
import InvestmentAdvisory from "../Pages/Funds/InvestmentAdvisory"
import Equityfund from "../Pages/Funds/Equityfund"
import MutualFundsBasic from "../Pages/Howtoinvest/MutualFundsBasic.js"
import ArticlesPersonalFinance from "../Pages/Howtoinvest/ArticlesPersonalFinance"
import DailyMarketOutlook from "../Pages/Howtoinvest/DailyMarketOutlook"
import HowToInvest from "../Pages/Howtoinvest/HowToInvest"
import RiskProfile from "../Pages/Howtoinvest/RiskProfile"
import Calculator from "../Pages/Howtoinvest/Calculator"
import Videos from "../Pages/Howtoinvest/Videos"
import Downloads from "../Pages/Downloads"
import Fundmanagerreports from "../Pages/Downloads/Fund-manager-reports"
import Regulatorydocuments from "../Pages/Downloads/Regulatorydocuments"
import Fundfinancialstatements from "../Pages/Downloads/Fundfinancialstatements"
import Announcementsnews from "../Pages/Downloads/Announcementsnews"
import AssistanceaccountOpeningKyc from "../Pages/Downloads/AssistanceaccountOpeningKyc"
import Applicationforms from "../Pages/Downloads/Applicationforms"
import Overseasinvestors from "../Pages/Downloads/Overseasinvestors"
import Productbrochures from "../Pages/Downloads/Productbrochures"
import Accountopening from "../Pages/Downloads/Accountopening"
import Transactionforms from "../Pages/Downloads/Transactionforms"
import Other from "../Pages/Downloads/Other"
import Updates from "../Pages/Updates"
import News from "../Pages/News"
import Contact from "../Pages/Help/Contact"
import Faqs from "../Pages/Help/Faqs"
import OTPVerification from '../Pages/OTPVerification'
import AccountDetails from '../Pages/AccountDetails'
import OverView from '../Pages/Dashboard/OverView'
import KYC from '../Pages/Dashboard/KYCdetails'
import Sahulat from '../Pages/Dashboard/Sahulat'
import Subsequent from '../Pages/Dashboard/Subsequent'
import DigitalAcc from '../Pages/Dashboard/DigitalAcc'
import RiskProfiler from '../Pages/Dashboard/RiskProfiler'
import Investment from '../Pages/Dashboard/Investment'
import TaxCalculator from '../Pages/Dashboard/TaxCalculator'
import Redemption from '../Pages/Dashboard/Redemption'
import UserProfile from '../Pages/Dashboard/UserProfile'
import Help from '../Pages/Dashboard/Help'
import RedemptionForm from "../Pages/Dashboard/Redemption/RedemptionForm"
import Insighteducation from "../Pages/Insighteducation/Insighteducation"
import Teamdetails from "../Pages/Company/Teamdetails"
import Vedios from "../Pages/Help/Vedios"
import Cutoftime from "../Pages/Howtoinvest/Cutoftime"
import Risk from "../Pages/Howtoinvest/Risk"
import Invest from "../Pages/Howtoinvest/Invest"
import Conversion from "../Pages/Dashboard/Conversion/Conversion"
import Forindividual from "../Pages/Downloads/Forindividual"
import Forinstitutions from "../Pages/Downloads/Forinstitutions"
import DailyNav from "../Pages/Downloads/DailyNav"
import AccountStatements from "../Pages/Dashboard/AcountStatement/index.js"

const loading = (
    <Center h="100%" color="white">
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    </Center>
)
export default function RoutesMaster() {

    return (
        <React.Suspense fallback={loading}>
            <BrowserRouter>
                <NavBar />

                {/* Routes For Website */}

                <RouteSwitch>
                    <Route
                        path={'/'}
                        element={<Homepage />}
                    />
                    <Route
                        path={'/login'}
                        element={<Login />}
                    />
                    <Route
                        path={'/forgotPass'}
                        element={<ForgotPass />}
                    />
                    <Route
                        path={'/register'}
                        element={<Register />}
                    />
                    <Route
                        path={'/AccountDetails'}
                        element={<AccountDetails />}
                    />
                    <Route
                        path={'/OTPVerification'}
                        element={<OTPVerification />}
                    />
                    <Route
                        path={'/about'}
                        element={<About />}
                    />
                    <Route
                        path={'/company/who-we-are'}
                        element={<WhoWeAre />}
                    />
                    <Route
                        path={'/company/Board-Of-Directors'}
                        element={<BoardOfdirectors />}
                    />
                    <Route
                        path={'/company/Board-Of-Directors/:name'}
                        element={<Directordetails />}
                    />
                    <Route
                        path={'/company/Managementteam'}
                        element={<Managementteam />}
                    />
                    <Route
                        path={'/company/Managementteam/:name'}
                        element={<Teamdetails />}
                    />
                    <Route
                        path={'/company/Mission'}
                        element={<Mission />}
                    />
                    <Route
                        path={'/company/Corevalue'}
                        element={<CoreValue />}
                    />
                    <Route
                        path={'/company/Achievements'}
                        element={<Achievements />}
                    />
                    <Route
                        path={'/company/WhyChooseUs'}
                        element={<WhyChooseUs />}
                    />
                    <Route
                        path={'/Services/Mutualfund'}
                        element={<Mutualfund />}
                    />
                    <Route
                        path={'/Services/InvestmentAdvisory'}
                        element={<InvestmentAdvisory />}
                    />
                    <Route
                        path={'/Services/Equityfund'}
                        element={<Equityfund />}
                    />
                    <Route
                        path={'/Howtoinvest/MutualFundsBasic'}
                        element={<MutualFundsBasic />}
                    />
                    <Route
                        path={'/Howtoinvest/ArticlesPersonalFinance'}
                        element={<ArticlesPersonalFinance />}
                    />
                    <Route
                        path={'/Howtoinvest/DailyMarketOutlook'}
                        element={<DailyMarketOutlook />}
                    />
                    <Route
                        path={'/Howtoinvest/HowToInvest'}
                        element={<HowToInvest />}
                    />
                    <Route
                        path={'/Howtoinvest/Cutoftime'}
                        element={<Cutoftime/>}
                    />
                     <Route
                        path={'/Howtoinvest/Risk'}
                        element={<Risk/>}
                    />
                       <Route
                        path={'/Howtoinvest/Invest'}
                        element={<Invest />}
                    />
                    <Route
                        path={'/Howtoinvest/RiskProfile'}
                        element={<RiskProfile />}
                    />
                  
                    <Route
                        path={'/Howtoinvest/Calculator'}
                        element={<Calculator />}
                    />
                    <Route
                        path={'/Howtoinvest/Videos'}
                        element={<Videos />}
                    />
                    <Route
                        path={'/Downloads'}
                        element={<Downloads />}
                    />
                    <Route
                        path={'/Downloads/Fund-manager-reports'}
                        element={<Fundmanagerreports />}
                    />
                    <Route
                        path={'/Downloads/Regulatorydocuments'}
                        element={<Regulatorydocuments />}
                    />
                    <Route
                        path={'/Downloads/Fundfinancialstatements'}
                        element={<Fundfinancialstatements />}
                    />
                    <Route
                        path={'/Downloads/Announcementsnews'}
                        element={<Announcementsnews />}
                    />
                    <Route
                        path={'/Downloads/Applicationforms'}
                        element={<Applicationforms />}
                    />

                    <Route
                        path={'/Downloads/AssistanceaccountOpeningKyc'}
                        element={<AssistanceaccountOpeningKyc />}
                    />
                    <Route
                        path={'/Downloads/Overseasinvestors'}
                        element={<Overseasinvestors />}
                    />
                    <Route
                        path={'/Downloads/Productbrochures'}
                        element={<Productbrochures />}
                    />
                    <Route
                        path={'/Downloads/Accountopening'}
                        element={<Accountopening />}
                    />
                    <Route
                        path={'/Downloads/Transactionforms'}
                        element={<Transactionforms />}
                    />
                    <Route
                        path={'/Downloads/Other'}
                        element={<Other />}
                    />
                     <Route
                        path={'/Downloads/Forindividual'}
                        element={<Forindividual />}
                    />
                    <Route
                        path={'/Downloads/Forinstitutions'}
                        element={<Forinstitutions/>}
                    />
                     <Route
                        path={'/Downloads/DailyNav'}
                        element={<DailyNav/>}
                    />
                    <Route
                        path={'/Updates'}
                        element={<Updates />}
                    />
                    <Route
                        path={'/News'}
                        element={<News />}
                    />
                    <Route
                        path={'/Help/Contact'}
                        element={<Contact />}
                    />
                    <Route
                        path={'/Help/Faqs'}
                        element={<Faqs />}
                    />
                     <Route
                        path={'/Help/Vedios'}
                        element={<Vedios />}
                    />
                     <Route
                        path={'/Insight&education'}
                        element={<Insighteducation />}
                    />
                </RouteSwitch>

                {/* Routes For Dashboard */}

                <RouteSwitch>
                    <Route
                        path={'/Dashboard/OverView'}
                        element={<OverView />}
                    />
                    <Route
                        path={'/Dashboard/KYC'}
                        element={<KYC />}
                    />
                    <Route
                        path={'/Dashboard/sahulat'}
                        element={<Sahulat />}
                    />
                    <Route
                        path={'/Dashboard/subsequent'}
                        element={<Subsequent />}
                    />
                    <Route
                        path={'/Dashboard/digital-account'}
                        element={<DigitalAcc />}
                    />
                    <Route
                        path={'/Dashboard/RiskProfiler'}
                        element={<RiskProfiler />}
                    />
                    <Route
                        path={'/Dashboard/Investment'}
                        element={<Investment />}
                    />
                    <Route
                        path={'/Dashboard/TaxCalculator'}
                        element={<TaxCalculator />}
                    />
                    <Route
                        path={'/Dashboard/Conversion'}
                        element={<Conversion />}
                    />
                    <Route
                        path={'/Dashboard/Redemption'}
                        element={<Redemption />}
                    />
                    <Route
                        path={'/Dashboard/Redemption/RedemptionForm'}
                        element={<RedemptionForm />}
                    />
                    <Route
                        path={'/Dashboard/UserProfile'}
                        element={<UserProfile />}
                    />
                    <Route
                        path={'/Dashboard/Help'}
                        element={<Help />}
                    />
                     <Route
                        path={'/Dashboard/AccountStatements'}
                        element={<AccountStatements/>}
                    />
                </RouteSwitch>

                <Footer />
            </BrowserRouter>
        </React.Suspense>
    )
}