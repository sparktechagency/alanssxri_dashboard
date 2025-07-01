import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.svg'
import logo from '../../assets/logo.svg'
// import dashboard from '../../assets/sideBar/dashboard.svg'
// import income from '../../assets/sideBar/income.svg'
// import dashboardActive from '../../assets/sideBar/active-dashboard.svg'
import { CiLogout } from 'react-icons/ci';
// import { useLocation } from 'react-router-dom';

const { Sider } = Layout;

import React from 'react';
import { RiSettings2Line, RiUserLine } from 'react-icons/ri';
import { MdListAlt, MdOutlineDashboard } from 'react-icons/md';
import { BsExclamationCircle } from 'react-icons/bs';
import { VscNote } from 'react-icons/vsc';

interface SidebarProps {
    collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
    // const location = useLocation();


    return (
        <div className='fixed top-0 left-0 bottom-0 bg-[#fefefe] '>
            <Sider className='h-[100vh] w-[300px] bg-[#fefefe]' width={250} collapsedWidth={80} trigger={null} collapsible collapsed={collapsed}>
                <div className=' flex justify-center items-center py-7 '>
                    <img src={logo} className=' w-24' />
                </div>

                <Menu
                    mode="inline"
                    className='px-2 custom-menu'
                    // selectedKeys={[location.pathname]}
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            // icon: <img src={dashboard} className='menu-icon text-primaryColor' />,
                            icon: <MdOutlineDashboard className='w-6 h-6' />,
                            label: <Link className=' text-[16px]' to={`/`}>Dashboard</Link>,
                        },
                        {
                            key: '2',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <RiUserLine className='w-6 h-6' />,
                            label: <Link className=' text-[16px]' to={`/people-management`}>People Management</Link>,
                        },
                        {
                            key: '3',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <MdListAlt className='w-6 h-6' />,
                            label: <Link className=' text-[16px]' to={`/sectors`}>Sectors</Link>,
                        },
                        {
                            key: '4',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <VscNote className='w-6 h-6' />,
                            label: <p className=' text-[16px]'>Insights</p>,
                            children: [
                                {
                                    key: "4-1",
                                    label: <Link className={``} to={`/insights/updates`}>Updates</Link>,
                                },
                                {
                                    key: "4-2",
                                    label: <Link className={``} to={`/insights/events`}>Events</Link>,
                                },
                                {
                                    key: "4-3",
                                    label: <Link className={``} to={`/insights/newsletters`}>Newsletters</Link>,
                                },
                            ]
                        },
                        {
                            key: '5',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <BsExclamationCircle className='w-6 h-6' />,
                            label: <p className=' text-[16px]'>About</p>,
                            children: [
                                {
                                    key: "5-1",
                                    label: <Link className={``} to={`/about/about-us`}>About Us</Link>,
                                },
                                {
                                    key: "5-2",
                                    label: <Link className={``} to={`/about/awards`}>Awards</Link>,
                                },
                                {
                                    key: "5-3",
                                    label: <Link className={``} to={`/about/csr`}>CSR</Link>,
                                },
                            ]
                        },
                        {
                            key: '7',
                            // icon: <img src={location.pathname === '/' ? dashboardActive : dashboard} className='menu-icon' />,
                            icon: <RiSettings2Line className='w-6 h-6' />,
                            label: <p className=' text-[16px]'>Settings</p>,
                            children: [
                                {
                                    key: "7-1",
                                    label: <Link className={``} to={`/settings/profile`}>Profile</Link>,
                                },

                                {
                                    key: "7-3",
                                    label: <Link className={``} to={`/settings/privacy-policy`}>Privacy Policy</Link>,
                                },
                                {
                                    key: "7-4",
                                    label: <Link className={``} to={`/settings/terms-and-condtion`}>Terms And Condition</Link>,
                                },
                            ]
                        },
                    ]}
                />
            </Sider>
            <div className="flex justify-center items-center relative">
                <Link to="/auth/login" className="w-full flex justify-center">
                    <div
                        className="absolute bottom-12 w-[80%] py-2 bg-barColor hover:bg-[#f5edd9] shadow-md rounded-lg flex justify-center items-center gap-3 cursor-pointer transition-all duration-200"
                    >
                        <CiLogout className="w-6 h-6 text-[#222]" />
                        <p className="text-base font-medium text-[#222]">Log Out</p>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Sidebar;