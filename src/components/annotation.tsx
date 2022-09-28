import { Html } from "@react-three/drei";
import { annotationStyle } from "../styles/annotation";

const Annotation = () => {
	return (
		<Html distanceFactor={10}>
			<div css={annotationStyle}>hello world</div>
		</Html>
	);
};

export default Annotation;
