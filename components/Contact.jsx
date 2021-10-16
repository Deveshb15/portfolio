import React from 'react'

import { 
    IoMailOutline,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoMedium
    } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="text-center mt-16">
            <section id="contact">
                <h1 className="text-7xl font-light text-center mt-5">Let&apos;s Talk</h1>
                <div className="relative">
                    <h1 className="text-8xl absolute -top-20 left-2.5 right-0 bottom-0 font-extrabold uppercase -z-1 text-gray-200 mt-4 mr-12 invisible sm:visible">Contact</h1>
                    <div>
                        <h2 className="text-3xl mb-5 pt-8 text-center">Want to connect? </h2>
                        <ul className="flex justify-center list-unstyled my-4 pb-4">
                            <li className="text-blue-500 text-3xl py-2 px-6 transform transition hover:scale-110">
                                <a href="mailto:deveshb583@gmail.com" rel="noreferrer" target="_blank">
                                    <IoMailOutline />
                                </a>
                            </li>
                            <li className="text-blue-500 text-3xl py-2 px-6 transform transition hover:scale-110">
                                <a href="https://github.com/Deveshb15" rel="noreferrer" target="_blank">
                                    <IoLogoGithub />
                                </a>
                            </li>
                            <li className="text-blue-500 text-3xl py-2 px-6 transform transition hover:scale-110">
                                <a href="https://www.linkedin.com/in/deveshrb/" rel="noreferrer" target="_blank">
                                    <IoLogoLinkedin />
                                </a>
                            </li>
                            <li className="text-blue-500 text-3xl py-2 px-6 transform transition hover:scale-110">
                                <a href="https://twitter.com/Deveshb15" rel="noreferrer" target="_blank">
                                    <IoLogoTwitter />
                                </a>
                            </li>
                            <li className="text-blue-500 text-3xl py-2 px-6 transform transition hover:scale-110">
                                <a href="https://hashnode.com/@deveshb15" rel="noreferrer" target="_blank">
                                <IoLogoMedium />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
