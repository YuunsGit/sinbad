import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import Fields from "./Fields";

import { ReactComponent as Main } from "./img/Main.svg";

import { Element } from "react-scroll";
import Teams from "./Teams";
import About from "./About";

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
            <div className="flex flex-col-reverse md:flex-row justify-center my-16 md:my-20 mx-auto md:max-w-[90%] lg:max-w-[80%] px-4 sm:px-6">
                <header className="font-extrabold md:font-black mg:w-[40%] lg:w-[30%] my-auto z-10">
                    <h1 className="text-center mt-6 md:mt-0 text-4xl md:text-5xl md:text-left lg:text-7xl text-primary-400 whitespace-nowrap">
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
                <About/>
            </Element>
            <hr className="my-20 max-w-[60%] mx-auto border-2 border-sky-100 rounded"/>
            <Element name="fields">
                <Fields />
            </Element>
            <hr className="my-20 max-w-[60%] mx-auto border-2 border-sky-100 rounded"/>
            <Element name="teams">
                <Teams/>
            </Element>
        </main>
    );
}
