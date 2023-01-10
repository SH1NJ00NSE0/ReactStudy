import * as d3 from "d3";
import { useEffect, useRef } from "react";

const E2 = () => {
	const canvasRef = useRef();
	const data = [100, 10, 30, 50, 110, 80];

	useEffect(() => {
		const canvas = d3.select(canvasRef.current);
		const svg = canvas
			.append("svg")
			.attr("width", 500)
			.attr("height", 500)
			.attr("style", "background:#f9f9f9");

		data.forEach((item, index) => {
			svg.append("rect")
				.attr("width", 20)
				.attr("height", item)
				.attr("x", index * 30)
				.attr("y", 150 - item);
		});
	}, []);

	return <div ref={canvasRef}></div>;
};

export default E2;
