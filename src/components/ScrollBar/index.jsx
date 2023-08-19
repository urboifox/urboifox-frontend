import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const ScrollBar = () => {
  const scrollbar = useRef(null);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  function handleScroll() {
    var body = document.body,
      html = document.documentElement;

    var height = Math.max(
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
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
