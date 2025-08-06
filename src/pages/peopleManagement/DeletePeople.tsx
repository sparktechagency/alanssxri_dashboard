import { useNavigate, useParams } from "react-router-dom";
import { useDeletePeopleManagementMutation } from "../../redux/features/peopleManagement/peopleManagementApi";
import { notification } from "antd";
import { IoMdArrowBack } from "react-icons/io";

function DeletePeople() {
    // Destructure the ID from useParams
    const { id } = useParams<{ id: string }>();  // Ensure that id is properly typed
    const navigate = useNavigate();
    const [deletePeopleManagement, { isLoading }] = useDeletePeopleManagementMutation();
    const [api, contextHolder] = notification.useNotification();

    // Ensure that the ID exists before proceeding with the deletion
    const confirmDelete = (id: string | undefined) => {
        if (!id) {
            api.error({
                message: 'No ID found',
                description: 'Cannot delete without an ID',
                placement: 'topRight',
            });
            return;
        }

        deletePeopleManagement(id)
            .unwrap()
            .then(() => {
                api.success({
                    message: 'People deleted',
                    description: 'Updated Successfully!',
                    placement: 'topRight',
                });
                navigate(`/people-management`);
            })
            .catch((error) => {
                api.error({
                    message: error?.data?.message || 'Error deleting person',
                    description: 'There was an error deleting the person',
                    placement: 'topRight',
                });
            });
    };

    return (
        <div className="min-h-screen">
            {contextHolder}
            <div className="flex gap-4 items-center mb-8">
                <IoMdArrowBack onClick={() => navigate(-1)} size={28} className="text-primaryColor cursor-pointer" />
                <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0">People Management</h2>
            </div>
            <div className=" min-h-[80vh] flex items-center justify-center">

                <button
                    onClick={() => confirmDelete(id)}
                    className="bg-primaryColor rounded px-8 py-3 text-white flex items-center gap-2 my-2 cursor-pointer text-lg"
                    disabled={!id}
                >
                    {isLoading ? "Loading..." : "Confirm Delete"}
                </button>
            </div>
        </div>
    );
}

export default DeletePeople;
