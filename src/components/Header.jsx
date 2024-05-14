import "../styles/components/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../redux/slices/userSlice";
import { IoMdLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
	const { isAuthenticated, user } = useSelector(selectUser);
	const dispatch = useDispatch();

	return (
		<header className='header-main '>
			<nav className='container nav'>
				<div className='logo-box'>
					<Link to='/'>
						<img src='./media/playlister-logo.png' alt='' />
						<span>Playlister</span>
					</Link>
				</div>

				{isAuthenticated ? (
					<div className='logout-box'>
						<div>
							<button className="font-p" onClick={() => dispatch(logout())}>
								Logout <IoMdLogOut />
							</button>
						</div>
						<div>
							<Link to='/profile'>
								<img src={user.profilePic} alt='' />
							</Link>
						</div>
					</div>
				) : (
					<div className='login-btn'>
						<Link className="font-p" to='/login'>
							Login <IoMdLogIn />
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
