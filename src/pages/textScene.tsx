import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import Rig from "../components/rig";
import SceneWrap from "../components/sceneWrap";

const TextScene: FC = () => {
	return (
		<SceneWrap>
			<Canvas>
				<Suspense>
					<fog attach="fog" color="#fff" near={8} far={20} />
					<Rig />
					<Text position={[0, 0, 0]} font="/font/Roboto-Bold.ttf" fontSize={1} color="#333">
						HELLO WORLD
					</Text>
					<Text position={[0, -0.5, -4]} font="/font/Roboto-Bold.ttf" fontSize={1} color="#333">
						more deep
					</Text>
				</Suspense>
			</Canvas>
		</SceneWrap>
	);
};

export default TextScene;
