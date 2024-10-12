import { ChevronRight } from "lucide-react";
import Blur from "./blur";

export default function Hero() {
  return (
    <main className="py-24">
      <Blur />
      <main className="px-8 w-full relative font-medium">
        <p className="text-[18px] mb-24">Hi all. I am</p>
        <p className="flex flex-row text-accent-2 text-[20px] items-center">
          <ChevronRight /> Fullstack Developer
        </p>
        <p className="ms-6 text-[62px] font-normal leading-none mb-28">
          Darius Daniel
        </p>
        <p className="text-secondary-1 mb-4 text-[14px]">
          {"// Find my profile on Github:"}
        </p>
        <p className="text-[14px]">
          {" "}
          <span className="text-secondary-3">const</span>{" "}
          <span className="text-accent-2">githubLink</span> ={" "}
          <span className="text-accent-3">
            {"https://github.com//darius-daniel/"}{" "}
          </span>
        </p>
      </main>
    </main>
  );
}
