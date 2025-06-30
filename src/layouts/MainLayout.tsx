import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { Layout } from 'antd';
import MainHeader from "../components/LayoutsComponents/MainHeader";
import Sidebar from "../components/LayoutsComponents/Sidebar";

const { Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);


    return (
        <div className=" ">
            {/* in the layout bg color is setup for not to show the animation delay make sure the menu color and this color are same */}
            <Layout className=" ">
                <Sidebar collapsed={collapsed} ></Sidebar>
                <Layout
                    style={{
                        marginLeft: collapsed ? 80 : 250,
                        transition: 'margin-left 0.2s ease',
                    }}
                    className={``}>
                    {/* my header */}
                    <MainHeader setCollapsed={setCollapsed} collapsed={collapsed}></MainHeader>
                    <Content
                        className="p-5 min-h-[100vh] bg-barColor"
                        style={{}}
                    >
                        {/* my content */}
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default MainLayout;