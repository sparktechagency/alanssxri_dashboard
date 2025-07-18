import { baseApi } from "../../api/baseApi";


const newslettersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllNewsletters: builder.query({
            query: () => ({
                url: `/dashboard/newsletters`,
                method: 'GET',
            }),
            providesTags: ["newsletters"]
        }),

        createNewsletters: builder.mutation({
            query: (data) => ({
                url: '/dashboard/newsletters',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["newsletters"]
        }),

        updateNewsletters: builder.mutation({
            query: ({ data, id }) => ({
                url: `/dashboard/newsletters/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["newsletters"]
        }),

        deleteNewsletters: builder.mutation({
            query: (id) => ({
                url: `/dashboard/newsletters/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["newsletters"]
        }),

    }),
});

export const {
    useGetAllNewslettersQuery,
    useCreateNewslettersMutation,
    useUpdateNewslettersMutation,
    useDeleteNewslettersMutation
} = newslettersApi;