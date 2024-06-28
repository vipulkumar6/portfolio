import React from 'react'
import { Code } from "@nextui-org/react";
import { GoDatabase } from "react-icons/go";
import { LuPencilLine } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { TbSettingsCode } from "react-icons/tb";
import { CiServer } from "react-icons/ci";
import { HiCodeBracket } from "react-icons/hi2";

import { IoCodeOutline } from "react-icons/io5";

const Skills = () => {
    return (
        <>
            <div className='skills'>
                <h1 className=' ml-2'>Skills</h1>

                <div className="flex gap-2 flex-wrap">
                    <div className='skill_card'>
                        <div className="skill_header flex  items-center justify-between">
                            <h2 className=' mr-1'>Front End</h2>
                            <IoCodeOutline />
                        </div>
                        <div className="skill_desc flex flex-wrap gap-4">
                            <Code size='sm' color="success">HTML</Code>
                            <Code color="warning">CSS</Code>
                            <Code color="danger">JavaScript</Code>
                            <Code color="primary">React Js </Code>
                            <Code color="danger">Next Js</Code>
                        </div>
                    </div>
                    <div className='skill_card'>
                        <div className="skill_header flex  items-center justify-between">
                            <h2 className=' mr-1'>Back End</h2>
                            <TbSettingsCode />
                        </div>
                        <div className="skill_desc flex flex-wrap gap-4 ">
                            <Code color="success">Node Js</Code>
                            <Code color="warning">Express JS</Code>
                        </div>
                    </div>

                    <div className='skill_card'>
                        <div className="skill_header flex  items-center justify-between">
                            <h2 className=' mr-1'>Database</h2>
                            <GoDatabase />
                        </div>
                        <div className="skill_desc flex flex-wrap gap-4">
                            <Code color="success">Mongo DB</Code>
                            <Code color="warning">MySql</Code>
                            <Code color="warning">Firebase</Code>
                        </div>
                    </div>
                    <div className='skill_card'>
                        <div className="skill_header flex  items-center justify-between">
                            <h2 className=' mr-1'>DevOps/Hosting</h2>
                            <CiServer />
                        </div>
                        <div className="skill_desc flex flex-wrap gap-4">
                            <Code color="success">Git</Code>
                            <Code color="warning">Github</Code>
                            <Code color="default">Netlify</Code>
                            <Code color="warning">Vercel</Code>
                        </div>
                    </div>
                    <div className='skill_card'>
                        <div className="skill_header flex  items-center justify-between">
                            <h2 className=' mr-1'>Programming Lang</h2>
                            <HiCodeBracket />
                        </div>
                        <div className="skill_desc flex flex-wrap gap-4">
                            <Code color="success">C++</Code>
                            <Code color="warning">Java</Code>
                        </div>
                    </div>
                    <div className='skill_card'>
                        <div className="skill_header flex  items-center justify-between">
                            <h2 className=' mr-1'>Andriod</h2>
                            <CiMobile3 />
                        </div>
                        <div className="skill_desc flex flex-wrap gap-4">
                            <Code color="warning">Flutter</Code>
                        </div>
                    </div>
                    <div className='skill_card'>
                        <div className="skill_header flex  items-center justify-between">
                            <h2 className=' mr-1'>Design/CMS</h2>
                            <LuPencilLine />
                        </div>
                        <div className="skill_desc flex flex-wrap gap-4">
                            <Code color="warning">Canva</Code>
                            <Code color="secondary">Wordpress</Code>
                        </div>
                    </div>
                </div>


            </div>


        </>


    )
}

export default Skills