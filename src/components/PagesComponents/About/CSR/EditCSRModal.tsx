/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, notification, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useUpdateCSRMutation } from "../../../../redux/features/csr/csrApi";


type AddModalProps = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    csr: any
};

const EditCSRModal = ({ isModalOpen, handleOk, handleCancel, csr }: AddModalProps) => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [fileList, setFileList] = useState<any[]>([]);

    const [updateCSR, { isLoading }] = useUpdateCSRMutation();

    useEffect(() => {
        if (isModalOpen && csr) {
            form.resetFields();
            form.setFieldsValue({
                title: csr?.title,
                description: csr?.description,
            });
        }
    }, [isModalOpen, csr, form]);

    const handleFileChange = (info: any) => {
        const newFileList = info.fileList.slice(-1);
        setFileList(newFileList);
    };

    const onFinish = (values: any) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);

        if (fileList.length > 0 && fileList[0]?.originFileObj) {
            formData.append("image", fileList[0].originFileObj);
        }

        updateCSR({ data: formData, id: csr?._id })
            .unwrap()
            .then(() => {
                api.success({
                    message: "CSR Successfully!",
                    description: "CSR updated.",
                    placement: "topRight",
                });
                form.resetFields();
                setFileList([]);
                handleOk();
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
        <Modal centered footer={false} title="Edit" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {contextHolder}
            <Form
                form={form}
                initialValues={undefined}
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: "Please input the title!" }]}
                >
                    <Input placeholder="Input Here" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    className="w-full"
                    rules={[{ required: true, message: 'Please input your description!' }]}>
                    <TextArea rows={4} placeholder="Write Here" className="w-full" />
                </Form.Item>


                <Form.Item
                    name="image"
                    label="Upload Image"
                    valuePropName="fileList"
                    getValueFromEvent={(e: any) => e?.fileList}
                    rules={[{ required: true, message: "Please upload the image!" }]}
                >
                    <Upload
                        name="Image"
                        listType="picture"
                        fileList={fileList}
                        onChange={handleFileChange}
                        beforeUpload={() => false} // Prevent auto upload
                        accept="image/*"
                    >
                        <Button icon={<MdOutlineFileUpload />}>Upload Image</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-lg font-semibold cursor-pointer bg-primaryColor text-white px-3 py-2"
                    >
                        {isLoading ? "Loading..." : "Save Changes"}
                    </button>
                </Form.Item>
            </Form>
        </Modal>

    );
};

export default EditCSRModal;