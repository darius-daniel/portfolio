import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export interface Props {
  showMenu: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
  pathname: string;
}

export default function Menu({ showMenu }: Props) {
  const menuItems = ["_hello", "_about-me", "_projects", "_contact-me"];

  return (
    <div className="flex flex-col flex-auto lg:hidden">
      {menuItems.map((item, idx) => (
        <Link
          key={idx}
          className="p-4 hover:bg-ash border-b border-ash"
          href={`/${item.split("_")[1].split("-")[0]}`}
          onClick={() => showMenu.setValue(false)}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
