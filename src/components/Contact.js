import React, { useState, useEffect } from 'react';
// import background from '../img/mansfield.jpg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d8da462a-178b-4a00-a0f4-5eea8e5dd7ab");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };

    return (
    
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div>
            <h1 className="text-lg font-bold text-center">Send us a message!</h1>
            <p className="text-center">Alternative contact: william@thevermontsoftwarecompany.com | (267) 797-6791</p>
        </div>
            <form onSubmit={onSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-black mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-black mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-black mb-2">Message</label>
                    <textarea
                        name="message"
                        required
                        rows="5"
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-green-900 text-white p-3 rounded-md font-semibold hover:bg-green-600 transition duration-200"
                    >
                        Submit Form
                    </button>
                </div>
            </form>

            <span className="mt-4 block text-lg text-blue-800">{result}</span>
        </div>
        );
    }

export default Contact;