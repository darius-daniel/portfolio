import {
  RiArrowUpSFill,
  RiArrowRightSFill,
  RiPhoneFill,
  RiMailFill,
} from "@remixicon/react";
import Link from "next/link";
import { useState } from "react";

export default function ContactInfo() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <li
        className="px-5 py-2 border-b border-ash bg-ash flex flex-row gap-0.5 hover:underline mb-1.5 lg:bg-transparent lg:text-nowrap"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {showDropdown ? (
          <RiArrowUpSFill size={20} />
        ) : (
          <RiArrowRightSFill size={20} />
        )}{" "}
        contact-info
      </li>

      {showDropdown && (
        <div className="px-6 text-secondary-1 border-b border-ash">
          <Link
            href="tel:+2348144778267"
            className="flex flex-row gap-1.5 py-2 items-center hover:text-white"
          >
            <RiPhoneFill size={16} />
            +2348144778267
          </Link>

          <Link
            href="mailto:dariusdaniel771@gmail.com"
            className="flex flex-row gap-1.5 py-2 items-center hover:text-white lg:text-clip"
          >
            <RiMailFill size={16} />
            dariusdaniel771@gmail.com
          </Link>
        </div>
      )}
    </>
  );
}
