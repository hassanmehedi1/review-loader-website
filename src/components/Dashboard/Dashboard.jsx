import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
   const data = [
     {
       month: "Mar",
       investment: 100000,
       sell: 241,
       revenue: 10401,
     },
     {
       month: "Apr",
       investment: 200000,
       sell: 423,
       revenue: 24500,
     },
     {
       month: "May",
       investment: 500000,
       sell: 726,
       revenue: 67010,
     },
     {
       month: "Jun",
       investment: 500000,
       sell: 529,
       revenue: 40405,
     },
     {
       month: "Jul",
       investment: 600000,
       sell: 601,
       revenue: 50900,
     },
     {
       month: "Aug",
       investment: 700000,
       sell: 670,
       revenue: 61000,
     },
   ];

   const datas = [
     {
       name: "18-24",
       uv: 31.47,
       pv: 2400,
       fill: "#8884d8",
     },
     {
       name: "25-29",
       uv: 26.69,
       pv: 4567,
       fill: "#83a6ed",
     },
     {
       name: "30-34",
       uv: -15.69,
       pv: 1398,
       fill: "#8dd1e1",
     },
     {
       name: "35-39",
       uv: 8.22,
       pv: 9800,
       fill: "#82ca9d",
     },
     {
       name: "40-49",
       uv: -8.63,
       pv: 3908,
       fill: "#a4de6c",
     },
     {
       name: "50+",
       uv: -2.63,
       pv: 4800,
       fill: "#d0ed57",
     },
     {
       name: "unknow",
       uv: 6.67,
       pv: 4800,
       fill: "#ffc658",
     },
   ];

   return (
     <div className="grid md:grid-cols-2 grid-cols-1">
       <LineChart
         width={730}
         height={250}
         data={data}
         margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
       >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="month" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
         <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
       </LineChart>

       <BarChart width={730} height={250} data={data}>
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="month" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar dataKey="sell" fill="#8884d8" />
         <Bar dataKey="revenue" fill="#82ca9d" />
         <Bar dataKey="investment" fill="#413ea0" />
       </BarChart>

       <RadarChart outerRadius={90} width={730} height={250} data={data}>
         <PolarGrid />
         <PolarAngleAxis dataKey="month" />
         <PolarRadiusAxis angle={30} domain={[0, 150]} />
         <Radar
           name="sales"
           dataKey="revenue"
           stroke="#8884d8"
           fill="#8884d8"
           fillOpacity={0.6}
         />
         <Radar
           name="investment"
           dataKey="investment"
           stroke="#82ca9d"
           fill="#82ca9d"
           fillOpacity={0.6}
         />
         <Legend />
       </RadarChart>

       <RadialBarChart
         width={730}
         height={250}
         innerRadius="10%"
         outerRadius="80%"
         data={datas}
         startAngle={180}
         endAngle={0}
       >
         <RadialBar
           minAngle={15}
           label={{ fill: "#666", position: "insideStart" }}
           background
           clockWise={true}
           dataKey="uv"
         />
         <Legend
           iconSize={10}
           width={120}
           height={140}
           layout="vertical"
           verticalAlign="middle"
           align="right"
         />
         <Tooltip />
       </RadialBarChart>
     </div>
   );
};

export default Dashboard;