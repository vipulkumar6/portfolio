import React from 'react'
import { Tabs, Tab, Chip } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import Project from './Project';
import './Project.css'
import Header from './Header';
import { GlareCard } from '../GlareCard';
import projects from '../data/projectData'
import { FaHtml5 } from "react-icons/fa";


import { IoCodeOutline } from "react-icons/io5";

const Skills = () => {

    console.log(projects)
    return (
        <>
            <div className='skills'>
                <h1 className=' ml-2'>Skills</h1>

                <div className='skill_card'>

                    <div className="skill_header flex  items-center">
                        <h2 className=' mr-1'>Front End</h2>
                        <IoCodeOutline />
                    </div>
                    <div className="skill_desc">
                        <FaHtml5 />
                    </div>
                </div>


            </div>
        </>


    )
}

export default Skills
