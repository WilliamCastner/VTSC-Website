import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-gray-100 text-gray-900 py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-lg mb-6">
                    We are a family-run business based in Ludlow, Vermont, dedicated to driving innovation through technology.
                    With over 20 years of experience in software development for government agencies, we specialize in AI integration,
                    data management, and full-stack solutions.
                </p>
                <p className="text-lg mb-6">
                    Our mission is to optimize processes through cutting-edge solutions, ensuring efficiency and security.
                    As a Self-Certified Small Disadvantaged Business and an Economically Disadvantaged Women-Owned Small Business,
                    we take pride in our commitment to excellence and inclusivity.
                </p>
                <p className="text-lg">
                    We are also self-assessed at Level 1 CMMC compliance, ensuring that our cybersecurity practices meet industry standards.
                </p>
            </div>
            
            {/* Team Section */}
            <div className="max-w-6xl mx-auto px-4 text-center mt-12">
                <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
                
                {/* CEO Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Nancy Castner</h3>
                        <p className="text-lg text-gray-600">Co-CEO</p>
                        <p className="mt-4">Mom is the best!</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Christine Castner</h3>
                        <p className="text-lg text-gray-600">Co-CEO</p>
                        <p className="mt-4">Business relations strategists with strong footing in the private sector.</p>
                    </div>
                </div>
                
                {/* Development Team Section */}
                <h2 className="text-3xl font-bold mb-6">Development Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Alex Castner</h3>
                        <p className="text-lg text-gray-600">Lead Developer</p>
                        <p className="mt-4">CODES THINGS</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">James Castner</h3>
                        <p className="text-lg text-gray-600">Software Engineer</p>
                        <p className="mt-4">CODES THINGS</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Will Castner</h3>
                        <p className="text-lg text-gray-600">Software Engineer</p>
                        <p className="mt-4">CODES THINGS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;