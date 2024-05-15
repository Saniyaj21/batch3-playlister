import React from "react";
import ReactPlayer from "react-player";
import "../styles/components/videoCard.css";
import TextOverFlowHandle from "../helpers/TextOverFlowHandle";

const VideoCard = ({ video, setCurrentVideo }) => {
	// dispatch(selectedVideoDetails)

	return (
		<div onClick={() => setCurrentVideo(video)} className='video-card-main'>
			<div className='video-box'>
				<ReactPlayer width={"100%"} height={"100%"} url={video?.link} />
			</div>
			<div className='card-details'>
				<p className='font-p'><TextOverFlowHandle text={video?.title} size={20} /></p>
				<p><TextOverFlowHandle text={video?.desc} size={40} /></p>
			</div>
		</div>
	);
};

export default VideoCard;
