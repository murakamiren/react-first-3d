import { Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import SceneWrap from "../components/sceneWrap";
import { Shoe } from "../components/Shoe";

const ShoeScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<Stage>
					<Shoe />
				</Stage>
			</Canvas>
		</SceneWrap>
	);
};

export default ShoeScene;
