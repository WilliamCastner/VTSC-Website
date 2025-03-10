import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const navLinks = [
    { title: 'About', url: '/about' },
    { title: 'Contact Us', url: '/contact' }
];

const bgColor = 'bg-white';

const Navbar = () => {
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    return (
        <nav className={`sticky top-0 z-10 h-[11vh] max-w-full ${bgColor} bg-opacity-100`}>
            <div className={`relative flex justify-between mx-auto items-center py-0 px-12`}>
                <div>
                    <Link to={'/'}>
                        <img src={logo} alt="Logo" className="relative left-[65%] h-[12vh] w-auto" />
                    </Link>
                </div>

                <ul className="absolute left-[75%] transform -translate-x-1/2 flex gap-4 md:gap-12 items-center text-center cursor-pointer">
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-black text-md hover:text-gray-600">
                            <Link to={link.url}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    
                    {/* Services Dropdown */}
                    <li 
                        className="relative text-black text-md cursor-pointer"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                    >
                        <span className='hover:text-gray-600'>Services</span>
                        
                        {isServicesHovered && (
                            <ul className="absolute left-0 top-full bg-white shadow-lg p-2">
                                <li className="p-2">
                                    <Link to="/software-development" className="block text-black hover:text-gray-600">Software Development</Link>
                                </li>
                                <li className="p-2">
                                    <Link to="/ai-research" className="block text-black hover:text-gray-600">AI Research</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>

                <ul className="flex text-black gap-6 items-center cursor-pointer"></ul>
            </div>
        </nav>
    );
}

export default Navbar;
