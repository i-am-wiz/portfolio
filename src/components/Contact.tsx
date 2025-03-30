import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* <h2 className="section-heading text-navy text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out to me.
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p> */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    {/* <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-navy">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-white border-gray-200 focus:border-teal" 
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white border-gray-200 focus:border-teal" 
                />
              </div>
              <div>
                <Input 
                  type="text" 
                  placeholder="Subject" 
                  className="bg-white border-gray-200 focus:border-teal" 
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-white border-gray-200 focus:border-teal h-32" 
                />
              </div>
              <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                Send Message
              </Button>
            </form>
          </div> */}

                    {/* Contact Info */}
                    <div>
                        <h2 className="section-heading text-navy">
                            Contact Information
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium text-navy">
                                        Location
                                    </h4>
                                    <p className="text-gray-600">
                                        Mumbai, Maharashtra, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="h-6 w-6 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium text-navy">
                                        Email
                                    </h4>
                                    <p className="text-gray-600">
                                        timbadiyaved08072@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-6 w-6 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium text-navy">
                                        Phone
                                    </h4>
                                    <p className="text-gray-600">
                                        +91 9265159215
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="font-medium text-navy mb-4">
                                    Connect with me
                                </h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/i-am-wiz"
                                        className="bg-navy hover:bg-teal text-white hover:text-navy p-3 rounded-full transition-colors duration-300"
                                        aria-label="GitHub"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https:www.linkedin.com/in/ved-timbadiya"
                                        className="bg-navy hover:bg-teal text-white hover:text-navy p-3 rounded-full transition-colors duration-300"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://x.com/ved_patel_"
                                        className="bg-navy hover:bg-teal text-white hover:text-navy p-3 rounded-full transition-colors duration-300"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
