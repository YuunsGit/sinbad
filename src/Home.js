import { useEffect } from "react";
import { ReactComponent as Main } from "./img/Main.svg";

export default function Home() {
    useEffect(() => {
        const bgClass = "uuid-89c47746-18bd-4d0f-bdb8-9d5316f86a5c";
        const bgCollection = document.getElementsByClassName(bgClass);
        const bgItems = [...bgCollection];
        const parallax = (e) => {
            const x = (e.clientX * 8) / 250;
            const y = (e.clientY * 8) / 250;
            bgItems.forEach((item) => {
                item.style.transform =
                    "translatex(" + x + "px) translatey(" + y + "px)";
            });
        };
        document.body.addEventListener("mousemove", parallax);
    }, []);

    return (
        <main>
            <div className="flex justify-center my-20 mx-auto max-w-[80%] px-4 sm:px-6 bg-white">
                <header className="font-black w-[30%] my-auto z-10">
                    <h1 className="text-7xl text-primary-400 whitespace-nowrap">
                        A place for
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-secondary-100">
                            ambitious
                        </span>
                        <br />
                        people.
                    </h1>
                </header>
                <Main className="relative w-[60%] h-auto overflow-visible" />
            </div>
        </main>
    );
}
