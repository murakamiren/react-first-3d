import { Canvas } from "@react-three/fiber";
import Box from "../components/box";
import Rig from "../components/rig";
import "../styles/styles.css";

const BoxScene = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas shadows camera={{ position: [0, 1.5, 8], fov: 80 }}>
				<ambientLight intensity={0.2} />
				<Rig />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 2]} castShadow />
			</Canvas>
		</div>
	);
};

export default BoxScene;
