import { projectsData } from "@/constants";
import Card from "./Card";

type ProjectProps = {
  project: {
    id: number;
    image: string;
    title: string;
    description: string;
    github: string;
    liveSite: string;
    category: string;
    techStacks: string[];
  };
};

const Portfolio = () => {
  return (
    <section className="container section" id="projects">
      <span className="section__subtitle">My works</span>
      <h2 className="section__title">Recent Projects</h2>

      <div className="grid grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};
export default Portfolio;
