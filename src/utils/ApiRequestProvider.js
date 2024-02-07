import axios from "axios";
import { baseUrl } from "./Config";
import { useDispatch } from "react-redux";
import { updateTokens } from "../reducers/useReducer";

export const POST = async(url, data = {}, headers = {}) => {
    try {
        const res = await axios.post(
            url, 
            data, 
            {
                headers,
                validateStatus: status => {
                    // console.log(status);
                    return status>=200
                }
            }
        );
        return res.data;
    } catch (error) {
        return error;
    }
}

export const PUT = async(url, data = {}, headers = {}) => {
    try {
        const res = await axios.put(
            url, 
            data, 
            {
                headers,
                validateStatus: status => {
                    // console.log(status);
                    return status>=200
                }
            }
        );
        return res.data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

export const GET = async(url, headers = {}) => {
    try {
        const res = await axios.get(
            url,
            {
                headers,
                validateStatus: status => {
                    // console.log(status);
                    return status>=200
                }
            }
        );
        return res.data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

export const DELETE = async(url, headers = {}) => {
    try {
        const res = await axios.delete(
            url,
            {
                headers,
                validateStatus: status => {
                    // console.log(status);
                    return status>=200
                }
            }
        );
        return res.data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}


export const refreshToken = async () => {
  try {
    const response = await axios.post(`${baseUrl}/users/refresh`,{ refresh_token: localStorage.getItem('refresh_token') },);
    const newAccessToken = response.data.data.access_token;
    const newRefreshToken = response.data.data.refresh_token;
    console.log('api provier access token ',response);
    localStorage.setItem('access_token', newAccessToken);
    localStorage.setItem('refresh_token', newRefreshToken);
    // dispatch(updateTokens(response.data.data))
    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};