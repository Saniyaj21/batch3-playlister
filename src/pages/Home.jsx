import HomeButton from "../components/HomeButton";
import "../styles/pages/Home.css";

const Home = () => {
	return (
		<div className='home-container'>
			<img src='./media/background.jpg' className='home-main' />
			<div className='home-layer'>
				<h1>Welcome to Playlister</h1>
				<span>Create once use lifetime</span>
				<p>
					A platform that let you create custom playlists from youtube video
					url.
				</p>

				<div className="cta-box">
          <HomeButton text={'Get Started'} link={'/login'} clsName={'bg-green'}/>
          <HomeButton text={'Public Playlists'} link={'/playlists'} clsName={'bg-white'}/>
        </div>
			</div>
		</div>
	);
};

export default Home;
