/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";

export default function ModelWrapper({ children, id }) {
  return (
    <Canvas id={id}>
      <ambientLight color={0xffffff} intensity={3} />
      <directionalLight
        position={(10, 15, 10)}
        color={0xffffff}
        intensity={4}
      />
      {children}
    </Canvas>
  );
}
