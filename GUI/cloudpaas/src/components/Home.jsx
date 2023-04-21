import React from 'react';
import Video from '../assets/vid1.mp4';
function Home() {
    return (
        <div className='hero'>
        {/* <video autoPlay loop muted id='video' className="w-full h-full object-cover -z-10">
            <source src={Video} type='video/mp4' />
        </video> */}
        <img src="../../src/images/1.jpg" alt="Image" border="0" className="w-full h-full object-cover -z-10"></img>
        {/* <div className="overlay"></div>
        <div className=" top-0 h-full flex justify-center flex-col text-center w-full m-auto p-4 text-white">
            <h1>KULLA GANG</h1>
            <h2>Open Source IoT Platform</h2>
            <h5>Device management, data collection, processing and visualization for your IoT solution</h5>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-96 rounded"> Learn More</button>
        </div>  */}
    </div>

    );
}

export default Home;