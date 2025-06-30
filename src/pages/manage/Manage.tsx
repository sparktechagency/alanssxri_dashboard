import { useState } from "react";
import Category from "../../components/PagesComponents/Manage/Category";
import Materials from "../../components/PagesComponents/Manage/Materials";
import AddCategoryModal from "../../components/PagesComponents/Manage/AddCategoryModal";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";


type Tab = "category" | "materials";

const Manage = () => {
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
    const [activeTab, setActiveTab] = useState<Tab>("category");


    return (
        <div className=" bg-white rounded-md px-3 py-4 min-h-screen">
            <div className=" mb-5">
                <h2 className="text-md md:text-xl font-semibold ">Subscription</h2>

            </div>
            <div className=" flex justify-between gap-4">
                <div className=" flex gap-4">
                    <button
                        onClick={() => setActiveTab("category")}
                        className={`cursor-pointer px-8 py-2 rounded-md  ${activeTab === "category"
                            ? "text-primary bg-primaryColor text-white"
                            : " border border-primaryColor"
                            }`}
                    >
                        Category
                    </button>
                    <button
                        onClick={() => setActiveTab("materials")}
                        className={`cursor-pointer px-8 py-2 rounded-md  ${activeTab === "materials"
                            ? "text-primary bg-primaryColor text-white"
                            : " border border-primaryColor"
                            }`}
                    >
                        Materials
                    </button>
                </div>
                <div>
                    {
                        activeTab === "category" ? <button onClick={showModal} className=" bg-primaryColor py-2 px-4 rounded-md cursor-pointer text-white">+ Add</button> :
                            <div className=" w-[250px]">
                                <Input prefix={<CiSearch className=" w-6 h-6" />} className="w-[250px]" placeholder="Search" />
                            </div>
                    }
                </div>
                <AddCategoryModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></AddCategoryModal>
            </div>
            {activeTab === "category" && <Category />}
            {activeTab === "materials" && <Materials />}
        </div>
    );
};

export default Manage;