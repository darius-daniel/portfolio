import { Facebook, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row flex-none w-full text-secondary-1 font-[450] border-y border-ash relative bottom-0">
      <span className="max-lg:w-1/2 p-4 min-w-fit border-e border-e-ash">
        Find me on:
      </span>
      <span className="max-lg:w-1/2 flex flex-row sm:max-lg:justify-end">
        <Link
          className="border-e border-ash p-4  sm:max-lg:border-s sm:max-lg:border-ash"
          href={`https://www.twitter.com/_darius_daniel_`}
          target="_blank"
        >
          <Twitter className="fill-secondary-1 hover:fill-white hover:text-white" />
        </Link>
        <Link
          className="border-e border-ash p-4"
          href={`https://www.facebook.com/darius.daniel.526`}
          target="_blank"
        >
          <Facebook className="fill-secondary-1 hover:fill-white hover:text-white" />
        </Link>
        <Link
          className="group p-4 hover:text-white lg:absolute lg:right-0 lg:border-s lg:border-ash lg:flex lg:flex-row lg:gap-2"
          href={`https://www.github.com/darius-daniel`}
          target="_blank"
        >
          <span className="max-lg:hidden">darius-daniel</span>
          <Github className="fill-secondary-1 group-hover:fill-white " />
        </Link>
      </span>
    </footer>
  );
}
