import { FC, ReactNode } from "react";

type SceneWrapProps = {
	children: ReactNode;
	width?: string;
	height?: string;
	abs?: boolean;
};

const SceneWrap: FC<SceneWrapProps> = ({ children, height, width, abs }) => {
	return (
		<div
			style={{
				width: width ? width : "100vw",
				height: height ? height : "100vh",
				position: abs ? "absolute" : "static",
			}}
		>
			{children}
		</div>
	);
};

export default SceneWrap;
