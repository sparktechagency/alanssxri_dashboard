/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification, Popconfirm, Table } from "antd";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import NewNewslettersModal from "../../../components/PagesComponents/Insights/Newsletters/NewNewslettersModal";
import EditNewslettersModal from "../../../components/PagesComponents/Insights/Newsletters/EditNewslettersModal";
import { useDeleteNewslettersMutation, useGetAllNewslettersQuery } from "../../../redux/features/newsletters/newslettersApi";

const Newsletters = () => {
    // const [currentPage, setCurrentPage] = useState<number>(1);
    const [api, contextHolder] = notification.useNotification();
    // const pageSize = 10;
    // const handlePageChange = (page: number) => {
    //     setCurrentPage(page);
    // };

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

    const { data } = useGetAllNewslettersQuery(undefined);

    const [deleteNewsletters] = useDeleteNewslettersMutation();

    const confirm = (id: string) => {
        deleteNewsletters(id)
            .unwrap()
            .then(() => {
                api.success({
                    message: "Deleted Successfully!",
                    description: "Newsletters Deleted.",
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
            render: (title: string) => <div>{title}</div>,
        },
        {
            title: "Description",
            dataIndex: "description",
            render: (desc: string) => <div>{desc}</div>,
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (image: string) => (
                <div>
                    <img src={image} className="w-20" alt="award" />
                </div>
            ),
        },
        {
            title: "Action",
            render: (record: DataType) => (
                <div className="flex items-center gap-3">
                    <MdOutlineModeEdit onClick={() => showEditModal(record)} size={40} className="text-white bg-primaryColor rounded p-2 cursor-pointer" />
                    <Popconfirm
                        title="Delete the newsletters"
                        description="Are you sure to delete newsletters?"
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
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-5">
                <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">Newsletters</h2>
                {/* <div className=" w-[250px]">
                    <Input prefix={<CiSearch className=" w-6 h-6" />} className="w-[250px]" placeholder="Search" />
                </div> */}
            </div>
            <div>
                <button onClick={showModal} className=" bg-primaryColor rounded px-5 py-2 text-white flex items-center gap-2 cursor-pointer my-2"><FiPlus size={20} /> New Newsletters</button>
            </div>
            <NewNewslettersModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></NewNewslettersModal>
            <div>
                <Table
                    columns={columns}
                    className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                    dataSource={data?.data}
                    pagination={false}
                    rowKey="_id"
                />
            </div>
            <EditNewslettersModal isModalOpen={isModalEditOpen} handleOk={handleEditOk} handleCancel={handleEditCancel} newsletters={selectedItem}></EditNewslettersModal>
            {/* <div className=" mt-8 flex flex-col md:flex-row justify-between items-center">
                <div>
                    <p className=" text-lg text-black mb-5 md:mb-0">Showing 1-11 out of  1239</p>
                </div>

                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={50}
                    onChange={handlePageChange}
                />
            </div> */}
        </div>
    );
};

export default Newsletters;