import React from 'react'
import { Tabs, Tab, Chip } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import Project from './Project';
import './Project.css'
import Header from './Header';
import { GlareCard } from '../GlareCard';
import projects from '../data/projectData'
import Skills from './Skills';
const Home = () => {

    console.log(projects)
    return (
        <>
            <Header />
            <div className='projects'>
                <h1 className=' ml-2'>Projects</h1>
                <div className=" flex w-full flex-col text-center">
                    <Tabs aria-labeal="Options" size='lg' fullWidth={true} color="default" variant="solid" >
                        {/* classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-[#22d3ee]",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-[#06b6d4]"
                    }} */}
                        <Tab key="all" title={
                            <div className="flex items-center space-x-2">
                                {/* <GalleryIcon /> */}
                                <span>All</span>
                                <Chip size="sm" variant="faded">9</Chip>
                            </div>
                        }>

                            <div className="projects-container">
                                {projects.map((project) => (

                                    <Project key={project.id} project={project} />
                                ))}
                            </div>


                        </Tab>
                        <Tab key="frontend" title={
                            <div className="flex items-center space-x-2">
                                {/* <GalleryIcon /> */}
                                <span>Front End</span>
                                <Chip size="sm" variant="faded">9</Chip>
                            </div>
                        }>

                            <div className="projects-container">
                                {projects.map((project) => (

                                    <Project key={project.id} project={project} />
                                ))}
                            </div>


                        </Tab>
                        <Tab key="mern" title={
                            <div className="flex items-center space-x-2">
                                {/* <GalleryIcon /> */}
                                <span>MERN</span>
                                <Chip size="sm" variant="faded">9</Chip>
                            </div>
                        }>
                            <Card>
                                <CardBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </CardBody>
                            </Card>

                        </Tab>
                        <Tab key="mlai" title={
                            <div className="flex items-center space-x-2">
                                {/* <GalleryIcon /> */}
                                <span>ML/AI</span>
                                <Chip size="sm" variant="faded">9</Chip>
                            </div>
                        }>
                            <Card>
                                <CardBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </CardBody>
                            </Card>

                        </Tab>
                        <Tab key="android" title={
                            <div className="flex items-center space-x-2">
                                {/* <GalleryIcon /> */}
                                <span>Android</span>
                                <Chip size="sm" variant="faded">9</Chip>
                            </div>
                        }>
                            <Card>
                                <CardBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </CardBody>
                            </Card>

                        </Tab>

                    </Tabs>
                </div>
            </div>

            <Skills />
        </>


    )
}

export default Home
