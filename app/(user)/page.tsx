"use client";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

import candlestick from "../candlestick-chart_6354012.png";

export default function Home() {
  const data = [
    { name: "Mon", sales: 100 },
    { name: "Tue", sales: 300 },
    { name: "Wed", sales: 200 },
  ];

  return (
    <div>
      <h1 className="text-center py-3 text-3xl">User Bitcoin Datas </h1>
      <div className="border  py-5">
        <h1 className="text-grey-600 flex justify-center text-[222%]">
          <Image src={candlestick} width="200" height="500" alt="candlestick" />
        </h1>
      </div>
      <h1 className="text-2xl text-center mt-3">Charts </h1>
      <div className="mt-12 flex justify-center">
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="black" />
        </LineChart>
      </div>
    </div>
  );
}
// candlestick - chart_6354012;
