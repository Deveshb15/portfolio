import React from 'react'
import Image from 'next/image'

import java from '../assets/icons/java.png'
import python from '../assets/icons/python.png'
import cpp from '../assets/icons/cpp.png'
import js from '../assets/icons/js.png'
import react from '../assets/icons/react.png'
import next from '../assets/icons/next.png'
import node from '../assets/icons/node.png'
import express from '../assets/icons/express.png'
import solidity from '../assets/icons/solidity.png'
import graph from '../assets/icons/graph.png'
import docker from '../assets/icons/docker.png'
import test from '../assets/icons/test.png'
import figma from '../assets/icons/figma.png'
import tailwind from '../assets/icons/tailwind.png'
import postgres from '../assets/icons/postgres.png'
import mongodb from '../assets/icons/mongodb.png'
import firebase from '../assets/icons/firebase.png'
import wordpress from '../assets/icons/wordpress.png'

const Tech = () => {
    return (
        <div className="flex justify-center my-8 mt-16">
            <section className="interests">

                <h4 className="text-7xl font-light text-center">Tech I&apos;m familiar with</h4>
                <div className="relative">
                    <h1 className="text-8xl absolute -top-20 left-2.5 right-0 bottom-0 font-extrabold uppercase -z-1 text-gray-200 mt-4">Tech Stack</h1>
                    <div className="grid grid-cols-4 gap-x-2 py-5">
                    <div className="mt-2 pt-4">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={java} alt="java" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Java</h3>
                        </div>
                    </div>
                    <div className="mt-2 pt-4">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={python} alt="python" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Python</h3>
                        </div>
                    </div>
                    <div className="mt-2 pt-4">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={cpp} alt="cpp" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Cpp</h3>
                        </div>
                    </div>
                    <div className="mt-2 pt-4">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={js} alt="js" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">JavaScript</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={react} alt="react" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">React</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={next} alt="next" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Next</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={node} alt="node" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Node</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={express} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Express</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={solidity} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Solidity</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={graph} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">GraphQL</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={docker} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Docker</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={test} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Testing</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={figma} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Figma</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={tailwind} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Tailwind</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={postgres} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Postgres</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={mongodb} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">MongoDB</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={firebase} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">Firebase</h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center p-5 hover:bg-gray-200">
                            <Image src={wordpress} alt="express" width={20} height={20} />
                            <h3 className="font-medium text-xl ml-4">WordPress</h3>
                        </div>
                    </div>
                    </div>

            
                </div>
            </section>
        </div>
    )
}

export default Tech


