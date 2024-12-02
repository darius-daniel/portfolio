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
import { ChangeEvent, useState } from 'react';
import projects from '../lib/projects';

export default function Projects() {
  const [showProjectsFilter, setShowProjectsFilter] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

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
            <span className="flex flex-row gap-2.5 hover:text-white">
              <input type="checkbox" value="React" name="react" id="react" />
              <label
                htmlFor="react"
                className="flex flex-row gap-1.5 items-center"
              >
                <RiReactjsFill size={20} />
                React
              </label>
            </span>
            <span className="flex flex-row gap-2.5 hover:text-white">
              <input type="checkbox" value="html" name="html" id="html" />
              <label
                htmlFor="html"
                className="flex flex-row gap-1.5 items-center"
              >
                <RiHtml5Fill size={20} />
                HTML
              </label>
            </span>
            <span className="flex flex-row gap-2.5 hover:text-white">
              <input type="checkbox" value="css" name="css" id="css" />
              <label
                htmlFor="css"
                className="flex flex-row gap-1.5 items-center"
              >
                <RiCss3Fill size={20} />
                CSS
              </label>
            </span>
            <span className="flex flex-row gap-2.5 hover:text-white">
              <input type="checkbox" value="js" name="js" id="js" />
              <label
                htmlFor="js"
                className="flex flex-row gap-1.5 items-center"
              >
                <RiJavascriptFill size={20} />
                JavaScript
              </label>
            </span>
            <span className="flex flex-row gap-2.5 hover:text-white">
              <input
                type="checkbox"
                value="angular"
                name="angular"
                id="angular"
                onChange={handleChange}
              />
              <label
                htmlFor="angular"
                className="flex flex-row gap-1.5 items-center"
              >
                <RiAngularjsFill size={20} />
                Angular
              </label>
            </span>
          </form>
        )}
      </div>
      <section className="px-5 flex flex-col lg:flex-row gap-2 lg:px-28 lg:items-stretch pb-10">
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
