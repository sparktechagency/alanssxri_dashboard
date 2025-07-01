/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { CiLogout } from 'react-icons/ci';
import { RiSettings2Line, RiUserLine } from 'react-icons/ri';
import { MdListAlt, MdOutlineDashboard } from 'react-icons/md';
import { BsExclamationCircle } from 'react-icons/bs';
import { VscNote } from 'react-icons/vsc';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
}

interface MenuItem {
  key: string;
  children?: MenuItem[];
}

const items: any[] = [
  {
    key: '1',
    icon: <MdOutlineDashboard className='w-6 h-6' />,
    label: <Link className='text-[14px]' to={`/`}>Dashboard</Link>,
  },
  {
    key: '2',
    icon: <RiUserLine className='w-6 h-6' />,
    label: <Link className='text-[14px]' to={`/people-management`}>People Management</Link>,
  },
  {
    key: '3',
    icon: <MdListAlt className='w-6 h-6' />,
    label: <Link className='text-[14px]' to={`/sectors`}>Sectors</Link>,
  },
  {
    key: '4',
    icon: <VscNote className='w-6 h-6' />,
    label: <p className='text-[14px]'>Insights</p>,
    children: [
      { key: "4-1", label: <Link to={`/insights/updates`}>Updates</Link> },
      { key: "4-2", label: <Link to={`/insights/events`}>Events</Link> },
      { key: "4-3", label: <Link to={`/insights/newsletters`}>Newsletters</Link> },
    ]
  },
  {
    key: '5',
    icon: <BsExclamationCircle className='w-6 h-6' />,
    label: <p className='text-[14px]'>About</p>,
    children: [
      { key: "5-1", label: <Link to={`/about/about-us`}>About Us</Link> },
      { key: "5-2", label: <Link to={`/about/awards`}>Awards</Link> },
      { key: "5-3", label: <Link to={`/about/csr`}>CSR</Link> },
    ]
  },
  {
    key: '7',
    icon: <RiSettings2Line className='w-6 h-6' />,
    label: <p className='text-[14px]'>Settings</p>,
    children: [
      { key: "7-1", label: <Link to={`/settings/profile`}>Profile</Link> },
      { key: "7-3", label: <Link to={`/settings/privacy-policy`}>Privacy Policy</Link> },
      { key: "7-4", label: <Link to={`/settings/terms-and-condtion`}>Terms And Condition</Link> },
      { key: "7-5", label: <Link to={`/settings/fraud-alert`}>Fraud Alert</Link> },
      { key: "7-6", label: <Link to={`/settings/disclaimer`}>Disclaimer</Link> },
    ]
  }
];

// Build levelKeys like in your first code
const getLevelKeys = (menuItems: MenuItem[]) => {
  const keyLevels: Record<string, number> = {};
  const traverse = (items: MenuItem[], level = 1) => {
    items.forEach(item => {
      keyLevels[item.key] = level;
      if (item.children) {
        traverse(item.children, level + 1);
      }
    });
  };
  traverse(menuItems);
  return keyLevels;
};

const levelKeys = getLevelKeys(items);

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const onOpenChange = (newOpenKeys: string[]) => {
    const latestOpenKey = newOpenKeys.find(key => !openKeys.includes(key));
    if (latestOpenKey) {
      const sameLevelKeys = newOpenKeys.filter(
        key => key !== latestOpenKey && levelKeys[key] === levelKeys[latestOpenKey]
      );

      const updatedKeys = newOpenKeys
        .filter(key => !sameLevelKeys.includes(key))
        .filter(key => levelKeys[key] <= levelKeys[latestOpenKey]);

      setOpenKeys(updatedKeys);
    } else {
      setOpenKeys(newOpenKeys);
    }
  };

  return (
    <div className='fixed top-0 left-0 bottom-0 bg-[#fefefe]'>
      <Sider className='h-[100vh] w-[300px] bg-[#fefefe]' width={250} collapsedWidth={80} trigger={null} collapsible collapsed={collapsed}>
        <div className='flex justify-center items-center py-7'>
          <img src={logo} className='w-24' />
        </div>

        <Menu
          mode="inline"
          className='px-2 custom-menu'
          defaultSelectedKeys={['1']}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
        />
      </Sider>

      <div className="flex justify-center items-center relative">
        <Link to="/auth/login" className="w-full flex justify-center">
          <div className="absolute bottom-12 w-[80%] py-2 bg-barColor hover:bg-[#f5edd9] shadow-md rounded-lg flex justify-center items-center gap-3 cursor-pointer transition-all duration-200">
            <CiLogout className="w-6 h-6 text-[#222]" />
            <p className="text-base font-medium text-[#222]">Log Out</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
