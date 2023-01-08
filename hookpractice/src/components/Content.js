import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { UserContext } from "../Contexts/UserContext";

const Content = () => {
	const { isDark } = useContext(ThemeContext);
	const user = useContext(UserContext);

	return (
		<div
			className="content"
			style={{
				backgroundColor: isDark ? "black" : "white",
				color: isDark ? "white" : "black",
			}}>
			<p>{user}님 좋은 하루 되세요.</p>
		</div>
	);
};

export default Content;
