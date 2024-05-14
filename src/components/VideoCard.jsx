import React from "react";
import ReactPlayer from "react-player";
import "../styles/components/videoCard.css";

const VideoCard = ({ videoId, setCurrentVideoId }) => {
	// dispatch(selectedVideoDetails)

	return (
		<div onClick={() => setCurrentVideoId(videoId)} className='video-card-main'>
			<div className='video-box'>
				<ReactPlayer
					width={"100%"}
					height={"100%"}
					url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
				/>
			</div>
			<div className='card-details'>
				<p className='font-p'>Title</p>
				<p>
					Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Cum culpa aperiam fugit mollitia at. Praesentium, aut iure hic
					in numquam cumque sint possimus officiis distinctio dolores magnam
					obcaecati perspiciatis consectetur quo vero sed sequi ratione
					accusamus blanditiis rerum molestiae culpa, enim debitis? Doloribus
					dignissimos deserunt ratione molestias debitis animi amet sit ad
					incidunt adipisci, facere quae. Hic at, aliquid harum quisquam
					blanditiis accusantium? Voluptatum, rem ullam eum modi aut, et
					consequatur aliquid ea laborum suscipit similique doloribus ipsum.
					Itaque aut dolorem illum odio veritatis quas iusto officia aspernatur,
					repellat eligendi voluptatibus reiciendis optio facere cupiditate
					asperiores. Labore consectetur voluptatibus possimus? sit amet
					consectetur adipisicing elit
				</p>
			</div>
		</div>
	);
};

export default VideoCard;
