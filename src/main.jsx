import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

<head>
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet"></link>

</head>

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



        <div className='relative h-screen'>
            <section className="flex flex-col items-center justify-center h-full relative z-10 ">
                <video
                    className="absolute left-0 right-0 w-full h-full object-cover z-[-1]"
                    ref={videoRef}
                    src={process.env.PUBLIC_URL + '/assets/menu2.mp4'}
                    muted
                    loop
                ></video>
                <div className=' bg-white py-4 px-4 bg-opacity-20 md:h-[400px]  font-nunito  flex flex-col justify-center items-center align-middle text-center gap-10 '>
                    <h3 className="md:text-5xl text-3xl text-white  bg-amber-500 bg-opacity-80 py-6 px-6 rounded-lg font-nunito">Predict The Price of The House You Deserve </h3>
                    <button className='w-60 font-nunito   bg-amber-700 hover:bg-amber-900 text-white text-4xl py-4 px-4 mt-2 rounded-lg'>
                        <Link to="/">
                            Sign In
                        </Link>
                    </button>

                </div>
            </section>
        </div>

    );
};

export default Main;
