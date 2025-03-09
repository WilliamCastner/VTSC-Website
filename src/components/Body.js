import React, { useState, useEffect } from 'react';
// import background from '../img/mansfield.jpg'

const Body = () => {
    return (
        <div className={``}>
            {/* SECTION 1 --> CATCHY BANNER PICTURE WITH LEARN MORE AND CONTACT US */}

            <div 
            className="pt-[5vh] h-[100vh] w-full bg-cover bg-center bg-no-repeat font-serif text-black"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590805156700-67b7bbab9001?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        > {/* DIV FOR BACKGROUND BANNER -> GET ALL IMAGES OFF UPSPLASH */}    

                    <div className="h-[40vh] mx-auto items-left justify-start pl-[15%] bg-gray-900 bg-opacity-30 rounded-lg">
                        <div className="pt-[10vh] flex flex-col items-left ">
                            <h1 className=" text-4xl font-bold">Modern Solutions Driving Innovation</h1>
                            <p className="pt-[1vh] text-2xl">with AI integration, data management services,  
                                and full stack solutions.
                            </p>
                        </div>
                        <div className="pt-[4vh]">
                            <button className="w-[20vh] mr-[3vh] py-2 bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition">
                                Learn More
                            </button>
                            <button className="w-[20vh] px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
                                Contact Us
                            </button>
                        </div>

                    </div>
            </div>


            <div className={`h-[100vh] bg-black`}>
                {/* SECTION 2 --> CAPABILITIES */}
                <div 
            className="pt-[10vh] h-[100vh] w-4/5 mx-auto font-serif text-white"> {/* DIV FOR BACKGROUND BANNER -> GET ALL IMAGES OFF UPSPLASH */}    

                    <div className="justify-start ">
                        <div className=" flex flex-col text-center">
                            <h1 className=" text-4xl font-bold">Learning & Development, Talent Management,
                            and Cloud-Based IT Solutions</h1>
                            <div className="pt-[3vh] pb-[4vh] flex justify-center">
                            <button className="w-[35vh] mr-[3vh] py-3 bg-blue-500 rounded-sm shadow-md hover:bg-blue-600 transition">
                                    VTSC Capability Statement
                            </button>
                            </div>

                            <div className="grid grid-cols-2 gap-10">
                                <div className="h-[20vh] bg-gray-970 ">Section 1</div>
                                <div className="h-[20vh] bg-gray-970 ">Section 2</div>
                                <div className="h-[20vh] bg-gray-970 ">Section 3</div>
                                <div className="h-[20vh] bg-gray-970">Section 4</div>
                            </div>
                            

                            
                        </div>


                    </div>
                </div> 
            </div>
            
            <div className={`h-[100vh] grid grid-cols-2`}>
                {/* SET ASIDES AND CMMC CLEARENCE LEVEL ICONS */}
                <div>

                </div>
                <div 
            className="pt-[30vh] h-[100vh] w-full bg-cover bg-center bg-no-repeat font-serif text-white"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590805156700-67b7bbab9001?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        ></div>
            </div>
            <div className={`h-[80vh] bg-black`}>

            </div>
            <div className={`h-[80vh] bg-white`}>

            </div>
        </div>
    );
}



export default Body;