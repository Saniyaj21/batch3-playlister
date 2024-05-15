import ReactPlayer from "react-player";
import "../styles/components/Playlistcard.css";
import { Link, useNavigate } from "react-router-dom";
import { RiPlayListAddFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";
import {
	deletePlaylist,
	enrollPlaylistSlice,
	removeEnrollmentSlice,
} from "../redux/slices/playlistSlice";

const PlaylistCard = ({ playlist, showCTA = true }) => {
	const { isAuthenticated, user } = useSelector(selectUser);
	let enrolled = playlist?.enrolled.includes(user._id);
	console.log(enrolled);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDeletePlaylist = () => {
		dispatch(deletePlaylist(playlist?._id));
		navigate("/playlists");
	};

	return (
		<div className='card-main  gb-shadow'>
			<div className='player-div'>
				{playlist?.videos?.length > 0 ? (
					<ReactPlayer
						width={"100%"}
						height={"100%"}
						url={playlist?.videos[0]?.link}
					/>
				) : (
					<ReactPlayer
						width={"100%"}
						height={"100%"}
						url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
					/>
				)}
			</div>
			<div className='playlist-details'>
				<p className='playlist-name'>{playlist?.name}</p>
				<p className='playlist-saved'>
					<span>
						<RiPlayListAddFill />
						{playlist?.totalEnrolled} Enrolled
					</span>
					{isAuthenticated && (
						<>
							{playlist?.creator == user._id ? (
								<>
									<span
										onClick={handleDeletePlaylist}
										className='delete-playlist'
									>
										<FaTrash />
									</span>
									<span className='edit-playlist'>
										<Link to={`/playlists/edit/${playlist?._id}`}>
											<FaRegEdit />
										</Link>
									</span>
								</>
							) : (
								""
							)}
						</>
					)}
				</p>
				<p className='desc'>{playlist?.desc}</p>
				<Link className='watch-btn font-p' to={`/watch/${playlist?._id}`}>
					Watch Now
				</Link>

				{showCTA && (
					<div style={{ width: "100%" }}>
						{playlist?.enrolled?.includes(user._id) ? (
							<button
								onClick={() => dispatch(removeEnrollmentSlice(playlist?._id))}
								className='font-p enroll-now-btn'
							>
								Remove Playlist
							</button>
						) : (
							<button
								onClick={() => dispatch(enrollPlaylistSlice(playlist?._id))}
								className='font-p enroll-now-btn'
							>
								Enroll Playlist
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default PlaylistCard;
