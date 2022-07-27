import React from "react";
import VideoItem from "./VideoItem";
class VideoList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
       const renderedList = this.props.videos.map((video)=>{
            return <VideoItem video={video} 
            onVideoSelect={this.props.onVideoSelect}
            key = {video.id.videoId}/>;
            });
        return <div className="ui relaxed divided list">{renderedList}</div>;
    }
}

export default VideoList;