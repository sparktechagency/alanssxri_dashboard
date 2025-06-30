import { Form, Input } from "antd";
import { Link, useSearchParams } from "react-router-dom";

interface SetNewPasswordFormValues {
    newPassword: string;
    confirmPassword: string;
}

const SetNewPassword: React.FC = () => {
    const [form] = Form.useForm();
    //   const [isLoading, setIsLoading] = useState<boolean>(false);
    //   const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const email: string | null = searchParams.get('email');
    console.log(email);

    // onFinish handler for the form
    const onFinish = (values: SetNewPasswordFormValues) => {
        console.log(values);
        // Here you can add your logic to submit the form, e.g., call an API
    };

    return (
        <div className="h-screen bg-barColor">
            {/* Background Image */}
            <div className="bg-primary py-14 h-full">
                {/* Form Container */}
                <div className="relative z-10 flex items-center justify-center h-full px-3 text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg w-full md:max-w-[500px] rounded-lg">
                        {/* Login Form */}
                        <div className="p-8 md:py-24">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold mt-6 mb-4">
                                    Set New Password
                                </h1>
                                <p className="mb-8 px-2 md:px-10">
                                    Create a new password. Ensure it differs from
                                    previous ones for security
                                </p>
                            </div>
                            <Form
                                form={form}
                                onFinish={onFinish}
                                name="dependencies"
                                autoComplete="off"
                                style={{ maxWidth: 600 }}
                                layout="vertical"
                            >
                                <Form.Item
                                    label="New Password"
                                    name="newPassword"
                                    rules={[{ required: true, message: "Please input your new password!" }]}
                                >
                                    <Input.Password
                                        placeholder="New Password"
                                        className="rounded-none py-2"
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    rules={[{ required: true, message: "Please confirm your password!" }]}
                                >
                                    <Input.Password
                                        placeholder="Confirm Password"
                                        className="rounded-none py-2"
                                    />
                                </Form.Item>

                                <Form.Item className="text-center mt-6">
                                    <Link to={"/auth/login"}>
                                        <button
                                            type="submit"
                                            // disabled={isLoading}
                                            className="bg-primary w-full bg-primaryColor cursor-pointer  mt-10 text-white px-18 rounded py-[6px] text-lg"
                                        >
                                            {/* Submit {isLoading && <Spin />} */}
                                            Submit
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

export default SetNewPassword;