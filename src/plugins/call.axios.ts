/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from 'axios';

interface CallAxiosAPI {
    url: string;
    method: Method;
    data?: any;
    headers?: any;
    params?: any;
}

const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://movie-backend-test.herokuapp.com/api/'
        : 'http://localhost:8000/api/';

export const callAxios = ({
    url,
    method,
    data,
    headers,
    params,
}: CallAxiosAPI) => {
    const config: AxiosRequestConfig<any> = {
        method: method || 'GET',
        url: `${baseUrl}${url}`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            ...headers,
        },
        data,
        params,
    };
    return axios(config)
        .then((response) => response.data)
        .catch((error) => {
            console.log('error', {
                error,
            });
            return {
                status: 'error',
                message: 'Something went wrong',
            };
        });
};
