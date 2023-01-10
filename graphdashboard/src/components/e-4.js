import * as d3 from "d3";
import { useEffect, useRef } from "react";

const E4 = () => {
	const canvasRef = useRef();
	const data = [100, 10, 30, 50, 110, 80, 40];

	useEffect(() => {
		const canvas = d3.select(canvasRef.current);
		const svg = canvas
			.append("svg")
			.attr("width", 500)
			.attr("height", 500)
			.attr("style", "background:#f9f9f9");

		const arcGenerator = d3.arc().innerRadius(50).outerRadius(100);
		const pieGenerator = d3.pie();

		const g = svg.append("g").attr("transform", "translate(250, 250)");

		g.selectAll("path")
			.data(pieGenerator(data))
			.enter()
			.append("path")
			.attr("fill", d => {
				console.log("d: ", d);
				if (d.data >= 80) { //데이터가 80 이상이면 파란색으로 채우기
					return "blue";
				}
				return "lightgray"; //아니면 연회색으로 채우기
			})
			.attr("stroke", "black")
			.attr("stroke-width", 2)
			.attr("d", arcGenerator);
	}, []);

	return <div ref={canvasRef}></div>;
};

export default E4;
