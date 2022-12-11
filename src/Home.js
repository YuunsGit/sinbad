import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { ReactComponent as Main } from "./img/Main.svg";
import { ReactComponent as Dude1 } from "./img/Dude-01.svg";
import { ReactComponent as Dude2 } from "./img/Dude-02.svg";
import { ReactComponent as Dude3 } from "./img/Dude-03.svg";

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
            <div
                className="flex flex-col-reverse md:flex-row justify-evenly max-w-[80%] md:max-w-[80%] lg:max-w-[60%] mx-auto pt-6 md:pt-0 my-20 md:my-40 rounded-3xl relative bg-sky-50
            before:content-[''] before:bg-primary-100 before:block before:w-full before:h-full before:absolute before:rotate-3 before:-z-10 before:rounded-3xl before:duration-150
            hover:before:rotate-6 hover:before:scale-105"
            >
                <Dude1 className="w-[80%] mx-auto md:w-[30%] md:mx-0 h-fit pt-6" />
                <div className="prose text-l md:text-xl my-auto w-[80%] mx-auto md:w-[50%] md:mx-0">
                    <h3 className="font-bold">Hey, science student!</h3>
                    <p>
                        If you seek senior help for <span className="font-semibold text-secondary-300">modern</span>{" "}
                        technologies and tools, you've come to the right place.
                    </p>
                    <p>
                        <span className="font-semibold text-primary-200">Sinbad</span> brings experienced and ambitious
                        students together.
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col md:flex-row justify-evenly max-w-[80%] md:max-w-[80%] lg:max-w-[60%] mx-auto pt-6 md:pt-0 my-20 md:my-40 rounded-3xl relative bg-sky-50
            before:content-[''] before:bg-primary-100 before:block before:w-full before:h-full before:absolute before:rotate-3 before:-z-10 before:rounded-3xl before:duration-150
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
                <Dude2 className="w-[80%] mx-auto md:w-[30%] md:mx-0 h-fit pt-6" />
            </div>
            <div
                className="flex flex-col md:flex-row justify-evenly max-w-[80%] md:max-w-[80%] lg:max-w-[60%] mx-auto pt-6 md:pt-0 my-20 md:my-40 rounded-3xl relative bg-sky-50
            before:content-[''] before:bg-primary-100 before:block before:w-full before:h-full before:absolute before:rotate-3 before:-z-10 before:rounded-3xl before:duration-150
            hover:before:rotate-6 hover:before:scale-105"
            >
                <Dude3 className="w-[80%] mx-auto md:w-[30%] md:mx-0 h-fit pt-6" />
                <div className="prose text-l md:text-xl my-auto w-[80%] mx-auto md:w-[50%] md:mx-0">
                    <h3 className="font-bold">Don't worry.</h3>
                    <p>
                        There is a single condition to join{" "}
                        <span className="font-semibold text-secondary-200">Sinbad Talent</span> team:
                        <br />
                        <ul>
                            <li>
                                to be <span className="font-semibold text-primary-200">ambitious</span>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </main>
    );
}
