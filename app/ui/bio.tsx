import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { bio, mobileBio } from "../lib/bio";

export default function Bio() {
  return (
    <div className="w-11/12 lg:flex lg:flex-col lg:w-1/2 gap-4 mx-auto leading-normal font-medium text-secondary-1 mt-6 pb-12">
      <p className="lg:hidden text-white px-2">
        {"//"} personal-info / <span className="text-secondary-1">bio</span>
      </p>
      <span className="hidden lg:flex">
        <SyntaxHighlighter
          language="plaintext"
          style={atomOneDarkReasonable}
          customStyle={{
            background: "#011627",
            color: "#607B96",
            fontSize: "12px",
          }}
          wrapLongLines
        >
          {bio}
        </SyntaxHighlighter>
      </span>
      <span className="lg:hidden">
        <SyntaxHighlighter
          language="plaintext"
          style={atomOneDarkReasonable}
          customStyle={{
            background: "#011627",
            color: "#607B96",
          }}
          wrapLongLines
        >
          {mobileBio}
        </SyntaxHighlighter>
      </span>
    </div>
  );
}
