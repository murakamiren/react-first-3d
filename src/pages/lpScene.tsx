import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { Iphone } from "../components/iphone";
import SceneWrap from "../components/sceneWrap";
import { containerStyle, dummySectionStyle, mainVisualStyle } from "../styles/lp";

const LpScene: FC = () => {
	return (
		<main css={containerStyle}>
			<div css={mainVisualStyle}>
				<SceneWrap abs>
					<Canvas>
						<ambientLight />
						<pointLight position={[2, 10, 10]} intensity={1.5} />
						<Suspense fallback={null}>
							<Iphone scale={26} />
						</Suspense>
						{/* <OrbitControls enablePan={false} enableZoom={false} /> */}
					</Canvas>
				</SceneWrap>
				<h1>
					<span>iPhone 14 PRO</span>
				</h1>
			</div>
			<section css={dummySectionStyle}>
				<h2>
					<span>wow</span>
				</h2>
			</section>
			<section css={dummySectionStyle}>
				<h2>
					<span>sea</span>
				</h2>
			</section>
		</main>
	);
};

export default LpScene;
