/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableProps } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";

type Idata = {
    id: number,
    name: string,
    materialsName: string,
    materialsUnit: string,
    materialsPrice: number,
}

const Materials = () => {

    const data: Idata[] = [
        {
            id: 1,
            name: "Wade Warren",
            materialsName: "Electrical Cable",
            materialsUnit: "Feet",
            materialsPrice: 25,
        },
        {
            id: 2,
            name: "Dianne Russell",
            materialsName: "Toilet Cleaner",
            materialsUnit: "ML",
            materialsPrice: 12,
        },
        {
            id: 3,
            name: "Wade Warren",
            materialsName: "Switch Board",
            materialsUnit: "Piece",
            materialsPrice: 10,
        },
        {
            id: 4,
            name: "Courtney Henry",
            materialsName: "Toilet Cleaner",
            materialsUnit: "ML",
            materialsPrice: 12,
        },
        {
            id: 5,
            name: "Wade Warren",
            materialsName: "Switch Board",
            materialsUnit: "Piece",
            materialsPrice: 10,
        },
    ]

    const columns: TableProps<Idata>['columns'] = [
        {
            title: "S No.",
            dataIndex: "id",
            render: (_: any, record: Idata) => <span>{record?.id}</span>,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (_: any, record: Idata) =>
                <div className=' flex items-center gap-2 w-[200px]'>
                    <img
                        src={`https://avatar.iran.liara.run/public/${record?.id}`}
                        alt=""
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                        <span>{record?.name}</span>
                    </div>
                </div>,
        },
        {
            title: "Materials Name",
            dataIndex: "materialsName",
            align: 'center',
            render: (_: any, record: Idata) => <span>{record?.materialsName}</span>,
        },
        {
            title: "Materials Unit",
            dataIndex: "materialsUnit",
            align: 'center',
            render: (_: any, record: Idata) => <span>{record?.materialsUnit}</span>,
        },
        {
            title: "Materials Price",
            dataIndex: "materialsPrice",
            align: 'center',
            render: (_: any, record: Idata) => <span>${record?.materialsPrice}</span>,
        },
        {
            title: "Action",
            dataIndex: "action",
            align: 'right',
            render: () =>
                <div className=" flex justify-end">
                    <div className=' flex items-center gap-2'>
                        <button className=" bg-red-600 p-1 rounded cursor-pointer"><RiDeleteBin6Line className="w-6 h-6 text-white" /></button>
                    </div>
                </div>
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                className="mt-5 overflow-x-scroll xl:overflow-auto bg-white rounded-lg"
                dataSource={data}
                pagination={false}
                rowKey="_id"
            />
        </div>
    );
};

export default Materials;