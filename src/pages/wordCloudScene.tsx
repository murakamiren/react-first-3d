import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import SceneWrap from "../components/sceneWrap";

const WordCloudScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<Text position={[0, 0, 0]} font="/font/Roboto-Bold.ttf" fontSize={1} color="#333">
					HELLO WORLD
				</Text>
			</Canvas>
		</SceneWrap>
	);
};

export default WordCloudScene;
