import totalEvents from '../../assets/dashboard/totalEvents.svg'
import totalUser from '../../assets/dashboard/totalUser.svg'
import totalUpdates from '../../assets/dashboard/totalUpdates.svg'
import TotalNewsletters from '../../assets/dashboard/TotalNewsletters.svg'
import Updates from '../../components/PagesComponents/Dashboard/Updates';
import Events from '../../components/PagesComponents/Dashboard/Events';


const Dashboard = () => {
    return (
        <div className=' min-h-[100vh]'>
            <div className=' grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-6'>

                <div className='bg-[#fefefe] rounded-lg px-8 py-10 text-center shadow-md'>
                    <h2 className=' mb-4 text-xl font-semibold text-[#4E4E4E]'>Total People</h2>
                    <img className=' mx-auto mb-3 w-14' src={totalUser} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>52,650</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-10 text-center shadow-md'>
                    <h2 className=' mb-4 text-xl font-semibold text-[#4E4E4E]'>Total Updates</h2>
                    <img className=' mx-auto mb-3 w-14' src={totalUpdates} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>156</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-10 text-center shadow-md'>
                    <h2 className=' mb-4 text-xl font-semibold text-[#4E4E4E]'>Total Events</h2>
                    <img className=' mx-auto mb-3 w-14' src={totalEvents} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>17</h2>
                </div>

                <div className='bg-[#fefefe] rounded-lg px-8 py-10 text-center shadow-md'>
                    <h2 className=' mb-4 text-xl font-semibold text-[#4E4E4E]'>Total Newsletters</h2>
                    <img className=' mx-auto mb-3 w-14' src={TotalNewsletters} alt="user" />
                    <h2 className='text-2xl font-semibold text-[#4E4E4E]'>6</h2>
                </div>
            </div>

            <div>
                <Updates></Updates>
                <Events></Events>
            </div>
        </div>
    );
};

export default Dashboard;