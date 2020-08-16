import React,{ useRef, useState} from "react";

import "./VideoCard.css";

function VideoCard() {
    
    const [ isVideoPlaying,setIsVideoplaying ] = 
    useState(false);
    const videoRef = useRef(null);

    const onVideoPress = ()=>{
        if(isVideoPlaying){
            //stop
            videoRef.current.pause();
            setIsVideoplaying(false);
        }else{
           //play
           videoRef.current.play();
           setIsVideoplaying(true);
        }
    }

  return (
    <div className="videoCard">
      <video
      ref={videoRef}onClick={onVideoPress}
      className="videoCard_Player"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      alt="IG Reels Video" 
      loop
       />
    </div>
  );
}

export default VideoCard;
