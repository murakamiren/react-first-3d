import { Text, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import Cloud from "../components/cloud";
import SceneWrap from "../components/sceneWrap";

const WordCloudScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
				<fog attach="fog" args={["#202025", 0, 80]} />
				<Cloud count={6} radius={20} />
				<TrackballControls />
			</Canvas>
		</SceneWrap>
	);
};

export default WordCloudScene;
