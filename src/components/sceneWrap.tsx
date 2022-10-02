import { FC, ReactNode } from "react";

type SceneWrapProps = {
	children: ReactNode;
	width?: string;
	height?: string;
};

const SceneWrap: FC<SceneWrapProps> = ({ children, height, width }) => {
	return <div style={{ width: width ? width : "100vw", height: height ? height : "100vh" }}>{children}</div>;
};

export default SceneWrap;
