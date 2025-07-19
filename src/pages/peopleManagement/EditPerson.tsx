/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Form, FormProps, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const EditPerson = () => {
    const [profilePic, setProfilePic] = useState<File | null>(null);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const profilePicUrl = profilePic ? URL.createObjectURL(profilePic) : null;
    const handleProfilePicUpload = (e: any) => {
        setProfilePic(e.file);
    };

    // Default values (for a lawyer)
    // const defaultValues = {
    //     name: "John Doe",
    //     position: "Senior Lawyer",
    //     email: "john.doe@example.com",
    //     phone: "+1234567890",
    //     bio: "Experienced lawyer specializing in corporate law.",
    //     education: "Harvard Law School",
    //     barAdmission: "California Bar, 2015",
    //     sectors: "Corporate, M&A",
    //     experience: "10 years of experience in law.",
    //     affiliation: "Lawyers Association",
    //     facebook: "https://facebook.com/johndoe",
    //     twitter: "https://twitter.com/johndoe",
    //     instagram: "https://instagram.com/johndoe",
    //     linkedin: "https://linkedin.com/in/johndoe"
    // };

    type FieldType = {
        category?: string;
        fullName?: string;
        position?: string;
        email?: string;
        phoneNumber?: string;
        bio?: string;
        education?: string;
        barAdmission?: string;
        experience?: string;
        affiliation?: string;
        industry?: string[];
        practice?: string[];
        awards?: string[];
        professional?: string[];
        facebook?: string;
        twitter?: string;
        instagram?: string;
        linkedin?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="min-h-screen">
            <div className="py-5 px-10 bg-white rounded">
                <div className="flex gap-4 items-center">
                    <IoMdArrowBack onClick={() => navigate(-1)} size={28} className="text-primaryColor cursor-pointer" />
                    <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0">Edit</h2>
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
                    </div>
                </div>

                <div>
                    <Form
                        name="basic"
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Category"
                            name="category"
                            className="w-full"
                            rules={[{ required: true, message: 'Please select a category!' }]}
                        >
                            <Select placeholder="Select a category">
                                <Select.Option value="partners">Partners</Select.Option>
                                <Select.Option value="team">Team</Select.Option>
                            </Select>
                        </Form.Item>

                        <h2 className="text-lg font-semibold mb-2">General Info</h2>
                        <div className="flex gap-5 justify-between items-center">
                            <Form.Item<FieldType>
                                label="Full Name"
                                name="fullName"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your full name!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label="Position"
                                name="position"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your position!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>
                        </div>
                        <div className="flex gap-5 justify-between items-center">
                            <Form.Item<FieldType>
                                label="Email"
                                name="email"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label="Phone Number"
                                name="phoneNumber"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>
                        </div>

                        <Form.Item<FieldType>
                            label="Bio"
                            name="bio"
                            className="w-full"
                            rules={[{ required: true, message: 'Please input your bio!' }]}>
                            <TextArea rows={5} placeholder="Write Here" className="w-full" />
                        </Form.Item>

                        <h2 className="text-lg font-semibold mb-2">Education & Qualification</h2>
                        <div className="flex gap-5 justify-between items-center">
                            <Form.Item<FieldType>
                                label="Education"
                                name="education"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your education!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label="Bar Admission"
                                name="barAdmission"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your bar admission!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>
                        </div>

                        <h2 className="text-lg font-semibold mb-2">Industry Focus</h2>
                        <Form.List name="industry">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <div key={key} className="flex items-center gap-4 mb-2">
                                            <Form.Item
                                                {...restField}
                                                name={name}
                                                rules={[{ required: true, message: 'Please input an industry focus!' }]}
                                                className="w-full"
                                            >
                                                <Input placeholder="Type here" />
                                            </Form.Item>
                                            <button type="button" onClick={() => remove(name)} className="text-red-500 cursor-pointer mb-5">Remove</button>
                                        </div>
                                    ))}
                                    <Form.Item>
                                        <button type="button" onClick={() => add()} className="text-primaryColor cursor-pointer">
                                            + Add Award
                                        </button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>

                        <h2 className="text-lg font-semibold mb-2">Practice Areas</h2>
                        <Form.List name="practice">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <div key={key} className="flex items-center gap-4 mb-2">
                                            <Form.Item
                                                {...restField}
                                                name={name}
                                                rules={[{ required: true, message: 'Please input an practice areas!' }]}
                                                className="w-full"
                                            >
                                                <Input placeholder="Type here" />
                                            </Form.Item>
                                            <button type="button" onClick={() => remove(name)} className="text-red-500 cursor-pointer mb-5">Remove</button>
                                        </div>
                                    ))}
                                    <Form.Item>
                                        <button type="button" onClick={() => add()} className="text-primaryColor cursor-pointer">
                                            + Add Award
                                        </button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>

                        <h2 className="text-lg font-semibold mb-2">Awards & Recognition</h2>
                        <Form.List name="awards">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <div key={key} className="flex items-center gap-4 mb-2">
                                            <Form.Item
                                                {...restField}
                                                name={name}
                                                rules={[{ required: true, message: 'Please input an award or recognition!' }]}
                                                className="w-full"
                                            >
                                                <Input placeholder="e.g., 2021 - Best Young Lawyer Award" />
                                            </Form.Item>
                                            <button type="button" onClick={() => remove(name)} className="text-red-500 cursor-pointer mb-5">Remove</button>
                                        </div>
                                    ))}
                                    <Form.Item>
                                        <button type="button" onClick={() => add()} className="text-primaryColor cursor-pointer">
                                            + Add Award
                                        </button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>

                        <h2 className="text-lg font-semibold mt-6 mb-2">Professional Highlights</h2>
                        <Form.List name="professional">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <div key={key} className="flex items-center gap-4 mb-2">
                                            <Form.Item
                                                {...restField}
                                                name={name}
                                                rules={[{ required: true, message: 'Please input a professional highlight!' }]}
                                                className="w-full"
                                            >
                                                <Input placeholder="e.g., 2021 - Present: Associate, Al-Ansari Law" />
                                            </Form.Item>
                                            <button type="button" onClick={() => remove(name)} className="text-red-500 cursor-pointer mb-5">Remove</button>
                                        </div>
                                    ))}
                                    <Form.Item>
                                        <button type="button" onClick={() => add()} className="text-primaryColor cursor-pointer">
                                            + Add Highlight
                                        </button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>


                        <h2 className="text-lg font-semibold mb-2">Experience</h2>
                        <Form.Item<FieldType>
                            label="Experience"
                            name="experience"
                            className="w-full"
                            rules={[{ required: true, message: 'Please input your experience!' }]}>
                            <TextArea rows={4} placeholder="Write Here" className="w-full" />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Affiliation"
                            name="affiliation"
                            className="w-full"
                            rules={[{ required: true, message: 'Please input your affiliation!' }]}>
                            <Input placeholder="Input Here" className="w-full" />
                        </Form.Item>

                        <h2 className="text-lg font-semibold mb-2">Social Links</h2>
                        <div className="flex gap-5 justify-between items-center">
                            <Form.Item<FieldType>
                                label="Facebook"
                                name="facebook"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your Facebook link!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label="Twitter"
                                name="twitter"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your Twitter link!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>
                        </div>
                        <div className="flex gap-5 justify-between items-center">
                            <Form.Item<FieldType>
                                label="Instagram"
                                name="instagram"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your Instagram link!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label="LinkedIn"
                                name="linkedin"
                                className="w-full"
                                rules={[{ required: true, message: 'Please input your LinkedIn link!' }]}>
                                <Input placeholder="Input Here" className="w-full" />
                            </Form.Item>
                        </div>

                        <div className="flex justify-center mt-6 gap-4">
                            <button type="reset" className=" border border-primaryColor text-primaryColor px-10 md:px-12 py-2 md:py-2.5 cursor-pointer rounded text-lg">
                                Cancel
                            </button>
                            <button
                                // disabled={isLoading}
                                type="submit"
                                className=" bg-primaryColor text-white px-10 md:px-14 py-2 md:py-2.5 cursor-pointer rounded text-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default EditPerson;
