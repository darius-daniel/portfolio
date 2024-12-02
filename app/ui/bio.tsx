import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { bio, mobileBio } from "../lib/bio";
import Container from "./container";

export default function Bio() {
  return (
    <Container section="personal-info" topic="bio">
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
      <span className="lg:hidden -mt-10 w-[98%] mx-auto">
        <SyntaxHighlighter
          language="plaintext"
          style={atomOneDarkReasonable}
          customStyle={{
            background: "transparent",
            color: "#607B96",
          }}
          wrapLongLines
        >
          {mobileBio}
        </SyntaxHighlighter>
      </span>
    </Container>
  );
}
