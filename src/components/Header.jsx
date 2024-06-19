import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { LuDownload } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


import '../App.css'
const Header = () => {
    return (
        <div className='header flex'>
            <div className="descriptions">
                <div className='flex'>
                    <img src="/Images/vipul-kumar.jpg" alt="Vipul Kumar" />
                    <div className=' mt-2'>
                        <h2>Vipul Kumar</h2>
                        <p>BTech Computer Science,Graphic Era University, Dehradun.</p>
                        <p>Batch : 2024</p>
                        <p></p>
                    </div>
                </div>
                <div>
                    <a className='mailto' href="mailto:vipulkumar0067@gmail.com">
                        <span className='flex items-center'> <CiMail size={20} className='mr-1' /> <p> vipulkumar0067@gmail.com</p></span>
                    </a>

                    <div className='social_links'>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://www.linkedin.com/in/vipulkumar6/' target='_blank'><FaLinkedinIn /></Link>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://github.com/vipulkumar6' target='_blank'><VscGithubAlt /></Link>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://x.com/vipulkumar66' target='_blank'><FaXTwitter /></Link>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button>Connect</button>
                <button>Download CV <LuDownload /></button>
            </div>
        </div>
    )
}

export default Header
