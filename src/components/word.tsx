import { animated, useSpring } from "@react-spring/three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { Color, Vector3 } from "three";

type WordProps = {
	position: Vector3;
	children: string;
};

const Word: FC<WordProps> = ({ children, position }) => {
	const color = new Color();
	const textRef = useRef<any>(null!);
	const [hover, setHover] = useState(false);

	useFrame(({ camera }) => {
		// textを常に正面にする
		textRef.current.quaternion.copy(camera.quaternion);
		//text color
		textRef.current.material.color.lerp(color.set(hover ? "#fa9a13" : "#333"), 0.1);
	});

	const { scale } = useSpring({ scale: hover ? 1.1 : 1 });

	return (
		<animated.mesh scale={scale}>
			<Text
				ref={textRef}
				font="/font/Roboto-Bold.ttf"
				fontSize={2.2}
				children={children}
				position={position}
				onPointerOver={() => setHover(true)}
				onPointerOut={() => setHover(false)}
			/>
		</animated.mesh>
	);
};

export default Word;
