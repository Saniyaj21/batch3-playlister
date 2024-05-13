import ReactPlayer from "react-player";
import "../styles/components/Playlistcard.css";
import { Link } from "react-router-dom";
import { RiPlayListAddFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const PlaylistCard = () => {
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
					<span className="delete-playlist">
						<FaTrash />
					</span>
					<span className="edit-playlist">
						<FaRegEdit />
					</span>
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni esse
					aliquid odit voluptate vitae obcaecati. Et fuga ab enim dolore.
				</p>
				<Link className='watch-btn' to={"/watch/id"}>
					Watch Now
				</Link>
			</div>
		</div>
	);
};

export default PlaylistCard;
