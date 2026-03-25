import Link from "next/link";

const services = [
  { name: "Live Trading", slug: "trading" },
  { name: "Portfolio Management", slug: "portfolio" },
  { name: "Market Analysis", slug: "analysis" },
  { name: "Secure Payments", slug: "payment" },
  { name: "Real-time Alerts", slug: "alerts" },
];

export default function MarketServices() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Market Services</h1>

      {services.map((service) => (
        <div key={service.slug} className="mb-3">
          {/* <Link href={`/services/marketservice/${service.slug}`}> */}
          <Link href={`/services/marketservice/${service.slug}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              {service.name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

/* import Link from "next/link";

const services = [
  { name: "Live Trading", slug: "trading" },
  { name: "Portfolio Management", slug: "portfolio" },
  { name: "Market Analysis", slug: "analysis" },
  { name: "Secure Payments", slug: "payment" },
  { name: "Real-time Alerts", slug: "alerts" },
];

export default function Services() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Services</h1>

      {services.map((service) => (
        <div key={service.slug} className="mb-3">
          <Link href={`/services/marketservice/${service.slug}`}>
            {" "}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              {service.name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
 */
