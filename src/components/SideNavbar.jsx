import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";
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

                <Link className='link' to="/" activeClassName="active">Home</Link>
            </div>

            <div className="tablink">

                <CiUser />

                <Link className='link' to="/about" activeClassName="active">About</Link>
            </div>

            <div className="tablink">

                <FaProjectDiagram />

                <Link className='link' to="/projects" activeClassName="active">Projects</Link>
            </div>

            <div className="tablink">

                <IoIosCheckboxOutline />

                <Link className='link' to="/skills" activeClassName="active">Skills</Link>
            </div>

            <div className="tablink">

                <HiAcademicCap />

                <Link className='link' to="/education" activeClassName="active">Education</Link>
            </div>

        </div >
    );
}

export default SideNavbar;
