import education from "../lib/education";
import EducationEntry from "./education-entry";

export default function Education() {
  return (
    <div className="w-11/12 px-2 lg:flex lg:flex-col lg:w-1/2 gap-0.5 mx-auto lg:px-10 font-medium mt-6 pb-12">
      <p className="lg:hidden text-white mb-4">
        {"//"} personal-info /{" "}
        <span className="text-secondary-1">education</span>
      </p>
      {education.map((entry, idx) => (
        <EducationEntry key={idx} entry={entry} />
      ))}
    </div>
  );
}
