import { useGLTF } from "@react-three/drei";
import { FC } from "react";

const Model: FC = () => {
	const { scene } = useGLTF("/model/monkey.glb");

	return (
		<group dispose={null}>
			<primitive scale={[1, 1, 1]} object={scene} />
		</group>
	);
};

export default Model;
