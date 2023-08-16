import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={20}
      color="255,255,255"
      outerAlpha={1}
      outerScale={3}
      trailingSpeed={3}
      clickables={["a", "button", ".link"]}
      outerStyle={{ mixBlendMode: "exclusion" }}
      innerStyle={{ mixBlendMode: "exclusion" }}
    />
  );
};

export default Cursor;
