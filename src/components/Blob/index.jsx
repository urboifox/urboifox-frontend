import { useEffect, useRef } from "react";
import blobanimation from "../../assets/blobanimation.svg";

const Cursor = () => {
  const blob = useRef(null);
  const moveBlob = (x, y) => {
    blob.current.animate(
      {
        left: `${x}px`,
        top: `${y}px`,
      },
      {
        duration: 5000,
        fill: "forwards",
      }
    );
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      moveBlob(x, y);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="overflow-hidden -z-40 fixed w-full top-0 left-0 h-full">
        <div className="absolute backdrop-blur-3xl w-full h-full top-0 left-0 -z-40"></div>
        <div
          ref={blob}
          className="left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2  absolute  aspect-square -z-50 rounded-full"
        >
          <img src={blobanimation} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Cursor;
