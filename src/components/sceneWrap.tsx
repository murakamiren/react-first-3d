import { FC, ReactNode, Suspense } from "react";

type SceneWrapProps = {
	children: ReactNode;
};

const SceneWrap: FC<SceneWrapProps> = ({ children }) => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Suspense fallback={<h1>loading...</h1>}>{children}</Suspense>
		</div>
	);
};

export default SceneWrap;
