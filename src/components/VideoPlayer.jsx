import React from "react";
import ReactPlayer from "react-player";
import TextOverFlowHandle from "../helpers/TextOverFlowHandle";

const VideoPlayer = ({ currentVideo }) => {
	// console.log(videoId);
	return (
		<>
			{currentVideo && (
				<>
					<div>
						<ReactPlayer
						controls
							playing
							width={"100%"}
							height={"100%"}
							url={currentVideo?.link}
						/>
					</div>
					<h2 className='video-title font-p'>
						<TextOverFlowHandle text={currentVideo?.title} size={40} />{" "}
					</h2>
					<p className='video-details-p'>
						<TextOverFlowHandle text={currentVideo?.desc} size={200} />{" "}
					</p>
				</>
			)}
		</>
	);
};

export default VideoPlayer;
