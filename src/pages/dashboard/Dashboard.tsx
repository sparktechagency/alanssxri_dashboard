import totalEvents from '../../assets/dashboard/totalEvents.svg'
import totalUser from '../../assets/dashboard/totalUser.svg'
import totalUpdates from '../../assets/dashboard/totalUpdates.svg'
import TotalNewsletters from '../../assets/dashboard/TotalNewsletters.svg'


import DailyServiceChart from '../../components/PagesComponents/Dashboard/DailyServiceChart'
import MostUsingServicePie from '../../components/PagesComponents/Dashboard/MostUsingServicePie'
import ContractorRequest from '../../components/PagesComponents/Dashboard/ContractorRequest'

const Dashboard = () => {
    return (
        <div className=' min-h-[100vh]'>
            <div className=' grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 '>

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

            <div className=' grid lg:grid-cols-2 gap-8 mt-5' >
                <div className=' bg-white px-5 py-4 rounded-lg'>
                    <h2 className=' mb-4 text-2xl font-semibold text-primaryColor'>Daily Service</h2>
                    <DailyServiceChart></DailyServiceChart>
                </div>
                <div className=' bg-white px-5 py-4 rounded-lg'>
                    <h2 className=' mb-4 text-2xl font-semibold text-primaryColor'>Most Using Services</h2>
                    <div className=' flex justify-center gap-8 items-center mb-4 '>
                        <div className=' '>
                            <div className=' flex items-center gap-2 mb-3'>
                                <div className='bg-[#380538] w-12 h-4'> </div>
                                <p>Elecetric</p>
                            </div>
                            <div className=' flex items-center gap-2'>
                                <div className='bg-[#550855] w-12 h-4'> </div>
                                <p>Plumber</p>
                            </div>
                        </div>
                        <div>
                            <div className=' flex items-center gap-2 mb-3'>
                                <div className='bg-[#8F538F] w-12 h-4'> </div>
                                <p>Cleaner</p>
                            </div>
                            <div className=' flex items-center gap-2'>
                                <div className='bg-[#CDB3CD] w-12 h-4'> </div>
                                <p>Painter</p>
                            </div>
                        </div>

                    </div>
                    <MostUsingServicePie></MostUsingServicePie>
                </div>

            </div>

            <div>
                <ContractorRequest></ContractorRequest>
            </div>

        </div>
    );
};

export default Dashboard;