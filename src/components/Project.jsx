import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import { Divider } from "@nextui-org/react";

const Project = ({ project }) => {
    return (
        <div className="project">

            <img src={project.image} alt={project.title} height={100} />
            <div className="description">
                <div className="project-content">
                    <h3 className="text-start">{project.title}</h3>
                    <p> {project.technologies.join(", ")}</p>
                </div>
                <div>
                    <Divider className=" mb-1" />
                    <div className="links">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <div className="flex justify-center items-center">
                                <VscGithubAlt /> Source Code
                            </div>
                        </a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <div className="flex justify-center items-center">
                                <GoLinkExternal /> Live Demo
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
