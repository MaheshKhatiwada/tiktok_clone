import React, { useRef, useState } from 'react'
import "./Video.css";

function Video() {
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
             src="https://v16m.tiktokcdn.com/db37d7bf2f8a14a44be057cd9127a23f/60301149/video/tos/alisg/tos-alisg-pve-0037c001/5aa813be3d864be8955b234190c4573e/?a=1233&amp;br=2174&amp;bt=1087&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=20210219132757010234087043310EB8CE&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;pl=0&amp;qs=0&amp;rc=anB0NXBpd3c3MzMzaTczM0ApZjxmZ2hpZWQ0NzQ3ZWQzOWdoLV5eMDZzNmtgLS0wMTRzczBgMzIyMF5gYjExXi0vLmA6Yw%3D%3D&amp;vl=&amp;vr=">
            </video>
            {/* VideoFooter*/}
            {/* VideoSideBar*/}


           

        </div>
    )
}

export default Video
