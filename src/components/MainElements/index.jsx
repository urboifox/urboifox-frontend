import { AnimatePresence } from "framer-motion";
import Loading from "../Loading";
import Particlesjs from "../Particlesjs";
import Cursor from "../Cursor";
import LoadBehaviour from "../LoadBehaviour";
import ScrollBar from "../ScrollBar";
import Navbar from "../Navbar";
import NavMenu from "../NavMenu";
import AboutDownBoxes from "../AboutDownBoxes";
import { useSelector } from "react-redux";

export default function MainElements() {
  const loading = useSelector((state) => state.load.loading);
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {loading && <Loading />}
      </AnimatePresence>
      {/* <Particlesjs /> */}
      <Cursor />
      <LoadBehaviour />
      <ScrollBar />
      <Navbar />
      <NavMenu />
      <AboutDownBoxes />
    </>
  );
}
