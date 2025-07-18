import { baseApi } from "../../api/baseApi";


const sectorsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllSectors: builder.query({
            query: () => ({
                url: `/dashboard/sector`,
                method: 'GET',
            }),
            providesTags: ["sectors"]
        }),

        createSectors: builder.mutation({
            query: (data) => ({
                url: '/dashboard/sector',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["sectors"]
        }),

        updateSectors: builder.mutation({
            query: ({ data, id }) => ({
                url: `/dashboard/sector/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["sectors"]
        }),

        deleteSectors: builder.mutation({
            query: (id) => ({
                url: `/dashboard/sector/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["sectors"]
        }),

    }),
});

export const {
    useGetAllSectorsQuery,
    useCreateSectorsMutation,
    useUpdateSectorsMutation,
    useDeleteSectorsMutation
} = sectorsApi;