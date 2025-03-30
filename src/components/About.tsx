import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Gamepad2, Trophy, Globe } from "lucide-react";

const About = () => {
    const interests = [
        {
            icon: <Code className="h-8 w-8 text-teal" />,
            title: "Competitive Programming",
            description:
                "Love solving algorithmic problems and coding challenges.",
        },
        {
            icon: <Trophy className="h-8 w-8 text-teal" />,
            title: "Cricket Fanatic",
            description:
                "Passionate about cricket and follow matches religiously.",
        },
        {
            icon: <Gamepad2 className="h-8 w-8 text-teal" />,
            title: "Gaming",
            description: "Enjoy gaming in free time and exploring new titles.",
        },
        {
            icon: <Globe className="h-8 w-8 text-teal" />,
            title: "Hodophile",
            description:
                "Just another guy with a never ending bucketlist of travel destinations",
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="section-heading text-navy">About Me</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2">
                        <p className="text-gray-700 mb-4">
                            Hello! I'm Ved, a software engineer who graduated
                            from the University of Mumbai in 2023. I'm
                            passionate about creating software that solves
                            real-world problems and provides intuitive user
                            experiences.
                        </p>
                        <p className="text-gray-700 mb-4">
                            My journey in software engineering began during my
                            university days where I tried my hands at
                            programming and problem-solving. Since then, I've
                            been constantly learning and improving my skills to
                            stay at the forefront of technology.
                        </p>
                        <p className="text-gray-700">
                            Beyond coding, I'm a curious creator who enjoys
                            exploring new technologies and approaches. I believe
                            in writing clean, maintainable code while building
                            applications that are functional, aesthetically
                            pleasing, and optimally performant.
                        </p>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-navy p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-teal">
                                Education
                            </h3>
                            <div className="mb-4">
                                <p className="text-lightestSlate font-medium">
                                    University of Mumbai
                                </p>
                                <p className="text-slate">
                                    B.E in Information Technology
                                </p>
                                <p className="text-slate">Graduated: 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-xl font-semibold mt-12 mb-6 text-navy">
                    My Interests
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {interests.map((interest, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardContent className="p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 bg-navy p-4 rounded-full">
                                        {interest.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2 text-navy">
                                        {interest.title}
                                    </h4>
                                    <p className="text-gray-600">
                                        {interest.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
