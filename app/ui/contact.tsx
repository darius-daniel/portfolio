"use client";

import { CircleMinus, CirclePlus, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <span
        className={`flex flex-row gap-1.5 items-center border-b border-ash px-2 py-2 ${showInfo ? "text-white" : "text-secondary-1 hover:text-white"} hover:underline`}
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? (
          <CircleMinus size={16} className="mt-1" />
        ) : (
          <CirclePlus size={16} className="mt-1" />
        )}
        <h2 className="font-medium">contacts</h2>
      </span>
      {showInfo && (
        <div className="text-secondary-1 text-[14px] font-[450] flex flex-col gap-2 px-2 py-4">
          <Link
            className="flex flex-row gap-2 items-center hover:text-white hover:underline"
            href="mailto:dariusdaniel771@gmail.com"
            target="_blank"
          >
            <Mail size={16} />
            dariusdaniel771@gmail.com
          </Link>
          <Link
            className="flex flex-row gap-2 items-center hover:text-white hover:underline"
            href="tel:+2348144778267"
            target="_blank"
          >
            <Phone size={16} />
            +2348144778267
          </Link>
        </div>
      )}
    </>
  );
}
