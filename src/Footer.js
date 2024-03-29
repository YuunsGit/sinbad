import { HeartIcon } from "@heroicons/react/24/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ReactComponent as Instagram } from "./img/Instagram.svg";
import { ReactComponent as Linkedin } from "./img/LinkedIn.svg";

export default function Footer() {
  return (
    <footer>
      <div className="bg-sky-100 text-primary-300 py-6 px-[5%] md:px-[30%] flex flex-col justify-between w-screen clear-both">
        <div className="text-center mx-auto">
          Made with <HeartIcon className="w-5 h-5 inline fill-red-400" /> by{" "}
          <br />
          <a
            href="https://www.yunusemre.dev/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-primary-400 duration-100"
          >
            Yunus Emre Kepenek{" "}
            <ArrowTopRightOnSquareIcon className="w-4 h-4 inline my-auto" />
          </a>
        </div>
        <hr className="my-6 border-primary-100 opacity-30 w-[60%] mx-auto" />
        <div className="text-center mx-auto flex space-x-2">
          <a
            href="https://www.instagram.com/sinbaddigibox/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="w-5 h-5 fill-primary-300 hover:fill-primary-500 m-1 duration-150" />
          </a>
          <a
            href="https://www.linkedin.com/company/sinbad-digibox/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-5 h-5 fill-primary-300 hover:fill-primary-500 m-1 duration-150" />
          </a>
        </div>
        <div className="text-center mx-auto">
          This is an{" "}
          <a
            href="https://github.com/YuunsGit/sinbad"
            className="underline underline-offset-2 hover:text-primary-500 inline-block z-0 duration-150"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>{" "}
          project.
        </div>
      </div>
    </footer>
  );
}
