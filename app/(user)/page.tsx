import Image from "next/image";
import candlestick from "../candlestick-chart_6354012.png";

export default function Home() {
  return (
    <div>
      <h1 className="text-center py-3 text-3xl">User Bitcoin Datas </h1>
      <div className="border  py-5">
        <h1 className="text-grey-600 flex justify-center text-[222%]">
          <Image src={candlestick} width="200" height="500" alt="candlestick" />
        </h1>
      </div>
    </div>
  );
}
// candlestick - chart_6354012;
