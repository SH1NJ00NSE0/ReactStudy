import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import LineChart from "./LineChart";

const graphInfos = [
	{ key: "평균최고기온(°C)", color: "red" },
	{ key: "평균최저기온(°C)", color: "blue" },
	{ key: "평균기온(°C)", color: "black" },
];

const E5 = () => {
	const [data, setData] = useState(1);

	useEffect(() => {
		d3.csv("/data/Busan2021.csv").then(data => {
			setData(data);
		});
	}, []);

	return (
		<div>
			<LineChart graphInfos={graphInfos} data={data} />
		</div>
	);
};

export default E5;
