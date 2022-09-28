import { Canvas } from "@react-three/fiber";
import Box from "./components/box";
import Rig from "./components/rig";
import "./styles.css";

const App = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas>
				<ambientLight />
				<Rig />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 2]} />
			</Canvas>
		</div>
	);
};

export default App;
