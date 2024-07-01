import { socialLinks } from "@/constants";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex gap-x-4 md:grid auto-cols-max gap-y-4">
      {socialLinks.map((socialLink) => (
        <Link
          href={socialLink.link}
          key={socialLink.name}
          className="text-xl text-titleColor hover:text-titleColorDark"
        >
          {socialLink.icon}
        </Link>
      ))}
    </div>
  );
};
export default Social;
