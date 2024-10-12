import { Menu, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  showMenu: {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
  };
}

export default function Header({ showMenu }: HeaderProps) {
  const handleClick = () => showMenu.setValue(!showMenu.value);
  return (
    <header className="p-4 text-secondary-1 font-medium text-[16px] flex flex-row justify-between">
      <h1 className="hover:underline hover:text-white">darius-daniel</h1>
      {showMenu.value ? (
        <X className="hover:text-white" onClick={handleClick} />
      ) : (
        <Menu className="hover:text-white" onClick={handleClick} />
      )}
    </header>
  );
}
