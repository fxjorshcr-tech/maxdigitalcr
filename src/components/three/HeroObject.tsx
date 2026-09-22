"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Group, Mesh } from "three";

const GREEN = "#3ECF8E";
const CYAN = "#22d3ee";

/** Morphing glossy blob + two orbiting wireframe rings. Reacts to the cursor. */
function Scene() {
  const group = useRef<Group>(null);
  const ringA = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const { x, y } = state.pointer; // -1..1
    if (group.current) {
      group.current.rotation.y += (x * 0.5 - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-y * 0.35 - group.current.rotation.x) * 0.05;
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.25;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.18;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.35, 64]} />
          <MeshDistortMaterial color={GREEN} roughness={0.15} metalness={0.35} distort={0.42} speed={1.8} />
        </mesh>
        <mesh ref={ringA} rotation={[Math.PI / 2.2, 0.3, 0]}>
          <torusGeometry args={[2.15, 0.012, 16, 160]} />
          <meshBasicMaterial color={CYAN} transparent opacity={0.9} />
        </mesh>
        <mesh ref={ringB} rotation={[Math.PI / 1.7, -0.5, 0.4]}>
          <torusGeometry args={[2.6, 0.008, 16, 160]} />
          <meshBasicMaterial color={GREEN} transparent opacity={0.55} />
        </mesh>
      </Float>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-5, -3, 4]} intensity={18} color={CYAN} />
      <pointLight position={[3, -4, -3]} intensity={10} color={GREEN} />
    </group>
  );
}

export default function HeroObject() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
