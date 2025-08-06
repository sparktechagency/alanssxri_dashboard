/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, notification, Upload, Image } from "antd";
import { useEffect, useState } from "react";
import { useGetupdateHomeContentQuery, useUpdateupdateHomeContentMutation } from "../../../redux/features/dashboard/dashboardApi";
import { FaUpload } from "react-icons/fa";

const HomePageContent = () => {
    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();

    const [updateupdateHomeContent, { isLoading }] = useUpdateupdateHomeContentMutation();
    const { data } = useGetupdateHomeContentQuery(undefined);
    console.log('from db', data);

    const [profilePic, setProfilePic] = useState<File | null>(null);

    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                textHero: data.data.textHero,
            });
        }
    }, [data, form]);

    const onFinish = (values: any) => {
        const formData = new FormData();
        formData.append("textHero", values.textHero);

        // If an image is selected, append it to FormData
        if (profilePic) {
            formData.append("imageHero", profilePic);
        }

        updateupdateHomeContent(formData)
            .unwrap()
            .then(() => {
                api.success({
                    message: "Home Page Content Updated Successfully!",
                    description: "Hero Text and Image have been updated",
                    placement: "topRight",
                });
                form.resetFields();
                setProfilePic(null);
            })
            .catch((error) => {
                api.error({
                    message: error?.data?.message || "Update failed",
                    description: "Something went wrong with updating the content!",
                    placement: "topRight",
                });
            });
    };

    const handleProfilePicUpload = (e: any) => {
        setProfilePic(e.file);
    };

    const profilePicUrl = profilePic
        ? URL.createObjectURL(profilePic)
        : data?.data?.imageHero
            ? `https://backend.alansarilaw.com${data?.data?.imageHero}`
            : undefined;

    return (
        <div className="bg-white p-5 rounded-lg shadow-md mb-6">
            {contextHolder}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold mb-4">Home Page Content</h2>
            </div>
            <div className=" flex gap-10 items-center">

                <div className=" w-[50%]">
                    <Form
                        form={form}
                        onFinish={onFinish}
                        layout="vertical"
                        className="max-w-2xl"
                    >
                        {/* Hero Text Field */}
                        <Form.Item
                            name="textHero"
                            label="Hero Text"
                            rules={[{ required: true, message: 'Please enter the hero text!' }]}>
                            <Input placeholder="Enter Hero Text" style={{ width: "100%" }} />
                        </Form.Item>

                        {/* Image Upload Field */}
                        <Form.Item
                            name="imageHero"
                            label=""
                            valuePropName="fileList"
                        >
                            <div className="">

                                {/* <div className="mt-4">
                                    <h3 className="mb-3">Image Preview:</h3>
                                    <Image
                                        width={200}
                                        src={profilePicUrl} // Show the preview image
                                        alt="Hero Image Preview"
                                    />
                                </div> */}
                                <Upload
                                    showUploadList={false}
                                    beforeUpload={() => false} // Prevent auto-upload
                                    onChange={handleProfilePicUpload}
                                    className="">
                                    <FaUpload size={40} className=" text-primaryColor  ml-1.5 cursor-pointer" /> {/* FaUpload Icon */}

                                </Upload>
                            </div>
                        </Form.Item>

                        {/* Display Image Preview */}



                        <div className="">
                            <button type="submit" disabled={isLoading} className="bg-primaryColor rounded px-5 py-2 text-white flex items-center gap-2 cursor-pointer my-2" >
                                {isLoading ? "Loading..." : "Update Content"}
                            </button>
                        </div>
                    </Form>
                </div>
                <div className=" flex justify-center">
                    <Image
                        width={400}
                        src={profilePicUrl}
                        className="w-full object-cover"
                        alt="Hero Image Preview"
                    />
                </div>

            </div>
        </div>
    );
};

export default HomePageContent;
