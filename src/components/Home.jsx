import React from 'react'
import { Tabs, Tab, Chip } from "@nextui-org/react";
import Project from './Project';
import './Project.css'
import { ScrollShadow } from "@nextui-org/react";
import Header from './Header';
import { Allprojects, Mlprojects, frontend, mern } from '../data/projectData'
import Skills from './Skills';
import { Element } from 'react-scroll';
import Experience from './Experience';
import { Code } from "@nextui-org/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import About from '../pages/About';

import AcademicDetails from '../pages/Education';
import Contact from '../pages/Contact';



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Home = () => {
    return (
        <>

            <ScrollShadow hideScrollBar >
                <Element name="home">
                    <Header />
                </Element>
                <Element name='project'>
                    <div className='projects'>
                        <h1 className=' ml-2'>Projects</h1>
                        <div className=" flex w-full flex-col text-center justify-center">
                            <Tabs aria-label="Options" size='md' fullWidth={true} color="primary" variant="bordered" >
                                <Tab key="all" title={
                                    <div className="flex items-center space-x-2">
                                        {/* <GalleryIcon /> */}
                                        <span>All</span>
                                        <Chip size="sm" variant="faded">9</Chip>
                                    </div>
                                }>

                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}>
                                        {Allprojects.map((project, key) => (

                                            <div key={key} className='project_carosuel ml-5'>
                                                <Project key={project.id} project={project} />
                                            </div>
                                        ))}
                                    </Carousel>

                                </Tab>
                                <Tab key="mern" title={
                                    <div className="flex items-center space-x-2">
                                        {/* <GalleryIcon /> */}
                                        <span>MERN</span>
                                        <Chip size="sm" variant="faded">5</Chip>
                                    </div>
                                }>
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}>
                                        {mern.map((project, key) => (

                                            <div key={key} className='project_carosuel ml-5'>
                                                <Project key={project.id} project={project} />
                                            </div>
                                        ))}
                                    </Carousel>
                                </Tab>
                                <Tab key="frontend" title={
                                    <div className="flex items-center space-x-2">
                                        {/* <GalleryIcon /> */}
                                        <span>Front End</span>
                                        <Chip size="sm" variant="faded">9</Chip>
                                    </div>
                                }>
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}>
                                        {frontend.map((project, key) => (

                                            <div key={key} className='project_carosuel ml-5'>
                                                <Project key={project.id} project={project} />
                                            </div>
                                        ))}
                                    </Carousel>
                                </Tab>

                                <Tab key="mlai" title={
                                    <div className="flex items-center space-x-2">
                                        {/* <GalleryIcon /> */}
                                        <span>ML/AI</span>
                                        <Chip size="sm" variant="faded">7</Chip>
                                    </div>
                                }>

                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}>
                                        {Mlprojects.map((project, key) => (

                                            <div key={key} className='project_carosuel ml-5'>
                                                <Project key={project.id} project={project} />
                                            </div>
                                        ))}
                                    </Carousel>


                                </Tab>
                                <Tab key="android" title={
                                    <div className="flex items-center space-x-2">
                                        {/* <GalleryIcon /> */}
                                        <span>Android</span>
                                        <Chip size="sm" variant="faded">9</Chip>
                                    </div>
                                }>
                                    <Code>Updating</Code>

                                </Tab>

                            </Tabs>
                        </div>
                    </div>
                </Element>
                <Element name='skills'>
                    <Skills />
                </Element>
                <Element name='experience'>
                    <Experience />
                </Element>
                <Element name='education'>
                    <AcademicDetails />
                </Element>
                <Element name='about'>
                    <About />
                </Element>
                <Element name='contact'>
                    <Contact />
                </Element>
                {/* <Demo /> */}
            </ScrollShadow>
        </>


    )
}

export default Home


