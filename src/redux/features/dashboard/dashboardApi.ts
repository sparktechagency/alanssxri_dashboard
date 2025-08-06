import { baseApi } from "../../api/baseApi";


const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getDashboardTotalCount: builder.query({
            query: () => ({
                url: `/dashboard/total_count`,
                method: 'GET',
            }),
        }),

        getupdateHomeContent: builder.query({
            query: () => ({
                url: `/dashboard/get_content`,
                method: 'GET',
            }),
            providesTags: ['updateHomeContent'],
        }),

        updateupdateHomeContent: builder.mutation({
            query: (data) => ({
                url: '/dashboard/update_content',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['updateHomeContent'],
        }),
    }),
});

export const {
    useGetDashboardTotalCountQuery,
    useGetupdateHomeContentQuery,
    useUpdateupdateHomeContentMutation,
} = dashboardApi;