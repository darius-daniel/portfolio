"use client";

import {
  BundledLanguage,
  codeToTokens,
  SpecialLanguage,
  ThemedToken,
} from "shiki";
import { firaCode } from "../lib/fonts";
import { useEffect, useState } from "react";

export default function CodeBlock({
  code,
  lang,
}: {
  code: string;
  lang: BundledLanguage | SpecialLanguage | undefined;
}) {
  const [tokens, setTokens] = useState<ThemedToken[][]>([]);

  useEffect(() => {
    codeToTokens(code, {
      lang: lang,
      theme: "min-dark",
    }).then(({ tokens }) => setTokens(tokens));
  }, [code, lang]);

  return (
    <pre
      className={`${firaCode.className} bg-primary-3 p-4 leading-relaxed text-[12px] rounded-2xl font-[500] border border-ash overflow-x-scroll`}
    >
      {tokens?.map((line, idx) => (
        <span key={idx}>
          <code key={idx}>
            {line.map((token, idx) => (
              <span
                style={{ color: token.color }}
                key={idx}
                className={`${firaCode.className}`}
              >
                {token.content}
              </span>
            ))}{" "}
          </code>
          <br />
        </span>
      ))}
    </pre>
  );
}
