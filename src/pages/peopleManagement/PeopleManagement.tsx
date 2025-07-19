/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Pagination, Table } from "antd";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { MdOutlineModeEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useGetAllPeopleManagementQuery } from "../../redux/features/peopleManagement/peopleManagementApi";

interface UserData {
    _id: number,
    profile_image: string,
    fullName: string,
    position: string,
    email: string,
    phoneNumber: string
}


const PeopleManagement: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const pageSize = 10;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const { data } = useGetAllPeopleManagementQuery(undefined);
    console.log(data?.data);

    // const onFinish = (values: any): void => {
    //     console.log(values);
    // };

    // Define columns with types
    const columns = [
        {
            title: "S No.",
            dataIndex: "id",
            render: (_: any, record: UserData, index: number) => <span>{index + 1}</span>,
        },
        {
            title: "Name",
            dataIndex: "fullName",
            render: (_: any, record: UserData) =>
                <div className='flex items-center gap-2 w-[200px]'>
                    <img
                        src={`http://10.0.60.118:5006${record?.profile_image}`}
                        alt=""
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                        <span>{record?.fullName}</span>
                    </div>
                </div>,
        },
        {
            title: "Position",
            dataIndex: "position",
            render: (_: any, record: UserData) => <span>{record?.position}</span>,
        },
        {
            title: "Email",
            dataIndex: "email",
            render: (_: any, record: UserData) => <span>{record?.email}</span>,
        },
        {
            title: "Contact Number",
            dataIndex: "phone",
            render: (_: any, record: UserData) => <span>{record?.phoneNumber}</span>,
        },
        {
            title: "Details",
            render: (record: UserData) => (
                <div className="">
                    <Link to={`/people-management/view-details/${record?._id}`}>
                        <MdOutlineRemoveRedEye size={40} className="text-white bg-[#386e93] rounded p-2 cursor-pointer" />
                    </Link>
                </div >
            ),
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
        <div className="  min-h-[100vh] ">
            <div className="bg-white p-5 rounded">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-5">
                    <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">People Management</h2>
                    <div className=" w-[250px]">
                        <Input prefix={<CiSearch className=" w-6 h-6" />} className="w-[250px]" placeholder="Search" />
                    </div>
                </div>
                <div>
                    <Link to={`/people-management/add-new`}><button className=" bg-primaryColor rounded px-5 py-2 text-white flex items-center gap-2 cursor-pointer my-2"><FiPlus size={20} /> Add New</button></Link>
                </div>

                <Table
                    columns={columns}
                    className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                    dataSource={data?.data}
                    pagination={false}
                    rowKey="_id"
                />
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
        </div>
    );
};

export default PeopleManagement;
