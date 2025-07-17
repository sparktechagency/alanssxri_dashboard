/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

interface FormData {
  name: string;
  email: string;
  address: string;
  // contact: string;
}

const EditProfile: React.FC = () => {
  const user = useSelector((state: any) => state.logInUser)
  const [formData, setFormData] = useState<FormData>({
    name: user?.user?.name,
    email: user?.user?.email,
    address: user?.user?.address,
    // contact: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-white px-20 w-[715px] py-5 rounded-md">
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
            value={formData.name}
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
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Address
          </label>
          <input
            type="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Address"
            required
          />
        </div>
        {/* Uncomment and add logic for contact if needed */}
        {/* <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Contact No
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Contact Number"
            required
          />
        </div> */}

        <div className="text-center my-5">
          <button
            type="submit"
            className="bg-primary bg-primaryColor cursor-pointer  mt-4 mb-16 text-white px-18 rounded-lg py-[6px] text-lg"
          >
            Save & Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
