'use client';

import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiAngularjsFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
} from '@remixicon/react';
import ProjectCard from '../ui/project-card';
import { useState } from 'react';
import projects from '../lib/projects';

export default function Projects() {
  const [showProjectsFilter, setShowProjectsFilter] = useState(false);

  const labelStyles =
    'flex flex-row gap-2.5 items-center -mt-0.5 hover:text-white';
  const labelTextStyles = 'flex gap-1.5';

  return (
    <main className="flex-auto lg:flex lg:flex-row lg:divide-x lg:divide-ash">
      <h2 className="lg:hidden p-6 border-b border-b-ash">_projects</h2>
      <div>
        <div
          className="px-5 py-2 border-b border-ash bg-ash lg:bg-transparent flex flex-row gap-0.5 hover:underline mb-1.5 min-w-fit"
          onClick={() => setShowProjectsFilter(!showProjectsFilter)}
        >
          {showProjectsFilter ? <RiArrowDownSFill /> : <RiArrowRightSFill />}{' '}
          _projects
        </div>
        {showProjectsFilter && (
          <form className="px-6 text-secondary-1 border-b border-ash flex flex-col gap-3 items-start pt-2 pb-4">
            <label htmlFor="react" className={labelStyles}>
              <input type="checkbox" value="React" name="react" id="react" />
              <span className={labelTextStyles}>
                <RiReactjsFill size={20} />
                React
              </span>
            </label>
            <label htmlFor="html" className={labelStyles}>
              <input type="checkbox" value="html" name="html" id="html" />
              <span className={labelTextStyles}>
                <RiHtml5Fill size={20} />
                HTML
              </span>
            </label>
            <label htmlFor="css" className={labelStyles}>
              <input type="checkbox" value="css" name="css" id="css" />
              <span className={labelTextStyles}>
                <RiCss3Fill size={20} />
                CSS
              </span>
            </label>
            <label htmlFor="js" className={labelStyles}>
              <input type="checkbox" value="js" name="js" id="js" />
              <span className={labelTextStyles}>
                <RiJavascriptFill size={20} />
                JavaScript
              </span>
            </label>
            <label htmlFor="angular" className={labelStyles}>
              <input
                type="checkbox"
                value="angular"
                name="angular"
                id="angular"
              />
              <span className={labelTextStyles}>
                <RiAngularjsFill size={20} />
                Angular
              </span>
            </label>
          </form>
        )}
      </div>
      <section className="px-5 flex flex-col items-center lg:flex-row lg:flex-wrap gap-2 lg:px-28 lg:items-stretch py-10">
        {projects.map((project, idx) => (
          <ProjectCard
            preview={project.preview}
            repo={project.repo}
            description={project.description}
            name={project.name}
            pid={idx + 1}
            key={idx}
          />
        ))}
      </section>
    </main>
  );
}
