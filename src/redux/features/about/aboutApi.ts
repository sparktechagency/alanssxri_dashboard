import { baseApi } from "../../api/baseApi";


const aboutApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllContact: builder.query({
            query: (params) => ({
                url: `/dashboard/get_contact_form`,
                method: 'GET',
                params,
            }),
        }),

        getSubscribe: builder.query({
            query: (params) => ({
                url: `/dashboard/get_subscribe`,
                method: 'GET',
                params,
            }),
        }),

        getAboutCount: builder.query({
            query: (params) => ({
                url: `/dashboard/get_about_count`,
                method: 'GET',
                params,
            }),
            providesTags: ['AboutCount'],
        }),

        updateAboutCount: builder.mutation({
            query: (data) => ({
                url: '/dashboard/update_about_count',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['AboutCount'],
        }),


    }),
});

export const {
    useGetAllContactQuery,
    useGetSubscribeQuery,
    useGetAboutCountQuery,
    useUpdateAboutCountMutation,
} = aboutApi;