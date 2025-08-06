import totalEvents from '../../assets/dashboard/totalEvents.svg'
import totalUser from '../../assets/dashboard/totalUser.svg'
import totalUpdates from '../../assets/dashboard/totalUpdates.svg'
import TotalNewsletters from '../../assets/dashboard/TotalNewsletters.svg'
import Updates from '../../components/PagesComponents/Dashboard/Updates';
import Events from '../../components/PagesComponents/Dashboard/Events';
import { useGetDashboardTotalCountQuery } from '../../redux/features/dashboard/dashboardApi';
import HomePageContent from '../../components/PagesComponents/Dashboard/HomePageContent';


const Dashboard = () => {
    const { data } = useGetDashboardTotalCountQuery(undefined);
    return (
        <div className=' min-h-[100vh]'>
            <div className=' grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-6'>

                <div className='bg-[#fefefe] rounded-lg px-8 py-10 text-center shadow-md'>
                    <h2 className=' mb-4 text-xl font-semibold text-[#4E4E4E]'>Total People</h2>
                    <img className=' mx-auto mb-3 w-14' src={totalUser} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>{data?.data?.count?.goldUsers}</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-10 text-center shadow-md'>
                    <h2 className=' mb-4 text-xl font-semibold text-[#4E4E4E]'>Total Updates</h2>
                    <img className=' mx-auto mb-3 w-14' src={totalUpdates} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>{data?.data?.count?.totalUpdates}</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-10 text-center shadow-md'>
                    <h2 className=' mb-4 text-xl font-semibold text-[#4E4E4E]'>Total Events</h2>
                    <img className=' mx-auto mb-3 w-14' src={totalEvents} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>{data?.data?.count?.totalEvents}</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-10 text-center shadow-md'>
                    <h2 className=' mb-4 text-xl font-semibold text-[#4E4E4E]'>Total Newsletters</h2>
                    <img className=' mx-auto mb-3 w-14' src={TotalNewsletters} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>{data?.data?.count?.totalNewsletters}</h2>
                </div>
            </div>

            <div>
                <Updates></Updates>
                <Events></Events>
                <HomePageContent></HomePageContent>
            </div>
        </div>
    );
};

export default Dashboard;