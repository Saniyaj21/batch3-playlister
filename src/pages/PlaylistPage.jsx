import PlaylistCard from "../components/PlaylistCard";
import "../styles/pages/playlistPage.css";
import { FaSearch } from "react-icons/fa";

const PlaylistPage = () => {
	return (
		<div className='playlistpage-main'>
			<h2 className='font-p'>
				Public Playlists <hr />
			</h2>
			<div className='search-div'>
				<input className='font-p' type='text' />
				<button className='font-p'>
					{" "}
					<FaSearch />
					Search
				</button>
			</div>

			{/* if search results are available */}
			<div className='search-result-container'>
				<h2 className='font-p'>
					Search Results <hr />
				</h2>
				<div className='card-conatiner'>
					<PlaylistCard />
					<PlaylistCard />
					<PlaylistCard />
				</div>
			</div>
			<div className='suggest-conatiner'>
				<h2>
					Suggested Playlists <hr />
				</h2>
				<div className='card-conatiner'>
					<PlaylistCard />
					<PlaylistCard />
					<PlaylistCard />
				</div>
			</div>
		</div>
	);
};

export default PlaylistPage;
