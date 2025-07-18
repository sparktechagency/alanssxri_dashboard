import { baseApi } from "../../api/baseApi";


const updatesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllUpdates: builder.query({
            query: () => ({
                url: `/dashboard/updates`,
                method: 'GET',
            }),
            providesTags: ["updates"]
        }),

        createUpdates: builder.mutation({
            query: (data) => ({
                url: '/dashboard/updates',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["updates"]
        }),

        updateUpdates: builder.mutation({
            query: ({ data, id }) => ({
                url: `/dashboard/updates/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["updates"]
        }),

        deleteUpdates: builder.mutation({
            query: (id) => ({
                url: `/dashboard/updates/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["updates"]
        }),

    }),
});

export const {
    useGetAllUpdatesQuery,
    useCreateUpdatesMutation,
    useUpdateUpdatesMutation,
    useDeleteUpdatesMutation
} = updatesApi;