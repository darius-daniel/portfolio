"use client";

import Image from "next/image";
import CodeBlock from "./codeblock";
import { useState } from "react";
import { X } from "lucide-react";

export default function SnippetCard() {
  const snippet1 = `const copyToClipboard = () => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      setComponent(tick);
      setTimeout(() => {
        setComponent(copy);
      }, 2000);
    })
    .catch((error: Error) => console.error(error.message));
};`;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <span className="flex flex-row gap-3 mb-4">
        <Image
          src="/kidaha-05.svg"
          width={36}
          height={36}
          alt="Gravatar"
          className="rounded-full"
        />
        <span className="flex-auto flex flex-row justify-between">
          <span>
            <p className="font-bold text-secondary-3">darius-daniel</p>
            <p className="text-secondary-1">5 months ago</p>
          </span>
          <span
            className="flex flex-row gap-2 hover:underline group"
            onClick={() => setShowDetails(!showDetails)}
          >
            <Image
              src="/comments.svg"
              width={18}
              height={18}
              alt="comments svg icon"
              className="-mt-5 group-hover:fill-white"
            />
            details
          </span>
        </span>
      </span>
      <CodeBlock code={snippet1} lang="ts" />
      {showDetails && (
        <>
          <hr className="my-8 border-ash" />
          <div className="flex flex-row text-secondary-1 text-[10px] md:text-[12px] lg:text-[14px] font-[450]">
            <p className="text-[14px] text-secondary-1 w-11/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi
              labore cumque rerum accusantium eum quidem similique quam,
              distinctio, praesentium possimus assumenda accusamus sequi dolore
              aliquam iusto error atque quod.
            </p>
            <X onClick={() => setShowDetails(false)} />
          </div>
        </>
      )}
    </>
  );
}
