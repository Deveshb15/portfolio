import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Main = () => {

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden -m-16">
            <main>
                <div className="text-center">
                    <h1 className="text-8xl font-light leading-tight" data-aos="fade-down">Devesh RB</h1>
                    <p className="text-xl text-gray-600 font-light" data-aos="fade-up">
                        Full Stack Developer and Open Source Enthusiast!
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Main
