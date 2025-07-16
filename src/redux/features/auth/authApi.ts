import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        logIn: builder.mutation({
            query: (LogInData) => ({
                url: '/admin/login',
                method: 'POST',
                body: LogInData,
            }),
        }),

        forgetPassword: builder.mutation({
            query: (email) => ({
                url: '/admin/forget-password/send-otp',
                method: 'POST',
                body: email,
            }),
        }),

        verifyEmail: builder.mutation({
            query: (data) => ({
                url: '/admin/verify-otp',
                method: 'POST',
                body: data,
            }),
        }),

        resetAdminPassword: builder.mutation({
            query: (data) => ({
                url: '/admin/reset-password',
                method: 'POST',
                body: data,
            }),
        }),

        changeAdminPassword: builder.mutation({
            query: (data) => ({
                url: '/admin/change-password',
                method: 'POST',
                body: data,
            }),
        }),

    }),
});

export const { useLogInMutation, useForgetPasswordMutation, useVerifyEmailMutation, useResetAdminPasswordMutation, useChangeAdminPasswordMutation } = authApi;