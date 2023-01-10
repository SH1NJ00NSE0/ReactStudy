import * as d3 from "d3";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const SnowMan = styled.div`
	.left-eye {
		animation-duration: 0.3s;
		animation-name: blink;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-iteration-count: infinite;
		transform-origin: 225px 175px;
	}

	@keyframes blink {
		to {
			transform: scaleY(0.1);
		}
	}
`;

const drawHat = svg => {
	svg.append("rect") //모자
		.attr("x", 265)
		.attr("y", -63)
		.attr("fill", "red")
		.attr("width", 75)
		.attr("height", 50)
		.attr("transform", "rotate(25)");
};

const drawBody = svg => {
	svg.append("circle") //몸통
		.attr("cx", 250)
		.attr("cy", 325)
		.attr("r", 100)
		.attr("stroke", "black")
		.attr("strokeWidth", 5)
		.attr("fill", "white");
};

const drawHead = svg => {
	svg.append("circle") //머리
		.attr("cx", 250)
		.attr("cy", 175)
		.attr("r", 75)
		.attr("stroke", "black")
		.attr("strokeWidth", 5)
		.attr("fill", "white");
};

const drawEyes = svg => {
	svg.append("circle") //왼쪽 눈
		.attr("cx", 225)
		.attr("cy", 175)
		.attr("r", 10)
		.attr("fill", "black")
		.attr("class", "left-eye");

	svg.append("circle") //오른쪽 눈
		.attr("cx", 275)
		.attr("cy", 175)
		.attr("r", 10)
		.attr("fill", "black");
};

const drawHands = svg => {
	svg.append("line") //왼쪽 팔
		.attr("x1", 100)
		.attr("y1", 250)
		.attr("x2", 160)
		.attr("y2", 280)
		.attr("stroke", "black")
		.attr("strokeWidth", 5);
	svg.append("line") //오른쪽 팔
		.attr("x1", 400)
		.attr("y1", 250)
		.attr("x2", 340)
		.attr("y2", 280)
		.attr("stroke", "black")
		.attr("strokeWidth", 5);
};

const E1 = () => {
	const canvasRef = useRef();

	useEffect(() => {
		const canvas = d3.select(canvasRef.current);
		const svg = canvas
			.append("svg")
			.attr("width", 500)
			.attr("height", 500)
			.attr("style", "background:#f9f9f9");
		drawHat(svg);
		drawBody(svg);
		drawHead(svg);
		drawEyes(svg);
		drawHands(svg);
	}, []);

	return <SnowMan ref={canvasRef}></SnowMan>;
};

export default E1;
