import React, { useState } from "react";
import "../styles/components/createplaylist.css";
import PopupContainer from "./PopupContainer";
import { useDispatch } from "react-redux";
import { createPlaylist, getPublicPlaylist } from "../redux/slices/playlistSlice";
import { useNavigate } from "react-router-dom";

const CreatePlaylis = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		name: "",
		desc: "",
		isPublic: false,
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(createPlaylist(formData));
		setFormData({
			name: "",
			desc: "",
		});
		dispatch(getPublicPlaylist())
		navigate('/playlists')
	};
	return (
		<form className='form-container' onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Name:</label>
				<input
					className='font-p'
					type='text'
					id='name'
					name='name'
					value={formData.name}
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
			<button type='submit'>Create Playlist</button>
		</form>
	);
};

export default CreatePlaylis;
