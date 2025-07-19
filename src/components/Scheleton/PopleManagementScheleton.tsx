import { Skeleton } from "antd";

const PopleManagementScheleton = () => {
    return (
        <div className="min-h-screen py-5 px-10 bg-white rounded">
            <div className="mb-8">
                <Skeleton.Button className="mb-3" active size="large" shape="round" />
                <Skeleton active paragraph={{ rows: 1 }} />
            </div>
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <Skeleton.Avatar active size={160} shape="square" />
                <div className="flex-1">
                    <Skeleton.Input className="mr-4" active style={{ width: 200, marginBottom: 10 }} />
                    <Skeleton.Input active style={{ width: 150, marginBottom: 20 }} />
                    <Skeleton paragraph={{ rows: 4 }} active />
                </div>
            </div>
            <Skeleton active title paragraph={{ rows: 3 }} />
            <Skeleton active title paragraph={{ rows: 3 }} />
            <Skeleton active title paragraph={{ rows: 3 }} />
        </div>
    );
};

export default PopleManagementScheleton;