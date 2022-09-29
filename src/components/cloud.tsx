import { FC, useMemo, useRef } from "react";
import { Group, Spherical, Vector3 } from "three";
import Word from "./word";

const wordsContent: string[] = [
	"three.js",
	"react",
	"next",
	"sass",
	"css",
	"html",
	"javaScript",
	"python",
	"vue",
	"tailwindcss",
	"typescript",
	"go",
	"php",
	"pug",
	"svelte",
	"Node.js",
	"rest",
	"gulp",
	"express.js",
	"vscode",
	"figma",
	"XD",
	"photoshop",
	"aftereffect",
	"Illustrator",
	"docker",
];

type CloudProps = {
	count?: number;
	radius?: number;
};

type WordsType = [pos: Vector3, word: string];

const Cloud: FC<CloudProps> = ({ count = 4, radius = 20 }) => {
	const groupRef = useRef<Group>(null!);

	const words = useMemo(() => {
		let c = 0;
		const temp: WordsType[] = [];
		// https://threejs.org/docs/#api/en/math/Spherical
		const spherical = new Spherical();
		// phi = 直径(長さ?)
		const phiSpan = Math.PI / (count + 1);
		// theta = 角度
		const thetaSpan = (Math.PI * 2) / count;
		for (let i = 1; i < count + 1; i++) {
			for (let j = 0; j < count; j++) {
				temp.push([new Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), wordsContent[c]]);

				c += 1;
			}
		}
		return temp;
	}, [wordsContent, radius]);

	// useFrame(() => (groupRef.current.rotation.x = groupRef.current.rotation.y += 0.01));

	return (
		<group ref={groupRef}>
			{words.map(([pos, word], index) => (
				<Word key={index} position={pos} children={word} />
			))}
		</group>
	);
};

export default Cloud;
