import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NodeNetwork() {
  const groupRef = useRef();
  const pointsRef = useRef();

  // Generate a cluster of nodes in 3D space
  const { positions, connections } = useMemo(() => {
    const count = 45;
    const pos = new Float32Array(count * 3);
    const nodePositions = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 6;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 3;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // Connect nearby nodes with lines
    const lines = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 1.8) {
          lines.push(nodePositions[i], nodePositions[j]);
        }
      }
    }

    return { positions: pos, connections: lines };
  }, []);

  const linePositions = useMemo(() => {
    const arr = new Float32Array(connections.length * 3);
    connections.forEach((v, i) => {
      arr[i * 3] = v.x;
      arr[i * 3 + 1] = v.y;
      arr[i * 3 + 2] = v.z;
    });
    return arr;
  }, [connections]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.06;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;

      // subtle mouse-follow parallax
      const { x, y } = state.pointer;
      groupRef.current.rotation.y += x * 0.15;
      groupRef.current.rotation.x += y * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3B5BFF" transparent opacity={0.25} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#3B5BFF" size={0.09} sizeAttenuation transparent opacity={0.9} />
      </points>
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <NodeNetwork />
      </Canvas>
    </div>
  );
}