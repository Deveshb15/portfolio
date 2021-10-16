import React from "react";
import { 
    IoMailOutline,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoMedium
    } from "react-icons/io5";

const About = () => {
    return (
        <div>
        <section id="about">
            <h4 className="text-7xl font-light text-center">About Me!</h4>
            <div className="text-center">
                <div className="about-desc relative">
                <h1 className="text-8xl absolute -top-20 left-2.5 right-0 bottom-0 font-extrabold uppercase -z-1 text-gray-200 mt-4">About Me!</h1>
                <div className="pt-5 text-center">
                    <h2 className="text-3xl md:m-4 mt-20 md:p-4 p-2">Hello,</h2>
                    <p className="text-lg xl:px-48 sm:px-12">
                    I am a junior Front end developer and an Open source
                    enthusiast from India. I&apos;m deeply passionate about software
                    development and innovations.
                    </p> 
                    <ul className="flex justify-center m-4">
                        <li className="text-blue-500 text-3xl py-2 md:px-6 px-4 transform transition hover:scale-110">
                            <a href="mailto:deveshb583@gmail.com" rel="noreferrer" target="_blank">
                            <IoMailOutline />
                            </a>
                        </li>
                        <li className="text-blue-500 text-3xl py-2 md:px-6 px-4 transform transition hover:scale-110">
                            <a href="https://github.com/Deveshb15" rel="noreferrer" target="_blank">
                            <IoLogoGithub />
                            </a>
                        </li>
                        <li className="text-blue-500 text-3xl py-2 md:px-6 px-4 transform transition hover:scale-110">
                            <a
                            href="https://www.linkedin.com/in/deveshrb/"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <IoLogoLinkedin />
                            </a>
                        </li>
                        <li className="text-blue-500 text-3xl py-2 md:px-6 px-4 transform transition hover:scale-110">
                            <a href="https://twitter.com/Deveshb15" rel="noreferrer" target="_blank">
                            <IoLogoTwitter />
                            </a>
                        </li>
                        <li className="text-blue-500 text-3xl py-2 md:px-6 px-4 transform transition hover:scale-110">
                            <a href="https://hashnode.com/@deveshb15" rel="noreferrer" target="_blank">
                            <IoLogoMedium />
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default About;
