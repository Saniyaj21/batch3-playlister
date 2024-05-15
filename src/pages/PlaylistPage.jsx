import { useDispatch, useSelector } from "react-redux";
import PlaylistCard from "../components/PlaylistCard";
import "../styles/pages/playlistPage.css";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import {
	getPublicPlaylist,
	selectPlaylist,
} from "../redux/slices/playlistSlice";
import { Link } from "react-router-dom";

const PlaylistPage = () => {
	const dispatch = useDispatch();
	const { publicPlaylists } = useSelector(selectPlaylist);
	useEffect(() => {
		dispatch(getPublicPlaylist());
	}, [publicPlaylists?.length]);
	return (
		<div className='playlistpage-main'>
			<h2 className='font-p'>
				Public Playlists <hr />
			</h2>
			<div className='search-div'>
				<Link to={"/search"} className='font-p'>
					{" "}
					<FaSearch />
					Search
				</Link>
			</div>

			<div className='suggest-conatiner'>
				<h2>
					Suggested Playlists <hr />
				</h2>
				<div className='card-conatiner'>
					{publicPlaylists &&
						publicPlaylists.map((playlist) => {
							return <PlaylistCard playlist={playlist} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default PlaylistPage;
