import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi2";

import './Sidebar.css';

function SideNavbar() {
    return (
        <div className="side-navbar">
            <div className="side_header">
                <h4>&#123;V K&#125;</h4>
            </div>

            <ScrollLink className='link tablink' to="home" smooth={true} duration={500} activeClassName="active">
                <GoHome />
                <span>Home</span>
            </ScrollLink>

            <ScrollLink className='link tablink' to="projects" smooth={true} duration={500} activeClassName="active">
                <FaProjectDiagram />
                <span>Projects</span>
            </ScrollLink>

            <ScrollLink className='link tablink' to="skills" smooth={true} duration={500} activeClassName="active">
                <IoIosCheckboxOutline />
                <span>Skills</span>
            </ScrollLink>

            <ScrollLink className='link tablink' to="experience" smooth={true} duration={500} activeClassName="active">
                <HiAcademicCap />
                <span>Experience</span>
            </ScrollLink>

            <ScrollLink className='link tablink' to="education" smooth={true} duration={500} activeClassName="active">
                <HiAcademicCap />
                <span>Education</span>
            </ScrollLink>

            <ScrollLink className='link tablink' to="about" smooth={true} duration={500} activeClassName="active">
                <CiUser />
                <span>About</span>
            </ScrollLink>
        </div>
    );
}

export default SideNavbar;
