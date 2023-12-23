import { AnimatePresence } from "framer-motion";
import {
  Loading,
  Cursor,
  LoadBehaviour,
  ScrollBar,
  Navbar,
  NavMenu,
  AboutDownBoxes,
  Stars,
} from "./components";

import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";

export default function MainElements() {
  const loading = useSelector((state) => state.load.loading);
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {loading && <Loading />}
      </AnimatePresence>
      <Canvas style={{ position: "fixed" }} camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      <Cursor />
      <LoadBehaviour />
      <ScrollBar />
      <Navbar />
      <NavMenu />
      <AboutDownBoxes />
    </>
  );
}
