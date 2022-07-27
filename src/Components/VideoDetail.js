import React from "react";
const VideoDetail = ({video}) => {
        if(!video){
            return <div> loading..</div>;
        }
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        var parser = new DOMParser();
        return(
         <div>
             <div className="ui embed">
                 <iframe src={videoSrc} title="Video"/>
             </div>
            <div className="ui segment"> 
                <h4 className="ui header">{parser.parseFromString(video.snippet.title, 'text/html').body.textContent }</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        );      

};
export default VideoDetail;