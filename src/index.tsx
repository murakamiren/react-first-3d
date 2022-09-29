import { FC } from "react";
import { indexStyle } from "./styles";

const Index: FC = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<nav css={indexStyle}>
				<h1>react-three-fiber + typescript</h1>
				<ul>
					<li>
						<a href="boxscene">box scene</a>
					</li>
					<li>
						<a href="modelscene">model scene</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Index;
