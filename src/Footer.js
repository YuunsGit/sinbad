import { HeartIcon } from "@heroicons/react/24/solid";
import { ReactComponent as Instagram } from "./img/instagram-filled.svg";
import { ReactComponent as Linkedin } from "./img/linkedin-filled.svg";
import { ReactComponent as FooterDude } from "./img/FooterDude.svg";

export default function Footer() {
    return (
        <footer>
            <div className="hidden md:block h-0">
                <FooterDude className="mx-auto relative -top-96 overflow-visible h-96" />
            </div>
            <div className="bg-sky-100 text-primary-300 py-6 px-[5%] md:px-[30%] flex flex-col justify-between w-screen clear-both">
                <div className="text-center mx-auto">
                    Made with <HeartIcon className="w-5 h-5 inline-block fill-red-400 hover:animate-bounce" /> by Yunus
                    Emre Kepenek
                </div>
                <hr className="my-6 border-primary-300 w-[60%] mx-auto" />
                <div className="text-center mx-auto flex space-x-2">
                    <a href="https://www.instagram.com/sinbaddigibox/" target="_blank" rel="noreferrer">
                        <Instagram className="w-5 h-5 fill-primary-300 hover:fill-primary-500 m-1" />
                    </a>
                    <a href="https://www.linkedin.com/company/81796044" target="_blank" rel="noreferrer">
                        <Linkedin className="w-5 h-5 fill-primary-300 hover:fill-primary-500 m-1" />
                    </a>
                </div>
                <div className="text-center mx-auto">
                    This is an{" "}
                    <a
                        href="https://github.com/YuunsGit/sinbad"
                        className="underline underline-offset-2 hover:text-primary-500 inline-block z-0"
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
