import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import T from "../test/T";
import VideoPlayer from "../components/VideoPlayer";
import VideoCard from "../components/VideoCard";
import "../styles/pages/videoPage.css";

const WatchPage = () => {
	const params = useParams();
	const [playlist, setPlaylist] = useState("");
	const [currentVideoId, setCurrentVideoId] = useState("");
	// console.log(currentVideoId);

	const videos = [
		{ id: "1" },
		{ id: "2" },
		{ id: "3" },
		{ id: "4" },
		{ id: "5" },
	];

	useEffect(() => {
		// console.log(params);
		setPlaylist(params.playlist);

		// dispatch get playlist with playlist id
	}, [playlist]);
	return (
		<div className='watch-page-main'>
			<div className='video-player'>
				<VideoPlayer videoId={currentVideoId} />
			</div>
			<div className='video-list'>
				<div>
					<h1 className="font-p">Playlist Name</h1>
				</div>
				{videos.map((video) => (
					<VideoCard
						videoId={video.id}
						setCurrentVideoId={setCurrentVideoId}
						key={video.id}
					/>
				))}
			</div>
		</div>
	);
};

export default WatchPage;
