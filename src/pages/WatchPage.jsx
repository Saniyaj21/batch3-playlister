import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import T from "../test/T";
import VideoPlayer from "../components/VideoPlayer";
import VideoCard from "../components/VideoCard";
import "../styles/pages/videoPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
	enrollPlaylistSlice,
	getSelectedPlaylist,
	removeEnrollmentSlice,
	selectPlaylist,
} from "../redux/slices/playlistSlice";
import TextOverFlowHandle from "../helpers/TextOverFlowHandle";
import { selectUser } from "../redux/slices/userSlice";

const WatchPage = () => {
	const params = useParams();
	const [playlist, setPlaylist] = useState("");
	// const [currentVideoId, setCurrentVideoId] = useState("");
	const [currentVideo, setCurrentVideo] = useState({});
	// console.log(currentVideoId);

	const dispatch = useDispatch();
	const { selectedPlaylist } = useSelector(selectPlaylist);
	const { user } = useSelector(selectUser);

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
				<div className='playlist-info'>
					<h3 className='font-p'>
						Playlist :{" "}
						<TextOverFlowHandle text={selectedPlaylist?.name} size={15} />{" "}
					</h3>

					<h6 className='font-p'>Description : {selectedPlaylist?.desc}</h6>
					{selectedPlaylist?.enrolled?.includes(user._id) ? (
						<div>
							<button
								onClick={() =>
									dispatch(removeEnrollmentSlice(selectedPlaylist?._id))
								}
								className='font-p enroll-now-btn'
							>
								Remove Playlist
							</button>
						</div>
					) : (
						<div>
							<button
								onClick={() =>
									dispatch(enrollPlaylistSlice(selectedPlaylist?._id))
								}
								className='font-p enroll-now-btn'
							>
								Enroll Playlist
							</button>
						</div>
					)}
				</div>
				{selectedPlaylist &&
					selectedPlaylist.videos?.map((video) => (
						<VideoCard
							video={video}
							setCurrentVideo={setCurrentVideo}
							key={video._id}
						/>
					))}
			</div>
		</div>
	);
};

export default WatchPage;
