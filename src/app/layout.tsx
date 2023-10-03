import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout(context: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-[#282c3c] text-[#2ce5a7]">
          <Header />
          <div className="flex grow">
            {context.children}
          </div>
        </div>
      </body>
    </html>
  );
}
