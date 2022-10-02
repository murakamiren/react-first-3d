import { FC, ReactNode, Suspense } from "react";

type SceneWrapProps = {
	children: ReactNode;
	height?: string;
};

const SceneWrap: FC<SceneWrapProps> = ({ children, height }) => {
	return (
		<div style={{ width: "100vw", height: height ? height : "100vh" }}>
			<Suspense fallback={<h1>loading...</h1>}>{children}</Suspense>
		</div>
	);
};

export default SceneWrap;
