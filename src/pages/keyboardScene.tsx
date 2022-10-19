import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { Keyboard } from "../components/Keyboard";
import SceneWrap from "../components/sceneWrap";

const KeyboardScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<Suspense fallback={null}>
					<Stage>
						<Keyboard />
					</Stage>
				</Suspense>
				<OrbitControls />
			</Canvas>
		</SceneWrap>
	);
};

export default KeyboardScene;
