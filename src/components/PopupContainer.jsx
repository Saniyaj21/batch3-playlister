import "../styles/components/popupContainer.css";

const PopupContainer = ({ children }) => {
	return (
		<div className='popup-container'>
			{children}
		</div>
	);
};

export default PopupContainer;
