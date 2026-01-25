import experience from '../lib/experience';
import Container from './container';
import ExperienceEntry from './experience-entry';

export default function Experience() {
  return (
    <Container section="professional-info" topic="experience">
      {experience.map((entry, idx) => <ExperienceEntry key={idx} entry={entry} />)}
    </Container>
  );
}
