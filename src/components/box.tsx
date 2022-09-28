import { ThreeElements } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { Mesh } from "three";

type BoxProps = ThreeElements["mesh"];

const Box: FC<BoxProps> = (props) => {
	const meshRef = useRef<Mesh>(null!);
	const [hover, setHover] = useState(false);
	const [active, setActive] = useState(false);

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hover ? "hotpink" : "orange"} />
		</mesh>
	);
};

export default Box;
