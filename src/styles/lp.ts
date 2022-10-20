import { css } from "@emotion/react";

export const containerStyle = css`
	background-color: #111;
`;

export const dummySectionStyle = css`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		font-size: 64px;
		z-index: 100;
		span {
			display: inline-block;
			background: -webkit-linear-gradient(45deg, #54d0ff, #9f92ff 20%, #ff7689 90%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;

export const mainVisualStyle = css`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 64px;
		z-index: 100;
		span {
			display: inline-block;
			background: -webkit-linear-gradient(45deg, #54d0ff, #9f92ff 20%, #ff7689 90%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;
