/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import tableContentImage from '../../../assets/tableImage.png'

const Events = () => {

    interface DataType {
        id: string,
        title: string,
        description: string,
    }

    const articles: DataType[] = [
        {
            id: "#1233",
            title: "Qatar and the Brave New World of Digital Assets",
            description: "With the recent announcement of the Qatar ..."
        },
        {
            id: "#1223",
            title: "Termination of Fixed Term Contracts on Notice",
            description: "Qatar Employment Law Developments pursuant to Law No...."
        },
        {
            id: "#1243",
            title: "Article on the new Judicial-Enforcement Law 2024",
            description: "A Detailed Overview of Law No. 4 of 2024 on Judicial Enforcement..."
        }
    ];
    const columns = [
        {
            title: "S No.",
            dataIndex: "id",
            render: (_: any, record: DataType) => <div>{record?.id}</div>,
        },
        {
            title: "Title",
            dataIndex: "title",
            render: (_: any, record: DataType) => <div>{record?.title}</div>,
        },
        {
            title: "Description",
            dataIndex: "description",
            render: (_: any, record: DataType) => <div>{record?.description}</div>,
        },
        {
            title: "Image",
            dataIndex: "image",
            render: () => <div>
                <img src={tableContentImage} className=" w-20" alt="image" />
            </div>,
        },
        {
            title: "Action",
            render: () => (
                <div className="">
                    <div className="flex items-center gap-3">

                        <Link to={`/people-management/edit-person`}><MdOutlineModeEdit size={40} className="text-white bg-primaryColor rounded p-2 cursor-pointer" /></Link>
                        <RiDeleteBin6Line size={40} className="text-white bg-red-600 rounded p-2 cursor-pointer" />

                    </div>
                </div>
            ),
        },
    ];


    return (
        <div className="bg-white p-5 rounded-lg  shadow-md">
            <div className=" flex justify-between items-center">
                <h2 className=" text-xl font-semibold">Events</h2>
                <Link to={`/insights/events`}><p className=" text-lg text-primaryColor cursor-pointer">View All</p></Link>
            </div>
            <div>
                <Table
                    columns={columns}
                    className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                    dataSource={articles}
                    pagination={false}
                    rowKey="_id"
                />
            </div>
        </div>
    );
};

export default Events;