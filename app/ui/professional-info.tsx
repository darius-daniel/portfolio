import {
  RiArrowRightSFill,
  RiArrowUpSFill,
  RiFolder3Fill,
} from "@remixicon/react";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  topic: {
    value: string | undefined;
    setValue: Dispatch<SetStateAction<string | undefined>>;
  };
}

export default function ProfessionalInfo({ topic }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const topics = ["experience", "skills", "certification"];
  const folderColors = ["#E99287", "#43D9AD", "#3A49A4"];

  return (
    <>
      <li
        className="px-5 py-2 border-b border-ash bg-ash flex flex-row gap-0.5 hover:underline mb-1.5 lg:bg-transparent lg:text-nowrap"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {showDropdown ? (
          <RiArrowUpSFill size={20} />
        ) : (
          <RiArrowRightSFill size={20} />
        )}{" "}
        professional-info
      </li>
      {showDropdown && (
        <div className="px-6 text-secondary-1 border-b border-ash">
          {topics.map((item, idx) => (
            <div
              className="flex flex-row gap-1.5 py-2 items-center group"
              key={idx}
              onClick={() => topic.setValue(item)}
            >
              <RiFolder3Fill
                size={16}
                color={folderColors[idx]}
                className="-mt-1"
              />
              <p
                className={
                  topic.value !== item
                    ? "group-hover:text-white"
                    : "text-white group-hover:underline"
                }
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
