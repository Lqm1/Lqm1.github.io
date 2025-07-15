"use client";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function Particles() {
	const ref = useRef<THREE.Points | null>(null);

	const particles = useMemo(() => {
		const temp = [];
		for (let i = 0; i < 5000; i++) {
			const x = (Math.random() - 0.5) * 10;
			const y = (Math.random() - 0.5) * 10;
			const z = (Math.random() - 0.5) * 10;
			temp.push(x, y, z);
		}
		return new Float32Array(temp);
	}, []);

	useFrame((state) => {
		if (ref.current) {
			ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
			ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
				<PointMaterial
					transparent
					color="#a78bfa"
					size={0.02}
					sizeAttenuation={true}
					depthWrite={false}
					opacity={0.6}
				/>
			</Points>
		</group>
	);
}

export default function ParticleBackground() {
	return (
		<div className="absolute inset-0 -z-10">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Particles />
			</Canvas>
		</div>
	);
}
