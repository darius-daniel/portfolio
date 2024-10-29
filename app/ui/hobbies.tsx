import { RiArrowRightSFill } from "@remixicon/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  topic: {
    value: string | undefined;
    setValue: Dispatch<SetStateAction<string | undefined>>;
  };
}

export default function Hobbies({ topic }: Props) {
  return (
    <li
      className="px-5 py-2 border-b border-ash bg-ash flex flex-row gap-0.5 hover:underline mb-1.5 lg:bg-transparent lg:text-nowrap"
      onClick={() => topic.setValue("hobbies")}
    >
      <RiArrowRightSFill size={20} />
      hobbies
    </li>
  );
}
