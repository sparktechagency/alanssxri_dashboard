/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification, Popconfirm, Table } from "antd";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDeleteUpdatesMutation, useGetAllUpdatesQuery } from "../../../redux/features/updates/updatesApi";
import EditUpdateModal from "../Insights/Updates/EditUpdateModal";

const Updates = () => {
    const [api, contextHolder] = notification.useNotification();

    const [isModalEditOpen, setIsModaEditlOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const showEditModal = (data: any) => {
        setIsModaEditlOpen(true);
        setSelectedItem(data)
    };
    const handleEditOk = () => {
        setIsModaEditlOpen(false);
    };
    const handleEditCancel = () => {
        setIsModaEditlOpen(false);
    };

    interface DataType {
        _id: string,
        title: string,
        description: string,
    }

    const { data } = useGetAllUpdatesQuery(undefined);

    const [deleteUpdates] = useDeleteUpdatesMutation();

    const confirm = (id: string) => {
        console.log('sure to delete award?', id);
        deleteUpdates(id)
            .unwrap()
            .then(() => {
                api.success({
                    message: "Deleted Successfully!",
                    description: "Award Deleted.",
                    placement: "topRight",
                });;
            })
            .catch((error) => {
                api.error({
                    message: error?.data?.message || "Deletion failed",
                    description: "Something went wrong!",
                    placement: "topRight",
                });
            });
    };

    const columns = [
        {
            title: "S No.",
            render: (_: any, __: DataType, index: number) => <div>{index + 1}</div>,
        },
        {
            title: "Title",
            dataIndex: "title",
            render: (title: string) => <div className="w-auto 2xl:w-[260px]">{title}</div>,
        },
        {
            title: "Description",
            dataIndex: "description",
            render: (desc: string) => <div>{desc.slice(0, 100)}...</div>,
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (image: string) => (
                <div>
                    <img src={`https://backend.alansarilaw.com${image}`} className="w-20 h-14 object-cover" alt="award" />
                </div>
            ),
        },
        {
            title: "Action",
            render: (record: DataType) => (
                <div className="flex items-center gap-3">
                    <MdOutlineModeEdit onClick={() => showEditModal(record)} size={40} className="text-white bg-primaryColor rounded p-2 cursor-pointer" />
                    <Popconfirm
                        title="Delete the update"
                        description="Are you sure to delete update?"
                        onConfirm={() => confirm(record?._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <RiDeleteBin6Line size={40} className="text-white bg-red-600 rounded p-2 cursor-pointer" />
                    </Popconfirm>

                </div>
            ),
        },
    ];

    return (
        <div className="bg-white p-5 rounded-lg  shadow-md mb-6">
            {contextHolder}
            <div className=" flex justify-between items-center">
                <h2 className=" text-xl font-semibold">Updates</h2>
                <Link to={`/insights/updates`}><p className=" text-lg text-primaryColor cursor-pointer">View All</p></Link>
            </div>
            <div>
                <EditUpdateModal isModalOpen={isModalEditOpen} handleOk={handleEditOk} handleCancel={handleEditCancel} update={selectedItem}></EditUpdateModal>
                <Table
                    columns={columns}
                    className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                    dataSource={data?.data?.slice(0, 3)}
                    pagination={false}
                    rowKey="_id"
                />
            </div>
        </div>
    );
};

export default Updates;