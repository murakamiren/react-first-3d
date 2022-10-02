import { Canvas, RenderProps, ThreeElements } from "@react-three/fiber";
import { FC, ReactNode, Suspense } from "react";

type SceneWrapProps = {
	children: ReactNode;
	height?: string;
};

const SceneWrap: FC<SceneWrapProps> = ({ children, height }) => {
	return <div style={{ width: "100vw", height: height ? height : "100vh" }}></div>;
};

export default SceneWrap;
