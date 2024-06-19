import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi2";

import './Sidebar.css'
function SideNavbar() {
    return (
        <div className="side-navbar">
            <div className="side_header">
                <h4>V K</h4>
            </div>

            <div className="tablink">

                <GoHome />

                <RouterLink className='link' to="/" activeClassName="active">Home</RouterLink>
            </div>

            <div className="tablink">

                <CiUser />

                <RouterLink className='link' to="/about" activeClassName="active">About</RouterLink>
            </div>

            <div className="tablink">

                <FaProjectDiagram />

                <ScrollLink className='link' to="/projects" activeClassName="active">Projects</ScrollLink>
            </div>

            <div className="tablink">

                <IoIosCheckboxOutline />

                <ScrollLink className='link' to="section1" smooth={true} duration={500} activeClassName="active">Skills</ScrollLink>
            </div>

            <div className="tablink">

                <HiAcademicCap />

                <ScrollLink className='link' to="/education" activeClassName="active">Education</ScrollLink>
            </div>

        </div >
    );
}

export default SideNavbar;
