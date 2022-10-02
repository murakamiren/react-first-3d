import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useId, useState } from "react";
import SceneWrap from "../components/sceneWrap";
import { Shoe } from "../components/Shoe";

const ShoeScene: FC = () => {
	const id = useId();
	const [color, setColor] = useState("#e6bf00");

	return (
		<>
			<SceneWrap height="85vh">
				<Canvas>
					<Suspense fallback={null}>
						<Stage>
							<Shoe shoeColors={{ laces: "#333", mess: color, caps: "#333" }} />
						</Stage>
						<OrbitControls />
					</Suspense>
				</Canvas>
			</SceneWrap>
			<div>
				<label htmlFor={id + "color-input"}>color change (mess)</label>
				<input
					type="color"
					name="color"
					id={id + "color-input"}
					onChange={(e) => setColor(e.currentTarget.value)}
					value={color}
				/>
			</div>
		</>
	);
};

export default ShoeScene;
