import React from 'react'
import '../App.css'
import { GoDotFill } from "react-icons/go";
import { Code } from "@nextui-org/react";
import { duration } from '@mui/material';
import { exp } from 'three/examples/jsm/nodes/Nodes.js';
import { AddEquation } from 'three';

const exps = [
    {
        id: 1,
        company_name: "Eyecasa",
        role: "Software Developer Intern",
        duration: "1 Feb 2024 - 30 May 2024 • 4 Months",
        desc: "Contributed to a team of developers in creating an ERP system for colleges to automate student and parent management.",
        tech: ' Flutter, JavaScript, React, and Firebase'
    },
    {
        id: 1,
        company_name: "Next Web Guru PVT LTD",
        role: "Full Stack Developer Intern",
        duration: "1 Jun 2023 - 1 Aug 2023 • 2 Months",
        desc: "Built an E-Commercewebsite Increased load speed by 15% through performance optimization techniques.",
        tech: ' React, JavaScript, CSS, Bootstrap'
    },
]

const Experience = () => {
    return (
        <>
            <div className='experience'>
                <h1 className=''>Experience</h1>
                {
                    exps.map((exp, key) => {
                        return <div key={key} className="container my-4 p-3 shadow-sm mb-2">
                            <h2 className="sub_heading_title">{exp.company_name}<GoDotFill size={13} /> {exp.role}</h2>
                            <p className="duration">{exp.duration}</p>
                            <p className="description">
                                {exp.desc}
                            </p>
                            <p className="technologies">
                                <strong>Technologies:</strong> {exp.tech}
                            </p>
                        </div>
                    })
                }

            </div>
        </>


    )
}

export default Experience