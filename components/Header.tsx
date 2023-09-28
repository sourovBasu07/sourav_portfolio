import Link from "next/link";
import { navLinks } from "@/constants";

const Header = () => {
  return (
    <header className="w-full h-16 fixed inset-0 z-10 bg-containerColor">
      <nav className="container h-16 flex justify-between items-center gap-4">
        <Link href="#" className="text-titleColor font-medium">
          Sourov
        </Link>

        <div className="nav__menu">
          <ul className="flex gap-8">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.route}
                scroll={false}
                className="text-titleColor text-small-font font-medium hover:text-titleColorDark duration-300"
              >
                {navLink.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
