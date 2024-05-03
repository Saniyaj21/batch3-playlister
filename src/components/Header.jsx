import "../styles/components/Header.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Header = () => {
	return (
		<header className='header-main '>
			<nav className='container nav'>
				<div className='logo-box'>
          <Link to='/'>
          <img src="./media/playlister-logo.png" alt="" />
          <span>Playlister</span>
          </Link>
        </div>
				<div className='login-btn'>
					<Link to='/login'>Login <FaLongArrowAltRight /></Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
