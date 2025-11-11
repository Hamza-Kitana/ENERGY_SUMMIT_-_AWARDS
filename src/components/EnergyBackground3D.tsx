import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  return (
    <Float
      speed={speed}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.5, 0.5]}
    >
      <Sphere args={[1, 64, 64]} position={position} scale={0.8}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#10b981"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#10b981" />
      
      <Particles />
      
      <AnimatedSphere position={[-3, 2, -5]} color="#10b981" speed={1.5} />
      <AnimatedSphere position={[3, -2, -8]} color="#0ea5e9" speed={1.8} />
      <AnimatedSphere position={[0, 0, -10]} color="#f59e0b" speed={1.2} />
      <AnimatedSphere position={[-5, -3, -6]} color="#10b981" speed={2} />
      <AnimatedSphere position={[5, 3, -7]} color="#0ea5e9" speed={1.6} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const EnergyBackground3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default EnergyBackground3D;
