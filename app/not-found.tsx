"use client";

import Image from "next/image";
import notfoundvercel from "./candlestick-chart_6354012.png";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <Image
        src={notfoundvercel} // from public folder
        width={300}
        height={300}
        alt="not found"
      />
      <p>not found</p>
    </div>
  );
}
