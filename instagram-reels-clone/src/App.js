import React,{ useState,useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from './firebase.js';

function App() {

  const [ reels,setReels ] = useState([]);

  useEffect(()=>{
    //App component will run once when it loads,never again
    db.collection('reels').onSnapshot(snapshot=>(
      setReels(snapshot.docs.map(doc=>doc.data()))
    )) 
  },[])


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
        
        {reels.map(({ channel,avatarSrc,song,url,likes,shares})=>(
            < VideoCard 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url= {url}
            likes={likes}
            shares={shares}
          />
        ))}
       
      </div>
    </div>
  );
}

export default App;
