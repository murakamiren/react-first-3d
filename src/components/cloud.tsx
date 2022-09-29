import { FC, useMemo } from "react";
import { Spherical, Vector3 } from "three";
import Word from "./word";

type CloudProps = {
	count?: number;
	radius?: number;
};

type WordsType = [pos: Vector3, word: string];

const Cloud: FC<CloudProps> = ({ count = 4, radius = 20 }) => {
	const words = useMemo(() => {
		const temp: WordsType[] = [];
		const spherical = new Spherical();
		const phiSpan = Math.PI / (count + 1);
		const thetaSpan = (Math.PI * 2) / count;
		for (let i = 1; i < count + 1; i++) {
			for (let j = 0; j < count; j++) {
				temp.push([new Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), "test"]);
			}
		}
		return temp;
	}, [count, radius]);

	return (
		<>
			{words.map(([pos, word], index) => (
				<Word key={index} position={pos} children={word} />
			))}
		</>
	);
};

export default Cloud;
