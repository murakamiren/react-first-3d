import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import Model from "../components/model";
import SceneWrap from "../components/sceneWrap";

const ModelScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<PerspectiveCamera makeDefault />
				<OrbitControls enablePan enableRotate enableZoom />
				<Stage>
					<Model />
				</Stage>
			</Canvas>
		</SceneWrap>
	);
};

export default ModelScene;
