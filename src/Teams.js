import { ReactComponent as CoreLogo } from "./img/Core.svg";
import { ReactComponent as TalentLogo } from "./img/Talent.svg";
import { Link } from "react-router-dom";

export default function Teams() {
    return (
        <div className="mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center text-primary-400 pb-4 md:pb-10">Teams</h1>
            <div className="flex flex-col md:flex-row justify-around max-w-[80%] lg:max-w-[60%] mx-auto ">
                <div className="flex flex-col justify-between prose py-12 bg-sky-100 rounded-3xl md:w-[45%] text-lg hover:bg-sky-200 duration-300">
                    <div>
                        <TalentLogo className="w-[80%] lg:w-[60%] h-auto mx-auto text-primary-500" />
                        <div className="mx-auto w-[80%] lg:w-[60%] py-12">
                            <li>Willing to learn new technologies.</li>
                            <li>Punctual and organized.</li>
                            <li>Suitable for teamwork.</li>
                            <li>Basic background.</li>
                        </div>
                    </div>
                    <Link
                        className="relative block mx-auto bg-primary-200 rounded-2xl px-10 py-5 max-w-max md:ma-10 h-auto
                                 text-white font-semibold text-l select-none hover:bg-primary-300 cursor-pointer no-underline bottom-0"
                        to="/talent"
                    >
                        APPLY
                    </Link>
                </div>
                <div className="flex flex-col justify-between prose py-12 bg-zinc-800 rounded-3xl md:w-[45%] mt-12 md:mt-0 text-white text-lg hover:bg-zinc-900 duration-300">
                    <div>
                        <CoreLogo className="w-[80%] lg:w-[60%] h-auto mx-auto" />
                        <div className="mx-auto w-[80%] lg:w-[60%] py-12">
                            <li>Experienced in modern technologies.</li>
                            <li>Eager for helping freshmen.</li>
                            <li>Has teamwork skills.</li>
                            <li>Continuous self-improver.</li>
                        </div>
                    </div>
                    <Link
                        className="relative block mx-auto bg-primary-200 rounded-2xl px-10 py-5 max-w-max md:ma-10 h-auto
                                 text-white font-semibold text-l select-none hover:bg-primary-300 cursor-pointer no-underline bottom-0"
                        to="/core"
                    >
                        APPLY
                    </Link>
                </div>
            </div>
        </div>
    );
}
