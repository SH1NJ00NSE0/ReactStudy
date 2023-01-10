import * as d3 from "d3";
import { useEffect, useRef } from "react";

const E3 = () => {
	const canvasRef = useRef();
	const data = [100, 10, 30, 50, 110, 80, 40];

	useEffect(() => {
		const canvas = d3.select(canvasRef.current);
		const svg = canvas
			.append("svg")
			.attr("width", 500)
			.attr("height", 500)
			.attr("style", "background:#f9f9f9");

		const xFunc = (data, index) => index * 30 + 10;
		const yFunc = data => 150 - data;
		const drawLineChartGenerator = d3
			.line()
			.x(xFunc)
			.y(yFunc)
			.curve(d3.curveNatural);

		const path = svg
			.append("path")
			.attr("d", drawLineChartGenerator(data))
			.attr("fill", "none")
			.attr("stroke", "red")
			.attr("stroke-width", 5)
			.attr("stroke-linecap", "round");

		const length = path.node().getTotalLength();

		path
			.attr("stroke-dashoffset", length)
			.attr("stroke-dasharray", length)
			.transition()
			.ease(d3.easeSinInOut)
			.duration(750)
			.attr("stroke-dashoffset", 2);
	}, []);

	return <div ref={canvasRef}></div>;
};

export default E3;
