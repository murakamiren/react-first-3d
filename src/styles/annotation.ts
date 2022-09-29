import { css } from "@emotion/react";

export const annotationStyle = css`
	width: 260px;
	transform: translate3d(25%, -10%, 0);
	text-align: left;
	background: #333;
	color: white;
	padding: 12px 16px;
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
		font-size: 16px;
		margin-bottom: 8px;
	}

	p {
		font-size: 12px;
	}
`;
