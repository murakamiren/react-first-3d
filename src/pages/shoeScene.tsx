import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, useId, useState } from "react";
import SceneWrap from "../components/sceneWrap";
import { Shoe } from "../components/Shoe";

const ShoeScene: FC = () => {
	const id = useId();
	const [color, setColor] = useState("");

	return (
		<SceneWrap height="85vh">
			<Canvas>
				<Stage>
					<Shoe shoeColors={{ laces: "#333", mess: color, caps: "#333" }} />
				</Stage>
				<OrbitControls />
			</Canvas>
			<div>
				<label htmlFor={id + "color-input"}>color change test</label>
				<input type="color" name="color" id={id + "color-input"} onChange={(e) => setColor(e.currentTarget.value)} />
			</div>
		</SceneWrap>
	);
};

export default ShoeScene;
