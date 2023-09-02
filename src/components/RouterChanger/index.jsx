/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function RouterChanger({ nextPath }) {
  const navigate = useNavigate();
  useEffect(() => {
    const nextPage = () => {
      navigate(nextPath);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const body = document.body;
      const html = document.documentElement;

      const height =
        Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        ) - 710;

      if (scrollY >= height) {
        nextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate, nextPath]);

  return <div className="h-[50vh]"></div>;
}
