import React, { useState } from "react";
import Page from "../components/Page";
import "../style/UseContext.css";

function UseContext() {
	const [isDark, setIsDark] = useState(false);

	return (
		<div>
			<Page isDark={isDark} setIsDark={setIsDark} />
		</div>
	);
}

export default UseContext;
