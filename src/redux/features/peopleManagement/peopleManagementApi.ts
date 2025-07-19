import { baseApi } from "../../api/baseApi";

const peopleManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllPeopleManagement: builder.query({
            query: () => ({
                url: `/dashboard/person`,
                method: 'GET',
            }),
            providesTags: ["peopleManagement"]
        }),

        createPeopleManagement: builder.mutation({
            query: (data) => ({
                url: '/dashboard/person',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["peopleManagement"]
        }),

        updatePeopleManagement: builder.mutation({
            query: ({ data, id }) => ({
                url: `/dashboard/person/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["peopleManagement"]
        }),

        deletePeopleManagement: builder.mutation({
            query: (id) => ({
                url: `/dashboard/person/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["peopleManagement"]
        }),
    }),
});

export const {
    useGetAllPeopleManagementQuery,
    useCreatePeopleManagementMutation,
    useUpdatePeopleManagementMutation,
    useDeletePeopleManagementMutation
} = peopleManagementApi;