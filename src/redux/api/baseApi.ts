import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { message } from 'antd';
import { setUser } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.medroyale.net/v1',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as { logInUser: { token?: string } }).logInUser.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithLogoutOnError = async (
    args: Parameters<typeof baseQuery>[0],
    api: Parameters<typeof baseQuery>[1],
    extraOptions: Parameters<typeof baseQuery>[2]
) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
        // Log out user and clear session
        api.dispatch(setUser({ user: null, token: null }));
        message.error('Session expired. Please log in again.');
        window.location.href = '/sign-in';
    }
    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithLogoutOnError,
    tagTypes: [''],
    endpoints: () => ({}),
});
