import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ChangeEvent, FC, Suspense, useId, useState } from "react";
import SceneWrap from "../components/sceneWrap";
import { Shoe } from "../components/shoe";
import { ShoeColor } from "../types/shoe";

const ShoeScene: FC = () => {
	const id = useId();
	const [color, setColor] = useState<ShoeColor>({
		laces: "#323232",
		mess: "#edda07",
		caps: "#323232",
		inner: "#323232",
		sole: "#323232",
		stripes: "#ffffff",
		band: "#ffffff",
		patch: "#ffffff",
	});
	const [currentSelectedPart, setCurrentSelectedPart] = useState<keyof ShoeColor>("laces");
	const [isAutoRotate, setIsAutoRotate] = useState(false);

	const autoRotateText = () => {
		if (!isAutoRotate) return "enable";
		return "disable";
	};

	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const key = e.target.value as keyof ShoeColor;

		setCurrentSelectedPart(() => key);
	};

	return (
		<>
			<SceneWrap height="85vh">
				<Canvas camera={{ fov: 50 }}>
					<Suspense fallback={null}>
						<Stage>
							<Shoe
								shoeColors={{
									laces: color.laces,
									mess: color.mess,
									caps: color.caps,
									inner: color.inner,
									sole: color.sole,
									stripes: color.stripes,
									band: color.band,
									patch: color.patch,
								}}
							/>
						</Stage>
						<OrbitControls autoRotate={isAutoRotate} />
					</Suspense>
				</Canvas>
			</SceneWrap>
			<div>
				<label htmlFor={id + "-color-input"}>color change (current: {currentSelectedPart})</label>
				<input
					type="color"
					name="color"
					id={id + "-color-input"}
					onChange={(e) => setColor({ ...color, [currentSelectedPart]: e.currentTarget.value })}
					value={color[currentSelectedPart]}
				/>
				<div>
					<label htmlFor={id + "-color-select"}>shoe part</label>
					<select
						name="color-select"
						id={id + "-color-select"}
						onChange={(e) => handleSelect(e)}
						value={currentSelectedPart}
					>
						{Object.keys(color).map((part, i) => (
							<option key={i} value={part}>
								{part}
							</option>
						))}
					</select>
				</div>
				<div>
					auto rotate: <button onClick={() => setIsAutoRotate((pre) => !pre)}>{autoRotateText()}</button>
				</div>
			</div>
		</>
	);
};

export default ShoeScene;
