import { Text } from "@react-three/drei";
import { FC, useRef } from "react";
import { Vector3 } from "three";

type WordProps = {
	position: Vector3;
	children: string;
};

const Word: FC<WordProps> = ({ children, position }) => {
	const textRef = useRef<Text>(null!);
	return (
		<Text
			ref={textRef}
			font="/font/Roboto-Bold.ttf"
			fontSize={1}
			color="#333"
			children={children}
			position={position}
		/>
	);
};

export default Word;
