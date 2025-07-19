import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { MdLocalPhone, MdMailOutline } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { LiaLinkedinIn } from "react-icons/lia";
import { useGetSinglePeopleManagementQuery } from "../../redux/features/peopleManagement/peopleManagementApi";
import PopleManagementScheleton from "../../components/Scheleton/PopleManagementScheleton";


function ViewDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetSinglePeopleManagementQuery(id);

    console.log('data', data?.data);

    const colorClasses = [
        "bg-blue-100 text-blue-800",
        "bg-green-100 text-green-800",
        "bg-purple-100 text-purple-800",
        "bg-yellow-100 text-yellow-800",
        "bg-red-100 text-red-800",
        "bg-indigo-100 text-indigo-800",
    ];


    return (
        <div className=" min-h-screen">
            {isLoading ?
                <PopleManagementScheleton />
                :
                <>
                    <div className="py-5 px-10 bg-white rounded">
                        <div className="flex gap-4 items-center mb-8">
                            <IoMdArrowBack onClick={() => navigate(-1)} size={28} className="text-primaryColor cursor-pointer" />
                            <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0">Details</h2>
                        </div>

                        {/* Profile Section */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 mb-8">
                            <div className="flex-shrink-0">
                                <img
                                    src={`http://10.0.60.118:5006${data?.data?.profile_image}`}
                                    alt="Mohammed Al-Ansari"
                                    className=" rounded-lg w-72 h-72 object-cover"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">{data?.data?.fullName}</h1>
                                <p className="text-xl text-gray-600 mb-4">{data?.data?.position}</p>

                                {/* Contact Info */}
                                <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact</h2>
                                <div className="flex items-center text-gray-600 mb-1 gap-20">
                                    <div className=" flex items-center gap-1">
                                        <MdMailOutline className="w-5 h-5 mr-2 text-gray-500" />
                                        <p>Email:</p>
                                    </div>
                                    <span>{data?.data?.email}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-4 1 gap-20 mt-3">
                                    <div className=" flex items-center gap-1">
                                        <MdLocalPhone className="w-5 h-5 mr-2 text-gray-500" />
                                        <p>Phone Number:</p>
                                    </div>
                                    <span>{data?.data?.phoneNumber}</span>
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
                                {data?.data?.bio}
                            </p>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Professional Highlights</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {
                                    data?.data?.professional?.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Awards & Recognition</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {
                                    data?.data?.awards?.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Affiliation Section */}
                        {/* <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Affiliation</h2>
                    <p className="text-gray-700">Egypt Lawyers Association, Member</p>
                </div> */}

                        {/* Education Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Education</h2>
                            <p className="text-gray-700">{data?.data?.education}</p>
                        </div>

                        {/* Sectors Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Practice Areas</h2>
                            <div className="flex flex-wrap gap-2">
                                {
                                    data?.data?.practice?.map((sector: string, index: number) => {
                                        const colorClass = colorClasses[index % colorClasses.length]; // cycle through colors
                                        return (
                                            <span key={index} className={`${colorClass} text-sm font-medium px-3 py-1 rounded-full`}>
                                                {sector}
                                            </span>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Industry Focus</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {
                                    data?.data?.industry?.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Bar Admission Section */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Bar Admission</h2>
                            <p className="text-gray-700">{data?.data?.barAdmission}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default ViewDetails;
