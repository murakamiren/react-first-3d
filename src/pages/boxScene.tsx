import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Box from "../components/box";
import Rig from "../components/rig";
import SceneWrap from "../components/sceneWrap";
import "../styles/styles.css";

const BoxScene = () => {
	return (
		<SceneWrap>
			<Canvas shadows>
				<Suspense>
					<PerspectiveCamera makeDefault />
					<ambientLight intensity={0.2} />
					<Rig />
					<pointLight position={[10, 10, 10]} />
					<Box position={[-1.2, 0, 0]} castShadow />
				</Suspense>
			</Canvas>
		</SceneWrap>
	);
};

export default BoxScene;
