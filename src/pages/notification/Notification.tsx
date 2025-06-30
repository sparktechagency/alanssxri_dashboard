const Notification: React.FC = () => {
    return (
        <div className="bg-white h-full rounded-md p-6 mx-auto min-h-[100vh]">
            <div className="flex items-center justify-between pb-6">
                <h3 className="font-bold text-2xl text-gray-800">Notifications</h3>
                <button
                    type="button"
                    className="bg-primaryColor text-white font-semibold py-2 px-6 rounded-full text-md transition-all cursor-pointer"
                >
                    Read All
                </button>
            </div>

            <div className="space-y-5">
                {/* Uncomment and use the notification data if available */}
                {/* {notification?.data?.map((item) => ( */}
                <div className="flex items-center justify-between bg-barColor hover:bg-bgColor py-4 px-5 rounded-lg transition-all">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center gap-5">
                            <h2 className="font-semibold text-lg text-gray-800">A new message has arrived</h2>
                            <p className="text-sm text-gray-500">8:00am, today</p>
                        </div>
                        <p className="text-gray-600">A new service has been uploaded for car service</p>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-white hover:bg-gray-50 py-4 px-5 rounded-lg transition-all">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center gap-5">
                            <h2 className="font-semibold text-lg text-gray-800">A new message has arrived</h2>
                            <p className="text-sm text-gray-500">8:00am, today</p>
                        </div>
                        <p className="text-gray-600">A new service has been uploaded for car service</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
