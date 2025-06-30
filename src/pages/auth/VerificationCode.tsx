import { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useSearchParams } from "react-router-dom";

const VerificationCode: React.FC = () => {
    const [otp, setOtp] = useState<string>("");
    const [searchParams] = useSearchParams();
    const email: string | null = searchParams.get("email");
    console.log(email);

    // const onSent = () => {
    //   // handle OTP submission
    // };

    return (
        <div className="h-screen bg-barColor">
            {/* Background Image */}
            <div className="bg-primary py-14 h-full">
                {/* Form Container */}
                <div className="relative z-10 flex items-center justify-center h-full px-3 text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg w-full md:max-w-[500px] rounded-lg">
                        {/* Login Form */}
                        <div className="p-8 md:py-32">
                            <div className="text-center">
                                <h1 className="text-2xl md:text-3xl font-semibold mt-6 mb-5">
                                    Check Your Email
                                </h1>
                                <p className=" mb-8 px-2 md:px-10">
                                    We sent a reset link to contact@dscode...com
                                    enter 5 digit code that mentioned in the email
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <div className="flex gap-2 mb-4">
                                    <OtpInput
                                        value={otp}
                                        onChange={(value: string) => setOtp(value)}
                                        numInputs={5}
                                        renderSeparator={<span className="w-4" />}
                                        renderInput={(props) => (
                                            <input
                                                {...props}
                                                style={{ width: "50px" }}
                                                className="w-12 h-12 border-2 border-gray-300 rounded-md text-center text-lg focus:border-[#af8b18] focus:outline-none"
                                            />
                                        )}
                                    />
                                </div>
                            </div>

                            <div className=" w-full">
                                <Link to="/auth/set-new-password">
                                    <button
                                        type="button"
                                        // onClick={onSent}
                                        // disabled={isLoading}
                                        className="bg-primary w-full bg-primaryColor cursor-pointer  mt-10 mb-6 text-white px-18 rounded py-[6px] text-lg"
                                    >
                                        Verify Code
                                    </button>
                                </Link>
                            </div>
                            <p className="text-center text-gray-600">
                                You have not received the email?{" "}
                                <span className="text-[#020202] cursor-pointer">Resend</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerificationCode;
