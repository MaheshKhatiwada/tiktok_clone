import React from "react";
import './App.css';
import Video from "./Video";
import axios from "./axios";
import { useEffect, useState } from 'react';

function App() {
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    async function fetchPosts(){
      const response=await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  },[]);
  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({url,channel,description,song,likes,shares,messages})=>(
          <Video 
            url={url}
            channel={channel}
            song={song}
            description={description}
            likes={likes}
            messages={messages}
            shares={shares}    
          />
        ))}
      </div>
    </div>

  );
}

export default App;
