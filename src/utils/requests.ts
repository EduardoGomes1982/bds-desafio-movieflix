import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import qs from "qs";
import history from "./history";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "https://movieflix-devsuperior.herokuapp.com";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "myclientid";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "myclientsecret";
const basicHeader = () => "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);

type Role = "ROLE_MEMBER" | "ROLE_VISITOR";

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

type LoginData = {
    username: string;
    password: string;
};

type LoginResponse = {
    access_token: string;
    tokne_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
};

const tokenKey: string = "authData";

export const requestBackendLogin = (loginData: LoginData): Promise<AxiosResponse<any, any>> => {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: basicHeader()
    };

    const data = qs.stringify({
        ...loginData,
        grant_type: "password"
    });

    return axios({ method: "POST", baseURL: BASE_URL, url: "/oauth/token", data, headers });
};

export const saveAuthData = (data: LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(data));
};

export const getAuthData = () => {
    const authData = localStorage.getItem(tokenKey) ?? "{}";
    return JSON.parse(authData) as LoginResponse;
};

export const removeAuthData = () => {
    localStorage.removeItem(tokenKey);
};

export const getTokenData = (): TokenData | undefined => {
    try {
        return jwtDecode(getAuthData().access_token) as TokenData;
    } catch (error) {
        return undefined;
    }
};

export const isAuthenticated = (): boolean => {
    const tokenData = getTokenData();
    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
};

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = { Authorization: `Bearer ${getAuthData().access_token}` };
    return axios({ ...config, baseURL: BASE_URL, headers });
};

axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
    if (response.status === 401 || response.status === 403)
        history.push("/");

    return response;
}, function(error) {
    return Promise.reject(error);
});
