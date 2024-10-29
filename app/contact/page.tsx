"use client";

import { RiCloseFill } from "@remixicon/react";
import { SetStateAction, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContactInfo from "../ui/contact-info";
import ExternalLinks from "../ui/external-links";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event: {
    target: { id: string; value: SetStateAction<string> };
  }) => {
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  const messageTemplate = `const button = document.querySelector('sendBtn')

const message = {
  name: "${name}",
  email: "${email}",
  message: "${message}",
  date: "${new Date().toDateString()}"
}

button.addEventListener('click', () => {
  form.send(message);
})
`;

  return (
    <main className="flex-auto lg:flex lg:flex-row lg:divide-x lg:divide-ash text-[14px] font-[450]">
      <h2 className="lg:hidden p-6 border-b border-b-ash">_contact-me</h2>
      <ul className="lg:min-w-fit">
        <ContactInfo />
        <ExternalLinks />
      </ul>
      <section className="flex-grow  lg:flex lg:flex-col">
        <p className="hidden lg:flex border-b border-ash">
          <span className="flex flex-row gap-20 w-fit py-2 px-4 text-secondary-1 border-e border-ash">
            _contact-me
            <RiCloseFill size={16} className="hover:text-white" />
          </span>
        </p>
        <div className="lg:flex lg:flex-row lg:divide-x lg:divide-ash lg:flex-grow">
          <form
            action="#"
            className="w-4/5 flex flex-col gap-4 mx-auto font-medium text-secondary-1 mt-10 pb-12 lg:w-1/2 lg:flex-none lg:box-border"
          >
            <span className="lg:w-4/5 lg:mx-auto">
              <label htmlFor="name">_name:</label>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                className="bg-primary-3 w-full p-2 mt-2 rounded-lg border-2 border-ash"
              />
            </span>{" "}
            <span className="lg:w-4/5 lg:mx-auto">
              <label htmlFor="email">_email:</label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                className="bg-primary-3 w-full p-2 mt-2 rounded-lg border-2 border-ash"
              />
            </span>
            <span className="lg:w-4/5 lg:mx-auto">
              <label htmlFor="message">_message:</label>
              <textarea
                id="message"
                onChange={handleChange}
                className="bg-primary-3 max-w-full w-full p-2 mt-2 rounded-lg border-2 border-ash"
                rows={6}
              />
            </span>
            <input
              type="submit"
              className="py-2 px-4 bg-ash hover:bg-secondary-1 text-white hover:font-medium rounded-lg w-fit lg:w-4/5 lg:mx-auto"
              value="submit-message"
            />
          </form>
          <div className="hidden lg:block lg:w-1/2 lg:pt-10">
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDarkReasonable}
              customStyle={{ fontSize: "14px", background: "#011627" }}
              showLineNumbers={true}
              wrapLongLines={true}
            >
              {messageTemplate}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </main>
  );
}
