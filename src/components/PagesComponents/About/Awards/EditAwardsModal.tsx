/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, notification, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useUpdateAwardsMutation } from "../../../../redux/features/awards/awardsApi";

type AddModalProps = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    award: any;
};

const EditAwardsModal = ({ isModalOpen, handleOk, handleCancel, award }: AddModalProps) => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [fileList, setFileList] = useState<any[]>([]);

    const [updateAwards, { isLoading }] = useUpdateAwardsMutation();

    useEffect(() => {
        if (isModalOpen && award) {
            form.resetFields();
            form.setFieldsValue({
                title: award.title,
                description: award.description,
            });
        }
    }, [isModalOpen, award, form]);

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

        updateAwards({ data: formData, id: award._id })
            .unwrap()
            .then(() => {
                api.success({
                    message: "Updated Successfully!",
                    description: "Award updated.",
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
        <Modal
            centered
            footer={false}
            title="Edit"
            open={isModalOpen}
            onCancel={handleCancel}
        >
            {contextHolder}
            <Form
                form={form}
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
                    rules={[{ required: true, message: "Please input your description!" }]}
                >
                    <TextArea rows={4} placeholder="Write Here" />
                </Form.Item>

                <Form.Item label="Upload Image">
                    <Upload
                        name="Image"
                        listType="picture"
                        fileList={fileList}
                        onChange={handleFileChange}
                        beforeUpload={() => false}
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
                        {isLoading ? "Loading..." : "Update"}
                    </button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditAwardsModal;
