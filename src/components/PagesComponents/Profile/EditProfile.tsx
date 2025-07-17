/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useEditAdminProfileMutation } from "../../../redux/features/auth/authApi";
import { notification } from "antd";

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  // contact: string;
}

const EditProfile: React.FC = () => {
  const user = useSelector((state: any) => state.logInUser)
  const [api, contextHolder] = notification.useNotification();
  const [editAdminProfile, { isLoading }] = useEditAdminProfileMutation();

  const [formRawData, setFormRawData] = useState<FormData>({
    name: user?.user?.name,
    email: user?.user?.email,
    phone_number: user?.user?.phone_number,
    // contact: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormRawData({
      ...formRawData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', formRawData.name)
    formData.append('email', formRawData.email)
    formData.append('phone_number', formRawData.phone_number)
    editAdminProfile(formData).unwrap()
      .then((data) => {
        console.log(data);
        api.success({
          message: 'Please logIn again to see updated data',
          description: 'Updated Successfully!',
          placement: 'topRight',
        });
      })
      .catch((error) => {
        api.error({
          message: error?.data?.message,
          description: 'Password Changed Failed',
          placement: 'topRight',
        });
      })
  };

  return (
    <div className="bg-white px-20 w-[715px] py-5 rounded-md">
      {contextHolder}
      <p className="text-primary text-center font-bold text-xl mb-5">
        Edit Your Profile
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            First Name
          </label>
          <input
            type="text"
            name="name"
            value={formRawData.name}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter first name"
            required
          />
        </div>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formRawData.email}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Phone Number
          </label>
          <input
            type="phone_number"
            name="phone_number"
            value={formRawData.phone_number}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="text-center my-5">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary bg-primaryColor cursor-pointer  mt-4 mb-16 text-white px-18 rounded-lg py-[6px] text-lg"
          >
            {isLoading ? "Loading..." : "Save & Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
