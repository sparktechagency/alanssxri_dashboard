import { baseApi } from "../../api/baseApi";


const awardsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllAwards: builder.query({
            query: () => ({
                url: `/dashboard/award`,
                method: 'GET',
            }),
            providesTags: ["awards"]
        }),

        createAwards: builder.mutation({
            query: (data) => ({
                url: '/dashboard/award',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["awards"]
        }),

        updateAwards: builder.mutation({
            query: ({ data, id }) => ({
                url: `/dashboard/award/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["awards"]
        }),

        deleteAwards: builder.mutation({
            query: (id) => ({
                url: `/dashboard/award/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["awards"]
        }),

    }),
});

export const {
    useGetAllAwardsQuery,
    useCreateAwardsMutation,
    useUpdateAwardsMutation,
    useDeleteAwardsMutation,
} = awardsApi;