import * as d3 from "d3";
import { transition } from "d3";
import { useEffect, useRef } from "react";

const E2 = () => {
	const canvasRef = useRef();
	const data = [100, 10, 30, 50, 110, 80, 40];

	useEffect(() => {
		const canvas = d3.select(canvasRef.current);
		const svg = canvas
			.append("svg")
			.attr("width", 500)
			.attr("height", 500)
			.attr("style", "background:#f9f9f9");

		data.forEach((item, index) => {
			svg.append("rect")
				.attr("id", `rect-${index}`)
				.attr("width", 20)
				.attr("height", 0)
				.attr("x", index * 30)
				.attr("y", 150)
				.transition()
				.duration(500)
				.attr("height", item)
				.attr("y", 150 - item);

			svg.append("text")
				.attr("x", index * 30)
				.attr("y", 140 - item)
				.text(item);
			
			d3.select('#rect-4').style("fill","blue");
		});
	}, []);

	return <div ref={canvasRef}></div>;
};

export default E2;
