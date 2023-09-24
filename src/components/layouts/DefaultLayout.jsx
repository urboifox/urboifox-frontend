import { Circ, gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { AnimatedOutled } from "../";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { routesAnimation } from "../../animations";
import { aboutPages, primaryColor } from "../../constants";
import { setSelected } from "../../redux/slices/aboutSlice";
import { initiateData } from "../../redux/slices/websiteDataSlice";
import { setLoading } from "../../redux/slices/loadingSlice";
import MainElements from "../MainElements";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const DefaultLayout = () => {
  const root = document.documentElement;
  root.style.setProperty("--primary-color", primaryColor);
  const animation = routesAnimation;
  const location = useLocation();
  const dispatch = useDispatch();

  // get api data
  useEffect(() => {
    const handleSetData = (data) => {
      dispatch(initiateData(data));
    };
    try {
      const res = axios.get("https://api.npoint.io/8170167729955bc6815a");
      res.then((res) => {
        handleSetData(res.data);
        dispatch(setLoading(false));
      });
    } catch (error) {
      console.log(`error fetching data: ${error}`);
    }
  }, [dispatch]);

  // if current location = one of the about page, set the selected about page the the current location
  useEffect(() => {
    const currentLocation = location.pathname.slice(
      location.pathname.lastIndexOf("/") + 1
    );
    if (aboutPages.join("").toLowerCase().includes(currentLocation)) {
      for (let i = 0; i < aboutPages.length; i++) {
        if (aboutPages[i].toLowerCase() === currentLocation) {
          dispatch(setSelected(i));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapperTl = gsap.timeline();
      if (document.querySelector(".animateUp")) {
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
      <MainElements />
      <AnimatePresence mode="wait">
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
