import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	deleteVideoFromPlaylist,
	getSelectedPlaylist,
	postVideoToPlaylist,
	selectPlaylist,
} from "../redux/slices/playlistSlice";
import ReactPlayer from "react-player";

import "../styles/pages/editpage.css";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import TextOverFlowHandle from "../helpers/TextOverFlowHandle";

const EditPlaylistPage = () => {
	const params = useParams();
	const [playlistId, setPlaylistId] = useState("");
	const dispatch = useDispatch(0);
	const { selectedPlaylist, addVideo } = useSelector(selectPlaylist);
	console.log(selectedPlaylist);
	const [formData, setFormData] = useState({
		title: "",
		link: "",
		desc: "",
		playlistRef: "",
	});

	useEffect(() => {
		setPlaylistId(params.playlist);
		dispatch(getSelectedPlaylist(playlistId));
	}, [playlistId, selectedPlaylist?.videos?.length]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		formData.playlistRef = playlistId;
		console.log(formData);
		dispatch(postVideoToPlaylist(formData));
		toast.success("Video Added");
		setFormData({
			title: "",
			link: "",
			desc: "",
			playlistRef: "",
		});
	};

	return (
		<div className='edit-playlist-main'>
			<div className='playlist-details'>
				<h1 className='font-p'>
					Edit Playlist Page <hr />
				</h1>
				<h2 className='font-p'>Name : {selectedPlaylist?.name}</h2>
				<p>ID : {selectedPlaylist?._id}</p>
				<p>{selectedPlaylist?.desc}</p>
				<span>Total Enrolled : {selectedPlaylist?.totalEnrolled}</span>
			</div>
			<div className='add-video-main'>
				<h1>Add video</h1>
				<form className='form-container-edit' onSubmit={handleSubmit}>
					<div>
						<label htmlFor='title'>Video Title:</label>
						<input
							className='font-p'
							type='text'
							id='title'
							name='title'
							value={formData.title}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor='link'>Video Link:</label>
						<input
							className='font-p'
							type='text'
							id='link'
							name='link'
							value={formData.link}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor='desc'>Description:</label>
						<textarea
							className='font-p'
							id='desc'
							name='desc'
							value={formData.desc}
							onChange={handleChange}
						></textarea>
					</div>
					<button className='font-p' type='submit'>
						Add Video
					</button>
				</form>
			</div>

			{selectedPlaylist?.videos?.map((video) => {
				return (
					<div className='edit-page-card'>
						<div className='video-card-main'>
							<div className='video-box'>
								<ReactPlayer width={"100%"} height={"100%"} url={video?.link} />
							</div>
							<div className='editpage-card-details'>
								<p className=''>
									<TextOverFlowHandle text={video?.title} size={18} />{" "}
								</p>
								<span
									onClick={() => dispatch(deleteVideoFromPlaylist(video?._id))}
								>
									{" "}
									<MdDelete />
									Delete
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default EditPlaylistPage;
