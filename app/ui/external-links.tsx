"use client";

import {
  RiArrowUpSFill,
  RiArrowRightSFill,
  RiExternalLinkFill,
} from "@remixicon/react";
import Link from "next/link";
import { useState } from "react";

export default function ExternalLinks() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="lg:max-w-fit">
      <p
        className="px-5 py-2 border-b border-ash bg-ash lg:bg-transparent flex flex-row gap-0.5 hover:underline"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {showDropdown ? <RiArrowUpSFill /> : <RiArrowRightSFill />}{" "}
        find-me-also-on:
      </p>
      {showDropdown && (
        <div className="px-6 text-secondary-1 lg:text-[14px]">
          <Link
            href="https://www.instagram.com/dariusdaniel777"
            className="flex flex-row gap-1.5 py-2 items-center hover:text-white"
            target="_blank"
          >
            <RiExternalLinkFill size={16} />
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/dariusdaniel777"
            className="flex flex-row gap-1.5 py-2 items-center hover:text-white"
            target="_blank"
          >
            <RiExternalLinkFill size={16} />
            LinkedIn
          </Link>
          <Link
            href="https://www.twitch.com/dariusdaniel777"
            className="flex flex-row gap-1.5 py-2 items-center hover:text-white"
            target="_blank"
          >
            <RiExternalLinkFill size={16} />
            Twitch
          </Link>
          <Link
            href="https://www.instagram.com/dariusdaniel777"
            className="flex flex-row gap-1.5 py-2 items-center hover:text-white"
            target="_blank"
          >
            <RiExternalLinkFill size={16} />
            Youtube
          </Link>
        </div>
      )}
    </div>
  );
}
