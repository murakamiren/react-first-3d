import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useState } from "react";
import { Keyboard } from "../components/Keyboard";
import SceneWrap from "../components/sceneWrap";

const KeyboardScene: FC = () => {
	const [toggle, setToggle] = useState(false);
	const [isPause, setIsPause] = useState(false);
	return (
		<>
			<SceneWrap height="90vh">
				<Canvas>
					<ambientLight intensity={0.6} />
					<directionalLight intensity={0.5} />
					<Suspense fallback={null}>
						<Keyboard toggle={toggle} isPause={isPause} />
					</Suspense>
					<OrbitControls />
				</Canvas>
			</SceneWrap>
			<div style={{ display: "flex", gap: "8px" }}>
				<button onClick={() => setToggle((pre) => !pre)}>click to {toggle ? "reset" : "animate"}</button>
				<button onClick={() => setIsPause((pre) => !pre)}>{isPause ? "play" : "pause"}</button>
			</div>
		</>
	);
};

export default KeyboardScene;
