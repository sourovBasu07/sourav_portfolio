import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type CertificationProps = {
  certification: {
    id: number;
    image: string;
    title: string;
    issuedBy: string;
    credentialId: string;
    credentialLink: string;
    issuedOn: string;
  };
};

const Card = ({ certification }: CertificationProps) => {
  return (
    <div className="flex flex-col gap-5 bg-[#1B1F23] group p-3 rounded-[10px]">
      <div className="rounded-[10px] overflow-hidden">
        <Image
          src={certification.image}
          alt={certification.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover align-middle group-hover:scale-[1.05] rounded-[10px] duration-300"
        />
      </div>
      <div className="flex flex-col gap-1">
        {/* <span className="text-white">{certification.category}</span> */}
        <h3 className="text-white">{certification.title}</h3>
        <p className="text-white">{certification.issuedBy}</p>
        <p className="">Issued on {certification.issuedOn}</p>
        <p className="">Id: {certification.credentialId}</p>

        <Link
          href={certification.credentialLink}
          className="text-white font-600 hover:underline flex gap-1 hover:text-blue-500 duration-300"
        >
          Verify Credentials
          <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
};
export default Card;
