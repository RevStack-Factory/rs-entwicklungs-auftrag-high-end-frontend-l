import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { RoomShell, seatMeshesFromConfig } from './SeatMesh';

type CoworkingSceneProps = {
  selectedSet: Set<number>;
  onToggleSeat: (seatId: number) => void;
};

export function CoworkingScene({ selectedSet, onToggleSeat }: CoworkingSceneProps) {
  return (
    <Canvas
      className="booking-canvas"
      camera={{ position: [6, 5, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
    >
      <color attach="background" args={['#0d1117']} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 4]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, 3, -2]} intensity={0.6} color="#00f0ff" />
      <pointLight position={[4, 2, 2]} intensity={0.35} color="#39ff14" />
      <RoomShell />
      {seatMeshesFromConfig(selectedSet, onToggleSeat)}
      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={14}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}
