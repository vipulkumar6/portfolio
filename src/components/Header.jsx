import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

import '../App.css'
const Header = () => {
    return (
        <div className='header flex'>
            <div className="descriptions">
                <div className='flex'>
                    <img src="/Images/sample-profile.png" alt="Vipul Kumar" />
                    <div className=' mt-2'>
                        <h2>Vipul Kumar</h2>
                        <p>Computer Science graduate from Graphic Era Hill University, Dehradun.</p>
                    </div>
                </div>
                <div>
                    <p>vipulkumar0067@gmail.com</p>
                    <div className='social_links'>
                        <Link className='link' to=''><FaLinkedin /></Link>
                        <Link className='link' to=''><FaGithubSquare /></Link>
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
