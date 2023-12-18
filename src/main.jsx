import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Use the ref to access the video element
    const video = videoRef.current;

    // Play the video
    video.play().catch((error) => {
      // Auto-play was prevented
      console.error("Auto-play prevented:", error);
    });
  }, []);

  return (
    <div className="relative h-screen">
      <section className="flex flex-col items-center justify-center h-full relative z-10 ">
        <video
          className="absolute left-0 right-0 w-full h-full object-cover object-center z-[-1]"
          ref={videoRef}
          src={process.env.PUBLIC_URL + "/assets/menu5.mp4"}
          muted
          loop
        ></video>
        <div className=" py-4 px-4 md:h-[400px] font-Montserrat font-bold   flex flex-col justify-center items-center align-middle text-center gap-10  rounded-lg">
          <h3 className="md:text-5xl text-3xl text-white font-Montserratbg  py-6 px-6 rounded-lg">
            Predict The Price of The House You Deserve
          </h3>

          <button  className="w-60 font-kanit bg-sky-600 hover:bg-sky-400 text-white text-4xl py-4 px-4 mt-2 rounded-lg font-light  ">
            <Link to="/">Sign In</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Main;
