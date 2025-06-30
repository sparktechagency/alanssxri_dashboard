/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableProps } from "antd";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditCategoryModal from "./EditCategoryModal";

type Idata = {
    id: number,
    category: string,
}
const Category = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const data: Idata[] = [
        {
            id: 1,
            category: "Electronics",
        },
        {
            id: 2,
            category: "Plumber",
        },
        {
            id: 3,
            category: "Cleaner",
        },
    ]

    const columns: TableProps<Idata>['columns'] = [
        {
            title: "S No.",
            dataIndex: "id",
            render: (_: any, record: Idata) => <span>{record?.id}</span>,
        },
        {
            title: "Category",
            dataIndex: "category",
            align: 'center',
            render: (_: any, record: Idata) => <span>{record?.category}</span>,
        },
        {
            title: "Image",
            dataIndex: "image",
            align: 'center',
            render: () =>
                <div className=" flex justify-center">
                    <img className="w-20" src="https://metropha.com/wp-content/uploads/2018/09/Metro-Plumbing-_-6-Characteristics-That-An-Emergency-Plumber-In-Chattanooga-TN-Must-Have.jpg" alt="" />
                </div>,
        },
        {
            title: "Action",
            dataIndex: "action",
            align: 'right',
            render: () =>
                <div className=" flex justify-end">
                    <div className=' flex items-center gap-2'>
                        <button onClick={showModal} className=" bg-primaryColor p-1 rounded cursor-pointer"><MdOutlineModeEdit className="w-6 h-6 text-white" /></button>
                        <button className=" bg-red-600 p-1 rounded cursor-pointer"><RiDeleteBin6Line className="w-6 h-6 text-white" /></button>
                    </div>
                </div>

        },

    ];

    return (
        <div>
            <Table
                columns={columns}
                className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                dataSource={data}
                pagination={false}
                rowKey="_id"
            />
            <EditCategoryModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></EditCategoryModal>
        </div>
    );
};

export default Category;