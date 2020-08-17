import React,{ useRef, useState} from "react";

import "./VideoCard.css";
import VideoHeaders from './VideoHeaders';
import VideoFooters from './VideoFooters';

function VideoCard({channel,url,likes,shares,avatarSrc,song}) {
    
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
      <VideoHeaders />
      <video
      ref={videoRef}onClick={onVideoPress}
      className="videoCard_Player"
      src={url}
      alt="IG Reels Video" 
      loop
       />
       <VideoFooters 
         channel={channel}
         avatarSrc={avatarSrc}
         song={song}
         url={url}
         likes={likes}
         shares={shares}
       />
    </div>
  );
}

export default VideoCard;
