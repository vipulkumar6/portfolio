import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { LuDownload } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';

import '../App.css'
const Header = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/Vipul_Kumar_Resume.pdf';
        link.download = 'Vipul_Kumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='header flex'>
            <div className="descriptions">
                <div className='flex'>
                    <img src="/Images/vipul-kumar.jpg" alt="Vipul Kumar" />
                    <div className='about-desc mt-2'>
                        <h2>Vipul Kumar</h2>
                        <p >BTech Computer Science,Graphic Era University, Dehradun.</p>
                        <p>Batch : 2024</p>

                    </div>
                </div>
                <div>
                    <a className='mailto' href="mailto:vipulkumar0067@gmail.com">
                        <span className=''> vipulkumar0067@gmail.com</span>
                    </a>

                    <div className='social_links'>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://www.linkedin.com/in/vipulkumar6/' target='_blank'><FaLinkedinIn /></Link>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://github.com/vipulkumar6' target='_blank'><VscGithubAlt /></Link>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://x.com/vipulkumar66' target='_blank'><FaXTwitter /></Link>
                    </div>
                </div>
            </div>
            <div className="a buttons_header">
                <ScrollLink className='link tablink' to="contact" smooth={true} duration={500} activeClassName="active">
                    <button>Connect</button>
                </ScrollLink>

                <button onClick={handleDownload}>Download CV <LuDownload /></button>
            </div>
        </div>
    )
}

export default Header
