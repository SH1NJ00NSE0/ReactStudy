import React, { useEffect, useState } from "react";

function UseEffect1() {
	const [count, setCount] = useState(1);
	const [name, setName] = useState("");

	const handleCountUpdate = () => {
		setCount(count + 1);
	};

	const handleInputChange = e => {
		setName(e.target.value);
	};

	//마운팅 될때만 실행됨
	useEffect(() => {
		console.log("mounted");
	}, []);

	//렌더링 될때마다 매번 실행됨 - 렌더링 이후
	useEffect(() => {
		console.log("rendered");
	});

	//마운팅 + count가 렌더링 될때마다 매번 실행됨
	useEffect(() => {
		console.log("count changed!");
	}, [count]);

	//마운팅 + name이 렌더링 될때마다 매번 실행됨
	useEffect(() => {
		console.log("name changed!");
	}, [name]);

	return (
		<div>
			<button onClick={handleCountUpdate}>Update</button>
			<span>count: {count}</span>
			<br />
			<input type="text" value={name} onChange={handleInputChange} />
			<span>name: {name}</span>
		</div>
	);
}

export default UseEffect1;
