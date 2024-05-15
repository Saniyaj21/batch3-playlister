import React from "react";
import PlaylistCard from "../components/PlaylistCard";
import { FaSearch } from "react-icons/fa";
import '../styles/pages/searchPage.css'

const SearchPage = () => {
	return (
		<div className='playlistpage-main'>
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
		</div>
	);
};

export default SearchPage;
