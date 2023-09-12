// import { Blob } from "./components/";

import { Cursor, Loading, Particlesjs } from "./components";
import { RouterProvider } from "react-router";
import myRouter from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { lenis } from "./lenis";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { setLoading } from "./redux/slices/loadingSlice";
import { initiateData } from "./redux/slices/websiteDataSlice";
import axios from "axios";
function App() {
	const root = document.documentElement;
	const loading = useSelector((state) => state.load.loading);
	const darkTheme = useSelector((state) => state.theme.darkTheme);
	const dispatch = useDispatch();
	if (darkTheme !== null) {
		document.body.style.backgroundColor = darkTheme ? "#0a0a0a" : "#ddd";
		document.body.style.transition = darkTheme ? "300ms" : "300ms";
		if (darkTheme) {
			root.style.setProperty("--bg-color", "#0a0a0a");
			root.style.setProperty("--main-color", "#ffffff");
			root.style.setProperty("--sec-color", "#fff");
			root.style.setProperty("--light-color", "#333");
			root.style.setProperty("--main-color-dimmed", "#ffffff80");
		} else {
			root.style.setProperty("--bg-color", "#ddd");
			root.style.setProperty("--main-color", "#0a0a0a");
			root.style.setProperty("--sec-color", "#0a0a0a");
			root.style.setProperty("--light-color", "#999");
			root.style.setProperty("--main-color-dimmed", "#0a0a0a80");
		}
	}
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	useEffect(() => {
		dispatch(setLoading(false));
	}, [dispatch]);
	// get api data
	useEffect(() => {
		const handleSetData = (data) => {
			dispatch(initiateData(data));
		};
		try {
			const res = axios.get("https://api.npoint.io/8170167729955bc6815a");
			res.then((res) => handleSetData(res.data));
		} catch (error) {
			console.log(`error fetching data: ${error}`);
		}
	}, [dispatch]);

	return (
		<>
			<AnimatePresence initial={false} mode="wait">
				{loading && <Loading />}
			</AnimatePresence>
			<Particlesjs />
			<SkeletonTheme baseColor="#141414" highlightColor="#444">
				<Cursor />
				<RouterProvider router={myRouter} />
			</SkeletonTheme>
		</>
	);
}

export default App;
