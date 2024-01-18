import Image from "next/image";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

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

const Card = ({ project }: ProjectProps) => {
  return (
    <div className="flex flex-col gap-5 group rounded-[10px] cursor-pointer">
      <div className="relative rounded-[10px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover align-middle group-hover:scale-[1.05] rounded-[10px] duration-300"
        />

        <div className="opacity-0 absolute inset-0 w-full h-full hover:opacity-100 duration-300 flex gap-10 justify-center items-center bg-[#1B1F23]/70 text-white z-10">
          <Link
            href={project.github}
            className="flex flex-col items-center gap-1 hover:text-blue-500 duration-300"
          >
            <AiFillGithub size={30} />
            <p className="text-xs">Github</p>
          </Link>
          <Link
            href={project.liveSite}
            className="flex flex-col items-center gap-1 hover:text-blue-500 duration-300"
          >
            <BsBoxArrowUpRight size={30} />
            <p className="text-xs">Watch live</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-1 text-titleColorDark">
        <h3 className="">{project.title}</h3>
        <p className="">
          {project.description.length > 100
            ? project.description.slice(0, 100) + " ..."
            : project.description}
        </p>
        <span className="w-max px-2 py-1 bg-titleColor text-white text-xs rounded-full">
          {project.category}
        </span>
      </div>
    </div>
  );
};
export default Card;
