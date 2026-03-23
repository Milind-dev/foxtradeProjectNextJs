"use client";
import React, { useEffect, useState } from "react";
import style from "./Dashboard.module.css";
import Link from "next/link";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://api.binance.com/api/v3/ticker/24hr");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.Container}>
      {data.slice(0, 10).map((item) => (
        <Link key={item.symbol} href={`/dashboard/${item.symbol}`}>
          <div className={style.card}>
            <p>
              {item.symbol} - {item.lastPrice}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Dashboard;

/* "use client";
import React, { useEffect, useState } from "react";

const dashboard = () => {
  const [data, setData] = useState(null); //here becaue response is not in array just single object
  const fetchdata = async () => {
    const res = await fetch(
      "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {data && (
        <div>
          <h2>symbol - {data.symbol}</h2>
          <p>lastPrice - Price: {data.lastPrice}</p>
          <p>24h Change -{data.priceChangePercent}%</p>
        </div>
      )}
    </>
  );
};

export default dashboard;
 */
