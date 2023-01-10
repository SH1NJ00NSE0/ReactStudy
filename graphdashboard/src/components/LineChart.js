import * as d3 from "d3";
import { useEffect, useRef } from "react";

const graphInfos = [
	{ key: "평균최고기온(°C)", color: "red" },
	{ key: "평균최저기온(°C)", color: "blue" },
	{ key: "평균기온(°C)", color: "black" },
];

const LineChart = () => {
	const canvasRef = useRef();

	useEffect(() => {
		const canvas = d3.select(canvasRef.current);
		const svg = canvas
			.append("svg")
			.attr("width", 500)
			.attr("height", 500)
			.attr("style", "background:#f9f9f9");

		const yScaleFunc = d3.scaleLinear().domain([5, 40]).range([0, 250]);

		d3.csv("/data/Busan2021.csv").then(data => {
			graphInfos.forEach(info => {
				const xFunc = (_, index) => index * 30;
				const yFunc = yData => yScaleFunc(40 - yData[info.key]);
				const lineGenerator1 = d3.line().x(xFunc).y(yFunc);

				svg.append("path")
					.attr("stroke", info.color)
					.attr("stroke-width", 2)
					.attr("fill", "none")
					.attr("d", lineGenerator1(data));
			});
		});
	}, []);

	return <div ref={canvasRef}></div>;
};

export default LineChart;
