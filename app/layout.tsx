"use client";

// import type { Metadata } from "next";
import "./globals.css";
import { firaCode } from "./lib/fonts";
import Footer from "./ui/footer";
import Header from "./ui/header";
import { useState } from "react";
import Menu from "./ui/menu";

// export const metadata: Metadata = {
//   title: "Darius Daniel—Web Developer",
//   description: "Fullstack Developer Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${firaCode.className} subpixel-antialiased bg-primary-2 text-white max-h-screen border border-ash`}
      >
        <Header showMenu={{ value: showMenu, setValue: setShowMenu }} />
        {showMenu ? <Menu /> : children}
        <Footer />
      </body>
    </html>
  );
}
