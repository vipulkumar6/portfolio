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
                    <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://www.linkedin.com/in/vipulkumar6/' target='_blank'><FaLinkedinIn /></Link>
                    <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://github.com/vipulkumar6' target='_blank'><VscGithubAlt /></Link>
                    <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://x.com/vipulkumar66' target='_blank'><FaXTwitter /></Link>
                </div>

            </div>
        </>

    )
}

export default About
