import { useEffect, useRef } from "react";

const ScrollBar = () => {
  const scrollbar = useRef(null);
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
      className="fixed w-1 h-0 bg-light top-0 right-0 z-[999999]"
    ></div>
  );
};

export default ScrollBar;
