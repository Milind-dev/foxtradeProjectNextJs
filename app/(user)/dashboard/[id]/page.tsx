"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const DashboardId = () => {
  const params = useParams();
  // console.log("params ", params);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!params?.id) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${params.id}`,
      );
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [params.id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{data.symbol}</h1>
      <p>Price: ₹ {Number(data.lastPrice).toFixed(2)}</p>
      <p>24h Change: {data.priceChangePercent}%</p>
      <p>High: {data.highPrice}</p>
      <p>Low: {data.lowPrice}</p>
    </div>
  );
};

export default DashboardId;
