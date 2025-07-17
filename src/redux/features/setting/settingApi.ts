import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        updatePrivacyPolicy: builder.mutation({
            query: (data) => ({
                url: '/dashboard/terms',
                method: 'POST',
                body: data,
            }),
        }),

        getPrivacyPolicy: builder.query({
            query: () => ({
                url: `/dashboard/privacy`,
                method: 'GET',
            }),
        }),

        updateTermsAndCondition: builder.mutation({
            query: (data) => ({
                url: '/dashboard/terms',
                method: 'POST',
                body: data,
            }),
        }),

        getTermsAndCondition: builder.query({
            query: () => ({
                url: `/dashboard/terms`,
                method: 'GET',
            }),
        }),

        updateDisclaimer: builder.mutation({
            query: (data) => ({
                url: '/dashboard/disclaimer',
                method: 'POST',
                body: data,
            }),
        }),

        getDisclaimer: builder.query({
            query: () => ({
                url: `/dashboard/disclaimer`,
                method: 'GET',
            }),
        }),

    }),
});

export const {
    useUpdatePrivacyPolicyMutation,
    useGetPrivacyPolicyQuery,
    useUpdateTermsAndConditionMutation,
    useGetTermsAndConditionQuery,
    useUpdateDisclaimerMutation,
    useGetDisclaimerQuery,
} = authApi;