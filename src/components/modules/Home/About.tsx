'use client'

import Image from "next/image";
import { aboutData } from "@/static/about";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "@/components/shared/SectionTitle";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="my-20">
            <SectionTitle title="About Me" />

            <div className="flex flex-col lg:flex-row justify-between gap-10 items-start px-5 lg:px-0">
                <div className="">
                    <h3 className="text-xl lg:text-3xl mb-4 border-b border-gray-600 w-fit">
                        Who Am I?
                    </h3>

                    {aboutData.bio.map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700">
                            {paragraph}
                        </p>
                    ))}

                    <h4 className="text-xl font-semibold mt-8 mb-3 text-primary">
                        Skills
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                        {aboutData.skills.map((skill) => (
                            <li
                                key={skill}
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={aboutData.image}
                    alt={aboutData.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover shadow-md"
                    priority
                />
            </div>
            {/* Education */}
            <div className="my-20 px-5 lg:px-0">
                <h1
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-3xl border-b border-gray-600 w-44"
                >
                    Education
                </h1>

                <ul className="mt-10">
                    {aboutData.education.map((edu, idx) => (
                        <li key={idx} data-aos="fade-up" data-aos-duration="1000">


                            <div
                                className={` mb-10`}
                            >
                                <time className="font-mono italic">{edu.year}</time>
                                <h1 className="text-2xl font-black">{edu.institute}</h1>
                                <p className="text-lg mt-2">{edu.degree}</p>
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
            {/* Experience */}
            <div className="my-20 px-5 lg:px-0">
                <h1
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-3xl border-b border-gray-600 w-56"
                >
                    Experience
                </h1>

                <div className="mt-10 space-y-16">
                    {aboutData.experience.map((exp, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col lg:flex-row gap-10 justify-center items-start"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="lg:w-1/2 space-y-2 border-r-2 border-gray-400 pr-6">
                                <h3 className="md:text-2xl font-semibold mb-2">{exp.year}</h3>
                                <p
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    {exp.company}
                                </p>
                                <h4 className="text-sm md:text-base text-gray-800">
                                    {exp.position}
                                </h4>
                            </div>

                            <div className="lg:w-1/2">
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
