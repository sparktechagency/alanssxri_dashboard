/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { Avatar, notification, Upload } from "antd";
import EditProfile from "../../components/PagesComponents/Profile/EditProfile";
import ChangePassword from "../../components/PagesComponents/Profile/ChnagePassword";
import { useEditAdminProfileMutation, useGetAdminProfileQuery } from "../../redux/features/auth/authApi";

type Tab = "editProfile" | "changePassword";

const Profile: React.FC = () => {
    const [api, contextHolder] = notification.useNotification();
    const { data } = useGetAdminProfileQuery(undefined);
    console.log(data);
    const [editAdminProfile, { isLoading }] = useEditAdminProfileMutation();

    // const [profilePic, setProfilePic] = useState<File | null>(null);
    const [profilePic, setProfilePic] = useState<File | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>("editProfile");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        if (!profilePic) {
            api.error({
                message: "Please select a profile picture first",
                description: 'Picture Required',
                placement: 'topRight',
            });
            return;
        }

        formData.append('profile_image', profilePic)
        editAdminProfile(formData).unwrap()
            .then((data) => {
                console.log(data);
                api.success({
                    message: 'Please logIn again to see updated data',
                    description: 'Updated Successfully!',
                    placement: 'topRight',
                });
                setProfilePic(null)
            })
            .catch((error) => {
                console.log(error);
                api.error({
                    message: error?.data?.message,
                    description: 'Image Upload Failed',
                    placement: 'topRight',
                });
            })
    };
    const profilePicUrl = profilePic
        ? URL.createObjectURL(profilePic)
        : data?.data?.profile_image
            ? `https://backend.alansarilaw.com${data.data.profile_image}`
            : null;

    const handleProfilePicUpload = (e: any) => {
        setProfilePic(e.file);
    };

    return (
        <div className="h-screen bg-white rounded-md">
            {contextHolder}
            <div className="px-5 pb-5 h-full">
                <div className="mx-auto flex flex-col justify-center items-center">
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
                            <p className="text-xl md:text-2xl text-black font-bold capitalize">{data?.data?.name}</p>
                            <p className="text-sm text-black font-semibold">Super Admin</p>
                            {profilePic && (
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className=" bg-primaryColor cursor-pointer text-primary rounded-md mt-4 px-2 py-1"
                                >
                                    {isLoading ? "Loading..." : "Upload Image"}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 text-md md:text-xl font-semibold my-5">
                        <p
                            onClick={() => setActiveTab("editProfile")}
                            className={`cursor-pointer pb-1 ${activeTab === "editProfile"
                                ? "text-[#af8b18] border-b-2 border-primary"
                                : "text-[#575757]"
                                }`}
                        >
                            Edit Profile
                        </p>
                        <p
                            onClick={() => setActiveTab("changePassword")}
                            className={`cursor-pointer pb-1 ${activeTab === "changePassword"
                                ? "text-[#af8b18] border-b-2 border-primary"
                                : "text-[#575757]"
                                }`}
                        >
                            Change Password
                        </p>
                    </div>
                    <div className="flex justify-center items-center p-5 rounded-md">
                        <div className="w-full max-w-3xl">
                            {activeTab === "editProfile" && <EditProfile />}
                            {activeTab === "changePassword" && <ChangePassword />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
