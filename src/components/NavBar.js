import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png'
import {Link} from 'react-router-dom';

const navLinks = [
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/capability' },
    { title: 'Contact Us', url: '/contact' }
];

const bgColor = 'bg-white';

const Navbar = () => {
    return (
        <>
            {(
                          <nav className={`sticky top-0 z-10 h-[11vh] max-w-full ${bgColor} bg-opacity-100`}>
                              <div className={`relative flex justify-between mx-auto items-center py-0 px-12`}>
                                  <div>
                                    <Link to={'/'}>
                                        <img src={logo} alt="Logo" className="relative left-[65%] h-[12vh] w-auto" />
                                    </Link>
                                  </div>
                                  <ul className="absolute left-[75%] transform -translate-x-1/2 flex gap-4 md:gap-12 items-center text-center cursor-pointer">
                                      {navLinks.map((link, index) => (
                                          <li key={index}  className="text-black text-md">
                                                <Link to={link.url}>
                                                    {link.title}
                                                </Link>
                                            </li>
                                      ))}
                                  </ul>
                                  <ul className="flex text-black gap-6 items-center cursor-pointer"></ul>
                              </div>
                          </nav>
            ) }
        </>
    );
}

export default Navbar;