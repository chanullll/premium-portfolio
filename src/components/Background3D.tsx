"use client";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

// Api apige 3D golaya (Sphere) hadana function eka
function AnimatedSphere() {
  return (
    // Float eken nikan wathure paawenawa wage effect ekak denawa
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      {/* scale eken golaaye loku kuda bawa wenas karanawa */}
      <Sphere visible args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          color="#c084fc" // Tailwind purple-400 color eka
          attach="material"
          distort={0.5} // Hadata wenas wena pramanaya (0 to 1)
          speed={2} // Wenas wena wegaya
          roughness={0.2}
          metalness={0.8}
          wireframe={true} // Meken thama ara iru kalli (tech-vibe) eka enne
        />
      </Sphere>
    </Float>
  );
}

export default function Background3D() {
  return (
    // absolute and -z-10 damma Hero section eke text ekata pitipassen thiyanna
    <div className="absolute inset-0 w-full h-full -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}