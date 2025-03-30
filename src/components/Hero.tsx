import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import profileImage from "../assets/profile.jpeg"; // Assumes the image will be at this path

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center navy-gradient pt-20"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
                    {/* Left side - Text content */}
                    <div>
                        <div
                            className="animate-fadeIn opacity-0"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <p className="font-mono text-teal mb-5">
                                Hi, my name is
                            </p>
                        </div>
                        <div
                            className="animate-fadeIn opacity-0"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <h1 className="text-4xl md:text-7xl font-bold text-lightestSlate mb-4">
                                Ved Timbadiya,
                            </h1>
                        </div>
                        <div
                            className="animate-fadeIn opacity-0"
                            style={{ animationDelay: "0.6s" }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate mb-6">
                                an Engineer specializing in building products.
                            </h2>
                        </div>
                        <div
                            className="animate-fadeIn opacity-0"
                            style={{ animationDelay: "0.8s" }}
                        >
                            <p className="text-slate max-w-xl mb-12 text-lg">
                                I'm a software engineer specializing in building
                                exceptional digital experiences. Currently, I'm
                                focused on building accessible, human-centered
                                products.
                            </p>
                        </div>
                        <div
                            className="animate-fadeIn opacity-0"
                            style={{ animationDelay: "1s" }}
                        >
                            <div className="flex space-x-4">
                                <Button
                                    className="bg-transparent hover:bg-teal/10 text-teal border border-teal rounded"
                                    asChild
                                >
                                    <a href="#contact">Get In Touch</a>
                                </Button>
                                <Button
                                    className="bg-teal hover:bg-teal/90 text-navy rounded"
                                    asChild
                                >
                                    <a href="#projects">
                                        View My Work{" "}
                                        <ArrowDownToLine className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Profile Image */}
                    <div
                        className="flex justify-center md:justify-end animate-fadeIn opacity-0 mb-8 md:mb-0"
                        style={{ animationDelay: "1.2s" }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal/20 rounded-full blur-xl transform -translate-x-2 translate-y-2"></div>
                            <img
                                src={profileImage}
                                alt="Ved Timbadiya"
                                className="relative z-10 rounded-full border-4 border-teal w-64 h-64 md:w-80 md:h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
