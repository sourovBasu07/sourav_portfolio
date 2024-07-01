import Backend from "./Backend";
import Database from "./Database";
import Frontend from "./Frontend";
import Languages from "./Languages";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <span className="section__subtitle">My technical skills</span>
      <h2 className="section__title">Skills</h2>

      <div className="container justify-center gap-x-12">
        <Languages />
        <Frontend />
        <Backend />
        <Database />
      </div>
    </section>
  );
};
export default Skills;
