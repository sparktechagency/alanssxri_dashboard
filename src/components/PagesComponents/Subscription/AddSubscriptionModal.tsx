/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, InputNumber, Modal } from "antd";


type AddSubscriptionModalProps = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
};

const AddSubscriptionModal = ({ isModalOpen, handleOk, handleCancel }: AddSubscriptionModalProps) => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log("Form Values: ", values);
    };

    return (
        <Modal centered footer={false} title="Add Subscription" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                form={form}
                initialValues={undefined}
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="subscriptionPlan"
                    label="Subscription Plan"
                    rules={[{ required: true, message: "Please input the subscription plan!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="contractorFeePerMonth"
                    label="Contractor Fee Per Month"
                    rules={[{ required: true, message: "Please input the contractor fee per month!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="pointsRange"
                    label="Points Range"
                    rules={[{ required: true, message: "Please input the points range!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="pointEarnPerSwap"
                    label="Point Earn Per Swap"
                    rules={[{ required: true, message: "Please input the points earned per swap!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="pointEarnPerPositiveComment"
                    label="Point Earn Per Positive Comment"
                    className=" w-full"
                    rules={[{ required: true, message: "Please input the points earned per positive comment!" }]}
                >
                    <InputNumber style={{ width: '100%' }} min={0} />
                </Form.Item>

                <Form.Item

                    name="pointLosePerNegativeComment"
                    label="Point Lose Per Negative Comment"
                    className=" w-full"
                    rules={[{ required: true, message: "Please input the points lost per negative comment!" }]}
                >
                    <InputNumber style={{ width: '100%' }} min={0} />
                </Form.Item>

                <Form.Item>
                    <button
                        type="submit"
                        className="rounded-lg font-semibold cursor-pointer bg-primaryColor text-white px-3 py-2"
                    >
                        Add Subscription
                    </button>
                </Form.Item>
            </Form>
        </Modal>

    );
};

export default AddSubscriptionModal;