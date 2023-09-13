import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={50}
      color="255,255,255"
      outerAlpha={1}
      innerScale={1}
      outerScale={3.5}
      trailingSpeed={10}
      clickables={["a", "button", ".link"]}
      outerStyle={{ mixBlendMode: "exclusion" }}
      innerStyle={{ mixBlendMode: "exclusion" }}
    />
  );
};

export default Cursor;
