import { Link } from "react-scroll";
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
        <Dude1 className="w-[80%] mx-auto md:w-[30%] 2xl:w-[25%] md:mx-0 h-fit pt-6" />
        <div className="prose text-l xl:text-xl my-auto w-[80%] mx-auto md:w-[50%] md:mx-0">
          <h3 className="font-bold text-primary-500">
            Hello, Ankara Science fellow!
          </h3>
          <p>
            If you are seeking senior help for{" "}
            <span className="font-semibold text-secondary-300">modern</span>{" "}
            technologies and tools, you've come to the right place.
          </p>
          <p>
            <span className="font-semibold text-primary-200">Sinbad</span>{" "}
            brings experienced and ambitious students together.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-evenly max-w-[80%] lg:max-w-[60%] mx-auto pt-6 md:pt-0 my-20 md:my-32 rounded-3xl relative bg-sky-50
        before:content-[''] before:bg-primary-100 before:w-full before:h-full before:absolute before:rotate-3 before:-z-10 before:rounded-3xl before:duration-150
        hover:before:rotate-6 hover:before:scale-105"
      >
        <div className="prose text-l xl:text-xl my-auto w-[80%] mx-auto md:w-[50%] md:mx-0">
          <h3 className="font-bold text-primary-500">Take your time.</h3>
          <p>
            Take a few minutes to fill the form below and take an opportunity to
            join the{" "}
            <span className="font-semibold text-primary-200">Sinbad</span>{" "}
            family.
          </p>
          <p>
            Pick a section of Sinbad that you wish to study from{" "}
            <Link
              to="fields"
              smooth
              className="no-underline font-semibold text-secondary-200 cursor-pointer"
            >
              Fields of Activity
            </Link>{" "}
            section.
          </p>
        </div>
        <Dude2 className="w-[80%] mx-auto md:w-[30%] 2xl:w-[25%] md:mx-0 h-fit pt-6" />
      </div>
      <div
        className="flex flex-col-reverse md:flex-row justify-evenly max-w-[80%] lg:max-w-[60%] mx-auto pt-6 md:pt-0 my-20 md:my-32 rounded-3xl relative bg-sky-50
        before:content-[''] before:bg-primary-100 before:w-full before:h-full before:absolute before:rotate-3 before:-z-10 before:rounded-3xl before:duration-150
        hover:before:rotate-6 hover:before:scale-105"
      >
        <Dude3 className="w-[80%] mx-auto md:w-[30%] 2xl:w-[25%] md:mx-0 h-fit pt-6" />
        <div className="prose text-l xl:text-xl my-auto w-[80%] mx-auto md:w-[50%] md:mx-0">
          <h3 className="font-bold text-primary-500">See the advantages.</h3>
          <p>
            <ul className="list-disc leading-tight">
              <li>
                Benefit our wide and{" "}
                <span className="font-semibold text-secondary-300">modern</span>{" "}
                tutorial library.
              </li>
              <li>
                Take mentorship from{" "}
                <span className="font-semibold text-primary-200">
                  experienced
                </span>{" "}
                seniors.
              </li>
            </ul>
          </p>
          <p>
            Every student from preparation school to 4th grade is accepted,
            independent from the department.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
