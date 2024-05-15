import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import T from "../test/T";
import VideoPlayer from "../components/VideoPlayer";
import VideoCard from "../components/VideoCard";
import "../styles/pages/videoPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
	getSelectedPlaylist,
	selectPlaylist,
} from "../redux/slices/playlistSlice";
import TextOverFlowHandle from "../helpers/TextOverFlowHandle";

const WatchPage = () => {
	const params = useParams();
	const [playlist, setPlaylist] = useState("");
	// const [currentVideoId, setCurrentVideoId] = useState("");
	const [currentVideo, setCurrentVideo] = useState({});
	// console.log(currentVideoId);

	const dispatch = useDispatch();
	const { selectedPlaylist } = useSelector(selectPlaylist);

	useEffect(() => {
		// console.log(params);
		setPlaylist(params.playlist);
		dispatch(getSelectedPlaylist(playlist));
		if (selectedPlaylist?.videos?.length > 0) {
			setCurrentVideo(selectedPlaylist?.videos[0]);
		}

		// dispatch get playlist with playlist id
	}, [playlist, selectedPlaylist?.videos?.length]);
	return (
		<div className='watch-page-main'>
			<div className='video-player'>
				<VideoPlayer currentVideo={currentVideo} />
			</div>
			<div className='video-list'>
				<div>
					<h1 className='font-p'>
						Playlist :{" "}
						<TextOverFlowHandle text={selectedPlaylist?.name} size={15} />{" "}
					</h1>
					<h6 className='font-p'>Description : {selectedPlaylist?.desc}</h6>
				</div>
				{selectedPlaylist &&
					selectedPlaylist.videos?.map((video) => (
						<VideoCard
							video={video}
							setCurrentVideo={setCurrentVideo}
							key={video.id}
						/>
					))}
			</div>
		</div>
	);
};

export default WatchPage;
