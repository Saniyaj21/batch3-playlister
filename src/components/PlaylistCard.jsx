import ReactPlayer from "react-player";
import "../styles/components/Playlistcard.css";
import { Link } from "react-router-dom";
import { RiPlayListAddFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";

const PlaylistCard = () => {
	const { isAuthenticated } = useSelector(selectUser);

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
				<p className='playlist-name'>Every Snake is not Python</p>
				<p className='playlist-saved'>
					<span>
						<RiPlayListAddFill />
						9000 Enrolled
					</span>
					{isAuthenticated && (
						<>
							<span className='delete-playlist'>
								<FaTrash />
							</span>
							<span className='edit-playlist'>
								<FaRegEdit />
							</span>
							<span className='remove-playlist'>
								<ImCancelCircle />
							</span>
						</>
					)}
				</p>
				<p className='desc'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni esse
					aliquid odit voluptate vitae obcaecati. Et fuga ab enim dolore.
				</p>
				<Link className='watch-btn' to={"/watch/66ydasfgyudasd"}>
					Watch Now
				</Link>
			</div>
		</div>
	);
};

export default PlaylistCard;
