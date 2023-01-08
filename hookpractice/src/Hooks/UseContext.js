import React, { useState } from "react";
import Page from "../components/Page";
import "../style/UseContext.css";
import { ThemeContext } from "../Contexts/ThemeContext";
import { UserContext } from "../Contexts/UserContext";

function UseContext() {
	const [isDark, setIsDark] = useState(false);

	return (
		<UserContext.Provider value={"신준서"}>
			<ThemeContext.Provider value={{ isDark, setIsDark }}>
				<Page />
			</ThemeContext.Provider>
		</UserContext.Provider>
	);
}

export default UseContext;
