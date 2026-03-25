"use client";
import { useParams } from "next/navigation";

const serviceData: Record<string, { title: string; description: string }> = {
  trading: {
    title: "Live Trading",
    description: "Buy and sell assets in real-time with live charts.",
  },
  portfolio: {
    title: "Portfolio Management",
    description: "Track your investments and performance.",
  },
  analysis: {
    title: "Market Analysis",
    description: "Use indicators like RSI, MACD for better decisions.",
  },
  payment: {
    title: "Secure Payments",
    description: "Deposit and withdraw funds securely.",
  },
  alerts: {
    title: "Real-time Alerts",
    description: "Get instant notifications for price changes.",
  },
};

export default function ServiceDetails() {
  const params = useParams();

  if (!params?.type) {
    return <div className="p-10">❌ Invalid URL</div>;
  }

  const key = params.type.toLowerCase().trim();
  const data = serviceData[key];

  if (!data) {
    return (
      <div className="p-10">
        ❌ Service not found <br />
        👉 Received: {params.type}
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-4 text-lg">{data.description}</p>
    </div>
  );
}

/* type Props = {
  params: {
    type: string;
  };
};

const serviceData: Record<string, { title: string; description: string }> = {
  trading: {
    title: "Live Trading",
    description: "Buy and sell assets in real-time with live charts.",
  },
  portfolio: {
    title: "Portfolio Management",
    description: "Track your investments and performance.",
  },
  analysis: {
    title: "Market Analysis",
    description: "Use indicators like RSI, MACD for better decisions.",
  },
  payment: {
    title: "Secure Payments",
    description: "Deposit and withdraw funds securely.",
  },
  alerts: {
    title: "Real-time Alerts",
    description: "Get instant notifications for price changes.",
  },
};

export default function ServiceDetails({ params }: Props) {
  const data = serviceData[params.type];

  if (!data) {
    return <div className="p-10">Service not found ❌</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{data.title}</h1>

      <p className="mt-4 text-lg">{data.description}</p>
    </div>
  );
}
 */
