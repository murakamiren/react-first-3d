import { css } from "@emotion/react";

export const annotationStyle = css`
	width: 260px;
	transform: translate3d(35%, 0, 0);
	text-align: left;
	background: #333;
	color: white;
	font-family: sans-serif;
	padding: 10px 15px;
	border-radius: 6px;

	&::before {
		content: "";
		position: absolute;
		top: 25px;
		left: -40px;
		height: 1px;
		width: 40px;
		background: #333;
	}

	h1 {
		margin-bottom: 8px;
	}

	p {
		font-size: 14px;
	}
`;
