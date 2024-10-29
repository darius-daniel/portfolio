import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { RiCloseFill, RiMenuLine } from "@remixicon/react";

export interface HeaderProps {
  showMenu: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
  pathname: string;
}

export default function Header({ showMenu, pathname }: HeaderProps) {
  const handleClick = () => showMenu.setValue(!showMenu.value);

  return (
    <header className="flex-none text-secondary-1 font-medium text-[16px] border-b border-ash flex flex-row justify-between items-center lg:justify-normal">
      <Link
        className="p-4 hover:text-white lg:border-e lg:border-ash lg:min-w-fit"
        href="/"
      >
        darius-daniel
      </Link>
      {showMenu.value ? (
        <RiCloseFill
          className="me-4 hover:text-white lg:hidden"
          onClick={handleClick}
        />
      ) : (
        <RiMenuLine
          className="me-4 hover:text-white lg:hidden"
          onClick={handleClick}
        />
      )}
      <span className="max-lg:hidden flex flex-row justify-between w-full items-center">
        <span>
          <Link
            className={`p-4 border-e border-e-ash hover:text-white ${pathname === "/" && "border-b-2 border-b-accent-1"}`}
            href="/hello"
          >
            _hello
          </Link>
          <Link
            className={`p-4 border-e border-e-ash hover:text-white ${pathname === "/about" && "border-b-2 border-b-accent-1"}`}
            href="/about"
          >
            _about-me
          </Link>
          <Link
            className={`p-4 border-e border-e-ash hover:text-white ${pathname === "/projects" && "border-b-2 border-b-accent-1"}`}
            href="/projects"
          >
            _projects
          </Link>
        </span>
        <Link
          className={`p-4 border-s border-s-ash hover:text-white ${pathname === "/contact" && "border-b-2 border-b-accent-1"}`}
          href="/contact"
        >
          _contact-me
        </Link>
      </span>
    </header>
  );
}
