import { useState,useEffect } from "react"
import youtube from "../Api/youtube";

const useVideos = (defaultSearchTerm) =>{
    const [videos,setVideos] = useState([]);
    
    useEffect(()=>{
        fetchVideos(defaultSearchTerm);
    },[defaultSearchTerm]);

    const fetchVideos = async (term)=>{
        const results = await youtube.get('/search',{
             params:{ q : term }
            }
        );
        setVideos(results.data.items);            
    };

    return [videos, fetchVideos];
};

export default useVideos;