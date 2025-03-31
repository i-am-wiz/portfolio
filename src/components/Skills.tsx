import React from "react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
    const technicalSkills = [
        { name: "Java", level: 80 },
        { name: "Algorithms", level: 90 },
        { name: "Spring Boot", level: 70 },
        { name: "JavaScript", level: 70 },
    ];

    const otherSkills = [
        "Java",
        "JavaScript",
        "C++",
        "Algorithms",
        "Spring Boot",
        "Database Design",
        "Problem Solving",
        "Design Patterns",
        "Docker",
        "Kubernetes",
        "SQL",
        "Testing",
        "Git & GitHub",
        "RESTful APIs",
    ];

    return (
        <section id="skills" className="py-20 navy-gradient">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="section-heading text-white">
                    Tools and Technologies
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                    {/* Technical Skills */}

                    {/* Other Skills */}
                    <div>
                        {/* <h3 className="text-xl font-semibold mb-6 text-teal">
                            Additional Skills
                        </h3> */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {otherSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-lightNavy p-3 rounded text-center text-lightestSlate hover:bg-teal hover:text-navy transition-colors duration-300"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
