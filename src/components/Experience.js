import React from 'react'
import '../App.css'
import { GoDotFill } from "react-icons/go";
import { PiBuildingOffice } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";

const exps = [
    {
        id: 1,
        company_name: "Eyecasa",
        role: "Software Developer Intern",
        duration: "1 Feb 2024 - 30 May 2024 • 4 Months",
        desc: "Contributed collaboratively to a team of developers to create an ERP software tailored for colleges and universities aimed at managing and automating students, parents, and faculty",
        tech: ' Flutter, JavaScript, React, and Firebase'
    },
    {
        id: 1,
        company_name: "Next Web Guru PVT LTD",
        role: "Full Stack Developer Intern",
        duration: "1 Jun 2023 - 1 Aug 2023 • 2 Months",
        desc: "Built an Full Stack E-Commerce website Increased load speed by 15% through performance optimization techniques. Utilized technologies such as React.js, Node.js, Express.js, and MongoDB",
        tech: ' React, JavaScript, CSS, Bootstrap, Node Js, Express Js, Mongo DB, Material UI'
    },
]

const Experience = () => {
    return (
        <>
            <div className='experience'>
                <h1 className=''>Experience</h1>
                {
                    exps.map((exp, key) => {
                        return <div key={key} className="exp_container container my-4 p-3 shadow-sm mb-2">
                            <h2 className="sub_heading_title text-start"><GoDotFill size={13} /> {exp.role}</h2>
                            <div className='lg:flex justify-between content-center mb-1'>
                                <p className='flex content-center'><PiBuildingOffice className='mr-1' />{exp.company_name}</p>
                                <p className="duration lg:ml-2 flex content-center"><CiCalendar className='mr-1' />{exp.duration}</p>
                            </div>
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