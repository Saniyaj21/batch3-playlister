import React, { useState } from "react";
import PlaylistCard from "../components/PlaylistCard";
import { FaSearch } from "react-icons/fa";
import "../styles/pages/searchPage.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
	searchPlaylistSlice,
	selectPlaylist,
} from "../redux/slices/playlistSlice";

const SearchPage = () => {
	const [keyword, setKeyword] = useState("");
	const dispatch = useDispatch();
	const { searchresult } = useSelector(selectPlaylist);

	const handleSearch = () => {
		if (keyword.length <= 0) {
			return toast.error("Please enter a keyword");
		}
		dispatch(searchPlaylistSlice(keyword));
	};
	return (
		<div className='playlistpage-main'>
			<div className='search-div'>
				<input
					onChange={(e) => setKeyword(e.target.value)}
					className='font-p'
					type='text'
					value={keyword}
				/>
				<button onClick={handleSearch} className='font-p'>
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
					{searchresult &&
						searchresult.map((playlist) => {
							return (
								<PlaylistCard
									key={playlist._id}
									playlist={playlist}
									showCTA={false}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
