/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, notification } from "antd";
import { useEffect } from "react";
import { useGetSocialMediaQuery, useUpdateSocialMediaMutation } from "../../../redux/features/setting/settingApi";

const SocialMedia = () => {
    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();

    const [updateSocialMedia, { isLoading }] = useUpdateSocialMediaMutation();
    const { data } = useGetSocialMediaQuery(undefined);
    console.log(data?.data);

    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                facebook: data.data.facebook,
                linkedin: data.data.linkedin,
                instagram: data.data.instagram,
                twitter: data.data.twitter,
            });
        }
    }, [data, form]);

    const onFinish = (values: any) => {
        const data = {
            facebook: values.facebook,
            linkedin: values.linkedin,
            instagram: values.instagram,
            twitter: values.twitter,
        };

        updateSocialMedia(data)
            .unwrap()
            .then(() => {
                api.success({
                    message: "Social Media Links Updated Successfully!",
                    description: "Social Media Links Updated",
                    placement: "topRight",
                });
                form.resetFields();
            })
            .catch((error) => {
                api.error({
                    message: error?.data?.message || "Update failed",
                    description: "Something went wrong!",
                    placement: "topRight",
                });
            });
    };

    return (
        <div className="min-h-screen">
            <h2 className="text-xl font-semibold mb-5">Social Media Links</h2>
            {contextHolder}
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                className="max-w-2xl "
            >
                {/* Social Media Fields */}
                <Form.Item
                    name="facebook"
                    label="Facebook URL"
                    rules={[{ type: 'url', message: 'Please enter a valid Facebook URL!' }]}
                >
                    <Input placeholder="Enter Facebook URL" style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="linkedin"
                    label="LinkedIn URL"
                    rules={[{ type: 'url', message: 'Please enter a valid LinkedIn URL!' }]}
                >
                    <Input placeholder="Enter LinkedIn URL" style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="instagram"
                    label="Instagram URL"
                    rules={[{ type: 'url', message: 'Please enter a valid Instagram URL!' }]}
                >
                    <Input placeholder="Enter Instagram URL" style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="twitter"
                    label="Twitter/X URL"
                    rules={[{ type: 'url', message: 'Please enter a valid Twitter/X URL!' }]}
                >
                    <Input placeholder="Enter Twitter URL" style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-lg font-semibold cursor-pointer bg-primaryColor text-white px-3 py-2"
                    >
                        {isLoading ? "Loading..." : "Update"}
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SocialMedia;