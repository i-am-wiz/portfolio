import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy py-8 text-center">
            <div className="container mx-auto px-4">
                <div className="text-slate font-mono text-sm">
                    <p className="mb-2">Designed & Built by Ved Timbadiya</p>
                    <p>&copy; {currentYear} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
