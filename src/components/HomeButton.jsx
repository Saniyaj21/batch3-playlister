import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../styles/components/HomeButton.css"


const HomeButton = ({text, link, clsName}) => {
	return (
		<Link className={`home-cta ${clsName}`} to={link}>
			{text} <FaLongArrowAltRight />
		</Link>
	);
};

export default HomeButton;
