/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Table, TableProps } from "antd";
import { CiSearch } from "react-icons/ci";
import totalBalance from '../../assets/income/total-balance.png'
import coin from '../../assets/income/coin.png'


const Income = () => {
    interface Name {
        firstName: string;
        lastName: string;
    }

    interface UserData {
        _id: string;
        name: Name;
        email: string;
        number: number,
        location: string,
        contractStartDate: string,
        contractorType: string,
        paymentType: string,
        amount: number,
        status: string,
        role: string;
    }

    interface UserMeta {
        limit: number;
        total: number;
    }

    interface UserDataSource {
        data: UserData[];
        meta: UserMeta;
    }
    // User data
    const userData: UserDataSource = {
        data: [
            {
                _id: "1",
                name: {
                    firstName: "John",
                    lastName: "Doe",
                },
                email: "john.doe@example.com",
                number: 8852215615,
                location: "Dkaka, Bangladesh",
                contractStartDate: "24/01/2023",
                contractorType: "Gold",
                paymentType: "Online Payment",
                amount: 750,
                status: "Paid",
                role: "User",
            },
            {
                _id: "2",
                name: {
                    firstName: "Jane",
                    lastName: "Smith",
                },
                email: "jane.smith@example.com",
                number: 88452215615,
                location: "Dkaka, Bangladesh",
                contractStartDate: "24/01/2023",
                contractorType: "Platinum",
                paymentType: "Online Payment",
                amount: 532,
                status: "Paid",
                role: "User",
            },
            {
                _id: "3",
                name: {
                    firstName: "Michael",
                    lastName: "Johnson",
                },
                email: "michael.johnson@example.com",
                number: 8852215615,
                location: "Dkaka, Bangladesh",
                contractStartDate: "24/01/2023",
                contractorType: "Dimond",
                paymentType: "Online Payment",
                amount: 150,
                status: "Paid",
                role: "User",
            },
            {
                _id: "4",
                name: {
                    firstName: "Michael",
                    lastName: "Johnson",
                },
                email: "michael.johnson@example.com",
                number: 8852215615,
                location: "Dkaka, Bangladesh",
                contractStartDate: "24/01/2023",
                contractorType: "Dimond",
                paymentType: "Online Payment",
                amount: 500,
                status: "Pending",
                role: "User",
            },
            {
                _id: "5",
                name: {
                    firstName: "Michael",
                    lastName: "Johnson",
                },
                email: "michael.johnson@example.com",
                number: 8852215615,
                location: "Dkaka, Bangladesh",
                contractStartDate: "24/01/2023",
                contractorType: "Dimond",
                paymentType: "Online Payment",
                amount: 1000,
                status: "Pending",
                role: "User",
            }
        ],
        meta: {
            limit: 10,
            total: 3,
        },
    };
    const columns: TableProps<UserData>['columns'] = [
        {
            title: "S No.",
            dataIndex: "id",
            render: (_: any, record: UserData) => <span>{record?._id}</span>,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (_: any, record: UserData) =>
                <div className=' flex items-center gap-2 w-[200px]'>
                    <img
                        src={`https://avatar.iran.liara.run/public/${record?._id}`}
                        alt=""
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                        <span>{record?.name?.firstName} {record?.name?.lastName}</span>
                    </div>
                </div>,
        },
        {
            title: "Contractor Type",
            dataIndex: "contractorType",
            render: (_: any, record: UserData) => <span>{record?.contractorType}</span>,
        },
        {
            title: "Date Of Payment",
            dataIndex: "contractStartDate",
            render: (_: any, record: UserData) => <span>{record?.contractStartDate}</span>,
        },
        {
            title: "Payment Type",
            dataIndex: "paymentType",
            render: (_: any, record: UserData) => <span>{record?.paymentType}</span>,
        },
        {
            title: "Payment Status",
            dataIndex: "status",
            render: (_: any, record: UserData) => <span>{record?.status}</span>,
        },
        {
            title: "Paid Amount",
            dataIndex: "amount",
            render: (_: any, record: UserData) => <span>${record?.amount}</span>,
        },
    ];


    return (
        <div className=" w-full min-h-[100vh] bg-white rounded-lg px-3 py-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
                <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">User Details</h2>
                <div className=" w-[250px]">
                    <Input prefix={<CiSearch className=" w-6 h-6" />} className="w-[250px]" placeholder="Search" />
                </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">

                <div className=" bg-[#42004A] rounded-lg px-5 py-8">
                    <img src={totalBalance} className=" w-14 mb-4" alt="icon" />
                    <h2 className="text-white text-xl xl:text-2xl mb-3">Total Balance</h2>
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold">$2584.54</h2>
                </div>
                <div className=" bg-[#5E095E] rounded-lg px-5 py-8">
                    <img src={coin} className=" w-14 mb-4" alt="icon" />
                    <h2 className="text-white text-xl xl:text-2xl mb-3">Gold-Earned</h2>
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold">$35804.54</h2>
                </div>
                <div className=" bg-[#5E095E80] rounded-lg px-5 py-8">
                    <img src={coin} className=" w-14 mb-4" alt="icon" />
                    <h2 className="text-white text-xl xl:text-2xl mb-3">Platinum-Earned</h2>
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold">$78584.54</h2>
                </div>
                <div className=" bg-[#CDB3CD] rounded-lg px-5 py-8">
                    <img src={coin} className=" w-14 mb-4" alt="icon" />
                    <h2 className="text-white text-xl xl:text-2xl mb-3">Diamond-Earned</h2>
                    <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold">$92584.54</h2>
                </div>

            </div>
            <div className="flex justify-between items-center mt-5">
                <h2 className="text-md md:text-xl font-semibold ">Transaction History</h2>
                <div>
                    <button
                        className="bg-primary rounded-md font-semibold cursor-pointer"
                    >
                        View All
                    </button>
                </div>
            </div>
            <Table
                columns={columns}
                className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                dataSource={userData?.data}
                pagination={false}
                rowKey="_id"
            />
        </div>
    );
};

export default Income;