import { useRef, useState } from 'react';
import type { ThreeEvent } from '@react-three/fiber';
import type { Mesh } from 'three';
import { bookingConfig, occupiedSeatSet } from '../config/booking';

const COLOR_CYAN = '#00f0ff';
const COLOR_OCCUPIED = '#5c1a1a';
const COLOR_SELECTED = '#39ff14';

type SeatMeshProps = {
  seatId: number;
  position: [number, number, number];
  selected: boolean;
  onToggle: (seatId: number) => void;
};

export function SeatMesh({ seatId, position, selected, onToggle }: SeatMeshProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const occupied = occupiedSeatSet.has(seatId);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    if (occupied) {
      return;
    }
    onToggle(seatId);
  };

  const color = occupied ? COLOR_OCCUPIED : selected ? COLOR_SELECTED : COLOR_CYAN;
  const emissive = occupied ? '#2a0808' : selected ? '#1a6608' : hovered ? '#006666' : '#003844';
  const opacity = occupied ? 0.45 : 0.72;

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={(event) => {
          event.stopPropagation();
          if (!occupied) {
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
      >
        <boxGeometry args={[0.85, 0.55, 0.85]} />
        <meshPhysicalMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={occupied ? 0.35 : selected ? 0.85 : 0.55}
          transparent
          opacity={opacity}
          roughness={0.15}
          metalness={0.1}
          transmission={occupied ? 0 : 0.35}
          thickness={0.4}
        />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[0.5, 0.08, 0.5]} />
        <meshStandardMaterial color="#1c2430" emissive={color} emissiveIntensity={0.25} />
      </mesh>
      {/* outline ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[0.55, 0.62, 32]} />
        <meshBasicMaterial color={color} transparent opacity={occupied ? 0.35 : 0.85} />
      </mesh>
    </group>
  );
}

export function RoomShell() {
  return (
  <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]} receiveShadow>
        <planeGeometry args={[14, 10]} />
        <meshPhysicalMaterial color="#0d1117" transparent opacity={0.55} transmission={0.2} roughness={0.4} />
      </mesh>
      {/* glass walls */}
      {[
        { pos: [0, 1.2, -5] as [number, number, number], size: [14, 2.8, 0.08] as [number, number, number] },
        { pos: [0, 1.2, 5] as [number, number, number], size: [14, 2.8, 0.08] as [number, number, number] },
        { pos: [-7, 1.2, 0] as [number, number, number], size: [0.08, 2.8, 10] as [number, number, number] },
        { pos: [7, 1.2, 0] as [number, number, number], size: [0.08, 2.8, 10] as [number, number, number] },
      ].map((wall, index) => (
        <mesh key={index} position={wall.pos}>
          <boxGeometry args={wall.size} />
          <meshPhysicalMaterial
            color="#00f0ff"
            transparent
            opacity={0.12}
            transmission={0.85}
            roughness={0.05}
            thickness={0.5}
          />
        </mesh>
      ))}
    </>
  );
}

export function seatMeshesFromConfig(
  selectedSet: Set<number>,
  onToggle: (seatId: number) => void,
) {
  return bookingConfig.seats.map((seat) => (
    <SeatMesh
      key={seat.id}
      seatId={seat.id}
      position={seat.position}
      selected={selectedSet.has(seat.id)}
      onToggle={onToggle}
    />
  ));
}
