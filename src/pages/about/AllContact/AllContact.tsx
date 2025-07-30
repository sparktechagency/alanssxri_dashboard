/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination, Table } from "antd";
import { useState } from "react";
import { useGetAllContactQuery } from "../../../redux/features/about/aboutApi";

const AllContact = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    console.log(currentPage);
    const pageSize = 10;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    const { data: contact } = useGetAllContactQuery({ page: currentPage, limit: pageSize })

    interface DataType {
        _id: string,
        title: string,
        description: string,
        image: string,
    }

    const columns = [
        {
            title: "S No.",
            render: (_: any, __: DataType, index: number) => <div>{index + 1}</div>,
        },
        {
            title: "Email",
            dataIndex: "email",
            render: (email: string) => <div className="w-auto 2xl:w-[260px]">{email}</div>,
        },
        {
            title: "Message",
            dataIndex: "message",
            render: (message: string) => <div>{message}</div>,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            render: (phone: string) => <div>{phone}</div>,
        }
    ];

    return (
        <div className="bg-white p-5 rounded-lg shadow-md mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-5">
                <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">All Contact</h2>
            </div>
            <div className=" min-h-[70vh]">
                <Table
                    columns={columns}
                    className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                    dataSource={contact?.data?.data}
                    pagination={false}
                    rowKey="_id"
                />
            </div>
            <div className=" mt-8 flex flex-col md:flex-row justify-between items-center">

                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={contact?.data?.meta?.total}
                    onChange={handlePageChange}
                />

            </div>
        </div>
    );
};

export default AllContact;