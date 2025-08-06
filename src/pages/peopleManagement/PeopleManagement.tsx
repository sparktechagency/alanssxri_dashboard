/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { MdOutlineModeEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDeletePeopleManagementMutation, useGetAllPeopleManagementQuery, useUpdateOrderPeopleManagementMutation } from "../../redux/features/peopleManagement/peopleManagementApi";

interface UserData {
    _id: number,
    profile_image: string,
    fullName: string,
    position: string,
    email: string,
    phoneNumber: string
}

// Sortable row wrapper
const SortableRow = ({ person, children }: { person: UserData; index: number; children: React.ReactNode }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: person._id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <tr ref={setNodeRef} style={style} {...attributes} {...listeners} className="hover:bg-gray-50 cursor-move">
            {children}
        </tr>
    );
};

const PeopleManagement: React.FC = () => {
    const { data } = useGetAllPeopleManagementQuery(undefined);
    const [deletePeopleManagement] = useDeletePeopleManagementMutation();
    const [updateOrderPeopleManagement] = useUpdateOrderPeopleManagementMutation();

    const [people, setPeople] = useState<UserData[]>([]);

    useEffect(() => {
        if (data?.data) {
            setPeople(data.data);
        }
    }, [data]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor)
    );

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        // console.log("active:", active, "over:", over?.data?.current?.sortable?.items);

        if (active.id !== over?.id) {
            const oldIndex = people.findIndex(p => p._id === active.id);
            const newIndex = people.findIndex(p => p._id === over?.id);
            // setPeople(prev => arrayMove(prev, oldIndex, newIndex));
            const newPeople = arrayMove(people, oldIndex, newIndex);
            setPeople(newPeople);
            const orderedIds = newPeople.map(p => p._id);
            console.log(newPeople);
            const data = {
                peopleIds: orderedIds
            }
            console.log(data);
            updateOrderPeopleManagement(data)
        }
    };

    const confirmDelete = (id: string) => {
        deletePeopleManagement(id)
            .unwrap()
            .then(() => {
                alert("Deleted successfully");
            })
            .catch(() => {
                alert("Error deleting person");
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="bg-white p-5 rounded">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-5">
                    <h2 className="text-md md:text-xl font-semibold mb-5 md:mb-0">People Management</h2>
                </div>

                <div>
                    <Link to={`/people-management/add-new`}>
                        <button className="bg-primaryColor rounded px-5 py-2 text-white flex items-center gap-2 cursor-pointer my-2">
                            <FiPlus size={20} /> Add New
                        </button>
                    </Link>
                </div>

                <div className="overflow-auto">
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                        <SortableContext items={people?.map(p => p?._id)} strategy={verticalListSortingStrategy}>
                            <table className="min-w-full bg-white rounded-lg mt-5 text-left">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="px-4 py-4">S No.</th>
                                        <th className="px-4 py-4">Name</th>
                                        <th className="px-4 py-4">Position</th>
                                        <th className="px-4 py-4">Email</th>
                                        <th className="px-4 py-4">Contact Number</th>
                                        <th className="px-4 py-4">Details</th>
                                        <th className="px-4 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {people?.map((person, index) => (
                                        <SortableRow key={person?._id} person={person} index={index}>
                                            <td className="px-4 py-2">{index + 1}</td>
                                            <td className="px-4 py-2">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={`https://backend.alansarilaw.com${person?.profile_image}`}
                                                        alt="Profile"
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                    <span>{person?.fullName}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-6">{person?.position}</td>
                                            <td className="px-4 py-6">{person?.email}</td>
                                            <td className="px-4 py-6">{person?.phoneNumber}</td>
                                            <td className="px-4 py-6">
                                                <Link to={`/people-management/view-details/${person?._id}`}>
                                                    <MdOutlineRemoveRedEye
                                                        size={35}
                                                        className="text-white bg-[#386e93] rounded p-1.5 cursor-pointer"
                                                    />
                                                </Link>
                                            </td>
                                            <td className="px-4 py-2">
                                                <div className="flex gap-3">
                                                    <Link to={`/people-management/edit-person/${person?._id}`}>
                                                        <MdOutlineModeEdit
                                                            size={35}
                                                            className="text-white bg-primaryColor rounded p-1.5 cursor-pointer"
                                                        />
                                                    </Link>
                                                    <button onClick={() => confirmDelete(person?._id.toString())}>
                                                        <RiDeleteBin6Line
                                                            size={35}
                                                            className="text-white bg-red-600 rounded p-1.5 cursor-pointer"
                                                        />
                                                    </button>
                                                </div>
                                            </td>
                                        </SortableRow>
                                    ))}
                                    {people?.length === 0 && (
                                        <tr>
                                            <td colSpan={7} className="text-center py-4 text-gray-500">
                                                No data found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
        </div>
    );
};

export default PeopleManagement;
