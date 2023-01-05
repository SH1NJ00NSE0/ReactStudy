import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";

function UseEffect2() {
	const [showTimer, setShowTimer] = useState(false);
	return (
		<div>
			<button onClick={() => setShowTimer(!showTimer)}>Toggle Timer </button>
			{showTimer && <Timer />} {/*showTimer가 True일 때만 Timer태그가 생김*/}
		</div>
	);
}

export default UseEffect2;
