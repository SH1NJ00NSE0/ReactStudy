import React, { useEffect } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Chart.js Line Chart",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: [100, 300, 50, 90, 200, 10, 250], //데이터셋
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: [120, 30, 350, 70, 210, 40, 180], //데이터셋
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

export default function E6() {
	useEffect(() => {
		fetch("./data/Busan2021.csv")
			.then(data => data.json())
			.then(res => {
				console.log('res: ',res);
			});
	});
	return <Line options={options} data={data} />;
}
