import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import Fields from "./Fields";

import { ReactComponent as Main } from "./img/Main.svg";
import { ReactComponent as Dude1 } from "./img/Dude-01.svg";
import { ReactComponent as Dude2 } from "./img/Dude-02.svg";
import { ReactComponent as Dude3 } from "./img/Dude-03.svg";

import { ReactComponent as CoreLogo } from "./img/Core.svg";
import { ReactComponent as TalentLogo } from "./img/Talent.svg";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

export default function Home() {
    useEffect(() => {
        if (isMobile) return;

        const bgClass = "uuid-89c47746-18bd-4d0f-bdb8-9d5316f86a5c";
        const bgCollection = document.getElementsByClassName(bgClass);
        const bgItems = [...bgCollection];
        const parallax = (e) => {
            const x = (e.clientX * 15) / 250;
            const y = (e.clientY * 15) / 250;
            bgItems.forEach((item) => {
                item.style.transform = "translatex(" + x + "px) translatey(" + y + "px)";
            });
        };
        document.body.addEventListener("mousemove", parallax);
    }, []);

    return (
        <main>
            <div className="flex flex-col-reverse md:flex-row justify-center my-12 md:my-20 mx-auto md:max-w-[90%] lg:max-w-[80%] px-4 sm:px-6">
                <header className="font-black mg:w-[40%] lg:w-[30%] my-auto z-10">
                    <h1 className="text-center mt-6 md:mt-0 text-5xl md:text-left lg:text-7xl text-primary-400 whitespace-nowrap">
                        A place for
                        <br />
                        <span
                            id="ambitious"
                            className="relative bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-secondary-100 
                            after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-2 after:bottom-0 after:left-0
                             after:origin-bottom-left after:duration-200 after:ease-out after:transform after:bg-secondary-200 hover:after:scale-100"
                        >
                            ambitious
                        </span>
                        <br />
                        people.
                    </h1>
                </header>
                <Main className="relative w-[90%] md:w-[60%] h-auto overflow-visible mx-auto md:mx-0" />
            </div>
            <Element name="about">
                <div
                    className="flex flex-col-reverse md:flex-row justify-evenly max-w-[80%] lg:max-w-[60%] mx-auto pt-6 md:pt-0 my-20 md:my-32 rounded-3xl relative bg-sky-50
            before:content-[''] before:bg-primary-100 before:w-full before:h-full before:absolute before:rotate-3 before:-z-10 before:rounded-3xl before:duration-150
            hover:before:rotate-6 hover:before:scale-105"
                >
                    <Dude1 className="w-[80%] mx-auto md:w-[30%] lg:w-[20%] md:mx-0 h-fit pt-6" />
                    <div className="prose text-l md:text-xl my-auto w-[80%] mx-auto md:w-[50%] md:mx-0">
                        <h3 className="font-bold">Hey, science student!</h3>
                        <p>
                            If you seek senior help for <span className="font-semibold text-secondary-300">modern</span>{" "}
                            technologies and tools, you've come to the right place.
                        </p>
                        <p>
                            <span className="font-semibold text-primary-200">Sinbad</span> brings experienced and
                            ambitious students together.
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col md:flex-row justify-evenly max-w-[80%] lg:max-w-[60%] mx-auto pt-6 md:pt-0 my-20 md:my-32 rounded-3xl relative bg-sky-50
            before:content-[''] before:bg-primary-100 before:w-full before:h-full before:absolute before:rotate-3 before:-z-10 before:rounded-3xl before:duration-150
            hover:before:rotate-6 hover:before:scale-105"
                >
                    <div className="prose text-l md:text-xl my-auto w-[80%] mx-auto md:w-[50%] md:mx-0">
                        <h3 className="font-bold">Take your time.</h3>
                        <p>
                            Take a few minutes to fill the form below and take an opportunity to join the{" "}
                            <span className="font-semibold text-primary-200">Sinbad</span> family.
                        </p>
                        <p>
                            Pick a section of Sinbad that suits you more;
                            <br />
                            <span className="font-semibold text-secondary-200">Sinbad Talent</span> or{" "}
                            <span className="font-semibold text-primary-500">Sinbad Core</span>.
                        </p>
                    </div>
                    <Dude2 className="w-[80%] mx-auto md:w-[30%] lg:w-[20%] md:mx-0 h-fit pt-6" />
                </div>
                <div
                    className="flex flex-col-reverse md:flex-row justify-evenly max-w-[80%] lg:max-w-[60%] mx-auto pt-6 md:pt-0 my-20 md:my-32 rounded-3xl relative bg-sky-50
            before:content-[''] before:bg-primary-100 before:w-full before:h-full before:absolute before:rotate-3 before:-z-10 before:rounded-3xl before:duration-150
            hover:before:rotate-6 hover:before:scale-105"
                >
                    <Dude3 className="w-[80%] mx-auto md:w-[30%] lg:w-[20%] md:mx-0 h-fit pt-6" />
                    <div className="prose text-l md:text-xl my-auto w-[80%] mx-auto md:w-[50%] md:mx-0">
                        <h3 className="font-bold">Don't worry.</h3>
                        <p>
                            There is a single condition to join{" "}
                            <span className="font-semibold text-secondary-200">Sinbad Talent</span> team:
                            <br />
                            <li>
                                to be <span className="font-semibold text-primary-200">ambitious</span>
                            </li>
                        </p>
                    </div>
                </div>
            </Element>
            <Element name="fields">
                <Fields />
            </Element>
            <Element name="teams">
                <div className="my-40">
                    <h1 className="text-5xl font-extrabold text-center text-primary-400 pb-10">Teams</h1>
                    <div className="flex flex-col md:flex-row justify-around max-w-[80%] lg:max-w-[60%] mx-auto ">
                        <div className="prose py-12 bg-sky-100 rounded-3xl md:w-[45%] text-lg hover:bg-sky-200 duration-300">
                            <TalentLogo className="w-[80%] lg:w-[60%] h-auto mx-auto text-primary-500" />
                            <div className="mx-auto w-[80%] lg:w-[60%] pt-12">
                                <li>Willing to learn new technologies.</li>
                                <li>Punctual and organized.</li>
                                <li>Suitable for teamwork.</li>
                                <li>Basic background.</li>
                            </div>
                            <Link
                                className="relative block mx-auto mt-12 bg-primary-200 rounded-2xl px-10 py-5 max-w-max md:ma-10 h-auto
                                 text-white font-semibold text-l select-none hover:bg-primary-300 cursor-pointer no-underline bottom-0"
                                to="/talent"
                            >
                                APPLY
                            </Link>
                        </div>
                        <div className="prose py-12 bg-black rounded-3xl md:w-[45%] mt-12 md:mt-0 text-white text-lg hover:bg-primary-500 duration-300">
                            <CoreLogo className="w-[80%] lg:w-[60%] h-auto mx-auto" />
                            <div className="mx-auto w-[80%] lg:w-[60%] pt-12">
                                <li>Experienced in modern technologies.</li>
                                <li>Eager for helping freshmen.</li>
                                <li>Has teamwork skills.</li>
                                <li>Continuous self-improver.</li>
                            </div>
                            <Link
                                className="relative block mx-auto mt-12 bg-primary-200 rounded-2xl px-10 py-5 max-w-max md:ma-10 h-auto
                                 text-white font-semibold text-l select-none hover:bg-primary-300 cursor-pointer no-underline bottom-0"
                                to="/core"
                            >
                                APPLY
                            </Link>
                        </div>
                    </div>
                </div>
            </Element>
        </main>
    );
}
