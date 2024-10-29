"use client";

import {
  RiArrowUpSFill,
  RiArrowRightSFill,
  RiCloseFill,
  RiGamepadFill,
  RiMailFill,
  RiPhoneFill,
  RiTerminalBoxFill,
  RiUser4Fill,
  RiFolder3Fill,
} from "@remixicon/react";

import Link from "next/link";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import bio from "../lib/bio";
import { snippet2 } from "../lib/snippets";
import SnippetCard from "../ui/snippet-card";

export default function AboutMe() {
  const [currentCategory, setCurrentCategory] = useState<
    "_personal-info" | "_professional-info" | "_hobbies"
  >("_personal-info");

  let categoryItems: Array<string>;
  if (currentCategory === "_personal-info") {
    categoryItems = ["bio", "interests", "education"];
  } else if (currentCategory === "_professional-info") {
    categoryItems = ["experience", "skills", "certification"];
  } else {
    categoryItems = [];
  }

  const [currentCategoryItem, setCurrentCategoryItem] = useState<
    string | undefined
  >();

  const [showCurrentCategoryDropdown, setShowCurrentCategoryDropdown] =
    useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  const folderColors = ["#E99287", "#43D9AD", "#3A49A4"];

  return (
    <main className="flex-auto lg:flex lg:flex-row lg:divide-x lg:divide-ash text-[14px] font-[450]">
      <h2 className="lg:hidden p-6 border-b border-b-ash">_about-me</h2>
      <div className="hidden py-4 px-6 lg:flex lg:flex-col lg:gap-6">
        <RiTerminalBoxFill
          className={
            currentCategory === "_professional-info"
              ? "text-secondary-1 hover:text-white"
              : "text-white hover:text-secondary-1"
          }
          onClick={() => setCurrentCategory("_professional-info")}
        />
        <RiUser4Fill
          className={
            currentCategory === "_personal-info"
              ? "text-secondary-1 hover:text-white"
              : "text-white hover:text-secondary-1"
          }
          onClick={() => setCurrentCategory("_personal-info")}
        />
        <RiGamepadFill
          className={
            currentCategory === "_hobbies"
              ? "text-secondary-1 hover:text-white"
              : "text-white hover:text-secondary-1"
          }
          onClick={() => setCurrentCategory("_hobbies")}
        />
      </div>
      <ul>
        <li
          className="px-5 py-2 border-b border-ash bg-ash flex flex-row gap-0.5 hover:underline mb-1.5 lg:bg-transparent lg:text-nowrap"
          onClick={() =>
            setShowCurrentCategoryDropdown(!showCurrentCategoryDropdown)
          }
        >
          {showCurrentCategoryDropdown ? (
            <RiArrowUpSFill size={20} />
          ) : (
            <RiArrowRightSFill size={20} />
          )}{" "}
          {currentCategory}
        </li>
        {showCurrentCategoryDropdown && (
          <div className="px-6 text-secondary-1 border-b border-ash">
            {categoryItems.map((item, idx) => (
              <div
                className="flex flex-row gap-1.5 py-2 items-center group"
                key={idx}
                onClick={() => setCurrentCategoryItem(item)}
              >
                <RiFolder3Fill
                  size={16}
                  color={folderColors[idx]}
                  className="-mt-1"
                />
                <p className="group-hover:text-white">{item}</p>
              </div>
            ))}
          </div>
        )}
        <li
          className="px-5 py-2 border-b border-ash bg-ash flex flex-row gap-0.5 hover:underline mb-1.5 lg:bg-transparent lg:text-nowrap"
          onClick={() => setShowContactDropdown(!showContactDropdown)}
        >
          {showContactDropdown ? (
            <RiArrowUpSFill size={20} />
          ) : (
            <RiArrowRightSFill size={20} />
          )}{" "}
          contact-info
        </li>
        {showContactDropdown && (
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
      </ul>
      <section className="flex-grow  lg:flex lg:flex-col">
        <p className="hidden lg:flex border-b border-ash">
          <span className="flex flex-row gap-20 w-fit py-2 px-4 text-secondary-1 border-e border-ash">
            {currentCategory}
            <RiCloseFill size={16} className="hover:text-white" />
          </span>
        </p>
        {currentCategoryItem && (
          <div className="lg:flex lg:flex-row lg:divide-x lg:divide-ash lg:flex-grow">
            <div className="hidden lg:flex lg:flex-col lg:w-1/2 gap-4 mx-auto leading-normal font-medium text-secondary-1 mt-6 pb-12">
              <SyntaxHighlighter
                language="plaintext"
                style={atomOneDarkReasonable}
                customStyle={{
                  background: "#011627",
                  color: "#607B96",
                }}
                showLineNumbers
                wrapLongLines
              >
                {bio}
              </SyntaxHighlighter>
            </div>

            <div className="hidden lg:flex lg:flex-col lg:w-1/2 lg:pt-6 lg:px-6">
              <p className="mb-8">{"//"} Code snippet showcase</p>
              <SnippetCard codeSnippet={snippet2} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
