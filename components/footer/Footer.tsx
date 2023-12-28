import { footerSocialLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-containerColor border-t border-solid border-t-[rgba(0,0,0,0.1)]">
      <div className="container flex justify-between mb-5 pt-5">
        <h1 className="text-titleColor text-center">Sourov</h1>

        <span className="block mb-5 text-titleColor text-right text-smaller-font">
          &copy; Sourov Basu, All rights reserved
        </span>

        <div className="flex justify-center gap-x-5">
          {footerSocialLinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="text-titleColor text-lg hover:text-titleColorDark"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
