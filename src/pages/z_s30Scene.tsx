import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import SceneWrap from "../components/sceneWrap";
import { Z_s30 } from "../components/z_s30";

const Z_s30Scene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<Stage>
					<Z_s30 />
				</Stage>
				<OrbitControls />
			</Canvas>
		</SceneWrap>
	);
};

export default Z_s30Scene;
