import { Tab } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBracketSquareIcon, CpuChipIcon, CircleStackIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";

import { ReactComponent as Arduino } from "./img/tools/Arduino.svg";
import { ReactComponent as Blender } from "./img/tools/Blender.svg";
import { ReactComponent as JavaScript } from "./img/tools/JavaScript.svg";
import { ReactComponent as MySQL } from "./img/tools/MySQL.svg";
import { ReactComponent as Nodejs } from "./img/tools/Nodejs.svg";
import { ReactComponent as Photoshop } from "./img/tools/Photoshop.svg";
import { ReactComponent as Python } from "./img/tools/Python.svg";
import { ReactComponent as RaspberryPi } from "./img/tools/RaspberryPi.svg";
import { ReactComponent as React } from "./img/tools/React.svg";
import { ReactComponent as Tensorflow } from "./img/tools/Tensorflow.svg";
import { ReactComponent as Unity } from "./img/tools/Unity.svg";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Fields() {
    const fields = [
        {
            name: "Web Development",
            id: 1,
            tools: [
                {
                    name: "JavaScript",
                    logo: JavaScript,
                },
                {
                    name: "Node.js",
                    logo: Nodejs,
                },
                {
                    name: "React",
                    logo: React,
                },
            ],
            icon: CodeBracketSquareIcon,
        },
        {
            name: "Game-AR Development",
            id: 2,
            tools: [
                {
                    name: "Unity",
                    logo: Unity,
                },
                {
                    name: "Blender",
                    logo: Blender,
                },
                {
                    name: "Photoshop",
                    logo: Photoshop,
                },
            ],
            icon: PuzzlePieceIcon,
        },
        {
            name: "Data Science",
            id: 3,
            tools: [
                {
                    name: "Python",
                    logo: Python,
                },
                {
                    name: "Tensorflow",
                    logo: Tensorflow,
                },
                {
                    name: "MySQL",
                    logo: MySQL,
                },
            ],
            icon: CircleStackIcon,
        },
        {
            name: "Embedded Engineering",
            id: 4,
            tools: [
                {
                    name: "Arduino",
                    logo: Arduino,
                },
                {
                    name: "Raspberry Pi",
                    logo: RaspberryPi,
                },
                {
                    name: "Python",
                    logo: Python,
                },
            ],
            icon: CpuChipIcon,
        },
    ];

    return (
        <div className="max-w-[80%] lg:max-w-[60%] mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center text-primary-400 pb-4 md:pb-10">Fields of Activity</h1>
            <Tab.Group>
                <Tab.List className="flex flex-col md:flex-row space-x-0 md:space-x-1 rounded-xl bg-primary-100 p-1">
                    {fields.map((field) => (
                        <Tab
                            key={field.id}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-4 font-semibold text-lg leading-5 text-secondary-300 duration-150 focus:outline-none",
                                    selected ? "bg-white" : "text-sky-50 hover:bg-white/[0.12] hover:text-white"
                                )
                            }
                        >
                            <field.icon className="h-8 w-8 md:h-16 md:w-16 mx-auto mb-3" />
                            {field.name}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {fields.map((field) => (
                        <Tab.Panel
                            className="relative rounded-xl bg-sky-50 p-3 focus:outline-none
                                before:content-[''] before:bg-primary-100 before:w-[110%] before:h-[80%] md:before:h-[90%]
                                 before:-left-[5%] before:absolute before:-z-10 before:rounded-xl before:duration-150
                                 hover:before:w-[114%] hover:before:-left-[7%]"
                        >
                            <div className="flex justify-around mx-auto w-[90%] my-5">
                                {field.tools.map((tool) => (
                                    <div>
                                        <tool.logo className="h-12 w-12 md:h-32 md:w-32 mx-auto hover:rotate-6 duration-200" />
                                        <p className="hidden md:block text-md text-center pt-5 font-semibold">
                                            {tool.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
