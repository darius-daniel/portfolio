"use client";

import "./globals.css";
import { fira_code } from "./lib/fonts";
import Footer from "./ui/footer";
import Header from "./ui/header";
import { useState } from "react";
import Menu from "./ui/menu";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${fira_code.className} flex flex-col subpixel-antialiased bg-primary-2 text-white h-svh max-w-h-svh border-0.5 border-ash relative`}
      >
        <Header
          showMenu={{ value: showMenu, setValue: setShowMenu }}
          pathname={pathname}
        />
        {showMenu ? (
          <Menu
            showMenu={{ value: showMenu, setValue: setShowMenu }}
            pathname={pathname}
          />
        ) : (
          children
        )}
        <Footer />
      </body>
    </html>
  );
}
