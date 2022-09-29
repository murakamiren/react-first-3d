import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Group, Vector3 } from "three";

type WordProps = {
	position: Vector3;
	children: string;
};

const Word: FC<WordProps> = ({ children, position }) => {
	const textRef = useRef<any>(null!);

	useFrame(({ camera }) => {
		// textを常に正面にする
		textRef.current.quaternion.copy(camera.quaternion);
	});

	return (
		<Text
			ref={textRef}
			font="/font/Roboto-Bold.ttf"
			fontSize={2}
			color="#333"
			children={children}
			position={position}
		/>
	);
};

export default Word;
