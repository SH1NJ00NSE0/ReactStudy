import "./App.css";
import { useState } from "react";

function App() {
	const init = () => {
		console.log("init~~");
		return ["홍길동", "김석진"];
	};

	const [names, setNames] = useState(() => {
		return init();
	});
	const [input, setInput] = useState("");

	const handleInputChange = e => {
		setInput(e.target.value);
	};

	const handleUpload = () => {
		setNames(prevState => {
			console.log("이전 state: ", prevState);
			return [input, ...prevState]; //[...]은 스프레드 문법으로 시작 주소를 복사하는게 아니라 배열 데이터 자체를 복사해줌
		});
	};

	// console.log(input);

	return (
		<div>
			<input type="text" value={input} onChange={handleInputChange} />
			<button onClick={handleUpload}>Upload</button>
			{names.map((names, index) => {
				return <p key={index}>{names}</p>;
			})}
		</div>
	);
}

export default App;
