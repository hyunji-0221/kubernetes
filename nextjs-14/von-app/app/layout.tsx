'use client'

//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./components/common/module/header";
import { useState } from "react";

const ReduxProvider = dynamic(() => import("@/redux/redux-provider"), {
  ssr: false
});

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const[showHeader , setShowHeader] = useState<boolean>(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        {showHeader && <Header/>}
        <div className="mt-100">
        <ReduxProvider> {children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}