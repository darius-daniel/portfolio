import { codeToTokens } from "shiki";
import { firaCode } from "../lib/fonts";

export default async function CodeBlock({
  code,
  lang,
}: {
  code: string;
  lang: string;
}) {
  const { tokens } = await codeToTokens(code, {
    lang: lang,
    theme: "min-dark",
  });

  return (
    <pre
      className={`${firaCode.className} bg-[#011221] p-4 leading-relaxed text-[12px] rounded-2xl font-[500] border border-ash`}
    >
      {tokens.map((line, idx) => (
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
