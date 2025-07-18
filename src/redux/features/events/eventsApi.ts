import { baseApi } from "../../api/baseApi";


const eventsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllEvents: builder.query({
            query: () => ({
                url: `/dashboard/events`,
                method: 'GET',
            }),
            providesTags: ["events"]
        }),

        createEvents: builder.mutation({
            query: (data) => ({
                url: '/dashboard/events',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["events"]
        }),

        updateEvents: builder.mutation({
            query: ({ data, id }) => ({
                url: `/dashboard/events/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["events"]
        }),

        deleteEvents: builder.mutation({
            query: (id) => ({
                url: `/dashboard/events/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["events"]
        }),

    }),
});

export const {
    useGetAllEventsQuery,
    useCreateEventsMutation,
    useUpdateEventsMutation,
    useDeleteEventsMutation,
} = eventsApi;