import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, selectUser } from "./redux/slices/userSlice";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import PlaylistPage from "./pages/PlaylistPage";

const App = () => {
	const dispatch = useDispatch();
	const { user, isAuthenticated } = useSelector(selectUser);

	const getProfileInformation = async () => {
		dispatch(getProfile());
	};

	useEffect(() => {
		if (isAuthenticated === true) {
			toast.success(`Loged in as ${user.name}`);
		}
		getProfileInformation();
	}, [isAuthenticated]);
	return (
		<Router>
			<Header />
			<Toaster />
			<Routes>
			<Route element={<ProtectedRoute />}>
					<Route path='/profile' element={<ProfilePage />} />
				</Route>
				<Route path='/' element={<Home />} />
				<Route path='/playlists' element={<PlaylistPage />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
};

export default App;
