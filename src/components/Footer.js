import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo Section */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">VTSC</h2>
                </div>
                
                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row gap-6 text-center items-center">
                    <a href="#" className="hover:text-gray-400">Capabilities</a>
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>

                </div>
                
                {/* Contact Information */}
                <div className="text-center md:text-right">
                    <p>Ludlow, VT</p>
                    <p>(267) 797-6791</p>
                </div>
                <div className="pt-2">
                <a href="https://www.linkedin.com/company/the-vermont-software-company" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedin size={24} /> 
                </a>                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;