import React, { useState, useEffect } from "react";

const Timer = props => {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("타이머 돌아가는 중...");
		}, 1000);

		return () => {
			console.log("타이머가 종료되었습니다.");
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<span>Timer on</span>
		</div>
	);
};

export default Timer;
