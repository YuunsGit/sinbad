
import { ReactComponent as Dude1 } from "./img/Dude-01.svg";
import { ReactComponent as Dude2 } from "./img/Dude-02.svg";
import { ReactComponent as Dude3 } from "./img/Dude-03.svg";

export default function About() {
    return (
        <>
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
        </>
    );
}