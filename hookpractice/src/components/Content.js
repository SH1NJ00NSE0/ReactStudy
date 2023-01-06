import React from "react";

function Content({ isDark }) {
	return (
		<div
			className="content"
			style={{
				backgroundColor: isDark ? "black" : "white",
				color: isDark ? "white" : "black",
			}}>
			<p>신준서님 좋은 하루 되세요.</p>
		</div>
	);
}

export default Content;
