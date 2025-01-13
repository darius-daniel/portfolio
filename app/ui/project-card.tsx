import { clearPreviewData } from 'next/dist/server/api-utils';
import Link from 'next/link';

interface Props {
  name: string;
  description: string;
  url?: string;
  repo: string;
  preview: string;
  pid: number;
}

export default function ProjectCard({
  name,
  description,
  repo,
  preview,
  pid,
}: Props) {
  return (
    <div>
      <p className="mb-2">
        <span className="text-secondary-3 font-bold">Project {pid}</span> {'//'}{' '}
        {name}
      </p>
      <div className="flex flex-col divide-y divide-ash border border-ash rounded-xl text-[14px] h-[320px] w-80 bg-primary-3 text-secondary-1 relative">
          <iframe src={preview}></iframe>
        <div className="flex flex-col gap-4 px-6 py-4 absolute top-[179px] left-0">
          <p className="leading-[18px] text-left">{description}</p>
          <Link
            className="max-w-fit bg-ash hover:bg-secondary-1 text-[12px] text-white px-4 py-2 rounded-xl"
            href={preview ? preview : repo}
            target='_blank'
            prefetch
          >
            view-project
          </Link>
        </div>
      </div>
    </div>
  );
}
