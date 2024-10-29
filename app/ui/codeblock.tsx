import { fira_code } from "../lib/fonts";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <SyntaxHighlighter
      className={`${fira_code.className} leading-relaxed text-[12px] rounded-2xl font-[450] overflow-x-hidden`}
      language={language}
      style={atomOneDarkReasonable}
      customStyle={{
        border: "1px solid #1E2D3D",
        background: "#011221",
        padding: "20px",
      }}
      wrapLongLines
    >
      {code}
    </SyntaxHighlighter>
  );
}
