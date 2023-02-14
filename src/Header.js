import { Link } from "react-scroll";
import { ReactComponent as Logo } from "./img/Logo.svg";

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between mx-auto max-w-7xl px-4 sm:px-6 my-6">
      <Logo className="h-24 md:h-20 lg:h-24" />
      <ul className="flex space-x-4 md:space-x-12 text-center my-auto font-semibold text-primary-300">
        <Link
          to="about"
          smooth
          className="cursor-pointer hidden my-auto md:inline-block hover:text-primary-500 duration-150"
        >
          About
        </Link>
        <Link
          to="fields"
          smooth
          className="cursor-pointer hidden my-auto md:inline-block hover:text-primary-500 duration-150"
        >
          Fields
        </Link>
        <Link
          to="teams"
          smooth
          className="cursor-pointer hidden my-auto md:inline-block rounded-full px-4 py-1 bg-secondary-300 hover:bg-secondary-400 duration-150 text-white"
        >
          Apply
        </Link>
      </ul>
    </header>
  );
}
