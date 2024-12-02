import { Entry } from "../lib/interfaces";

interface Props {
  entry: Entry;
}

export default function EducationEntry({ entry }: Props) {
  return (
    <div className="lg:w-5/6 lg:mx-auto">
      <div className="text-secondary-1 hover:ms-4 hover:transition-all hover:rounded-xl">
        <p className="text-[16px]">{entry.programme}</p>
        <p className="text-secondary-3 text-[12px] font-bold">
          {entry.institution}
        </p>
        <p className="text-[10px] text-accent-2">{`${entry.commencement.getUTCFullYear()} - ${entry.completion.getUTCFullYear()}`}</p>
      </div>
      <hr className="my-3 border-0.5 border-ash" />
    </div>
  );
}
