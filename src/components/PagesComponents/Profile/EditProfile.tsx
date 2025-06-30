import { ChangeEvent, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  // contact: string;
}

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
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
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter first name"
            required
          />
        </div>
        <div>
          <label className="block text-md font-medium text-[#575757] mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-2 py-3 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter last name"
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
