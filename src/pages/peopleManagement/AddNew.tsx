/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Upload } from "antd";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
// import { useRoutes } from "react-router-dom";


const AddNew = () => {
    // const router = useRoutes();
    const [profilePic, setProfilePic] = useState<File | null>(null);

    const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : null;
    const handleProfilePicUpload = (e: any) => {
        setProfilePic(e.file);
    };

    const handleSubmit = () => {
    };

    return (
        <div className=" min-h-screen">
            <div className=" p-5 bg-white rounded">
                <div className=" flex gap-4 items-center">
                    <IoMdArrowBack size={28} className=" text-primaryColor cursor-pointer" />
                    <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0 ">People Management</h2>
                </div>

                <div>
                    <div className="flex justify-center items-center bg-primary mt-5 text-white w-[715px] mx-auto p-5 gap-5 rounded-md">
                        <div className="relative">
                            <Avatar
                                size={140}
                                src={profilePicUrl}
                                className="border-4 border-buttonPrimary shadow-xl"
                            />
                            <Upload
                                showUploadList={false}
                                beforeUpload={() => false}
                                onChange={handleProfilePicUpload}
                                className="absolute bottom-2 right-2 bg-[#af8b18] px-4 py-[5px] rounded-full cursor-pointer"
                            >
                                <FaCamera className="text-white mt-[5px] w-6" />
                            </Upload>
                        </div>
                        <div>
                            <p className="text-xl md:text-2xl text-black font-bold capitalize">Al Ansari</p>
                            <p className="text-sm text-black font-semibold">Super Admin</p>
                            {profilePic && (
                                <button
                                    onClick={handleSubmit}
                                    className=" bg-primaryColor cursor-pointer text-primary rounded-md mt-4 px-2 py-1"
                                >
                                    Upload Image
                                </button>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddNew;