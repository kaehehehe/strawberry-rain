import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Scene } from "./components/Scene";
import "./styles.css";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 250], fov: 75, near: 1, far: 20000 }}>
      <ambientLight intensity={0.5} />
      <Environment preset="lobby" />
      <Scene />
    </Canvas>
  );
}
