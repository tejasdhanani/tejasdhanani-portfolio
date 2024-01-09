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
                <li>NEXT.js</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Tailwind CSS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>I earned my Bachelor of Science in Information Technology from Fairleigh Dickinson University in Vancouver, BC, Canada, graduating in 2022 with a GPA of 3.7 out of 4.</li>

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
                        {`Hey, I'm Tejas Dhanani, a tech enthusiast with a degree in Information Technology and 1.5 years of hands-on coding experience.
                        I love turning ideas into user-friendly software, focusing on Next.js, Javascript, Node.js, and MongoDB.
                        Beyond coding, I'm exploring the latest tech trends, always on the lookout for that next 'aha' moment.
                        If you're after a developer who blends technical skills with creativity, let's connect.
                        I'm up for coding challenges and discussions on the future of tech. Let's build something awesome together!`}
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        {/* <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton> */}
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection