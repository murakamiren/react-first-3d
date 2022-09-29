import { Text, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import Cloud from "../components/cloud";
import SceneWrap from "../components/sceneWrap";

const WordCloudScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
				<fog attach="fog" color="#fff" near={0} far={80} />
				<Cloud count={4} radius={16} />
				<TrackballControls />
			</Canvas>
		</SceneWrap>
	);
};

export default WordCloudScene;
