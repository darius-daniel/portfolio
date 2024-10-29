import { fira_code } from "../lib/fonts";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: Props) {
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
