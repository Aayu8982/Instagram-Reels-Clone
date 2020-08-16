import React from "react";
import "./App.css";
import VideoCard from "./VideoCard";

function App() {
  return (
    <div className="app">
      {/* <h1 className="title">Hey Guys, Let's make Instagram-Reels-clone 🚀!</h1> */}
      <div className="app_top">
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt="Instagram-logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        {/*container of app_videos*/}
        
        < VideoCard />
        < VideoCard />
        < VideoCard />
        < VideoCard />
        < VideoCard />
        < VideoCard />
       
      </div>
    </div>
  );
}

export default App;
