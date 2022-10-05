import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { Jordan } from "../components/jordan";
import SceneWrap from "../components/sceneWrap";

const JordanScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<Stage>
					<Jordan />
				</Stage>
				<OrbitControls />
			</Canvas>
		</SceneWrap>
	);
};

export default JordanScene;
