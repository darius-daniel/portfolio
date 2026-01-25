import { ExperienceEntryInterface } from "../lib/interfaces";

interface Props {
  entry: ExperienceEntryInterface;
}

export default function ExperienceEntry({ entry }: Props) {
  return (
    <div className="lg:w-5/6 lg:mx-auto">
      <div className="text-secondary-1 hover:ms-4 hover:transition-all hover:rounded-xl">
        <p className="text-[16px]">{entry.role}</p>
        <p className="text-secondary-3 text-[12px] font-bold">
          {entry.company}
        </p>
        <p className="text-[10px] text-accent-2">{`${entry.startDate.toLocaleDateString("default", { month: "short", year: "numeric" })} - ${entry.endDate.toLocaleDateString("default", { month: "short", year: "numeric" })}`}</p>
      </div>
      <hr className="my-3 border-0.5 border-ash" />
    </div>
  );
}
