import React, { useState } from "react";
import "../styles/components/createplaylist.css";

const CreatePlaylis = () => {
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
		try {
			const res = await axios.post("/api/playlists", formData); // Endpoint to handle form submission
			console.log(res.data); // Log response if needed
			// Optionally, you can redirect the user to another page or update state to show success message
		} catch (error) {
			console.error("Error creating playlist:", error);
			// Handle error appropriately, show error message to user, etc.
		}
	};
	return (
		<form className='form-container' onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Name:</label>
				<input
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
					id='desc'
					name='desc'
					value={formData.desc}
					onChange={handleChange}
				></textarea>
			</div>
			<div className='check-div'>
				<input
					type='checkbox'
					id='isPublic'
					name='isPublic'
					checked={formData.isPublic}
					onChange={(e) =>
						setFormData({ ...formData, isPublic: e.target.checked })
					}
                    />
                    <span>Set Public</span>
			</div>
			<button type='submit'>Create Playlist</button>
		</form>
	);
};

export default CreatePlaylis;
