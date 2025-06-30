/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableProps } from "antd";
import { useState } from "react";
import AddSubscriptionModal from "../../components/PagesComponents/Subscription/AddSubscriptionModal";
import EditSubscriptionModal from "../../components/PagesComponents/Subscription/EditSubscriptionModal";

type SubscriptionPlan = {
    slNo: number;
    subscriptionPlan: string;
    contractorFeePerMonth: string;
    pointsRange: string;
    pointEarnPerSwap: string;
    pointEarnPerPositiveComment: number;
    pointLosePerNegativeComment: number;
};


const Subscriptions: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showEditModal = () => {
        setIsEditModalOpen(true);
    };
    const handleEditOk = () => {
        setIsEditModalOpen(false);
    };
    const handleEditCancel = () => {
        setIsEditModalOpen(false);
    };


    const onFinish = (values: any): void => {
        console.log(values);
    };

    const userData: SubscriptionPlan[] = [
        {
            "slNo": 1,
            "subscriptionPlan": "Gold",
            "contractorFeePerMonth": "$19.99",
            "pointsRange": "0-24,999",
            "pointEarnPerSwap": "20% of product value",
            "pointEarnPerPositiveComment": 5,
            "pointLosePerNegativeComment": 10
        },
        {
            "slNo": 2,
            "subscriptionPlan": "Platinum",
            "contractorFeePerMonth": "$19.99",
            "pointsRange": "25,000-99,999",
            "pointEarnPerSwap": "20% of product value",
            "pointEarnPerPositiveComment": 25,
            "pointLosePerNegativeComment": 25
        },
        {
            "slNo": 3,
            "subscriptionPlan": "Diamond",
            "contractorFeePerMonth": "$19.99",
            "pointsRange": "100,000+",
            "pointEarnPerSwap": "20% of product value",
            "pointEarnPerPositiveComment": 50,
            "pointLosePerNegativeComment": 50
        }
    ]

    const columns: TableProps<SubscriptionPlan>['columns'] = [
        {
            title: "S No.",
            dataIndex: "slNo",
            render: (_: any, record: SubscriptionPlan) => <span>{record?.slNo}</span>,
        },
        {
            title: "Subscription Plan",
            dataIndex: "subscriptionPlan",
            render: (_: any, record: SubscriptionPlan) => <span>{record?.subscriptionPlan}</span>,
        },
        {
            title: "Contractor Fee Per Month",
            dataIndex: "contractorFeePerMonth",
            render: (_: any, record: SubscriptionPlan) => <span>{record?.contractorFeePerMonth}</span>,
        },
        {
            title: "Points Range",
            dataIndex: "pointsRange",
            render: (_: any, record: SubscriptionPlan) => <span>{record?.pointsRange}</span>,
        },
        {
            title: "Point Earn Per Swap",
            dataIndex: "pointEarnPerSwap",
            render: (_: any, record: SubscriptionPlan) => <span>{record?.pointEarnPerSwap}</span>,
        },
        {
            title: "Point Earn Per Positive Comment",
            dataIndex: "pointEarnPerPositiveComment",
            render: (_: any, record: SubscriptionPlan) => <span>{record?.pointEarnPerPositiveComment}</span>,
        },
        {
            title: "Point Earn Per Negative Comment",
            dataIndex: "pointLosePerNegativeComment",
            render: (_: any, record: SubscriptionPlan) => <span>{record?.pointLosePerNegativeComment}</span>,
        },
        {
            title: "Action",
            render: (_: any, record: SubscriptionPlan) => (
                <div className="flex items-center">
                    <button onClick={showEditModal} className=" text-primaryColor cursor-pointer">
                        Edit
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className=" min-h-screen">
            <div className="flex justify-between items-center mt-5">
                <h2 className="text-md md:text-xl font-semibold ">Subscription</h2>
                <div>
                    <button
                        onClick={showModal}
                        className="rounded-lg font-semibold cursor-pointer bg-primaryColor text-white px-3 py-2"
                    >
                        Add Subscription
                    </button>
                    <AddSubscriptionModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></AddSubscriptionModal>
                </div>
            </div>
            <Table
                columns={columns}
                className="mt-5 overflow-x-scroll xl:overflow-auto w-full bg-white rounded-lg"
                dataSource={userData}
                pagination={false}
                rowKey="_id"
            />
            <EditSubscriptionModal isModalOpen={isEditModalOpen} handleOk={handleEditOk} handleCancel={handleEditCancel}></EditSubscriptionModal>
        </div>
    );
};

export default Subscriptions;
