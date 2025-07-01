/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Pagination, Table } from "antd";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import tableContentImage from '../../assets/tableImage.png'
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";


const Sectors = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    console.log(currentPage);
    const pageSize = 10;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    interface DataType {
        id: string,
        title: string,
        description: string,
    }

    const articles: DataType[] = [
        {
            id: "#1233",
            title: "Construction & Infrastructure",
            description: "With experience that spans virtually every sector o..."
        },
        {
            id: "#1233",
            title: "Education",
            description: "From structuring compensation and incentive pack..."
        },
        {
            id: "#1233",
            title: "Employment",
            description: "Al-Ansari & Associates advises international and do..."
        },
        {
            id: "#1233",
            title: "Energy & Natural Resources",
            description: "International and domestic lenders trust Al-Ansari..."
        },
        {
            id: "#1233",
            title: "Healthcare",
            description: "We have advised and provided counsel to major ed..."
        },
        {
            id: "#1233",
            title: "Hospitality & Leisure",
            description: "From structuring compensation and incentive pack..."
        },
        {
            id: "#1233",
            title: "Intellectual Property & Copyright",
            description: "International and domestic lenders trust Al-Ansari..."
        },
        {
            id: "#1233",
            title: "Real Estate & Property",
            description: "Al-Ansari & Associates advises international and do..."
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
                            <MdOutlineModeEdit size={40} className="text-white bg-primaryColor rounded p-2 cursor-pointer" />
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
                <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">Sectors</h2>
                <div className=" w-[250px]">
                    <Input prefix={<CiSearch className=" w-6 h-6" />} className="w-[250px]" placeholder="Search" />
                </div>
            </div>
            <div>
                <Link to={``}><button className=" bg-primaryColor rounded px-5 py-2 text-white flex items-center gap-2 cursor-pointer my-2"><FiPlus size={20} /> Add New</button></Link>
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

export default Sectors;