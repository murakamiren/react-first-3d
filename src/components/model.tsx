import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Group } from "three";

const Model: FC = () => {
	const modelRef = useRef<Group>(null!);
	const { scene } = useGLTF("/model/monkey.glb");

	useFrame(() => (modelRef.current.rotation.y += 0.01));

	return (
		<group dispose={null} ref={modelRef}>
			<primitive scale={[1, 1, 1]} object={scene} />
		</group>
	);
};

export default Model;
