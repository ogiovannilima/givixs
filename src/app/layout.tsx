import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/page";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giovanni",
  description: "Created by Giovanni Lima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NavBar />
        <div className="mt-[62px] bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}
