"use client";
import Image from "next/image"
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>eduu.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>certtttt.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section id="about" className="text-white">
            <div className="md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image priority src="/about-image.png" width={500} height={500} alt="about-image" />
                <div className="mt-4 md:mt-0 text-left flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        lksdfg kldshf gkjsdhfkjg hdksjfhgkjdsfh gkdsjfhgkjds hf kghdsfk ghd
                        dskjfghdskfjghdslkjffghkdsjfhgkjdshgkdshfgkdshfkgh dsfk gjhdskfghdskfjg
                        dsfgkjdhsfkj ghdksjfhgkjdsfhgkdhfgkdjshgkdsjhgkdshfgldjsf;lgjdsflkgjdlskfg
                        kjdslkfg jdlskfjgkl;sdjfglkd;sfgjsdkl;fgj
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection