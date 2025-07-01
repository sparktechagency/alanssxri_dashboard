/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Pagination, Table } from "antd";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import tableContentImage from '../../../assets/tableImage.png'
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import AddCSRModal from "../../../components/PagesComponents/About/CSR/AddCSRModal";
import EditCSRModal from "../../../components/PagesComponents/About/CSR/EditCSRModal";


const CSR = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    console.log(currentPage);
    const pageSize = 10;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

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
    const showEditModal = () => {
        setIsModaEditlOpen(true);
    };
    const handleEditOk = () => {
        setIsModaEditlOpen(false);
    };
    const handleEditCancel = () => {
        setIsModaEditlOpen(false);
    };

    interface DataType {
        id: string,
        title: string,
        description: string,
    }

    const articles: DataType[] = [
        {
            id: "#1233",
            title: "Legal Education & Reforms",
            description: "We are proud to provide pro bono advisory services "
        },
        {
            id: "#1233",
            title: "Pro Bono",
            description: "In 2015, our firm won “Middle East M&A Deal of the Year"
        },
        {
            id: "#1233",
            title: "Legal Education & Reforms",
            description: "Al-Ansari & Associates advises international and do..."
        },
        {
            id: "#1233",
            title: "Pro Bono",
            description: "We are proud to provide pro bono advisory services "
        },
        {
            id: "#1233",
            title: "Legal Education & Reforms",
            description: "In 2015, our firm won “Middle East M&A Deal of the Year"
        },
        {
            id: "#1233",
            title: "Pro Bono",
            description: "In 2015, our firm won “Middle East M&A Deal of the Year"
        },
        {
            id: "#1233",
            title: "Legal Education & Reforms",
            description: "In 2015, our firm won “Middle East M&A Deal of the Year"
        },
        {
            id: "#1233",
            title: "Legal Education & Reforms",
            description: "In 2015, our firm won “Middle East M&A Deal of the Year"
        },
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

                        {/* <Link to={`/people-management/edit-person`}> */}
                        <MdOutlineModeEdit onClick={showEditModal} size={40} className="text-white bg-primaryColor rounded p-2 cursor-pointer" />
                        {/* </Link> */}
                        <RiDeleteBin6Line size={40} className="text-white bg-red-600 rounded p-2 cursor-pointer" />

                    </div>
                </div>
            ),
        },
    ];


    return (
        <div className="bg-white p-5 rounded-lg  shadow-md mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-5">
                <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">CSR</h2>
                <div className=" w-[250px]">
                    <Input prefix={<CiSearch className=" w-6 h-6" />} className="w-[250px]" placeholder="Search" />
                </div>
            </div>
            <div>
                <button onClick={showModal} className=" bg-primaryColor rounded px-5 py-2 text-white flex items-center gap-2 cursor-pointer my-2"><FiPlus size={20} /> New CSR</button>
            </div>
            <AddCSRModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></AddCSRModal>
            <div>
                <Table
                    columns={columns}
                    className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                    dataSource={articles}
                    pagination={false}
                    rowKey="_id"
                />
            </div>

            <EditCSRModal isModalOpen={isModalEditOpen} handleOk={handleEditOk} handleCancel={handleEditCancel}></EditCSRModal>

            <div className=" mt-8 flex flex-col md:flex-row justify-between items-center">
                <div>
                    <p className=" text-lg text-black mb-5 md:mb-0">Showing 1-11 out of  1239</p>
                </div>

                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={50}
                    onChange={handlePageChange}
                />

            </div>
        </div>
    );
};

export default CSR;