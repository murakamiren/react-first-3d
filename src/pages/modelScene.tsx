import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import Model from "../components/model";
import SceneWrap from "../components/sceneWrap";

const ModelScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<Suspense>
					<PerspectiveCamera makeDefault />
					<OrbitControls enablePan enableRotate enableZoom />
					<Stage>
						<Model />
					</Stage>
				</Suspense>
			</Canvas>
		</SceneWrap>
	);
};

export default ModelScene;
