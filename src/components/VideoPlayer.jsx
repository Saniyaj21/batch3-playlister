import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }) => {
	// console.log(videoId);
	return (
		<>
			<div>
				<ReactPlayer
					width={"100%"}
					height={"100%"}
					url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
				/>
			</div>
			<h2 className='video-title font-p'>Title here anything</h2>
			<p className='video-details-p'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, minima.
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque?
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque?
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque?
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque?
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque?
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque?
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque?
			</p>
		</>
	);
};

export default VideoPlayer;
