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
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
  return (
    <div
      ref={scrollbar}
      className={`${
        darkTheme ? "bg-light" : "bg-darkDimmed"
      } fixed w-1 h-0 top-0 right-0 z-[999999] max-md:hidden transition-colors duration-300`}
    ></div>
  );
};

export default ScrollBar;
