interface Props {
  children: React.ReactNode;
  section: string;
  topic: string;
}

export default function Container({ children, section, topic }: Props) {
  const normalWidth = "w-5/6";
  const wideWidth = "w-full";

  return (
    <div className="w-5/6 flex flex-col lg:w-1/2 gap-4 mx-auto leading-normal font-medium text-secondary-1 mt-12 pb-12">
      <h3 className="lg:hidden text-white">
        {"//"} {section} / <span className="text-secondary-1">{topic}</span>
      </h3>
      <div
        className={`${topic === "bio" || "education" ? wideWidth : normalWidth} mx-auto`}
      >
        {children}
      </div>
    </div>
  );
}
