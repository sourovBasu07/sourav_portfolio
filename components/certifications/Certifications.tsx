import { certificationsData } from "@/constants";
import Card from "./Card";

const Certifications = () => {
  return (
    <section className="container section" id="certifications">
      <span className="section__subtitle">My Certifications</span>
      <h2 className="section__title">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificationsData.map((certification) => (
          <Card key={certification.id} certification={certification} />
        ))}
      </div>
    </section>
  );
};
export default Certifications;
