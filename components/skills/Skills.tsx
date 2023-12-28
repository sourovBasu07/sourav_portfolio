import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <span className="section__subtitle">My technical skills</span>
      <h2 className="section__title">Skills</h2>

      <div className="container justify-center gap-x-12">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
export default Skills;
