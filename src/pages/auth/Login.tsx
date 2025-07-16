import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useLogInMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";

// Define the type for form values
interface LoginFormValues {
    email: string;
    password: string;
}

const LogIn: FC = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [logIn, { isLoading }] = useLogInMutation();
    const onFinish = (values: LoginFormValues) => {
        const data = {
            email: values?.email,
            password: values?.password,
        };
        logIn(data).unwrap()
            .then((data) => {
                const adminData = data?.data?.user
                const accessToken = data?.data?.accessToken
                const refreshToken = data?.data?.refreshToken

                if (data?.data?.user?.authId?.role === "ADMIN") {
                    dispatch(setUser({ user: adminData, accessToken: accessToken, refreshToken }))
                    navigate(`/`)
                    message.success("LogIn Successfully!!!")
                }
            })
            .catch((error) => {
                message.error(error?.data?.message)
                console.log(error);
            })
    };


    return (

        <div className="h-auto md:h-screen bg-barColor">
            {/* Background Image wrapper (if needed in future) */}
            <div className="bg-primary py-14 md:py-0 h-full">

                <div className="relative z-10 flex items-center justify-center h-full px-3 text-white">
                    <div className="bg-[#fefefe] text-black overflow-hidden shadow-lg w-full md:max-w-[500px] rounded-lg">
                        {/* Login Form Section */}
                        <div className="p-8 pt-6 md:pt-18">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold mt-6 mb-4">Login to Account</h1>
                                <p className="mb-8 text-gray-600">
                                    Please enter your email and password to continue
                                </p>
                            </div>
                            <Form<LoginFormValues>
                                name="basic"
                                layout="vertical"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: "Please input your email!" }]}
                                >
                                    <Input
                                        placeholder="Enter your email"
                                        className="rounded-none py-2"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: "Please input your password!" }]}
                                >
                                    <Input.Password
                                        placeholder="Enter your password"
                                        className="rounded-none py-2"
                                    />
                                </Form.Item>

                                <div className="flex justify-between items-center mt-2">
                                    {/* <Checkbox>Remember Password</Checkbox> */}
                                    <Link to="/auth/forgot-password" className=" bg-primaryColor">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className=" w-full">
                                    {/* <Link to="/"> */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="bg-primary w-full bg-primaryColor cursor-pointer  mt-10 mb-16 text-white px-18 rounded py-[6px] text-lg"
                                    >
                                        {isLoading ? "Loading..." : "Sign In"}
                                    </button>

                                    {/* </Link> */}
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
