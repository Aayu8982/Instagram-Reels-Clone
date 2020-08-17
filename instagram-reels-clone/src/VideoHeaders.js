import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./VideoHeaders.css"



import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';




function VideoHeaders(){
    return(
        <div className="videoHeaders">
              <ArrowBackIosIcon />
              <h3>Reels</h3>
              <CameraAltOutlinedIcon />
        </div>
          
    );
}

export default VideoHeaders;