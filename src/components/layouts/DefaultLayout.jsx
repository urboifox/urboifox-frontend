import { Circ, gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";
import { ScrollBar, Navbar, NavMenu, LoadBehaviour, AnimatedOutled } from "../";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { routesAnimation } from "../../animations";
import { AboutDownBoxes } from "../";
gsap.registerPlugin(ScrollTrigger);

const DefaultLayout = () => {
  const animation = routesAnimation;
  const location = useLocation();
  const dispatch = useDispatch();
  const localDarkTheme = localStorage.getItem("darkTheme");

  useEffect(() => {
    function initiateTheme() {
      if (localDarkTheme) {
        dispatch(setTheme(JSON.parse(localDarkTheme)));
      } else {
        dispatch(setTheme(true));
      }
    }
    initiateTheme();
  }, [dispatch, localDarkTheme]);

  useEffect(() => {
    const animateUpElement = document.querySelector(".animateUp");
    const ctx = gsap.context(() => {
      const wrapperTl = gsap.timeline();
      if (animateUpElement) {
        wrapperTl
          .to(".wrapper", {
            overflow: "hidden",
            duration: 0,
          })
          .from(".animateUp", 1, {
            y: "100%",
            delay: 0.5,
            ease: Circ.Out,
            scrollTrigger: {
              trigger: ".animateUp",
              start: "top 80%",
            },
          })
          .to(".wrapper", {
            overflow: "unset",
            delay: 1.5,
            duration: 0,
          });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <LoadBehaviour />
      <ScrollBar />
      <Navbar />
      <NavMenu />
      <AboutDownBoxes />
      <AnimatePresence mode="popLayout">
        <motion.div
          key={location.pathname}
          variants={animation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AnimatedOutled />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default DefaultLayout;
