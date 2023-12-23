/* eslint-disable react/no-unknown-property */
import { useState, useRef } from "react";

import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Stars(props) {
  const ref = useRef(THREE.Points);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 2.5 })
  );
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#f9fafb"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
