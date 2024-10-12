import type { Metadata } from "next";
import "./globals.css";
import { firaCode } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Darius Daniel—Web Developer",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} subpixel-antialiased bg-primary-2 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
