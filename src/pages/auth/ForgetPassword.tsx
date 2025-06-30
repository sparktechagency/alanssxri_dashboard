import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { FormProps } from "antd";

interface ForgotPasswordFormValues {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const onFinish: FormProps<ForgotPasswordFormValues>["onFinish"] = (values) => {
        console.log(values);
    };

    return (
        <div className="h-screen bg-barColor">
            {/* Background Image */}
            <div className="bg-primary py-12 h-full">
                {/* Form Container */}
                <div className="relative z-10 flex items-center justify-center h-full px-3 text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg w-full md:max-w-[500px] rounded-lg">
                        {/* Login Form */}
                        <div className="p-8 md:pt-36 md:pb-16">
                            <div className="text-center">
                                <h1 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">
                                    Forgot Password
                                </h1>
                                <p className=" mb-8">
                                    Please enter your email to continue
                                </p>
                            </div>
                            <Form<ForgotPasswordFormValues>
                                name="basic"
                                layout="vertical"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    label="Email Address"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please input your email!" },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter your email"
                                        className="rounded-none py-2"
                                    />
                                </Form.Item>

                                <Form.Item className="text-center mt-6">
                                    <Link to={`/auth/verification-code`}>
                                        <button
                                            type="button"
                                            // disabled={isLoading}
                                            className="bg-primary w-full bg-primaryColor cursor-pointer  mt-10 mb-16 text-white px-18 rounded py-[6px] text-lg"
                                        >
                                            {/* Send Code {isLoading && <Spin></Spin>} */}
                                            Send Code
                                        </button>
                                    </Link>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
