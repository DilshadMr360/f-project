import React, { useRef, useEffect } from 'react';

const Main = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Use the ref to access the video element
        const video = videoRef.current;

        // Play the video
        video.play().catch(error => {
            // Auto-play was prevented
            console.error('Auto-play prevented:', error);
        });
    }, []);

    return (
        <div className='h-screen relative'>
        <section className='relative'>
            <div className='absolute '>
                <video ref={videoRef} src={process.env.PUBLIC_URL + '/assets/menu2.mp4'} muted loop></video>
                <div className='bg-black bg-opacity-60 text-center items-center py-4 px-4 absolute bottom-[550px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-lg '>
                    <h3 className=' text-5xl  text-white'>Predict The Price Of The House You Deserve </h3>
                </div>
                <div className='op absolute top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                    <button className='w-40 bg-blue-500 text-white text-4xl py-4 px-4 mt-2 rounded-lg'>Login</button>
                </div>
            </div>
        </section>
    </div>
    
    );
};

export default Main;
