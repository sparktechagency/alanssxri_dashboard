import { baseApi } from "../../api/baseApi";


const csrApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllCSR: builder.query({
            query: () => ({
                url: `/dashboard/cras`,
                method: 'GET',
            }),
            providesTags: ["csr"]
        }),

        createCSR: builder.mutation({
            query: (data) => ({
                url: '/dashboard/cras',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["csr"]
        }),

        updateCSR: builder.mutation({
            query: ({ data, id }) => ({
                url: `/dashboard/cras/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["csr"]
        }),

        deleteCSR: builder.mutation({
            query: (id) => ({
                url: `/dashboard/cras/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["csr"]
        }),

    }),
});

export const {
    useGetAllCSRQuery,
    useCreateCSRMutation,
    useUpdateCSRMutation,
    useDeleteCSRMutation,
} = csrApi;