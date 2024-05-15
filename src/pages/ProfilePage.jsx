import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";
import "../styles/pages/Profilepage.css";
import { CiSquarePlus } from "react-icons/ci";
import PlaylistCard from "../components/PlaylistCard";
import { RiPlayListAddFill } from "react-icons/ri";
import CreatePlaylis from "../components/CreatePlaylis";
import {
	getMyPlaylistsSlice,
	selectPlaylist,
} from "../redux/slices/playlistSlice";

const ProfilePage = () => {
	// Example data
	const { user } = useSelector(selectUser);
	const { myPlaylists } = useSelector(selectPlaylist);
	const [active, setActive] = useState(1);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyPlaylistsSlice(user._id));
	}, []);

	return (
		<>
			<div className='profile-container'>
				<div className='profile-picture'>
					<img src={user.profilePic} alt='Profile' />
				</div>
				<div className='profile-info'>
					<h2>{user.name}</h2>
					<p>Email: {user.email}</p>
				</div>
			</div>
			<div className='extra-details'>
				<div>
					<span
						onClick={() => setActive(1)}
						className={`${active === 1 ? "section-active" : ""} option`}
					>
						<RiPlayListAddFill />
						My Playlists
					</span>
					<span
						onClick={() => setActive(2)}
						className={`${active === 2 ? "section-active" : ""} option`}
					>
						<CiSquarePlus /> Create Playlist
					</span>
				</div>

				{active === 1 ? (
					<div className='playlist-group'>
						{myPlaylists &&
							myPlaylists.map((playlist) => {
								return <PlaylistCard key={playlist._id} playlist={playlist} />;
							})}
					</div>
				) : (
					<div className='create-playlist'>
						<CreatePlaylis />
					</div>
				)}
			</div>
		</>
	);
};

export default ProfilePage;
