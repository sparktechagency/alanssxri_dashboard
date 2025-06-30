import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { MdLocalPhone, MdMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ansari from '../../assets/ansari.png'
import { SlSocialFacebook } from "react-icons/sl";
import { LiaLinkedinIn } from "react-icons/lia";

function ViewDetails() {
    const navigate = useNavigate();
    return (
        <div className=" min-h-screen">
            <div className="py-5 px-10 bg-white rounded">

                <div className="flex gap-4 items-center mb-8">
                    <IoMdArrowBack onClick={() => navigate(-1)} size={28} className="text-primaryColor cursor-pointer" />
                    <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0">Details</h2>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 mb-8">
                    <div className="flex-shrink-0">
                        <img
                            src={ansari}
                            alt="Mohammed Al-Ansari"
                            className=" rounded-lg w-72 h-72 object-cover"
                        />
                    </div>
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Mohammed Al-Ansari</h1>
                        <p className="text-xl text-gray-600 mb-4">Managing Partner</p>

                        {/* Contact Info */}
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact</h2>
                        <div className="flex items-center text-gray-600 mb-1 gap-20">
                            <div className=" flex items-center gap-1">
                                <MdMailOutline className="w-5 h-5 mr-2 text-gray-500" />
                                <p>Email:</p>
                            </div>
                            <span>malansari@alansarilaw.com</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4 1 gap-20 mt-3">
                            <div className=" flex items-center gap-1">
                                <MdLocalPhone className="w-5 h-5 mr-2 text-gray-500" />
                                <p>Phone Number:</p>
                            </div>
                            <span>+974 4491 3355</span>
                        </div>

                        {/* Social Media Links */}
                        <h2 className="text-lg font-semibold text-gray-700 mb-3">Social Media Links</h2>
                        <div className="flex justify-center sm:justify-start">
                            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                                <SlSocialFacebook size={40} className=" border border-primaryColor text-primaryColor rounded-full p-2" />
                            </a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                                <FaXTwitter size={40} className=" border border-primaryColor text-primaryColor rounded-full p-2" />
                            </a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                                <FaInstagram size={40} className=" border border-primaryColor text-primaryColor rounded-full p-2" />
                            </a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                                <LiaLinkedinIn size={42} className=" border border-primaryColor text-primaryColor rounded-full p-2" />
                            </a>
                            {/* <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                                <FaXTwitter className="w-5 h-5 text-gray-600" />
                            </a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                                <FaInstagram className="w-5 h-5 text-gray-600" />
                            </a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                                <FaLinkedin className="w-5 h-5 text-gray-600" />
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Bio</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Mohammed Al-Ansari is the founder and Managing Partner of Al-Ansari & Associates. Mr. Al-Ansari's extensive experience in complex civil & commercial litigation matters, along with his significant knowledge of local laws, allows him to represent clients in various disputes before the Qatar Courts and Arbitration Tribunals. Mr. Al-Ansari has counseled on and negotiated major transactions and projects on behalf of many local and multinational clients.
                    </p>
                </div>

                {/* Experience Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Experience</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Advising a Qatari bank on finance and security requirements and regulations.</li>
                        <li>Representing a governmental entity, as local counsel, in a multi-hundred million QAR mediation matter.</li>
                        <li>Representing a multinational Joint Venture as local counsel, in a multi-billion QAR mediation.</li>
                    </ul>
                </div>

                {/* Affiliation Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Affiliation</h2>
                    <p className="text-gray-700">Egypt Lawyers Association, Member</p>
                </div>

                {/* Education Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Education</h2>
                    <p className="text-gray-700">LL.B., Faculty of Law- Al-Neelain University,</p>
                </div>

                {/* Sectors Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Sectors</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Corporate and Commercial</span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Litigation & Dispute Resolution</span>
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Energy & Natural resources</span>
                        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">Corporate & Commercial</span>
                        <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">Legislative Drafting</span>
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">Legal Services</span>
                    </div>
                </div>

                {/* Bar Admission Section */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Bar Admission</h2>
                    <p className="text-gray-700">Qatar</p>
                </div>
            </div>
        </div>
    );
}

export default ViewDetails;
