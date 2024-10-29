import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import bio from "../lib/bio";

export default function Bio() {
  return (
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
  );
}
