import React from 'react'
import Image from 'next/image'
import db from '../assets/DB.png'

const Navbar = () => {
    return (
        <div>
        <nav className="p-6">
            <div className="flex justify-between">
                <a className="navbar-brand font-weight-bold" href="#">
                    <Image src={db} alt="Logo" width={70} height={70} />
                </a>
                <div>
                    <ul className="flex text-lg">
                        <li className="mt-2 py-2 xl:px-8 md:px-4 px-2 text-gray-500 transition duration-150 border-b-2 border-transparent hover:border-gray-800">
                            <a className="nav-link" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="mt-2 py-2 xl:px-8 md:px-4 px-2 text-gray-500 transition duration-150 border-b-2 border-transparent hover:border-gray-800">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="mt-2 py-2 xl:px-8 md:px-4 px-2 xl:mr-12 transition duration-150 border-b-2 border-transparent hover:border-gray-800">
                            <a className="nav-link active" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
