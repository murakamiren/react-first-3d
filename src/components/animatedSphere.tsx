import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { FC } from "react";

const AnimatedSphere: FC = () => {
	return (
		<Sphere visible position={[0, 0, -2]}>
			<MeshDistortMaterial color="#c107ff" attach="material" distort={0.6} speed={1.5} />
		</Sphere>
	);
};

export default AnimatedSphere;
