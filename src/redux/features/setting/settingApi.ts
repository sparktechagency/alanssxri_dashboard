import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        updatePrivacyPolicy: builder.mutation({
            query: (data) => ({
                url: '/dashboard/privacy',
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["privacy"]
        }),

        getPrivacyPolicy: builder.query({
            query: () => ({
                url: `/dashboard/privacy`,
                method: 'GET',
            }),
            providesTags: ["privacy"]
        }),

        updateTermsAndCondition: builder.mutation({
            query: (data) => ({
                url: '/dashboard/terms',
                method: 'PUT',
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
                method: 'PUT',
                body: data,
            }),
        }),

        getDisclaimer: builder.query({
            query: () => ({
                url: `/dashboard/disclaimer`,
                method: 'GET',
            }),
        }),

        updateAboutUs: builder.mutation({
            query: (data) => ({
                url: '/dashboard/about_us',
                method: 'PUT',
                body: data,
            }),
        }),

        getAboutUs: builder.query({
            query: () => ({
                url: `/dashboard/about_us`,
                method: 'GET',
            }),
        }),

        updateFraud: builder.mutation({
            query: (data) => ({
                url: '/dashboard/fraud',
                method: 'PUT',
                body: data,
            }),
        }),

        getFraud: builder.query({
            query: () => ({
                url: `/dashboard/fraud`,
                method: 'GET',
            }),
        }),

        getSocialMedia: builder.query({
            query: () => ({
                url: `/dashboard/social_media`,
                method: 'GET',
            }),
            providesTags: ['SocialMedia'],
        }),

        updateSocialMedia: builder.mutation({
            query: (data) => ({
                url: '/dashboard/social_media',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['SocialMedia'],
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
    useUpdateAboutUsMutation,
    useGetAboutUsQuery,
    useUpdateFraudMutation,
    useGetFraudQuery,
    useGetSocialMediaQuery,
    useUpdateSocialMediaMutation,
} = authApi;