"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded ${
      pathname === path
        ? "bg-black text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="flex gap-4 p-4 border-b">
      <Link href="/" className={linkStyle("/")}>
        Home
      </Link>
      <Link href="/dashboard" className={linkStyle("/dashboard")}>
        dashboard
      </Link>
      <Link href="/about" className={linkStyle("/about")}>
        About
      </Link>

      <Link href="/services" className={linkStyle("/services")}>
        Service
      </Link>

      <Link href="/userlogin" className={linkStyle("/userlogin")}>
        Login
      </Link>
    </nav>
  );
}
