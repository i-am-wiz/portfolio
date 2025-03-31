import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
    const projects = [
        {
            title: "Blood-Bags: A blood bag monitoring system",
            description:
                "Developed a platform for easy check upon availability of Blood Bags in hospitals and blood banks in real time",
            technologies: ["JavaScript", "Firebase", "HTML", "CSS"],
            github: "https://github.com/i-am-wiz/Blood-Bag",
            demo: "https://i-am-wiz.github.io/Blood-Bag/",
        },
        {
            title: "Bill split application",
            description:
                "Developed an application for splitting bills among multiple people using Nodejs, ReactJs.",
            technologies: ["React", "Nodejs", "JavaScript", "HTML", "CSS"],
            github: "https://github.com/i-am-wiz/Bill-split-app",
            demo: "#",
        },
        {
            title: "Freelancing Projects",
            description:
                "Served various clients with mobile apps and website development services.",
            technologies: [],
            github: "#",
            demo: "#",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="section-heading text-navy">Projects</h2>
                <p className="text-gray-600 mb-10 max-w-3xl">
                    Here are some of the projects I've worked on.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card group">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-navy">
                                        {project.title}
                                    </h3>
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-navy hover:text-teal transition-colors"
                                            aria-label="GitHub Repository"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-navy hover:text-teal transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs font-mono bg-gray-100 text-navy px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="text-center mt-12">
                    <Button className="bg-navy hover:bg-navy/90 text-white rounded">
                        View All Projects
                    </Button>
                </div> */}
            </div>
        </section>
    );
};

export default Projects;
