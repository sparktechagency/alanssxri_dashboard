import { Avatar, Layout, theme } from 'antd';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
// import { RxHamburgerMenu } from "react-icons/rx";
const { Header } = Layout;

interface MainHeaderProps {
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    collapsed: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ setCollapsed, collapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div >
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className=' flex justify-end items-center pr-4  bg-[#fefefe]'>

                    {collapsed ? <RxHamburgerMenu onClick={() => setCollapsed(!collapsed)} className=' text-black w-8 h-8 cursor-pointer hidden' /> : <RxHamburgerMenu onClick={() => setCollapsed(!collapsed)} className=' text-black w-8 h-8 cursor-pointer hidden' />}
                    <div className=' flex items-center gap-6'>
                        <div>
                            <Link className='flex items-center' to={`/notification`}>
                                <div className=' relative mt-[4px]'>
                                    <IoNotificationsOutline className="w-7 h-7 text-primaryColor ">
                                    </IoNotificationsOutline>
                                    <span className="absolute -top-2 -right-[5px] bg-[#0e0e0eab] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold">
                                        10
                                    </span>
                                </div>
                            </Link>
                        </div> 
                        <Link to={`/settings/profile`}>
                            <div className=' flex items-center gap-2 cursor-pointer '>
                                <Avatar src={`https://avatar.iran.liara.run/public/4`} size={40} className=' ring-1 ring-[#1c4587]' />
                                <p className=' text-black font-semibold'>Al Ansari</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </Header>
        </div>
    );
};

export default MainHeader;