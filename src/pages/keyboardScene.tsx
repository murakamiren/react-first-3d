import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useState } from "react";
import { Keyboard } from "../components/Keyboard";
import SceneWrap from "../components/sceneWrap";

const KeyboardScene: FC = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<SceneWrap height="90vh">
				<Canvas>
					<ambientLight intensity={0.6} />
					<directionalLight intensity={0.5} />
					<Suspense fallback={null}>
						<Keyboard toggle={toggle} />
					</Suspense>
					<OrbitControls />
				</Canvas>
			</SceneWrap>
			<div>
				<button onClick={() => setToggle((pre) => !pre)}>click to animate</button>
			</div>
		</>
	);
};

export default KeyboardScene;
