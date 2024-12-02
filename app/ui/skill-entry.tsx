interface Props {
  skill: string;
}

export default function SkillEntry({ skill }: Props) {
  return (
    <p className="flex flex-row gap-1.5 text-secondary-1 text-center font-medium text-[14px] pb-1 px-2.5 border-b-2 border-ash text-nowrap hover:border-accent-1">
      {skill}
    </p>
  );
}
