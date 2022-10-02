import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import SceneWrap from "../components/sceneWrap";
import { Shoe } from "../components/Shoe";

const ShoeScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<Stage>
					<Shoe shoeColors={{ laces: "red", mess: "skyblue", caps: "#333" }} />
				</Stage>
				<OrbitControls />
			</Canvas>
		</SceneWrap>
	);
};

export default ShoeScene;
