import { baseApi } from "../../api/baseApi";


const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getDashboardTotalCount: builder.query({
            query: () => ({
                url: `/dashboard/total_count`,
                method: 'GET',
            }),
        }),

    }),
});

export const {
    useGetDashboardTotalCountQuery,
} = dashboardApi;