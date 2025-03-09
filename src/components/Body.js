import React, { useState, useEffect } from 'react';
// import background from '../img/mansfield.jpg'

const Body = () => {
    return (
        <div className={``}>
            {/* SECTION 1 --> CATCHY BANNER PICTURE WITH LEARN MORE AND CONTACT US */}

            <div 
            className="h-[100vh] w-full bg-cover bg-center bg-no-repeat font-serif"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >            <div className=" flex flex-col items-left justify-start pl-[15%]">
                        <h1 className="pt-[20vh] text-white text-4xl font-bold">Modern Solutions Driving Innovation</h1>
                        <p className="pt-[2vh] text-2xl text-white">with AI integration, data management services,  
                            and full stack solutions.
                        </p>
                    </div>
            </div>
            <div className={`h-[80vh] bg-black`}>

            </div>
            <div className={`h-[80vh] bg-white`}>

            </div>
            <div className={`h-[80vh] bg-black`}>

            </div>
            <div className={`h-[80vh] bg-white`}>

            </div>
        </div>
    );
}



export default Body;