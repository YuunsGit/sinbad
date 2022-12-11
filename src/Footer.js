import { HeartIcon } from "@heroicons/react/24/solid";
import { ReactComponent as Instagram } from "./img/instagram-filled.svg";
import { ReactComponent as Linkedin } from "./img/linkedin-filled.svg";

export default function Footer() {
    return (
        <>
            <footer className="bg-stone-100 py-6 px-[5%] md:px-[30%] flex flex-col justify-between w-screen text-stone-500 clear-both">
                <div className="text-center mx-auto">
                    Made with <HeartIcon className="w-5 h-5 inline-block fill-red-500 hover:animate-bounce" /> by Yunus
                    Emre Kepenek
                </div>
                <hr className="my-6 border-stone-300" />
                <div className="text-center mx-auto flex space-x-2">
                    <a href="https://www.instagram.com/sinbaddigibox/" target="_blank" rel="noreferrer">
                        <Instagram className="w-5 h-5 fill-stone-600 hover:fill-stone-800 m-1" />
                    </a>
                    <a href="https://www.linkedin.com/company/81796044" target="_blank" rel="noreferrer">
                        <Linkedin className="w-5 h-5 fill-stone-600 hover:fill-stone-800 m-1" />
                    </a>
                </div>
                <div className="text-center mx-auto">
                    This is an{" "}
                    <a
                        href="https://github.com/YuunsGit/sinbad"
                        className="underline underline-offset-2 hover:text-stone-900 inline-block z-0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        open source
                    </a>{" "}
                    project.
                </div>
            </footer>
        </>
    );
}
