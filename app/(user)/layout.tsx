import type { Metadata } from "next";
import Navigation from "../Navigation";
import { Oswald } from "next/font/google";

// import "./globals.css";
import "../globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald", // for module / Tailwind
});

export const metadata: Metadata = {
  title: "Bitcoin Trading Data",
  description: "Bitcoin Trading Information to Easy to See",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={oswald.variable}
    >
      <body className={oswald.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
