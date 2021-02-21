import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video({channel,description,song,url,messages,likes,shares}) {
    const [playing,setPlaying]=useState("false");
    const videoRef = useRef(null);

    const handleOnPress=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
    
           
            <video 
            onClick={handleOnPress}
            ref={videoRef}
            className="video__player"
            loop
             src={url}>
            </video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
             />
            <VideoSideBar
                likes={likes}
                messages={messages}
                shares={shares}

            />
    
           

        </div>
    )
}

export default Video;
