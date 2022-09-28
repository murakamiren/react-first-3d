import { animated, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { Mesh } from "three";

type BoxProps = {
	position: [x: number, y: number, z: number];
};

const Box: FC<BoxProps> = (props) => {
	const meshRef = useRef<Mesh>(null!);
	const [hover, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// boxの回転
	useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));
	useFrame((state, delta) => (meshRef.current.rotation.y += -0.01));

	// react-springを使ったアニメーション
	const { scale } = useSpring({ scale: active ? 1.5 : 1 });

	return (
		<animated.mesh
			{...props}
			ref={meshRef}
			scale={scale}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1.5, 1.5, 1.5]} />
			<meshStandardMaterial color={hover ? "hotpink" : "orange"} />
		</animated.mesh>
	);
};

export default Box;
