/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, InputNumber, notification } from "antd";
import { useGetAboutCountQuery, useUpdateAboutCountMutation } from "../../../redux/features/about/aboutApi";
import { useEffect } from "react";

const AboutContent = () => {
    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();

    const [updateAboutCount, { isLoading }] = useUpdateAboutCountMutation();
    const { data } = useGetAboutCountQuery(undefined);
    console.log(data?.data);
    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                totalClients: data.data.totalClients,
                totalHours: data.data.totalHours,
                totalCases: data.data.totalCases,
            });
        }
    }, [data, form]);
    const onFinish = (values: any) => {
        const data = {
            totalClients: values.totalClients,
            totalHours: values.totalHours,
            totalCases: values.totalCases,
        };

        updateAboutCount(data)
            .unwrap()
            .then(() => {
                api.success({
                    message: "About Us Content Updated Successfully!",
                    description: "About Us Content Updated",
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
            <h2 className="text-xl font-semibold mb-5">About Us Content</h2>
            {contextHolder}
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                className="max-w-2xl "
            >
                <Form.Item
                    name="totalClients"
                    label="Total Clients"
                    rules={[{ required: true, message: "Please input total clients!" }]}
                >
                    <InputNumber min={0} placeholder="Enter number of clients" style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="totalHours"
                    label="Total Hours"
                    rules={[{ required: true, message: "Please input total hours!" }]}
                >
                    <InputNumber min={0} placeholder="Enter total hours" style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="totalCases"
                    label="Total Cases"
                    rules={[{ required: true, message: "Please input total cases!" }]}
                >
                    <InputNumber min={0} placeholder="Enter number of cases" style={{ width: "100%" }} />
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

export default AboutContent;
