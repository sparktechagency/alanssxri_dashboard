/* eslint-disable @typescript-eslint/no-unused-vars */
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const MostUsingServicePie = () => {

    const data = [
        { name: 'Painter', value: 400 },
        { name: 'Elecetric', value: 300 },
        { name: 'Cleaner', value: 300 },
        { name: 'Plumber', value: 200 },
    ];

    const COLORS = ['#cdb3cd', '#380538', '#8f538f', '#550855'];

    const RADIAN = Math.PI / 180;
    interface LabelProps {
        cx: number;
        cy: number;
        midAngle: number;
        innerRadius: number;
        outerRadius: number;
        percent: number;
        index: number;
    }

    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: LabelProps) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };


    return (
        <div>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        // label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MostUsingServicePie;