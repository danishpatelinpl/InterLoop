import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import { GET } from '../utils/ApiRequestProvider.js'
import { baseUrl } from '../utils/Config.js'
// import { updateStatus } from "./actions"

const initialState = {
}

const userReducer = createSlice({
    name: 'person',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            Cookies.set('user', JSON.stringify(action.payload));
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.value = action.payload
        },
        updateTokens: (state, action) => {
            state.tokens = action.payload
        },
        updateKYC: (state, action) => {
            Cookies.set('kycData', JSON.stringify(action.payload));
            localStorage.setItem('kycData', JSON.stringify(action.payload))
            state.kycData = action.payload
        },
        updateKYC2: (state, action) => {
            Cookies.set('kycData2', JSON.stringify(action.payload));
            localStorage.setItem('kycData2', JSON.stringify(action.payload))
            state.kycData2 = action.payload
        },
        updateRegisteredBanks: (state, action) => {
            localStorage.setItem('bank',JSON.stringify(action.payload))
            state.registeredBanks = action.payload
        },
        updateUserBankList: (state, action) => {
            state.userBankList = action.payload
        },
        updateHoldings: (state, action) => {
            state.value = {
                ...state.value,
                holdings: action.payload
            }
        },
        updateCdcToken: (state, action) => {
            state.cdcToken = action.payload
        },
        updateFunds: (state, action) => {
            state.fundsList = action.payload
        },
        updateAccount: (state, action) => {
            state.useraccount = action.payload
        },
    }
})


export const { updateFunds, updateUser, updateKYC, updateKYC2, updateTokens, updateRegisteredBanks, updateUserBankList, updateHoldings, updateCdcToken,updateAccount } = userReducer.actions
export default userReducer.reducer