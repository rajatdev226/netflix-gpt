import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="videottl absolute text-white w-full pt-[13%] pl-48">
      <div className="container">
        <div className="pt-36">
          <div className="title-content w-1/3">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="py-6">{overview}</p>
            <div className="title-btns">
              <button className="font-bold	bg-white text-black px-12 p-4 text-xl rounded-lg mr-4 hover:bg-opacity-80">
                {" "}
                <span></span> Play
              </button>
              <button className="font-bold	bg-gray-500 text-white px-12 p-4 text-xl rounded-lg bg-opacity-50">
                <span></span> More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
