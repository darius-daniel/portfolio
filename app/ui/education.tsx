import education from "../lib/education";
import Container from "./container";
import EducationEntry from "./education-entry";

export default function Education() {
  return (
    <Container section="personal-info" topic="education">
      {education.map((entry, idx) => (
        <EducationEntry key={idx} entry={entry} />
      ))}
    </Container>
  );
}
