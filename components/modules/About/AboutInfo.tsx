/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from "next/image"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useLanguage } from "@/context/LanguageContext"

import en from '@/static/about/en.json'
import pt from '@/static/about/pt.json'
import bn from '@/static/about/bn.json'

const aboutMap = { en, pt, bn }

const AboutInfo = () => {
    const { locale } = useLanguage();
    const aboutData = aboutMap[locale];

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <section className="my-16">
            <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
                <div>
                    <h3 className="text-xl lg:text-3xl mb-4 border-b border-gray-600 w-fit text-primary">
                        {aboutData.headings.whoAmI}
                    </h3>

                    {aboutData.bio.map((paragraph: string, index: number) => (
                        <p key={index} className="mb-4 text-gray-700">
                            {paragraph}
                        </p>
                    ))}

                    <h4 className="text-xl font-semibold mt-8 mb-3 text-primary">
                        {aboutData.headings.skills}
                    </h4>

                    <ul className="flex flex-wrap gap-2">
                        {aboutData.skills.map((skill: string) => (
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
                <h1 className="text-3xl border-b border-gray-600 w-44">
                    {aboutData.headings.education}
                </h1>

                <ul className="mt-10">
                    {aboutData.education.map((edu: any, idx: number) => (
                        <li key={idx} className="mb-10">
                            <time className="font-mono italic">{edu.year}</time>
                            <h1 className="text-2xl font-black">{edu.institute}</h1>
                            <p className="text-lg mt-2">{edu.degree}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Experience */}
            <div className="my-20 px-5 lg:px-0">
                <h1 className="text-3xl border-b border-gray-600 w-56">
                    {aboutData.headings.experience}
                </h1>

                <div className="mt-10 space-y-16">
                    {aboutData.experience.map((exp: any, idx: number) => (
                        <div key={idx} className="flex flex-col lg:flex-row gap-10">
                            <div className="lg:w-1/2">
                                <h3 className="md:text-2xl font-semibold">{exp.year}</h3>
                                <p className="text-blue-500 underline">{exp.company}</p>
                                <h4 className="text-sm text-gray-800">{exp.position}</h4>
                            </div>

                            <div className="lg:w-1/2">
                                <p className="text-gray-700">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutInfo