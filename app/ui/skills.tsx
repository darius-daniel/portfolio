import SkillEntry from './skill-entry';
import { softSkills, technicalSkills } from '../lib/skills';
import Container from './container';

export default function Skills() {
  const headingStyle = 'font-bold ps-2.5 mb-2 text-accent-2';
  const bodyStyle = 'flex flex-row flex-wrap gap-2';

  return (
    <Container section="professional-info" topic="skills">
      <div className="lg:w-5/6 mx-auto flex flex-col gap-8">
        <section>
          <h4 className={headingStyle}>technical-skills</h4>
          <div className={bodyStyle}>
            {' '}
            {technicalSkills.map((skill, idx) => (
              <SkillEntry key={idx} skill={skill} />
            ))}
          </div>
        </section>
        <section>
          <h4 className={headingStyle}>soft-skills</h4>
          <div className={bodyStyle}>
            {' '}
            {softSkills.map((skill, idx) => (
              <SkillEntry key={idx} skill={skill} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
