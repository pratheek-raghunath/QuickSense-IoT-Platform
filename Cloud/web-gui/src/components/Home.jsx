import React from 'react';
import Video from '../assets/vid2.mp4';
function Home() {
    return (
        <div>
            {/* <video autoPlay loop muted id='video' className="w-full h-full object-cover -z-1">
                <source src={Video} type='video/mp4' />
            </video> */}
            {/* <img src="../../src/images/pic3.jpg" alt="Image" border="0" className="w-full h-full object-cover -z-10"></img>
        <div className="overlay"></div>  */}
            {/* <div className=" h-full flex justify-center flex-col text-center w-full m-auto p-4 absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1>Quick Sense</h1>
            <h2>Open Source IoT Platform</h2>
            <h5>Device management, data collection, processing and visualization for your IoT solution</h5>
             
        </div>  */}

            <div class="relative overflow-hidden border-b-2">
                {/* <img class="object-cover w-full h-full" src="../../src/images/pic3.jpg" alt="Flower and sky" /> */}
                <video autoPlay loop muted id='video' className="w-full object-cover -z-1">
                    <source src={Video} type='video/mp4' />
                </video>
                <div class="absolute top-6 md:top-28 lg:top-36 left-0 w-full  px-6 py-4 md:py-2 lg:py-20 text-center items-center justify-center">
                    <h3 class="mb-3 text-2xl md:text-3xl lg:text-5xl font-semibold tracking-tight text-white">Quick Sense</h3>
                    <h4 class="leading-normal py-2 text-lg md:text-xl lg:text-3xl text-gray-100">Open-Source IoT Platform</h4>
                    <h5 class="leading-normal text-md md:text-xl lg:text-2xl text-gray-100">Device management, data collection, processing and visualization for your IoT solution</h5>
                    <div class="flex justify-center mt-8">
                        <a href="#" class=" hidden md:block px-4 py-3 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">Learn More</a>
                    </div>
                </div>
            </div>

            <div class="p-10 border-b-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/* <!--Card 1--> */}
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray-800">
                    <div className="items-center justify-center text-center">
                        <svg fill="none" class="w-40 m-auto " stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                        </svg>
                    </div>
                    <div class="px-6 py-2 text-center">
                        <div class="font-bold text-xl text-blue-700 mb-2">Cloud</div>
                        <p class="text-white text-base">
                            Connect and manage IoT devices via the cloud using graphical UI or REST API
                        </p>
                    </div>
                </div>
                {/* <!--Card 2--> */}
                <div class="rounded overflow-hidden shadow-lg bg-gray-800">
                    <div className="items-center justify-center text-center">
                        <div className="items-center justify-center text-center">
                            <svg fill="none" class="w-40 m-auto " stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="px-6 py-2 text-center">
                        <div class="font-bold text-xl text-blue-700 mb-2">Security</div>
                        <p class="text-white text-base">
                            Your data is encrypted in transit and at rest. Out-of-box authentication & authorization for users with JWT interface
                        </p>
                    </div>
                </div>

                {/* <!--Card 3--> */}
                <div class="rounded overflow-hidden shadow-lg bg-gray-800">
                    <div className="items-center justify-center text-center">
                        <div className="items-center justify-center text-center">
                            <svg fill="none" class="w-40 m-auto " stroke="white" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="px-6 py-2 text-center">
                        <div class="font-bold text-xl text-blue-700 mb-2">Insights</div>
                        <p class="text-white text-base">
                            Stream data from your IoT devices to any data analytics
                        </p>
                    </div>
                </div>
            </div>

            {/* Use Cases */}
            <h1 class="text-center pt-6 text-5xl font-bold text-white">Use Cases</h1>
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/* <!--Card 1--> */}
                <div class="rounded overflow-hidden shadow-lg bg-gray-700">
                    <div class="h-64 transform transition duration-500 hover:scale-110">
                    <img class="w-full h-full object-cover" src="../../src/images/automotive.jpg" alt="Automotive" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-2xl text-center text-white mb-2">Automotive</div>

                    </div>

                </div>
                {/* <!--Card 2--> */}
                <div class="rounded overflow-hidden shadow-lg bg-gray-700">
                    <div class="h-64 transform transition duration-500 hover:scale-110">
                    <img class="w-full h-full object-cover" src="../../src/images/healthcare2.jpg" alt="Health Care" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-2xl text-center text-white mb-2">Health Care</div>

                    </div>

                </div>

                {/* <!--Card 3--> */}
                <div class="rounded overflow-hidden shadow-lg bg-gray-700">
                    <div class="h-64 transform transition duration-500 hover:scale-110">
                    <img class="w-full h-full object-cover" src="../../src/images/industrial.png" alt="Industrial" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-2xl text-center text-white mb-2">Industrial</div>

                    </div>

                </div>

                {/* <!--Card 4--> */}
                <div class="rounded overflow-hidden shadow-lg bg-gray-700">
                    <div class="h-64 transform transition duration-500 hover:scale-110">
                    <img class="w-full h-full object-cover" src="../../src/images/smartCity.png" alt="Smart City" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-2xl text-center text-white mb-2">Smart City</div>

                    </div>

                </div>
                {/* <!--Card 5--> */}
                <div class="rounded overflow-hidden shadow-lg bg-gray-700">
                    <div class="h-64 transform transition duration-500 hover:scale-110">
                    <img class="w-full h-full object-cover" src="../../src/images/logistics.png" alt="Logistics" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-2xl text-center text-white mb-2">Logistics</div>

                    </div>

                </div>

                {/* <!--Card 6--> */}
                <div class="rounded overflow-hidden shadow-lg bg-gray-700">
                    <div class="h-64 transform transition duration-500 hover:scale-110">
                    <img class="w-full h-full object-cover" src="../../src/images/smartGrid2.jpg" alt="Smart Grid" />
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-2xl text-center text-white mb-2">Smart Grid</div>

                    </div>

                </div>
            </div>
        </div>








    );
}

export default Home;