import { Html } from "@react-three/drei";
import { annotationStyle } from "../styles/annotation";

const Annotation = () => {
	return (
		<Html distanceFactor={10}>
			<div css={annotationStyle}>
				<h1>the box</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam molestias molestiae, recusandae totam
					impedit exercitationem nam, tenetur alias animi quis iusto odio incidunt? Similique eum eveniet nemo id?
					Neque.
				</p>
			</div>
		</Html>
	);
};

export default Annotation;
