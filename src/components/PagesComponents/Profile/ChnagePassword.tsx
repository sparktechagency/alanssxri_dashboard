import { useState, ChangeEvent } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useChangeAdminPasswordMutation } from "../../../redux/features/auth/authApi";
import { message, notification } from "antd";
// import { useNavigate } from "react-router-dom";

const ChangePassword: React.FC = () => {
    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
    // const navigate = useNavigate();
    const [changeAdminPassword, { isLoading }] = useChangeAdminPasswordMutation()
    const [api, contextHolder] = notification.useNotification();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            message.error(`Confirm password did not match!`)
        }
        else {
            changeAdminPassword({
                oldPassword: oldPassword,
                newPassword: newPassword,
                confirmPassword: confirmNewPassword
            }).unwrap()
                .then(() => {
                    api.open({
                        message: 'Password Changed',
                        description: 'Password has been changed successfully!',
                        placement: 'topRight',
                    });
                    // navigate(`/`)
                })
                .catch((error) => {
                    api.open({
                        message: error?.data?.message,
                        description: 'Password Changed Failed',
                        placement: 'topRight',
                    });
                })
        }
    };

    return (
        <div className="bg-white px-20 w-[715px] pt-5 pb-5 rounded-md">
            {contextHolder}
            <p className="text-primary text-center font-bold text-xl mb-5">
                Change Password
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="w-full">
                    <label
                        htmlFor="oldPassword"
                        className="text-[15px] font-[400] text-[#575757]"
                    >
                        Old Password
                    </label>
                    <div className="w-full relative">
                        <input
                            type={isEyeOpen ? "text" : "password"}
                            name="oldPassword"
                            id="oldPassword"
                            value={oldPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
                            placeholder="Enter Old Password"
                            className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                        />
                        {isEyeOpen ? (
                            <IoEyeOutline
                                className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                onClick={() => setIsEyeOpen(false)}
                            />
                        ) : (
                            <IoEyeOffOutline
                                className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                onClick={() => setIsEyeOpen(true)}
                            />
                        )}
                    </div>
                </div>

                <div className="w-full">
                    <label
                        htmlFor="newPassword"
                        className="text-[15px] font-[400] text-[#575757]"
                    >
                        New Password
                    </label>
                    <div className="w-full relative">
                        <input
                            type={isEyeOpen ? "text" : "password"}
                            name="newPassword"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                            placeholder="Enter New Password"
                            className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                        />
                        {isEyeOpen ? (
                            <IoEyeOutline
                                className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                onClick={() => setIsEyeOpen(false)}
                            />
                        ) : (
                            <IoEyeOffOutline
                                className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                onClick={() => setIsEyeOpen(true)}
                            />
                        )}
                    </div>
                </div>

                <div className="w-full">
                    <label
                        htmlFor="confirmNewPassword"
                        className="text-[15px] font-[400] text-[#575757]"
                    >
                        Confirm New Password
                    </label>
                    <div className="w-full relative">
                        <input
                            type={isEyeOpen ? "text" : "password"}
                            name="confirmNewPassword"
                            id="confirmNewPassword"
                            value={confirmNewPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmNewPassword(e.target.value)}
                            placeholder="Confirm New Password"
                            className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                        />
                        {isEyeOpen ? (
                            <IoEyeOutline
                                className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                onClick={() => setIsEyeOpen(false)}
                            />
                        ) : (
                            <IoEyeOffOutline
                                className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                onClick={() => setIsEyeOpen(true)}
                            />
                        )}
                    </div>
                </div>

                <div className="text-center my-5">
                    <button
                        type="submit"
                        className="bg-primary bg-primaryColor cursor-pointer  mt-4 mb-16 text-white px-18 rounded-lg py-[6px] text-lg"
                    >
                        {isLoading ? "Loading..." : "Save & Changes"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
