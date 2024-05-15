import ReactPlayer from "react-player";
import "../styles/components/Playlistcard.css";
import { Link, useNavigate } from "react-router-dom";
import { RiPlayListAddFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";
import { deletePlaylist } from "../redux/slices/playlistSlice";

const PlaylistCard = ({ playlist }) => {
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
				<ReactPlayer
					width={"100%"}
					height={"100%"}
					url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
				/>
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

							{enrolled ? (
								<span className='unenroll-playlist'>
									<ImCancelCircle />
								</span>
							) : (
								""
							)}
						</>
					)}
				</p>
				<p className='desc'>{playlist?.desc}</p>
				<Link className='watch-btn' to={`/watch/${playlist?._id}`}>
					Watch Now
				</Link>
			</div>
		</div>
	);
};

export default PlaylistCard;
