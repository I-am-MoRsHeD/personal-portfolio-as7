import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div>
            <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
                    {/* Text Section */}
                    <div className="max-w-prose text-left">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            I am a <br />
                            <strong className="text-primary"> Full Stack Web </strong>
                            developer
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            As an enthusiast developer, I always try to be consistent and
                            working hard to achieve my desired things.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                        <Image
                            src="/personal-image.png"
                            alt="hero-image"
                            width={400}
                            height={400}
                            className="rounded-lg object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
