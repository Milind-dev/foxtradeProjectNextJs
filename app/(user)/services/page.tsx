import { Suspense } from "react";
import Loading from "../loading";

export default function ServicesHome() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Services Home</h1>

      <Suspense fallback={<Loading />}>
        {/* <MarketService /> */}
        <p className="mt-4">Go to Market Services</p>

        <a href="/services/marketservice" className="text-blue-500 underline">
          Open Market Services
        </a>
      </Suspense>
    </div>
  );
}
/* 
import { Suspense } from "react";
import Loading from "../loading";

export default function ServicesHome() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Services Home</h1>

      <Suspense fallback={<Loading />}>
        <MarketService />
      </Suspense>

      <p className="mt-4">Go to Market Services</p>
    </div>
  );
}
 */
