import { Menu, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export interface HeaderProps {
  showMenu: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
}

export default function Header({ showMenu }: HeaderProps) {
  const handleClick = () => showMenu.setValue(!showMenu.value);

  return (
    <header className="text-secondary-1 font-medium text-[16px] border-b border-ash flex flex-row justify-between items-center lg:justify-normal">
      <Link
        className="p-4 hover:text-white lg:border-e lg:border-ash lg:min-w-fit"
        href="/"
      >
        darius-daniel
      </Link>
      {showMenu.value ? (
        <X className="me-4 hover:text-white lg:hidden" onClick={handleClick} />
      ) : (
        <Menu
          className="me-4 hover:text-white lg:hidden"
          onClick={handleClick}
        />
      )}
      <span className="max-lg:hidden flex flex-row justify-between w-full items-center">
        <span>
          <Link
            className="p-4 border-e border-ash hover:text-white"
            href="/hello"
          >
            _hello
          </Link>
          <Link
            className="p-4 border-e border-ash hover:text-white"
            href="/about"
          >
            _about-me
          </Link>
          <Link
            className="p-4 border-e border-ash hover:text-white"
            href="/projects"
          >
            _projects
          </Link>
        </span>
        <Link
          className="p-4 border-s border-ash hover:text-white"
          href="/contact"
        >
          _contact-me
        </Link>
      </span>
    </header>
  );
}
