import { aboutData } from "@/constants";

const Info = () => {
  return (
    <div className="hidden sm:grid__section grid-cols-[repeat(3,140px)] gap-2 mb-8">
      {aboutData.map((about) => (
        <div
          key={about.title}
          className="flex flex-col items-center bg-containerColor border border-solid border-[rgba(0,0,0,0.1)] rounded-xl text-center px-5 py-4"
        >
          <p className="text-2xl text-titleColor mb-2">{about.icon}</p>
          <h3 className="font-medium text-small-font">{about.title}</h3>
          <span className="text-tiny-font">{about.subtitle}</span>
        </div>
      ))}
    </div>
  );
};
export default Info;
