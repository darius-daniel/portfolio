'use client';

import { RiCloseFill, RiTerminalBoxFill, RiUser4Fill } from '@remixicon/react';

import { useState } from 'react';
import { snippet2 } from '../lib/snippets';
import Bio from '../ui/bio';
import Certification from '../ui/certification';
import ContactInfo from '../ui/contact-info';
import Education from '../ui/education';
import Experience from '../ui/experience';
import Hobbies from '../ui/hobbies';
import PersonalInfo from '../ui/personal-info';
import ProfessionalInfo from '../ui/professional-info';
import Skills from '../ui/skills';
import SnippetCard from '../ui/snippet-card';

export default function AboutMe() {
  const [currentTopic, setCurrentTopic] = useState<string | undefined>();
  const [currentSection, setCurrentSection] = useState<
    '_personal-info' | '_professional-info' | '_hobbies'
  >('_personal-info');

  return (
    <main className="flex-auto lg:flex lg:flex-row lg:divide-x lg:divide-ash text-[14px] font-[450]">
      <h2 className="lg:hidden p-6 border-b border-b-ash">_about-me</h2>

      <div className="hidden py-4 px-6 lg:flex lg:flex-col lg:gap-6">
        <RiTerminalBoxFill
          className={
            currentSection === '_professional-info'
              ? 'text-secondary-1 hover:text-white'
              : 'text-white hover:text-secondary-1'
          }
          onClick={() => {
            setCurrentSection('_professional-info');
            setCurrentTopic(undefined);
          }}
        />

        <RiUser4Fill
          className={
            currentSection === '_personal-info'
              ? 'text-secondary-1 hover:text-white'
              : 'text-white hover:text-secondary-1'
          }
          onClick={() => setCurrentSection('_personal-info')}
        />
      </div>

      <ul className="hidden lg:flex lg:flex-col">
        {currentSection === '_personal-info' ? (
          <PersonalInfo
            topic={{ value: currentTopic, setValue: setCurrentTopic }}
          />
        ) : (
          <ProfessionalInfo
            topic={{ value: currentTopic, setValue: setCurrentTopic }}
          />
        )}
        <ContactInfo />
      </ul>

      <ul className="lg:hidden">
        <PersonalInfo
          topic={{ value: currentTopic, setValue: setCurrentTopic }}
        />
        <ProfessionalInfo
          topic={{ value: currentTopic, setValue: setCurrentTopic }}
        />
        <ContactInfo />
      </ul>

      <section className="flex-grow  lg:flex lg:flex-col">
        <p className="hidden lg:flex border-b border-ash">
          <span className="flex flex-row gap-20 w-fit py-2 px-4 text-secondary-1 border-e border-ash">
            {currentSection}
            <RiCloseFill
              size={16}
              className="hover:text-white"
              onClick={() => setCurrentTopic(undefined)}
            />
          </span>
        </p>

        {currentTopic && (
          <div className="lg:flex lg:flex-row lg:divide-x lg:divide-ash lg:flex-grow">
            {currentTopic === 'bio' ? (
              <Bio />
            ) : currentTopic === 'hobbies' ? (
              <Hobbies />
            ) : currentTopic === 'education' ? (
              <Education />
            ) : currentTopic === 'experience' ? (
              <Experience />
            ) : currentTopic === 'skills' ? (
              <Skills />
            ) : (
              <Certification />
            )}

            <div className="hidden lg:flex lg:flex-col lg:w-1/2 lg:pt-6 lg:px-6">
              <p className="mb-8">{'//'} Code snippet showcase</p>
              <SnippetCard codeSnippet={snippet2} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
