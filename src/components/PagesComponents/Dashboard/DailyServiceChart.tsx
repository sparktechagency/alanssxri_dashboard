/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data: any = [
    {
        name: '1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '7',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const DailyServiceChart = () => {
    return (
        <div className=' w-full'>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart width={300} height={100} data={data} >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis tickLine={false} dataKey="name" />
                    <YAxis tickLine={false} />
                    <Tooltip />
                    <Line dataKey="pv" stroke="#380538" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default DailyServiceChart;