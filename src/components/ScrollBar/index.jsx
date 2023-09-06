import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const ScrollBar = () => {
  const scrollbar = useRef(null);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const location = useLocation();
  function handleScroll() {
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    scrollbar.current.style.height = `${
      (Math.ceil(window.scrollY) / (height - 707)) * 100
    }%`;
  }
  useEffect(() => {
    scrollbar.current.style.height = `0`;
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div
      ref={scrollbar}
      id="scrollbar"
      className={`${
        darkTheme ? "bg-light" : "bg-darkDimmed"
      } fixed w-1 h-0 top-0 right-0 z-[9999999999] max-md:hidden transition-colors duration-300`}
    ></div>
  );
};

export default ScrollBar;
