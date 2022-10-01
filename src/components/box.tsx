import { animated, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { Mesh } from "three";
import Annotation from "./annotation";

type BoxProps = {
	position: [x: number, y: number, z: number];
	castShadow?: boolean;
};

const Box: FC<BoxProps> = (props) => {
	const meshRef = useRef<Mesh>(null!);
	const [hover, setHover] = useState(false);
	const [active, setActive] = useState(false);

	// boxの回転
	useFrame(() => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01));

	// react-springを使ったアニメーション
	const { scale } = useSpring({ scale: active ? 1.6 : 1 });

	return (
		<animated.mesh
			{...props}
			ref={meshRef}
			scale={scale}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hover ? "orange" : "#939393"} />
			<Annotation />
		</animated.mesh>
	);
};

export default Box;
