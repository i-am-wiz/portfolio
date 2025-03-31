import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showResumeModal, setShowResumeModal] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleResumeModal = () => setShowResumeModal(!showResumeModal);

    // Updated path to resume file that will work in production
    const resumePath = "/resume.pdf";

    const navLinks = [
        { title: "About", href: "#about" },
        { title: "Skills", href: "#skills" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle body scroll lock when modal is open
    useEffect(() => {
        if (showResumeModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showResumeModal]);

    // Handle resume button click
    const handleResumeClick = () => {
        toggleResumeModal();
    };

    // Handle resume download
    const downloadResume = (e) => {
        e.stopPropagation(); // Prevent closing the modal when clicking download

        // Create an anchor element and trigger download
        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "ved-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? "bg-navy shadow-md py-3" : "bg-transparent py-5"
                }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-2xl font-bold text-teal">
                            not-wiz<span className="text-white"></span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-lightestSlate hover:text-teal transition-colors font-mono text-sm flex items-center"
                                >
                                    <span className="text-teal">
                                        {index + 1}.
                                    </span>{" "}
                                    {link.title}
                                </a>
                            ))}
                            <Button
                                className="bg-transparent hover:bg-teal/10 text-teal border border-teal rounded h-8 px-4 flex items-center"
                                onClick={handleResumeClick}
                            >
                                Resume
                            </Button>
                        </div>

                        {/* Mobile Navigation Toggle */}
                        <button
                            className="md:hidden text-lightestSlate"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden fixed inset-0 bg-lightNavy bg-opacity-95 z-40 transform transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-lightestSlate hover:text-teal transition-colors font-mono text-lg"
                                onClick={toggleMenu}
                            >
                                <span className="text-teal">{index + 1}.</span>{" "}
                                {link.title}
                            </a>
                        ))}
                        <Button
                            className="bg-transparent hover:bg-teal/10 text-teal border border-teal rounded mt-4 h-10"
                            onClick={() => {
                                toggleMenu();
                                handleResumeClick();
                            }}
                        >
                            Resume
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Resume Modal */}
            {showResumeModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                    onClick={toggleResumeModal}
                >
                    <div
                        className="bg-lightNavy rounded-lg max-w-4xl w-full max-h-screen overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 border-b border-gray-700">
                            <h3 className="text-lg font-semibold text-lightestSlate">
                                Resume
                            </h3>
                            <div className="flex gap-4">
                                <Button
                                    className="flex items-center gap-2 bg-teal hover:bg-teal/80 text-navy"
                                    onClick={downloadResume}
                                >
                                    <Download size={16} />
                                    Download
                                </Button>
                                <button
                                    className="text-lightestSlate hover:text-white"
                                    onClick={toggleResumeModal}
                                    aria-label="Close"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>
                        <div className="p-4 h-screen max-h-[80vh]">
                            {/* PDF Embed - will work for most modern browsers */}
                            <iframe
                                src={resumePath}
                                className="w-full h-full rounded border border-gray-700"
                                title="Resume Preview"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
