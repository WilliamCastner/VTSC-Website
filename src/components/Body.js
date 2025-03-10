import React from 'react';
// import background from '../img/mansfield.jpg'

const Body = () => {
    return (
        <div className={``}>
            {/* SECTION 1 --> CATCHY BANNER PICTURE WITH LEARN MORE AND CONTACT US */}

            <div 
            className="pt-[2vh] h-[100vh] w-full bg-cover bg-center bg-no-repeat  text-black"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590805156700-67b7bbab9001?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        > {/* DIV FOR BACKGROUND BANNER -> GET ALL IMAGES OFF UPSPLASH */}    

                    <div className="h-[40vh] mx-auto items-left justify-start  ">
                        <div className="pt-[10vh] flex flex-col items-center text-center ">
                            <h1 className=" text-5xl font-bold">Modern Solutions Driving Innovation</h1>
                            <p className="pt-[1vh] text-3xl">with AI integration, data management services,  
                                and full stack solutions.
                            </p>
                        </div>
                        <div className="pt-[4vh]">
                            {/* <button className="w-[20vh] mr-[3vh] py-2 bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition ">
                                Learn More
                            </button>
                            <button className="w-[20vh] px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
                                Contact Us
                            </button> */}
                        </div>

                    </div>
            </div>


            
            <div>
                <div className="pt-[2vh]" />
                <h1 className="text-5xl font-bold flex flex-col items-center text-center pb-[3vh] pt-[2vh]">Who We Are
                </h1>
            </div>
            <div className={`grid grid-cols-[40%_2%_58%] h-[60vh]`}>
                {/* SET ASIDES AND CMMC CLEARENCE LEVEL ICONS */}
                <div 
            className="ml-[10vh] w-[80%] pt-[30vh] h-[40vh]  bg-cover bg-center bg-no-repeat font-serif text-white"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        ></div>
        <div>
        <p className="text-2xl"> | -  </p> <br />
                    <p className="text-2xl"> | -   </p> <br />
                    <p className="text-2xl"> | -   </p> <br />
                    <p className="text-2xl"> | -   </p> <br />
                    <p className="text-2xl"> | - </p> <br /> 
        </div>
                <div className="w-full">
                    <p className="text-2xl"> Family run business proud to be located in Ludlow, Vermont.  </p> <br />
                    <p className="text-2xl"> Striving to achieve innovation through optimization.  </p> <br />
                    <p className="text-2xl"> Self-assessed level 1 CMMC compliance.  </p> <br />
                    <p className="text-2xl"> Over 20 years of experience developing software for the government  </p> <br />
                    <p className="text-2xl"> Self Certified Small Disadvantaged Business, Economically Disadvantaged Women Small Owned Business.  </p> <br />

                </div>
                
        </div>

        <div className={`h-[95vh] bg-black`}>
                {/* SECTION 2 --> CAPABILITIES */}
                <div className="pt-[10vh] h-[100vh] w-4/5 mx-auto text-white"> {/* DIV FOR BACKGROUND BANNER -> GET ALL IMAGES OFF UPSPLASH */}    

                    <div className="justify-start ">
                        <div className=" flex flex-col text-center ">
                            <h1 className=" text-4xl font-bold pb-[5vh]">What We Do</h1>


                            <div className="grid grid-cols-2 gap-8 pb-[9vh]">
                                <div className="h-[20vh] bg-gray-970 ">
                                    <h1 className= "text-2xl">Practical data analysis optimized through AI</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                                    </div>
                                <div className="h-[20vh] bg-gray-970">
                                    <h1 className="text-2xl">Custom Software Development</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                                    </div>
                                <div className="h-[20vh] bg-gray-970 ">
                                <h1 className="text-2xl">Software acquisition and training</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                                </div>
                                <div className="h-[20vh] bg-gray-970">
                                    <h1 className="text-2xl">Using AI to boost government agency's efficiency</h1>
                                    <p> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa</p></div>
                            </div>
                            
                            <div className="pt-[3vh] flex justify-center">
                            <button className="w-[35vh] mr-[3vh] py-2 bg-yellow-900 rounded-sm shadow-md hover:bg-yellow-600 transition">
                                    VTSC Capability Statement
                            </button>
                            </div>
                            
                        </div>


                    </div>
                </div> 
            </div>
        </div>
    );
}



export default Body;