import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { LuDownload } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
const About = () => {
    return (
        <>
            <div className='about_container'>
                <h1>About Vipul Kumar</h1>
                <br />
                <div>
                    <p>
                        Hello! My name is Vipul Kumar. I am a Computer Science graduate from Graphic Era Hill University.                     With a robust background in full-stack development, I have successfully completed various internships and projects. These experiences have equipped me with practical skills in building ERP systems, e-commerce platforms, and AI-driven applications using technologies such as React, Node.js, and MongoDB.

                    </p>
                    <br />
                    <p>
                        I am passionate about problem-solving and constantly seek opportunities to enhance my skills in the dynamic tech landscape.
                    </p>
                    <br />
                    <p>
                        My journey has been defined by a dedication to excellence and a focus on creating impactful, user-centric solutions. Whether working collaboratively or independently, I aim to deliver high-quality results and make meaningful contributions to every project I engage with.
                    </p>
                </div>
                <div className='social_links'>
                    <Link className='link' to='https://www.linkedin.com/in/vipulkumar6/' target='_blank'><FaLinkedinIn /></Link>
                    <Link className='link' to='https://github.com/vipulkumar6' target='_blank'><VscGithubAlt /></Link>
                    <Link className='link' to='https://x.com/vipulkumar66' target='_blank'><FaXTwitter /></Link>
                </div>
                <div class="group relative">
                    <button>
                        <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </button>
                </div>
            </div>
        </>

    )
}

export default About
